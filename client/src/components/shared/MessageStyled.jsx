import React from "react";
import styled from "styled-components";

const MessageStyled = styled.li`
  padding: 0.5rem 0.75rem;
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
    background-color: var(--forumItemInside);
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
  }
  > .mainBody > .messageContent {
    margin: 0.5rem;
  }
  > div > .authorInfo {
    border-right: 0.5px solid var(--forumItem);
    width: 6rem;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }
  > div > .authorInfo > img {
    max-width: 5rem;
    max-height: 5rem;

    /* border-radius: 50px; */
    margin: 0.5rem;
    /* justify-self: center; */
  }
  > div > .authorInfo > .details > {
    display: flex;

    justify-content: center;
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
