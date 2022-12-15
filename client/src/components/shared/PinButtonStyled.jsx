import React from "react";
import styled from "styled-components";
import Pin from "../../resources/push-pin.png";

const PinButtonStyled = styled.div`
  cursor: pointer;
  align-self: flex-start;
  /* font-size: 1.5rem; */
  /* border-radius: 50px; */
  background-image: url(${Pin});
  background-size: cover;
  background-repeat: no-repeat;
  /* background-color: white; */
  width: 2rem;
  height: 2rem;
  padding: 0.5rem 1rem;
  opacity: 0.7;
  color: var(--textColor);
  transition: all 0.2s;

  &:hover {
    opacity: 1;
  }
  &:active {
    transform: rotate(10deg);
  }
`;

export default PinButtonStyled;
