import React from "react";
import styled from "styled-components";

const ConcertInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  color: var(--textColor);
  position: relative;
  > img {
    width: 50%;
    align-self: center;
  }
  > h1 {
    margin: 1rem 0 0.5rem 0;
  }
  > p {
    font-size: 0.8rem;
  }
  > p > .priceSpan {
    font-style: italic;
    font-size: 1rem;
    color: var(--logo-color);
  }
  > .date {
    align-self: center;
    /* margin-bottom: 1rem; */
    font-size: 1rem;
  }
  > .time {
    margin-bottom: 2rem;
  }
  > .onSaleThrough {
    margin-bottom: 0.5rem;
  }
  > .break {
    border-width: 0;
    height: 1px;
    background-color: var(--forumItem);
    margin: 1.5rem 1rem;
  }
  > .venue {
    font-size: 1.3rem;
    color: var(--textColor);
    transition: all 0.4s;
  }
  > .venue:hover {
    color: var(--hover);
  }
  > .venue:active {
    color: var(--active);
  }
  > .purchaseLink {
    font-family: "Monoton", cursive;
    color: var(--textColor);
    font-size: 1rem;
    margin-top: 1rem;
    transition: all 0.4s;
  }
  > .purchaseLink:hover {
    color: var(--hover);
  }
  > .purchaseLink:active {
    color: var(--active);
  }

  > .venue[data-tool-tip]::after {
    content: attr(data-tool-tip);
    display: block;
    position: absolute;
    background-color: var(--forumItem);
    padding: 1rem;
    color: var(--textColor);
    border-radius: 10px;
    font-size: 0.8rem;
    bottom: 11.5rem;
    left: 0;
    z-index: 2;
    transform: scale(0);
    transition: transform ease-out 150ms, left ease-out 150ms;
  }
  > .venue[data-tool-tip]:hover::after {
    transform: scale(1);
    /* bottom: 100%; */
    left: 15rem;
  }
  > .purchaseLink[data-tool-tip]::after {
    content: attr(data-tool-tip);
    display: block;
    position: absolute;
    background-color: var(--forumItem);
    padding: 1rem;
    color: var(--textColor);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    border-radius: 10px;
    font-size: 0.8rem;
    bottom: 3.3rem;
    left: 0;
    z-index: 2;
    transform: scale(0);
    transition: transform ease-out 150ms, left ease-out 150ms;
  }
  > .purchaseLink[data-tool-tip]:hover::after {
    transform: scale(1);
    /* bottom: 100%; */
    left: 15rem;
  }
`;

export default ConcertInfoStyled;
