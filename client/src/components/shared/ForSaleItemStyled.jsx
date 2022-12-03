import React from "react";
import styled from "styled-components";

const ForSaleItemStyled = styled.img`
  border: 1px solid gray;
  border-radius: 3px;

  // can't figure out how to target particular children by type or className with styled components

  /* & > img:first-of-type {
    max-width: 6rem;
  } */
`;

export default ForSaleItemStyled;
