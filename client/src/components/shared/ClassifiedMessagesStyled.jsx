import React from "react";
import styled from "styled-components";
import SSBG_1 from "../../bg/SSBG_1.jpg";

const ClassifiedMessagesStyled = styled.div`
  > .headingContainer {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    > h2 {
      color: var(--textColor);
      font-size: 1.5rem;
      margin: 2.5rem 1rem 0.1rem 1rem;
      padding: 1rem;
    }
    > img {
      max-width: 10rem;
      max-height: 6rem;
    }
  }
`;

export default ClassifiedMessagesStyled;
