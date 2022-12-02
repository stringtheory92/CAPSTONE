import React from "react";
import styled from "styled-components";

const SellerImageStyled = styled.img`
  /* display: none; */
  /* width: 100%; */
  max-width: 6rem;
  max-height: 6rem;
  border-radius: 10px;

  @media (min-width: 750px) {
    display: initial;
  }
`;

export default SellerImageStyled;
