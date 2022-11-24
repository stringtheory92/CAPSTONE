import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/page_one">PageOne</NavLink>
        </li>
        <li>
          <NavLink to="/page_two">PageTwo</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
