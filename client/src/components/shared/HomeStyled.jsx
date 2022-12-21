import React from "react";
import styled from "styled-components";

const HomeStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: var(--textColor);
  > .leftSide {
    display: grid;
    grid-template-rows: auto 4rem auto;
  }
  > .leftSide,
  .rightSide {
    width: 100%;
    border: 1px solid var(--white);
  }
  > .leftSide > .imageBox {
    /* width: 100%; */
    min-height: 10rem;
    border: 1px solid lime;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > .leftSide > .imageBox > button,
  .leftSide > button {
    cursor: pointer;
    height: 3rem;
    color: var(--textColor);
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
    border-radius: 10px;
    background-color: var(--logo-color);
    transition: all 0.3s;
    &:hover {
      opacity: 0.5;
    }
  }
  > .leftSide > .imageBox > img {
    max-height: 90%;
    max-width: 90%;
  }
  > .leftSide > .nameBox {
    text-align: center;
    font-size: 2rem;
  }
  > .rightSide > .uploadForm > .avatarUploadInput {
    color: var(--textColor);
  }
  > .rightSide > div > .updateProfile {
    cursor: pointer;
    color: var(--textColor);
  }
`;

export default HomeStyled;
