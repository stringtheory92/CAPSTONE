import React from "react";
import { NavLink } from "react-router-dom";
import { Button, NavStyled, NavLinkStyled } from "./shared";

function NavBar({ toggleDarkMode, isDarkMode, isLoggedIn, toggleLogIn, user }) {
  const handleLogOut = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(toggleLogIn);
  };
  return (
    <NavStyled>
      <ul style={{ display: "flex" }}>
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
    </NavStyled>
  );
}

export default NavBar;
