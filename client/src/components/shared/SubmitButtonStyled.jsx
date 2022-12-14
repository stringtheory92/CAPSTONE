import React from "react";
import styled from "styled-components";

const SubmitButtonStyled = styled.button`
  /* padding: 0.5rem 0.75rem;
  margin-left: 0.3rem;
  font-weight: 600;
  cursor: pointer;
  width: 10rem;
  border-radius: 10px;
  
  box-shadow: 1px 4px 10px #444;
  color: var(--primary);
  background-color: var(--background);
  border: 2px solid #444; */
  font-family: "Monoton", cursive;
  font-size: 1.8rem;
  cursor: pointer;
  color: var(--textColor);
  transition: all 0.3s;

  &:hover {
    color: var(--hover);
  }
  &:active {
    /* width: 9rem;
    margin-left: 0.7rem;
    font-size: 0.7rem;
    box-shadow: 0px 0px 0 #222; */
    color: var(--active);
  }
`;

export default SubmitButtonStyled;
