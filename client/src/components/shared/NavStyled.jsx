import React from "react";
import styled from "styled-components";

const NavStyled = styled.div`
  /* height: 8rem; */
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.75rem;
  /* border: none; */
  font-weight: 600;
  z-index: 2;
  color: var(--primary);

  background-color: var(--background-dark-blue);
  border: 2px solid var(--dark-turquoise);
  transition: background-color 0.2s;
  > ul > li > div {
    margin-right: 1rem;
    /* border: 1px solid #333; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
  }
  > .leftNav {
    width: 20rem;
    /* border: 1px solid lime; */
  }
  > .rightSideButtons {
    display: flex;
  }
  > .rightSideButtons > .darkModeButtonContainer {
    width: 8rem;
    height: 2rem;
  }
  > .leftNav > .logoContainer > img {
    /* border: 1px solid gray; */
    width: 19rem;
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

export default NavStyled;
