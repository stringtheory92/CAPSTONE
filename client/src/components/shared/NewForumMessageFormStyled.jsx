import React from "react";
import styled from "styled-components";
import SSBG_1 from "../../bg/SSBG_1.jpg";

const NewForumMessageFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  /* padding: 2rem; */
  padding: 0.5rem 0.75rem;
  /* border: none; */
  font-weight: 600;
  /* cursor: pointer; */

  color: var(--white);

  /* background-image: url(${SSBG_1}); */
  /* border: 2px solid var(--black); */
  transition: border 0.4s;
  > label {
    margin: 1rem 1rem 0.1rem 1rem;
    padding: 1rem;
    font-size: 1.5rem;
  }
  > .quill {
    background-color: var(--white);
    color: var(--black);
    border-radius: 10px;
    height: 15rem;
    overflow-y: hidden;
  }
  > .quill > .ql-container > .ql-editor > p > img {
    max-height: 10rem;
    max-width: 10rem;
  }
  > textarea {
    background-color: var(--white);
  }
  > textarea:focus {
    border: 2px solid #333;
    outline: none;
  }
  > button {
    border: none;
    outline: none;
    width: 10rem;
    justify-self: center;
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
