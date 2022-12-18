import React from "react";
import styled from "styled-components";
import SSBG_1 from "../../bg/SSBG_1.jpg";

const CategoryCardStyled = styled.div`
  padding: 0.5rem 0.75rem;
  border: none;
  height: 18rem;
  font-weight: 600;
  cursor: pointer;
  color: var(--white);
  font-size: 1.5rem;
  text-shadow: 2px 2px 0px var(--black);
  /* color: var(--primary); */
  background-image: url(${(props) => props.backgroundImageSm});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: var(--background);
  border-radius: 6px;
  box-shadow: 2px 2px 3px #222;
  /* border: 2px solid var(--logo-color); */
  transition: filter 0.8s, border 0.8s, opacity 0.2s;

  &:hover {
    border: 5px solid var(--logo-color);
    filter: blur(2px);
  }
  &:active {
    opacity: 0.5;
  }

  @media (min-width: 750px) {
    height: 26rem;
    background-image: url(${(props) => props.backgroundImageLg});
    background-size: cover;
    background-repeat: no-repeat;
    /* color: ${(props) => props.textColor};
    text-shadow: ${(props) => props.textShadow}; */
    font-size: 1.5rem;
  }
`;

export default CategoryCardStyled;
