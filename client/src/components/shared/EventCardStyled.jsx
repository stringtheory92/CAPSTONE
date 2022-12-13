import React from "react";
import styled from "styled-components";

const EventCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1rem;
  background-color: var(--forumItem);
  margin: 0.1rem 1rem;
  > h3 {
    text-align: center;
    color: var(--textColor);
    /* padding-top: 0.5rem; */
    margin-bottom: 1rem;
  }
  > img {
    margin: 1rem 0 0.5rem 0;
    width: 15rem;
    align-self: center;
  }
`;

export default EventCardStyled;
