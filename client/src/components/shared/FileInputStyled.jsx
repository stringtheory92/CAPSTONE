import React from "react";
import styled from "styled-components";

const FileInputStyled = styled.input`
  &::file-selector-button {
    cursor: pointer;
    background-color: var(--textColor);
    outline: none;
    border: none;
    border-radius: 20px;
    padding: 0.5rem 0.8rem;
    margin-right: 1rem;
    transition: all 0.4s;
  }
  &::file-selector-button:hover {
    opacity: 0.5;
  }
  &::file-selector-button:active {
    background-color: rgba(245, 245, 245, 0.2);
    opacity: 1;
    color: var(--textColor);
  }
`;

export default FileInputStyled;
