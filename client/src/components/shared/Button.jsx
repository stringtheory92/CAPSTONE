import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem 0.75rem;
  margin-left: 0.3rem;
  font-weight: 600;
  cursor: pointer;
  width: 7rem;
  border-radius: 10px;
  /* box-shadow: -4px -2px 2px #444; */
  box-shadow: 1px 2px 10px #444;
  color: var(--primary);
  background-color: var(--background);
  /* border: 2px solid #999; */
  border: none;
  transition: background-color 0.3s, width 0.2s, font-size 0.2s, box-shadow 0.2s,
    margin-right 0.2s, margin-left 0.2s;

  &:hover {
  }
  &:active {
    width: 6.5rem;
    margin-left: 0.7rem;
    margin-right: 0.7rem;
    font-size: 0.7rem;
    box-shadow: 0px 0px 0 #222;
  }
`;

export default Button;
