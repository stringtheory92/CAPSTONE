import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./shared";

function NavBar({ toggleDarkMode, isDarkMode }) {
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
          <NavLink to="/page_one">PageOne</NavLink>
        </li>
        <li>
          <NavLink to="/page_two">PageTwo</NavLink>
        </li>
      </ul>
      <Button onClick={toggleDarkMode}>{isDarkMode ? "Light" : "Dark"}</Button>
    </nav>
  );
}

export default NavBar;
