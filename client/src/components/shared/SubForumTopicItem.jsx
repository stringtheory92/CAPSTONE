import React from "react";
import styled from "styled-components";

const SubForumTopicItem = styled.li`
  overflow: hidden;
  height: 9rem;

  padding: 1rem;

  font-weight: 600;

  color: var(--textColor);
  list-style-type: none;
  background-color: var(--forumItem);
  /* border-radius: 6px; */
  box-shadow: 2px 2px 3px #222;
  border: 0.5px solid var(--forumBorder);

  > .topBar {
    height: 3rem;
    /* border: 1px solid white; */
    display: flex;
    justify-content: space-between;
  }

  > .topBar > div > h2 {
    font-size: 1.3rem;
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
    background-color: var(--forumItemInside);
    min-height: 4rem;
  }
`;

export default SubForumTopicItem;
