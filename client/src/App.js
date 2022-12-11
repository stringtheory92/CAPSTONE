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
import SSBG_1 from "./bg/SSBG_1.jpg";
// import { Button } from "./components/shared";

const GlobalStyle = createGlobalStyle`
// navColor (intended for nav bg) variable not working for some reason. 
    :root {
      --logo-color: #fa4902;
      /* --logo-color: #fc6d34; */
    --white: #f1f1f1;
    --black: #030416;
    --background-dark-blue: #04101c;
    /* --background-dark-blue: #021221; */
    --light-grey: lightgrey;
    --grey: #959696;
    --dark-grey: #7f8a8e;
    --turquoise: #00efe1;
    --mid-turquoise: #14d5c9;
    --dark-turquoise: #fa6711;
    --bgUrl: SSBG_1;
    /* --dark-turquoise: #00333f; */
    --backgroundPhoto: ${(props) => props.theme.backgroundPhoto};
    --navColor: ${(props) => props.theme.navColor};
    --textColor: ${(props) => props.theme.textColor};
    --inverseColor: ${(props) => props.theme.inverseColor};
    --background: ${(props) => props.theme.backgroundColor};
    --inverseBgColor: ${(props) => props.theme.inverseBgColor};
    --primary: ${(props) => props.theme.primary};
    --accent: ${(props) => props.theme.accent};
    --forumItem: ${(props) => props.theme.forumItem};
  }
  
  * {padding: 0;
  /* margin: 0; */
  box-sizing: border-box;
  overflow-x: hidden;

  margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
}

  body {
    /* font-family: Arial, Helvetica, sans-serif; */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: .625rem;
    color: var(--color);
    /* background-color: var(--background); */
    background-image: url(${SSBG_1});
    background-repeat: no-repeat;
    background-size: cover;
  }

  ul {
    list-style-type:  none;
  }

  a {
    text-decoration: none;
  }
  `;

const lightTheme = {
  textColor: "var(--black)",
  inverseColor: "var(--white)",
  navColor: "var(--black)",
  backgroundColor: "var(--white)",
  inverseBgColor: "var(--black)",
  backgroundPhoto: "var(--bgUrl)",
  primary: "var(--dark-turquoise)",
  accent: "var(--logo-color)",
  forumItem: "var(--white)",
};
const darkTheme = {
  textColor: "var(--white)",
  inverseColor: "var(--black)",
  navColor: "var(--white)",
  backgroundColor: "var(--black)",
  inverseBgColor: "var(--grey)",
  backgroundPhoto: "var(--bgUrl)",
  primary: "var(--turquoise)",
  accent: "var(--logo-color)",
  forumItem: "var(--grey)",
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [selectedClassifiedsCategory, setSelectedClassifiedsCategory] =
    useState(null);
  const navigate = useNavigate();

  // keep isLoggedIn status updated on refresh
  // const currentUserID = localStorage.getItem("userID");
  // if (currentUserID) setIsLoggedIn(true);

  // useEffect(() => {
  //   const currentUserID = localStorage.getItem("userID");

  //   if (currentUserID) {
  //     setIsLoggedIn(true);
  //     fetch(`/users/${currentUserID}`)
  //       .then((r) => r.json())
  //       .then((data) => setUser(data));
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // }, [isLoggedIn]);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          console.log("staying signed in: ", user);
          setUser(user);

          setIsLoggedIn(true);
        });
      }
    });
  }, [isLoggedIn]);
  console.log("user: ", user);
  console.log("avatar: ", avatar);
  console.log("isLoggedIn: ", isLoggedIn);

  const toggleLogIn = () => {
    if (user) {
      setUser(null);
      setIsLoggedIn(false);
      // localStorage.clear();
      navigate("/");
    } else setIsLoggedIn(true);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((status) => !status);
  };

  const onAvatarChange = ({ avatar }) => {
    setUser({ ...user, avatar: avatar });
  };

  const onUpdateUser = (user) => {
    setUser(user);
  };

  // passing up selected category for potential use in NewForSaleForm
  const onSelectedClassifiedsCategory = (categoryID) => {
    setSelectedClassifiedsCategory(categoryID);
  };

  const onSignIn = (data) => {
    // localStorage.setItem("userID", data.user.id);
    // setUser(data.user);
    console.log("onSignIn. User? : ", user);
    setAvatar(data.avatar);
    toggleLogIn();
    setUser(data);
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
        user={user}
      />
      <div className="whole">
        <div className="sides left">
          {user ? <UserMenu user={user} avatar={avatar} /> : <div></div>}
        </div>
        {/* <div className="leftMiddleSpace"></div> */}
        <div className="middle">
          <Routes>
            <Route
              exact
              path="/"
              element={
                user ? (
                  <Home
                    onAvatarChange={onAvatarChange}
                    user={user}
                    onUpdateUser={onUpdateUser}
                  />
                ) : (
                  <Login replace to={"/login"} onSignIn={onSignIn} />
                )
              }
            />

            <Route path="/forums" element={<ForumsHome user={user} />} />

            <Route
              path="/classifieds"
              element={
                <ClassifiedsHome
                  onSelectedClassifiedsCategory={onSelectedClassifiedsCategory}
                />
              }
            />
            <Route
              path="/new_topic/:subForumID"
              element={<NewTopicForm user={user} />}
            />
            <Route
              path="/forum_messages/:subForumTopicID"
              element={<ForumMessagesContainer user={user} />}
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
