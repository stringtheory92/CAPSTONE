import React from "react";
import styled from "styled-components";
import SSBG_1 from "../../bg/SSBG_1.jpg";

const ClassifiedMessagesStyled = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* background-image: url(${SSBG_1}); */
  > .headingContainer {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    background-image: url(${SSBG_1});
    border-radius: 10px;
    margin: 0.5rem 1rem;
    height: 10rem;
    > h2 {
      /* color: var(--textColor);
      font-size: 1.5rem; */
      margin: 2.5rem 1rem 0.1rem 1rem;
      /* padding: 1rem; */
      color: white;
      font-size: 2rem;
      font-weight: 400;
      letter-spacing: 0.4rem;
      padding-top: 3rem;
      padding-bottom: 2rem;
    }
    > img {
      max-width: 10rem;
      max-height: 100%;
    }
    > .createBtn {
      /* justify-self: center; */
    }
  }
`;

export default ClassifiedMessagesStyled;
