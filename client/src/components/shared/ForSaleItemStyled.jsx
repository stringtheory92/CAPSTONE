import React from "react";
import styled from "styled-components";
import SSBG_1 from "../../bg/SSBG_1.jpg";

// Pointer cursor not working on whole area of wholeItemContainer

const ForSaleItemStyled = styled.div`
  border-top: 1px solid var(--forumItem);
  border-radius: 3px;
  > .topBar {
    background-image: url(${SSBG_1});
  }
  > .topBar > h2 {
    font-size: 1.3rem;
    padding: 0.5rem 0;
  }
  > .topBar > h2 > span {
    font-size: 1rem;
    margin-right: 1rem;
    /* padding: 0.5rem; */
  }
  > .wholeItemContainer {
    cursor: pointer;
    background-color: var(--forumItem);
    display: flex;
    justify-content: space-between;
  }
  > .wholeItemContainer > .imageAndInfoContainer {
    display: flex;
    /* flex-grow: 1; */
  }
  > .wholeItemContainer > .imageAndInfoContainer .forSaleImageContainer {
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid var(--dark-grey);
    padding: 0.5rem;
    height: 8rem;
    width: 8rem;
  }

  > .wholeItemContainer
    > .imageAndInfoContainer
    .forSaleImageContainer
    .forSaleImage {
    max-width: 100%;
    max-height: 100%;
  }

  > .wholeItemContainer > .imageAndInfoContainer > .forSaleItemInfo {
    /* border: 1px solid grey; */
    /* width: 20rem; */
  }
  > .wholeItemContainer > .imageAndInfoContainer > .forSaleItemInfo > ul > li {
  }

  > .wholeItemContainer
    > .imageAndInfoContainer
    > .forSaleItemInfo
    > ul
    > .price {
    font-size: 1.3rem;
    font-weight: 700;
  }

  > .wholeItemContainer > .sellerInfo {
    display: none;
    border-left: 1px solid var(--dark-grey);
    margin: 1rem 0;
    padding-left: 1rem;
    width: 10rem;
  }

  > .wholeItemContainer > .sellerInfo > .sellerImageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid pink; */
    height: 6rem;
    width: 6rem;
  }

  @media (min-width: 750px) {
    > .wholeItemContainer > .sellerInfo {
      display: initial;
    }
  }
  @media (min-width: 780px) {
  }

  @media (min-width: 900px) {
  }

  @media (min-width: 1035px) {
  }
`;

export default ForSaleItemStyled;
