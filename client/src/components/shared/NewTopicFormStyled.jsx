import React from "react";
import styled from "styled-components";
import SSBG_1 from "../../bg/SSBG_1.jpg";

const NewTopicFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  /* padding: 0.5rem 0.75rem; */
  /* border: none; */
  font-weight: 600;
  /* cursor: pointer; */
  color: var(--textColor);
  list-style-type: none;
  background-color: var(--forumItem);
  border: 2px solid var(--black);
  transition: border 0.4s;
  > textarea {
    background-color: var(--white);
    margin: 0.75rem;
  }
  > textarea:focus {
    border: 2px solid #333;
    outline: none;
  }
  > .headerDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin: 2.5rem 1rem 0.1rem 1rem; */
    padding: 1rem;
    font-size: 1.5rem;

    border-top: 2px solid var(--forumItem);
    background-image: url(${SSBG_1});
  }
`;

export default NewTopicFormStyled;
