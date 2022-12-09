import React from "react";
import styled from "styled-components";

const NewForSaleFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-size: 1.2rem;
  > input {
    // need these three in order to keep focus border from changing the size of the input
    box-sizing: border-box;
    width: 20rem;
    height: 1.7rem;
    // =======================
    margin-bottom: 1rem;
    padding: 0.3rem;
    border-radius: 5px;
    outline: none;
    border: none;
    transition: border 0.2s;
  }
  > input:focus {
    border: 2px solid var(--primary);
    outline: none;
  }

  > .radioLabel > .radio {
    margin-right: 1rem;
  }
`;

export default NewForSaleFormStyled;
