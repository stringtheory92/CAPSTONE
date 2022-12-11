import React from "react";
import styled from "styled-components";

const MainForumItem = styled.li`
  margin: 0.5rem;
  padding: 0.5rem 0.75rem;
  /* border: none; */
  font-weight: 600;
  cursor: pointer;
  color: var(--color);
  list-style-type: none;
  background-color: var(--forumItem);
  border-radius: 6px;
  box-shadow: 2px 2px 3px #222;
  /* border: 2px solid var(--dark-turquoise); */
  transition: background-color 0.2s;
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
