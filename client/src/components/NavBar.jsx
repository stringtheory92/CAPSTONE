import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, NavStyled, NavLinkStyled } from "./shared";
import Logo from "../icons/SSLOGO.png";
// import AltLogo from "../icons/SubSonic-logo-lighter-orange.png";
import AltLogo from "../icons/SubSonic-logoA-alt.png";

function NavBar({ toggleDarkMode, isDarkMode, isLoggedIn, toggleLogIn, user }) {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const handleLogOut = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(toggleLogIn);
  };
  const handleLoginClick = () => {
    navigate("/");
  };
  //=========================================================
  const handleMenuIconClick = (e) => {
    console.log("menuIconClicked");
    setIsActive(true);
    e.target.classList.add("menuInvisible");
  };
  const handleExitMenuClick = (e) => {
    console.log("exitMenuClick");
    setIsActive(false);
  };
  //=========================================================
  return (
    <NavStyled>
      <div className="leftNav">
        <div className="logoContainer">
          <img src={AltLogo} alt="" />
        </div>

        <ul className="leftSideButtons" style={{ display: "flex" }}>
          <li>
            <div>
              {/* Allows use of styled component while maintaining properties of NavLink */}
              <NavLinkStyled as={NavLink} to="/">
                Home
              </NavLinkStyled>
              {/* <NavLink to="/">Home</NavLink> */}
            </div>
          </li>
          <li>
            <div>
              <NavLinkStyled as={NavLink} to="/forums">
                Forums
              </NavLinkStyled>
            </div>
          </li>
          <li>
            <div>
              <NavLinkStyled as={NavLink} to="/classifieds">
                Classifieds
              </NavLinkStyled>
            </div>
          </li>
        </ul>
      </div>

      <div className="rightSideButtons">
        <div className="darkModeButtonContainer">
          {/* from Button styled component */}
          <Button onClick={toggleDarkMode}>{isDarkMode ? "💡" : "🕯"}</Button>
        </div>
        <button
          onClick={user ? handleLogOut : handleLoginClick}
          className="loginButton"
        >
          {user ? "Log out" : "Sign in"}
        </button>
      </div>
      <div className="rightSideMenu">
        <div
          className={isActive ? "menu menuInvisible" : "menu"}
          onClick={handleMenuIconClick}
        >
          |||
        </div>
        <div className={isActive ? "lgMenu enterLgMenu" : "lgMenu"}>
          <span className="exit" onClick={handleExitMenuClick}>
            &times;
          </span>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/forums")}>Forums</li>
            <li onClick={() => navigate("/classifieds")}>Classifieds</li>
            <li onClick={user ? handleLogOut : toggleLogIn}>
              {user ? "Log out" : "Sign in"}
            </li>
          </ul>
        </div>
      </div>
    </NavStyled>
  );
}

export default NavBar;
