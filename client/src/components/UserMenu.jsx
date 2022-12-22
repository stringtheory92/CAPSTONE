import React from "react";
import { useNavigate } from "react-router-dom";
import { UserMenuStyled, AvatarStyled } from "./shared";
import Logo from "../icons/SubSonic-logo-white-A-alt.png";
// import dbButton from './resources/dbButton.png'

function UserMenu({ user }) {
  const navigate = useNavigate();
  const { id, user_name, image, balance, avatar } = user;

  const handleDBClick = (e) => {
    navigate("/classifieds/1");
  };
  const handleBGClick = (e) => {
    navigate("/classifieds/2");
  };
  const handleAMPClick = (e) => {
    navigate("/classifieds/3");
  };
  const handleACCClick = (e) => {
    navigate("/classifieds/4");
  };
  // line 29, change url for avatar src
  return (
    <UserMenuStyled className="userMenu">
      <div className="namePic">
        <div className="imageContainer">
          <AvatarStyled
            src={
              avatar ? `https://subsonic-app.onrender.com/${avatar}` : { Logo }
            }
            alt="your face here!"
            // src={avatar ? `http://localhost:3000/${avatar}` : { Logo }}
            // alt="your face here!"
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
      <div className="quickLinks">
        <ul>
          <li onClick={handleDBClick}>
            <div className="db"></div>
          </li>
          <li onClick={handleBGClick}>
            <div className="bg"></div>
          </li>
          <li onClick={handleAMPClick}>
            <div className="amp"></div>
          </li>
          <li onClick={handleACCClick}>
            <div className="acc"></div>
          </li>
        </ul>
      </div>
    </UserMenuStyled>
  );
}

export default UserMenu;
