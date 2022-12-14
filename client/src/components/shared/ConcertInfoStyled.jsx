import React from "react";
import styled from "styled-components";

const ConcertInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  color: var(--textColor);
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
`;

export default ConcertInfoStyled;
