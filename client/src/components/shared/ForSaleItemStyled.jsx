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
    width: 25rem;
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
    margin: 1rem;
  }
  > .wholeItemContainer
    > .imageAndInfoContainer
    > .forSaleItemInfo
    > ul
    > li
    > span {
    font-size: 0.8rem;
    line-height: 1.5;
    /* text-shadow: 5px 5px 10px #333; */
  }

  > .wholeItemContainer
    > .imageAndInfoContainer
    > .forSaleItemInfo
    > ul
    > .price {
    font-size: 1.3rem;
    font-weight: 700;
    padding-bottom: 0.5rem;
  }
  > .wholeItemContainer > .extraInfo {
    width: 30%;
    background-color: var(--forumItemInside);
    margin: 1rem;
    padding: 0.5rem;
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
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;

    /* border: 1px solid pink; */
    height: 7rem;
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
