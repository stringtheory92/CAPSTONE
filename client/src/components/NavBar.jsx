import React from "react";
import { NavLink } from "react-router-dom";
import { Button, NavStyled, NavLinkStyled } from "./shared";

function NavBar({ toggleDarkMode, isDarkMode, isLoggedIn, toggleLogIn }) {
  return (
    <NavStyled>
      <ul style={{ display: "flex" }}>
        <li>
          {/* Allows use of styled component while maintaining properties of NavLink */}
          <Button as={NavLink} to="/">
            Home
          </Button>
          {/* <NavLink to="/">Home</NavLink> */}
        </li>
        <li>
          <NavLinkStyled as={NavLink} to="/forums">
            Forums
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled as={NavLink} to="/classifieds">
            Classifieds
          </NavLinkStyled>
        </li>
      </ul>
      <div>
        <button onClick={toggleLogIn}>
          {isLoggedIn ? "Log out" : "Sign in"}
        </button>
        <Button onClick={toggleDarkMode}>
          {isDarkMode ? "Light" : "Dark"}
        </Button>
      </div>
    </NavStyled>
  );
}

export default NavBar;
