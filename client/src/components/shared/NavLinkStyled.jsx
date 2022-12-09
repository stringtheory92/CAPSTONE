import React from "react";
import styled from "styled-components";

const NavLinkStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.75rem;
  margin-left: 0.3rem;
  font-weight: 600;
  cursor: pointer;
  width: 6rem;
  height: 2.5rem;
  /* text-align: center; */
  border-radius: 3px;
  /* box-shadow: -4px -2px 2px #444; */
  box-shadow: 1px 2px 10px rgba(8, 8, 8, 0.4);
  color: var(--primary);
  background-color: var(--background);
  border: 2px solid #999;
  /* border: none; */
  transition: background-color 0.3s, width 0.3s, font-size 0.3s, box-shadow 0.3s,
    margin-right 0.3s, margin-left 0.3s;

  &:hover {
  }
  &:active {
    width: 6.5rem;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
    font-size: 0.55rem;
    box-shadow: 0px 0px 0 #222;
  }
`;
// const MainForumItem = styled.li`
//   padding: 0.5rem 0.75rem;
//   border: none;
//   font-weight: 600;
//   cursor: pointer;
//   color: var(--primary);
//   background-color: var(--background);
//   border: 2px solid var(--dark-turquoise);
//   transition: background-color 0.2s;
// `;

export default NavLinkStyled;
