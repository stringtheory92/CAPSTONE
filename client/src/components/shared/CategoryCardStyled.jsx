import React from "react";
import styled from "styled-components";

const CategoryCardStyled = styled.div`
  padding: 0.5rem 0.75rem;
  border: none;
  height: 25rem;
  font-weight: 600;
  cursor: pointer;
  color: var(--primary);
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: var(--background);
  border-radius: 6px;
  box-shadow: 2px 2px 3px #222;
  border: 2px solid var(--dark-turquoise);
  transition: background-color 0.2s;
`;

export default CategoryCardStyled;
