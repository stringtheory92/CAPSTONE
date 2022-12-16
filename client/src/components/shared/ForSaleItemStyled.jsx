import React from "react";
import styled from "styled-components";
import SSBG_1 from "../../bg/SSBG_1.jpg";

const ForSaleItemStyled = styled.div`
  border-top: 1px solid var(--forumItem);
  border-radius: 3px;
  > .topBar {
    background-image: url(${SSBG_1});
  }
  > .topBar > h2 {
    font-size: 1.3rem;
    padding: 0.5rem 0;
  }
  > .topBar > h2 > span {
    font-size: 1rem;
    margin-right: 1rem;
    /* padding: 0.5rem; */
  }
  > .wholeItemContainer {
    background-color: var(--forumItem);
  }
`;

export default ForSaleItemStyled;
