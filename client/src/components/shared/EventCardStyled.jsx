import React from "react";
import styled from "styled-components";

const EventCardStyled = styled.div`
  > .concertLink {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1rem;
    background-color: var(--forumItem);
    margin: 0.1rem 1rem;
  }
  > .concertLink > h3 {
    cursor: pointer;
    text-align: center;
    color: var(--textColor);
    /* padding-top: 0.5rem; */
    margin-bottom: 1rem;
    transition: all 0.3ss;
  }
  > .concertLink > h3:hover {
    color: var(--logo-color);
  }
  > .concertLink > img {
    cursor: pointer;
    margin: 1rem 0 0.5rem 0;
    width: 50%;
    align-self: center;
    transition: all 0.5s;
  }
  > .concertLink > img:hover {
    opacity: 0.5;
  }
  @media (min-width: 1035px) {
    > .concertLink > img {
      width: 15rem;
    }
  }
`;

export default EventCardStyled;
