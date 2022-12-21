import React from "react";
import styled from "styled-components";

const LoginStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 77vh;
  > div > form > label {
    color: var(--light-grey);
  }
  > div > form {
    display: flex;
    flex-direction: column;

    /* align-items: center; */
    padding: 1rem;
    font-size: 1rem;
  }
  > div > form > label {
    margin-bottom: 0.5rem;
  }
  > div > form > input {
    background-color: var(--grey);
    padding: 0.3rem 0.8rem;
    width: 20rem;
    margin-bottom: 1.5rem;
  }
  > div > form > .signInButton {
    align-self: center;
    font-family: "Monoton", cursive;
    font-size: 1.8rem;
    cursor: pointer;
    /* background-color: var(--logo-color); */
    color: var(--textColor);
    width: 10rem;
    padding: 0.8rem;
    border-radius: 15px;
    transition: all 0.5s;
  }
  > div > form > .signInButton:hover {
    color: var(--hover);
  }
  > div > form > .signInButton:active {
    color: var(--active);
  }
  > div > form > .createAcctButton {
    cursor: pointer;
    color: var(--grey);
    transition: all 0.2s;
  }
  > div > form > .createAcctButton:hover {
    color: var(--logo-color);
  }
  > div > form > .createAcctButton:active {
    color: gold;
  }
`;

export default LoginStyled;
