import React from "react";
import styled from "styled-components";
import SSBG_1 from "../../bg/SSBG_1.jpg";

const GenreCardStyled = styled.div`
  /* border: 1px solid gray; */
  > .genreDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2.5rem 1rem 0.1rem 1rem;
    padding: 1rem;
    font-size: 1.5rem;

    border-top: 2px solid var(--forumItem);
    background-image: url(${SSBG_1});
  }
`;

export default GenreCardStyled;
