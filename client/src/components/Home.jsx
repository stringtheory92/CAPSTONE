import React, { useState } from "react";
import {
  EditUserFormStyled,
  HomeStyled,
  UpdateProfileButtonStyled,
} from "./shared";
import DefaultAvatar from "../bg/default-avatar.png";

function Home({ onAvatarChange, onUpdateUser, user }) {
  const [isEditingUser, setIsEditingUser] = useState(false);
  const [newAvatar, setNewAvatar] = useState("");
  const [formData, setFormData] = useState({
    user_name: "",
    password: "",
    password_confirmation: "",
  });
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

  const handleNewNamePasswordSubmit = (e) => {
    e.preventDefault();

    const configObj = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch(`users/${user.id}`, configObj).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log("data: ", data);
          onUpdateUser(data);
          toggleIsEditingUser();
        });
      } else {
        r.json().then((data) => setErrors(data));
      }
    });
  };

  const userPins = user.forum_discussion_topics?.map((topic) => {
    console.log("topic: ", topic);
    return <li key={topic.id}>{topic.heading}</li>;
  });

  const handleNamePasswordChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <HomeStyled>
      <div className="leftSide">
        <div className="imageBox">
          {user.avatar ? (
            <img src={user.avatar} alt="" />
          ) : (
            <button
              onClick={toggleIsEditingUser}
              className="updateProfileImage"
            >
              Update Profile/Add Image
            </button>
          )}
        </div>
        <div className="nameBox">{user.user_name}</div>
      </div>
      <div className="rightSide">
        {isEditingUser ? (
          <>
            <EditUserFormStyled
              action=""
              onSubmit={handleNewNamePasswordSubmit}
            >
              <label htmlFor="user_name">New name:</label>
              <input
                type="text"
                name="user_name"
                id=""
                value={formData.user_name}
                onChange={handleNamePasswordChange}
              />
              <label htmlFor="password">New password:</label>
              <input
                type="text"
                name="password"
                id=""
                value={formData.password}
                onChange={handleNamePasswordChange}
              />
              <label htmlFor="password_confirmation">Confirm password:</label>
              <input
                type="text"
                name="password_confirmation"
                id=""
                value={formData.password_confirmation}
                onChange={handleNamePasswordChange}
              />
              <button type="submit">Change name and password</button>
            </EditUserFormStyled>
            <EditUserFormStyled action="" onSubmit={handleAvatarChange}>
              {/* <input type="file" accept="image/*" onChange={handleChange} /> */}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setNewAvatar(e.target.files[0])}
              />
              <button type="submit">Update Image</button>
            </EditUserFormStyled>
          </>
        ) : (
          <div>
            {user.avatar ? (
              <button onClick={toggleIsEditingUser} className="updateProfile">
                Update Profile
              </button>
            ) : null}
            <div className="pinsContainer">
              <ul className="pins">
                {userPins}
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
