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
  /* background-image: url(${SSBG_1}); */
  transition: border 0.4s;

  > .messageWrapper > h2 {
    font-size: 3rem;
  }
`;

export default MessageContainerStyled;
