import React, { useState } from "react";

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

  return (
    <div>
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
        <button onClick={toggleIsEditingUser}>Edit Profile</button>
      )}
    </div>
  );
}

export default Home;
