import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
    --white: #f1f1f1;
    --black: #030416;
    --light-grey: lightgrey;
    --grey: #d6e2e7;
    --dark-grey: #7f8a8e;
    --turquoise: #00efe1;
    --mid-turquoise: #14d5c9;
    --dark-turquoise: #00333f;
    --color: ${(props) => props.theme.color};
    --background: ${(props) => props.theme.backgroundColor};
    --primary: ${(props) => props.theme.primary};
  }
  
  * {padding: 0;
  margin: 0;
  box-sizing: border-box;}

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: .625rem;
    color: var(--color);
    background-color: var(--background);
    list-style-type: none;
  }
  `;

export default GlobalStyle;
