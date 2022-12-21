import React from "react";
import styled from "styled-components";

const EditUserFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-size: 1.2rem;
  > label {
    margin-bottom: 0.2rem;
    margin-left: 0.2rem;
  }
  > .textInput {
    margin-bottom: 1rem;
    padding: 0.4rem;
    width: 20rem;
    background-color: var(--forumItem);
    color: var(--textColor);
  }
  > button {
    color: white;
    border: 2px solid white;
    padding: 0.5rem;
    margin-top: 1rem;
    border-radius: 10px;
    transition: all 0.3s;
    &:hover {
      color: var(--logo-color);
      border-color: var(--logo-color);
    }
    &:active {
      border: 2px solid gold;
      color: gold;
    }
  }
`;

export default EditUserFormStyled;
