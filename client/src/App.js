// import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import PageTwo from "./components/PageTwo";
import PageOne from "./components/PageOne";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import ForumsHome from "./components/ForumsHome";
import ClassifiedsContainer from "./components/ClassifiedsContainer";
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
  const [user, setUser] = useState({});

  // keep isLoggedIn status updated on refresh
  // const currentUserID = localStorage.getItem("userID");
  // if (currentUserID) setIsLoggedIn(true);

  useEffect(() => {
    const currentUserID = localStorage.getItem("userID");

    if (currentUserID) {
      setIsLoggedIn(true);
      fetch(`/users/${currentUserID}`)
        .then((r) => r.json())
        .then((data) => setUser(data));
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  console.log("user: ", user);
  console.log("isLoggedIn: ", isLoggedIn);

  const toggleLogIn = () => {
    if (isLoggedIn) localStorage.clear();
    setIsLoggedIn((status) => !status);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((status) => !status);
  };

  const onSignIn = (user) => {
    localStorage.setItem("userID", user.id);
    setUser(user);
    toggleLogIn();
  };

  return (
    <ThemeProvider theme={isDarkMode ? lightTheme : darkTheme}>
      <NavBar
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        isLoggedIn={isLoggedIn}
        toggleLogIn={toggleLogIn}
      />

      <Routes>
        <Route
          exact
          path="/"
          element={
            isLoggedIn ? (
              <Home />
            ) : (
              <Login replace to={"/login"} onSignIn={onSignIn} />
            )
          }
        />

        <Route path="/forums" element={<ForumsHome />} />

        <Route path="/classifieds" element={<ClassifiedsContainer />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
