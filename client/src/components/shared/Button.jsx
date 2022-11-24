import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem 0.75rem;
  border: none;
  font-weight: 600;
  cursor: pointer;
  color: var(--primary);
  background-color: var(--background);
  border: 2px solid var(--dark-turquoise);
  transition: background-color 0.2s;
`;

export default Button;
