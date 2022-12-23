import React from "react";
import styled from "styled-components";

const MainForumItem = styled.li`
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;

  /* padding: 0.5rem 0.75rem; */

  font-weight: 600;

  color: var(--textColor);
  list-style-type: none;
  background-color: var(--forumItem);
  /* border-radius: 6px; */
  box-shadow: 2px 2px 3px #222;
  border: 0.5px solid var(--forumBorder);

  > h2 {
    /* font-family: "Sacramento", cursive; */
    /* font-family: "Neucha", cursive; */
    /* font-family: "Berkshire Swash", cursive; */
    font-family: "Courier Prime", monospace;
    /* font-family: "Monoton", cursive; */
    font-size: 2rem;
    transition: all 0.2s;
  }
  > h2:hover {
    cursor: pointer;
    /* font-size: 1.5rem; */
    color: var(--inverseColor);
    /* -webkit-text-stroke: 1px var(--black); */
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

export default MainForumItem;
