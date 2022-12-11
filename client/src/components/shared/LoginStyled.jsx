import React from "react";
import styled from "styled-components";

const LoginStyled = styled.div`
  height: 77vh;
  > div > form > label {
    color: var(--light-grey);
  }
  > div > form {
    display: flex;
    flex-direction: column;
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
    font-family: "Monoton", cursive;
    font-size: 1.8rem;
    cursor: pointer;
    /* background-color: var(--logo-color); */
    color: white;
    width: 10rem;
    padding: 0.8rem;
    border-radius: 15px;
    transition: all 0.5s;
  }
  > div > form > .signInButton:hover {
    color: var(--logo-color);
  }
  > div > form > .createAcctButton {
    cursor: pointer;
    color: var(--grey);
  }
`;

export default LoginStyled;
