import React from "react";
import styled from "styled-components";
import createImg from "../../resources/compose.png";

const ComposeButtonStyled = styled.div`
  cursor: pointer;
  align-self: flex-end;
  /* font-size: 1.5rem; */
  /* border-radius: 50px; */
  background-image: url(${createImg});
  background-size: cover;
  background-repeat: no-repeat;
  /* background-color: white; */
  width: 3rem;
  height: 3rem;
  padding: 0.5rem 1rem;
  opacity: 0.7;
  color: var(--textColor);
  transition: all 0.2s;

  &:hover {
    opacity: 1;
  }
  &:active {
    transform: rotate(450deg);
  }
`;

export default ComposeButtonStyled;
