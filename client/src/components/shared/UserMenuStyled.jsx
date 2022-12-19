import React from "react";
import styled from "styled-components";
import dbButton from "../../resources/dbButton.png";
import bgButton from "../../resources/bgButton.png";
import ampButton from "../../resources/ampButton.png";
import accButton from "../../resources/accButton.png";

const UserMenuStyled = styled.div`
  display: none;
  /* margin: 1rem; */

  @media (min-width: 750px) {
    color: var(--textColor);
    display: initial;
    > .namePic {
      margin-bottom: 1rem;
    }
    > .namePic > .nameContainer > .userName {
      /* display: none; */
      font-size: 1rem;
    }
    > .quickLinks > ul {
      margin: 0.8rem;
    }
    > .quickLinks > ul > li {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: var(--forumItem);
    }
    > .quickLinks > ul > li > div {
      width: 3.6rem;
      height: 3.5rem;
      background-size: contain;
      background-repeat: no-repeat;
      background-color: var(--dark-grey);
      transition: all 0.4s;
      margin: 0.3rem;
    }
    > .quickLinks > ul > li > div:hover {
      background-color: var(--hover);
    }
    > .quickLinks > ul > li > div:active {
      background-color: var(--active);
    }
    > .quickLinks > ul > li > .db {
      background-image: url(${dbButton});
    }
    > .quickLinks > ul > li > .bg {
      background-image: url(${bgButton});
    }
    > .quickLinks > ul > li > .amp {
      background-image: url(${ampButton});
    }
    > .quickLinks > ul > li > .acc {
      background-image: url(${accButton});
    }
  }
  @media (min-width: 900px) {
    > .quickLinks > ul {
      margin: 1.3rem;
    }
  }
  @media (min-width: 950px) {
    .quickLinks {
      display: none;
    }
  }
`;

export default UserMenuStyled;
