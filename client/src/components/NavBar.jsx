import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./shared";

function NavBar({ toggleDarkMode, isDarkMode, isLoggedIn, toggleLogIn }) {
  return (
    <nav>
      <ul>
        <li>
          {/* Allows use of styled component while maintaining properties of NavLink */}
          <Button as={NavLink} to="/">
            Home
          </Button>
          {/* <NavLink to="/">Home</NavLink> */}
        </li>
        <li>
          <NavLink to="/forums">Forums</NavLink>
        </li>
        <li>
          <NavLink to="/classifieds">Classifieds</NavLink>
        </li>
      </ul>
      <button onClick={toggleLogIn}>
        {isLoggedIn ? "Log out" : "Sign in"}
      </button>
      <Button onClick={toggleDarkMode}>{isDarkMode ? "Light" : "Dark"}</Button>
    </nav>
  );
}

export default NavBar;
