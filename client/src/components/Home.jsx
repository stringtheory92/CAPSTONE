import React, { useState } from "react";
import { HomeStyled } from "./shared";
import DefaultAvatar from "../bg/default-avatar.png";

function Home({ onAvatarChange, user }) {
  const [isEditingUser, setIsEditingUser] = useState(false);
  const [newAvatar, setNewAvatar] = useState("");
  const [errors, setErrors] = useState([]);

  const toggleIsEditingUser = () => {
    setIsEditingUser((status) => !status);
  };

  const handleAvatarChange = (e) => {
    e.preventDefault();
    // console.log("newAvatar: ", newAvatar);
    const formData = new FormData();
    formData.append("avatar", newAvatar);

    const configObj = {
      method: "PATCH",
      body: formData,
    };
    console.log("DefaultAvatar: ", DefaultAvatar);
    fetch(`/users/${user.id}`, configObj).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log("data: ", data);
          onAvatarChange(data);
          toggleIsEditingUser();
        });
      } else {
        r.json().then((data) => setErrors(data));
      }
    });
    // Console logging formData displays an empty object, but it's in fact not empty
    // console.log("formData: ", formData);
  };

  const imageBoxStyles = {
    // backgroundImage: `url(${DefaultAvatar})`,
    // border: "1px solid lime",
    // height: "20rem",
  };

  return (
    <HomeStyled>
      <div className="leftSide">
        <div className="imageBox" style={imageBoxStyles}>
          {user.avatar ? (
            <img src={user.avatar} alt="" />
          ) : (
            <button onClick={toggleIsEditingUser}>Add an Avatar</button>
          )}
        </div>
        <div className="nameBox">{user.user_name}</div>
      </div>
      <div className="rightSide">
        {isEditingUser ? (
          <form action="" onSubmit={handleAvatarChange}>
            {/* <input type="file" accept="image/*" onChange={handleChange} /> */}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setNewAvatar(e.target.files[0])}
            />
            <button type="submit">Update Image</button>
          </form>
        ) : (
          <div>
            {user.avatar ? (
              <button onClick={toggleIsEditingUser}>Change Avatar</button>
            ) : null}
            <div className="pinsContainer">
              <ul className="pins">
                <li>pin</li>
                <li>pin</li>
                <li>pin</li>
                <li>pin</li>
                <li>pin</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </HomeStyled>
  );
}

export default Home;
