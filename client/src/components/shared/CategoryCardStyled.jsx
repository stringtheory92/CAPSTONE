import React from "react";
import styled from "styled-components";

const CategoryCardStyled = styled.div`
  margin: 1rem;
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
  border: 2px solid var(--dark-turquoise);
  transition: background-color 0.2s;

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
