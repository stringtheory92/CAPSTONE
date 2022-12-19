import React from "react";
import styled from "styled-components";

const MessageStyled = styled.li`
  padding: 0.5rem 0.75rem;
  /* border: none; */
  font-weight: 600;
  font-size: 0.8rem;
  padding: 1rem;
  min-height: 4rem;
  margin: 0.5rem 1rem;
  border-radius: 10px;
  /* cursor: pointer; */
  color: var(--black);
  list-style-type: none;
  background-color: var(--messageItem);
  border: 2px solid var(--dark-turquoise);
  transition: background-color 0.2s;

  > p {
    display: flex;
    flex-direction: column;
  }
  > p > img {
    max-width: 90%;
    max-height: 200px;
    margin: 1rem;

    object-fit: contain;
  }
  > h2 {
    font-size: 1rem;
  }
`;

export default MessageStyled;
