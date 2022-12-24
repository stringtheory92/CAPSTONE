import React from "react";
import styled from "styled-components";
import SSBG_1 from "../../bg/SSBG_1.jpg";

const HomeStyled = styled.div`
  /* background: url(${SSBG_1});
  box-shadow: 0px -10px 10px rgb(13, 30, 128); */
  > .headerBox {
    display: flex;
    justify-content: center;
    color: white;
    font-size: 3rem;
    font-weight: 400;
    letter-spacing: 0.4rem;
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  > .subHeaderBox {
    padding: 1rem 0;
    min-height: 75vh;
    background: url(${SSBG_1});
    border-top: 2px solid var(--forumItem);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: var(--textColor);
  }
  > div > .leftSide {
    display: grid;
    grid-template-rows: auto 4rem auto;
  }
  > div > .leftSide,
  .rightSide {
    text-align: left;
    width: 100%;
    /* border: 1px solid var(--white); */
  }
  > div > .leftSide > .imageBox {
    /* width: 100%; */
    /* min-height: 10rem; */
    /* border: 1px solid lime; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > div > .leftSide > .imageBox > button,
  .leftSide > button {
    overflow: hidden;
    cursor: pointer;
    height: 3rem;
    color: var(--textColor);
    font-size: 1rem;
    margin: 0 3rem;
    padding: 0.6rem 1.2rem;
    border-radius: 10px;
    background-color: var(--logo-color);
    transition: all 0.3s;
    &:hover {
      opacity: 0.5;
    }
  }
  > div > .leftSide > .imageBox > img {
    max-height: 90%;
    max-width: 90%;
  }
  > div > .leftSide > .nameBox {
    text-align: center;
    font-size: 2rem;
  }
  > div > .rightSide > .uploadForm > .avatarUploadInput {
    color: var(--textColor);
  }
  > div > .rightSide > div > .updateProfile {
    cursor: pointer;
    color: var(--textColor);
  }
  > div > .rightSide > div > .pinnedTopics {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.1rem 1rem;
    padding: 1rem;
    font-size: 1.5rem;
  }
`;

export default HomeStyled;
