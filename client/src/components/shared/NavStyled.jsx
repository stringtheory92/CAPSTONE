import React from "react";
import styled from "styled-components";
import SSBG_1 from "../../bg/SSBG_1.jpg";

// SSBG_1 is a nice gradient background, but maybe too blue

const NavStyled = styled.div`
  /* height: 8rem; */
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.75rem;

  /* position: fixed; */

  /* border: none; */
  font-weight: 600;
  z-index: 2;
  color: var(--inverseBgColor);
  /* background-image: url(${SSBG_1}); */
  background-color: var(--background-dark-blue);

  transition: background-color 0.2s;
  > ul > li > div {
    margin-right: 1rem;
    /* border: 1px solid #333; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
  }
  > .leftNav {
    width: 20rem;
    /* border: 1px solid lime; */
  }
  > .leftNav > .logoContainer {
    /* border: 1px solid gray; */
    width: 19rem;
  }
  > .leftNav > .logoContainer > img {
    /* border: 1px solid gray; */
    width: 19rem;
  }
  > .leftNav > .leftSideButtons {
    display: none;
  }
  > .rightSideButtons {
    display: none;
  }
  > .rightSideButtons > .darkModeButtonContainer {
    /* width: 8rem;
    height: 2rem; */
  }
  > .rightSideButtons > .loginButton {
    cursor: pointer;
    color: white;
    border: 2px solid white;
    font-size: 1rem;
    padding: 0.5rem 1.6rem;
    border-radius: 10px;
    transition: color 0.5s, border 0.5s, background-color 1s;
  }
  > .rightSideButtons > .loginButton:hover {
    color: var(--logo-color);
    border: 2px solid var(--logo-color);
  }
  > .rightSideButtons > .loginButton:active {
    border: 2px solid gold;
    color: gold;
    /* background-color: var(--white); */
    /* background-color: var(--logo-color); */
  }
  > .rightSideMenu {
    background-color: var(--white);
  }
  > .rightSideMenu > .menu {
    color: white;
    transform: rotate(90deg);
    right: 2rem;
    top: 2.5rem;
    font-size: 4em;
    font-weight: 500;
    z-index: 111;
    cursor: pointer;
    text-align: center;
    transition: all 0.5s;
    -webkit-transition: all 1s;
    position: absolute;
  }
  > .rightSideMenu > .menuInvisible {
    opacity: 0;
  }

  > .rightSideMenu > .menu:hover {
    /* transform: rotate(180deg); */
    color: var(--logo-color);
  }
  > .rightSideMenu > .menu:active {
    transform: rotate(450deg);
  }

  > .rightSideMenu > .lgMenu {
    width: 400px;
    height: 100%;
    top: 0;
    right: -400px;
    overflow: hidden;

    background-image: url(${SSBG_1});
    box-shadow: 5px 5px 10px grey;
    position: absolute;
    z-index: 11;
    opacity: 0;

    transition: all 0.25s;
    -webkit-transition: all 0.25s;
    /* display: none; */
  }

  > .rightSideMenu > .enterLgMenu {
    opacity: 1;
    right: 0;
    display: initial;
  }

  > .rightSideMenu > .lgMenu > ul {
    list-style: none;
    padding: 0;
    margin-top: 75px;
  }

  > .rightSideMenu > .lgMenu > ul > li {
    text-align: center;
    text-transform: uppercase;
    height: 70px;
    line-height: 70px;
    margin: 15px 0;
    color: white;
    cursor: pointer;
    background-color: var(--forumItem);
    font-size: 1em;
    letter-spacing: 0.2em;
    transition: all 0.25s;
  }

  > .rightSideMenu > .lgMenu > ul > li:hover {
    background-color: var(--textColor);
    color: var(--inverseColor);
    letter-spacing: 0.3rem;
    font-size: 1rem;
    font-weight: bold;
  }
  > .rightSideMenu > .lgMenu > ul > li:active {
    background-color: var(--dark-grey);
    color: var(--textColor);
    letter-spacing: 0.1rem;
    font-size: 1.5em;
    font-weight: initial;
  }

  > .rightSideMenu > .lgMenu > .exit {
    position: absolute;
    right: 10px;
    padding: 0px;
    top: -10px;
    font-size: 4em;
    color: var(--dark-grey);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.25s;
    -webkit-transition: all 0.25s;
  }
  > .rightSideMenu > .lgMenu > .exit:hover {
    color: var(--hover);
  }
  > .rightSideMenu > .lgMenu > .exit:active {
    color: var(--active);
  }

  @media (min-width: 780px) {
    > .leftNav > .leftSideButtons {
      display: flex;
    }
    > .rightSideButtons {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;

      height: 7rem;
    }
    > .rightSideMenu {
      display: none;
    }
  }
  //PHONE
  @media (max-width: 500px) {
    height: 8.5rem;
    > .leftNav {
      display: flex;
    }
    > .leftNav > .logoContainer {
      display: flex;
      align-self: center;
    }
    > .leftNav > .logoContainer > img {
      align-self: center;
      width: 14rem;
    }
  }
`;

export default NavStyled;
