import React from "react";
import styled from "styled-components";

const NewForSaleFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-size: 1.2rem;
  color: var(--grey);
  > input {
    // need these three in order to keep focus border from changing the size of the input
    box-sizing: border-box;
    background-color: var(--forumItem);
    color: var(--textColor);
    width: 20rem;
    height: 1.7rem;
    // =======================
    margin-bottom: 1rem;
    padding: 0.3rem;
    border-radius: 5px;
    outline: none;
    border: none;
    transition: border 0.2s;
  }
  > input:focus {
    border: 2px solid var(--primary);
    outline: none;
  }

  > .radioLabel > .radio {
    margin-right: 1rem;
  }
  > .picUploadContainer {
    padding-top: 1rem;
  }
  > .submitButtonContainer {
    height: 6rem;

    // Exported these styles to their own styled component FileInputStyled

    /* > .picUploadContainer > input::file-selector-button {
    cursor: pointer;
    background-color: var(--textColor);
    outline: none;
    border: none;
    border-radius: 20px;
    padding: 0.5rem 0.8rem;
    transition: all 0.4s;
  } */
    /* > .picUploadContainer > input::file-selector-button:hover {
    opacity: 0.5;
  } */
    /* > .picUploadContainer > input::file-selector-button:active {
    background-color: rgba(245, 245, 245, 0.2);
    opacity: 1;
    color: var(--textColor);
  } */
    // Keeps form from moving when submitButton is animated
  }
`;

export default NewForSaleFormStyled;
