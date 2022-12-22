import React from "react";
import styled from "styled-components";

const SubForumTopicItem = styled.li`
  padding: 1rem;
  font-weight: 600;
  color: var(--textColor);
  list-style-type: none;
  background-color: var(--forumItem);
  box-shadow: 2px 2px 3px #222;
  border: 0.5px solid var(--forumBorder);

  > .topBar {
    /* height: 3rem; */
    /* border: 1px solid white; */
    display: flex;
    justify-content: space-between;
  }

  > .topBar > div > h2 {
    font-size: 1.3rem;
    padding: 1rem 0 1rem 0.5rem;
    /* padding-top: 1rem; */
    /* padding-left: 0.5rem; */
    transition: all 0.2s;
  }
  > .topBar > div > h2:hover {
    cursor: pointer;
    color: var(--inverseColor);
  }

  box-shadow: 2px 2px 3px #222;
  border: 0.5px solid var(--forumBorder);

  > h2 {
    font-size: 1.3rem;
    transition: all 0.2s;
  }
  > h2:hover {
    cursor: pointer;
    color: var(--inverseColor);
  }
  > .bodySection {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;
    background-color: var(--forumItemInside);
    color: var(--inverseBgColor);
    padding: 1rem;
    font-size: 0.8rem;
    min-height: 4rem;
  }
`;

export default SubForumTopicItem;
