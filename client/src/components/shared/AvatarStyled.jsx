import React from "react";
import styled from "styled-components";

const AvatarStyled = styled.img`
  display: none;
  /* min-width: 4rem;
  max-width: 8rem; */

  @media (min-width: 900px) {
    display: block;
    /* max-width: 4.2rem; */
    max-width: 100%;
    /* flex-basis: 4.2rem; */
  }
  @media (min-width: 950px) {
    /* max-width: 4.6rem; */
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
