import React from "react";
import styled from "styled-components";

const AvatarStyled = styled.img`
  display: none;
  border-radius: 5px;
  /* min-width: 4rem;
  max-width: 8rem; */

  @media (min-width: 750px) {
    display: block;
    /* visibility: hidden; */
    max-width: 100%;
    max-height: 5rem;
  }
  @media (min-width: 900px) {
    /* display: block; */
    /* max-width: 100%; */
    /* max-height: 7rem; */
  }
  @media (min-width: 950px) {
    /* max-width: 4.6rem; */
    max-height: 8rem;
  }
  @media (min-width: 1000px) {
    /* max-width: 5rem; */
  }

  @media (min-width: 1035px) {
    /* display: block;
    max-width: 100%; */
  }
`;

export default AvatarStyled;
