import React from "react";
import styled from "styled-components";

const MessageStyled = styled.li`
  padding: 0.5rem 0.75rem;
  /* border: none; */
  font-weight: 600;
  font-size: 0.8rem;
  /* cursor: pointer; */
  color: var(--black);
  list-style-type: none;
  background-color: var(--white);
  border: 2px solid var(--dark-turquoise);
  transition: background-color 0.2s;
  > p {
    display: flex;
    flex-direction: column;
  }
  > p > img {
    max-width: 90%;
    max-height: 200px;
    object-fit: contain;
  }
  > h2 {
    font-size: 1rem;
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

export default MessageStyled;
