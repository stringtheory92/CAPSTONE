// amazing bg photos:
// https://www.facebook.com/photo/?fbid=2676395625781051&set=a.355647687855868
// animated backgrounds:
// https://wweb.dev/resources/animated-css-background-generator/

//Active Storage Notes:
// mini_magick installed (image resizing)
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import PageTwo from "./components/PageTwo";
import PageOne from "./components/PageOne";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import { createGlobalStyle, ThemeProvider, css } from "styled-components";
import ForumsHome from "./components/ForumsHome";
import ClassifiedsHome from "./components/ClassifiedsHome";
import NewTopicForm from "./components/NewTopicForm";
import ForumMessagesContainer from "./components/ForumMessagesContainer";
import NewForumMessageForm from "./components/NewForumMessageForm";
import UserMenu from "./components/UserMenu";
import NewForSaleForm from "./components/NewForSaleForm";
// import { Button } from "./components/shared";

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
    --inverseColor: ${(props) => props.theme.inverseColor};
    --background: ${(props) => props.theme.backgroundColor};
    --inverseBgColor: ${(props) => props.theme.inverseBgColor};
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
  }

  ul {
    list-style-type:  none;
  }

  a {
    text-decoration: none;
  }
  `;

const lightTheme = {
  color: "var(--black)",
  inverseColor: "var(--white)",
  backgroundColor: "var(--light-grey)",
  inverseBgColor: "var(--black)",
  primary: "var(--dark-turquoise)",
};
const darkTheme = {
  color: "var(--white)",
  inverseColor: "var(--black)",
  backgroundColor: "var(--black)",
  inverseBgColor: "var(--grey)",
  primary: "var(--turquoise)",
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [avatar, setAvatar] = useState(null);
  const [selectedClassifiedsCategory, setSelectedClassifiedsCategory] =
    useState(null);
  const navigate = useNavigate();

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
  console.log("avatar: ", avatar);
  console.log("isLoggedIn: ", isLoggedIn);

  const toggleLogIn = () => {
    if (isLoggedIn) {
      localStorage.clear();
      navigate("/");
    }
    setIsLoggedIn((status) => !status);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((status) => !status);
  };

  const onAvatarChange = (avatar) => {
    setAvatar(avatar);
  };

  // passing up selected category for potential use in NewForSaleForm
  const onSelectedClassifiedsCategory = (categoryID) => {
    setSelectedClassifiedsCategory(categoryID);
  };

  const onSignIn = (data) => {
    localStorage.setItem("userID", data.user.id);
    setUser(data.user);
    setAvatar(data.avatar);
    toggleLogIn();
  };
  console.log("isDarkMode: ", isDarkMode);
  // console.log("props.theme: ", props.theme);

  return (
    <ThemeProvider theme={isDarkMode ? lightTheme : darkTheme}>
      <GlobalStyle />
      <NavBar
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        isLoggedIn={isLoggedIn}
        toggleLogIn={toggleLogIn}
      />
      <div className="whole">
        <div className="sides left">
          {user ? <UserMenu user={user} avatar={avatar} /> : null}
        </div>
        {/* <div className="leftMiddleSpace"></div> */}
        <div className="middle">
          <Routes>
            <Route
              exact
              path="/"
              element={
                isLoggedIn ? (
                  <Home onAvatarChange={onAvatarChange} />
                ) : (
                  <Login replace to={"/login"} onSignIn={onSignIn} />
                )
              }
            />

            <Route path="/forums" element={<ForumsHome />} />

            <Route
              path="/classifieds"
              element={
                <ClassifiedsHome
                  onSelectedClassifiedsCategory={onSelectedClassifiedsCategory}
                />
              }
            />
            <Route path="/new_topic/:subForumID" element={<NewTopicForm />} />
            <Route
              path="/forum_messages/:subForumTopicID"
              element={<ForumMessagesContainer />}
            />
            <Route
              path="/new_for_sale"
              element={
                <NewForSaleForm
                  user={user}
                  avatar={avatar}
                  selectedClassifiedsCategory={selectedClassifiedsCategory}
                />
              }
            />
            {/* <Route
          path="/new_forum_message/:subForumTopicID"
          element={<NewForumMessageForm />}
        /> */}
          </Routes>
        </div>
        <div className="sides right">Right</div>
      </div>
    </ThemeProvider>
  );
}

export default App;
