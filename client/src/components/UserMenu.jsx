import React from "react";
import { UserMenuStyled, AvatarStyled } from "./shared";

function UserMenu({ user }) {
  const { id, user_name, image, balance, avatar } = user;

  return (
    <UserMenuStyled className="userMenu">
      <div className="namePic">
        <div className="imageContainer">
          <AvatarStyled
            src={avatar ? `http://localhost:3000/${avatar}` : null}
            alt="your face here!"
          />
        </div>
        <div className="nameContainer">
          <h1 className="userName">{user_name}</h1>
        </div>
      </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <h3>Pinned</h3>
      <ul>
        <li>pinned 1</li>
        <li>pinned 2</li>
        <li>pinned 3</li>
      </ul>
    </UserMenuStyled>
  );
}

export default UserMenu;
