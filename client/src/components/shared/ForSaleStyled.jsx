import React from "react";
import styled from "styled-components";
import SSBG_1 from "../../bg/SSBG_1.jpg";
import Compose from "../../resources/compose.png";

const ForSaleStyled = styled.div`
  color: var(--textColor);
  > .classifiedForSaleHeading {
    padding-top: 3rem;
    padding-bottom: 2rem;
    color: white;
    font-size: 3rem;
    font-weight: 400;
    letter-spacing: 0.4rem;
  }
  > .categoryContainer {
    margin-top: 4rem;
    /* height: 5rem; */
    border-top: 2px solid var(--forumItem);
    /* padding: 0 1rem; */
    background-image: url(${SSBG_1});
    /* background-size: contain; */
  }
  > .categoryContainer > h2 {
    font-size: 1.5rem;
    margin: 2rem;
    color: var(--textColor);
  }
  > button {
    cursor: pointer;
    height: 4rem;
    width: 4rem;
    background: url(${Compose});
    background-size: contain;
    transition: all 0.3s;
    &:hover {
      opacity: 0.5;
    }
    &:active {
      opacity: 1;
    }
  }
`;

export default ForSaleStyled;
