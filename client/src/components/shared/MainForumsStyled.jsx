import React from "react";
import styled from "styled-components";
import SSBG_1 from "../../bg/SSBG_1.jpg";

const MainForumStyled = styled.div`
  > h1 {
    margin: 2rem;
    font-size: 2rem;
    color: var(--textColor);
  }
  > .categoryContainer {
    margin-top: 4rem;
    /* height: 5rem; */
    border: 1px solid white;
    /* padding: 0 1rem; */
    background-image: url(${SSBG_1});
    /* background-size: contain; */
  }
  > .categoryContainer > h2 {
    font-size: 1.5rem;
    margin: 2rem;
    color: var(--textColor);
  }
`;

export default MainForumStyled;
