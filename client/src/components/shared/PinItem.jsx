import React from "react";
import styled from "styled-components";

const PinItem = styled.div`
  max-height: 30rem;
  > .item {
    cursor: pointer;
    overflow: hidden;
    height: 3rem;

    padding: 1rem;

    font-weight: 600;

    color: var(--textColor);
    list-style-type: none;
    background-color: var(--forumItem);
    /* border-radius: 6px; */
    box-shadow: 2px 2px 3px #222;
    border: 0.5px solid var(--forumBorder);
  }
  /* box-shadow: 2px 2px 3px #222;
  border: 0.5px solid var(--forumBorder); */
`;

export default PinItem;
