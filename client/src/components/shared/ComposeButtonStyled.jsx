import React from "react";
import styled from "styled-components";
import Compose from "../../resources/compose.png";

const ComposeButtonStyled = styled.div`
  cursor: pointer;
  align-self: flex-start;

  cursor: pointer;
  height: 3rem;
  width: 3rem;
  background: url(${Compose});
  background-size: contain;
  transition: all 0.3s;
  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 1;
  }

  //Phone
  @media (max-width: 500px) {
    height: 2rem;
    width: 2rem;
  }
  /* width: 3rem;
  height: 3rem;
  padding: 0.5rem 1rem;
  opacity: 0.7;
  color: var(--textColor);
  transition: all 0.2s;

  &:hover {
    opacity: 1;
  }
  &:active {
    opacity: 0.5;
  }
  //Phone
  @media (max-width: 500px) {
    > button {
      height: 2rem;
      width: 2rem;
    }
  } */
`;

export default ComposeButtonStyled;
