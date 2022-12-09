import React from "react";
import styled from "styled-components";

const NewForumMessageFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.75rem;
  /* border: none; */
  font-weight: 600;
  /* cursor: pointer; */
  color: var(--black);
  list-style-type: none;
  background-color: var(--white);
  border: 2px solid var(--black);
  transition: border 0.4s;
  > textarea {
    background-color: var(--white);
  }
  > textarea:focus {
    border: 2px solid #333;
    outline: none;
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

export default NewForumMessageFormStyled;
