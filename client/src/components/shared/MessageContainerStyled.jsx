import React from "react";
import styled from "styled-components";
import SSBG_1 from "../../bg/SSBG_1.jpg";

const MessageContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 2rem; */
  padding: 0.5rem 0.75rem;
  /* border: none; */
  font-weight: 600;
  /* cursor: pointer; */
  color: var(--white);
  background-image: url(${SSBG_1});

  border-top: 2px solid var(--forumItem);

  transition: border 0.4s;
  > .headerContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  > div > p {
    margin: 2rem;
    font-size: 1rem;
  }
  > div > .heading {
    overflow: hidden;
    margin: 1rem 1rem 0.1rem 1rem;
    padding: 0 1rem;
    font-size: 1.5rem;
  }
  > .messageWrapper > h2 {
    font-size: 3rem;
  }
`;

export default MessageContainerStyled;
