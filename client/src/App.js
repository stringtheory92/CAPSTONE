// import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PageTwo from "./components/PageTwo";
import PageOne from "./components/PageOne";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import { createGlobalStyle, ThemeProvider } from "styled-components";
// import { Button } from "./components/shared";

const GlobalStyle = createGlobalStyle`
    :root {
    --white: #f1f1f1;
    --black: #030416;
    --grey: #d6e2e7;
    --dark-grey: #7f8a8e;
    --turquoise: #00efe1;
    --mid-turquoise: #14d5c9;
    --dark-turquoise: #00333f;
    --color: ${(props) => props.theme.color};
    --background: ${(props) => props.theme.backgroundColor};
    --primary: ${(props) => props.theme.primary};
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: .625rem;
    color: var(--color);
    background-color: var(--background);
  }
  `;

const lightTheme = {
  color: "var(--black)",
  backgroundColor: "var(--white)",
  primary: "var(--dark-turquoise)",
};
const darkTheme = {
  color: "var(--white)",
  backgroundColor: "var(--black)",
  primary: "var(--turquoise)",
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogIn = () => {
    setIsLoggedIn((status) => !status);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((status) => !status);
  };

  return (
    <ThemeProvider theme={isDarkMode ? lightTheme : darkTheme}>
      <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

      <Routes>
        <Route
          exact
          path="/"
          element={isLoggedIn ? <Home /> : <Login replace to={"/login"} />}
        />

        <Route path="/page_one" element={<PageOne />} />

        <Route path="/page_two" element={<PageTwo />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
