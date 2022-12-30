import React from "react";
import styled from "styled-components";

const MessageStyled = styled.li`
  /* padding: 0.5rem 0.75rem; */
  /* border: none; */
  font-weight: 600;
  font-size: 0.8rem;
  /* padding: 1.5rem; */
  min-height: 4rem;
  margin: 0.5rem 1rem;
  border-radius: 10px;
  /* cursor: pointer; */
  color: var(--black);
  list-style-type: none;
  background-color: var(--messageItem);
  border: 2px solid var(--dark-turquoise);
  transition: background-color 0.2s;
  > .topBar {
    color: var(--textColor);
    background-color: var(--extra-dark-grey);
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    padding: 0.7rem;
    /* margin-bottom: 0.7rem; */
  }
  /* > .line {
    color: grey;
    border: 0.5px solid var(--forumItem);
    padding: 2rem 1rem;
  } */
  > .mainBody {
    display: flex;
    min-height: 10rem;
    padding-bottom: 1rem;
  }
  > .mainBody > .messageContent {
    margin: 2rem;
    width: 34rem;
  }
  > .mainBody > .messageContent > p > img {
    margin: 2rem 0;
    max-width: 10rem;
    max-height: 10rem;
  }
  > div > .authorInfo {
    border-right: 0.5px solid var(--forumItem);
    width: 10rem;
    /* width: 24rem; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }
  > div > .authorInfo > .imageContainer {
    height: 6rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  > div > .authorInfo > .imageContainer > img {
    max-width: 5rem;
    max-height: 5rem;

    /* border-radius: 50px; */
    margin: 0.5rem;
    /* justify-self: center; */
  }
  > div > .authorInfo > .details > {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
  }
  > div > .authorInfo > .details > h2 {
    text-align: center;
    margin-bottom: 0.5rem;
  }
  > div > .authorInfo > .details > p {
    font-style: italic;
  }
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
