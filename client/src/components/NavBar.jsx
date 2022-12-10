import React from "react";
import { NavLink } from "react-router-dom";
import { Button, NavStyled, NavLinkStyled } from "./shared";
import Logo from "../icons/SSLOGO.png";
// import AltLogo from "../icons/SubSonic-logo-lighter-orange.png";
import AltLogo from "../icons/SubSonic-logoA-alt.png";

function NavBar({ toggleDarkMode, isDarkMode, isLoggedIn, toggleLogIn, user }) {
  const handleLogOut = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(toggleLogIn);
  };
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
        <button onClick={user ? handleLogOut : toggleLogIn}>
          {user ? "Log out" : "Sign in"}
        </button>
        <div className="darkModeButtonContainer">
          <Button onClick={toggleDarkMode}>
            {isDarkMode ? "Light" : "Dark"}
          </Button>
        </div>
      </div>
      {/* <div className="rightSideMenu">
        <div className="icon">|||</div>
        <div>
          <span className="exit">&times</span>
          <ul>
            <li onClick={user ? handleLogOut : toggleLogIn}>
              {user ? "Log out" : "Sign in"}
            </li>
          </ul>
        </div>
      </div> */}
    </NavStyled>
  );
}

export default NavBar;
