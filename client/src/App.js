// amazing bg photos:
// https://www.facebook.com/photo/?fbid=2676395625781051&set=a.355647687855868
// animated backgrounds:
// https://wweb.dev/resources/animated-css-background-generator/

//Active Storage Notes:
// mini_magick installed (image resizing)
import React, { useEffect, useState } from "react";
import Ticker from "react-ticker";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
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
import RightSideContainer from "./components/RightSideContainer";
// Possible main backgrounds to use:
import SSBG_1 from "./bg/SSBG_1.jpg";
import Spotlight from "./bg/spotlight_bg.jpg";

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
    --dark-grey: rgb(89, 95, 102);
    --dark-grey-semi-trans: rgba(89, 95, 102, 0.5);
    --turquoise: #00efe1;
    --mid-turquoise: #14d5c9;
    --dark-turquoise: #fa6711;
    --bgUrl: SSBG_1;
    --bgUrl2: Spotlight;
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
    --forumBorder: ${(props) => props.theme.forumBorder};
  }
  
  * {padding: 0;
  /* margin: 0; */
  cursor: default;
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
    background-image: url(${Spotlight});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    position: relative;
  }

  ul {
    list-style-type:  none;
  }

  a {
    text-decoration: none;
  }
  //==============================================
  .fadeIn {
  animation: 0.5s fadeIn forwards;
}
.fadeOut {
  animation: 0.5s fadeOut forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate(-20px, 0);
  }
  to {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translate(0px, 0px);
  }
  to {
    transform: translate(-20px, 0);
    opacity: 0;
  }
}
  `;

const lightTheme = {
  textColor: "var(--background-dark-blue)",
  inverseColor: "var(--white)",
  navColor: "var(--black)",
  backgroundColor: "var(--white)",
  inverseBgColor: "var(--black)",
  backgroundPhoto: "var(--bgUrl)",
  primary: "var(--dark-turquoise)",
  accent: "var(--logo-color)",
  forumItem: "var(--white)",
  forumBorder: "var(--light-grey)",
};
const darkTheme = {
  textColor: "var(--white)",
  inverseColor: "var(--background-dark-blue)",
  navColor: "var(--white)",
  backgroundColor: "var(--black)",
  inverseBgColor: "var(--grey)",
  backgroundPhoto: "var(--bgUrl2)",
  primary: "var(--turquoise)",
  accent: "var(--logo-color)",
  forumItem: "var(--dark-grey-semi-trans)",
  forumBorder: "var(--background-dark-blue)",
};

function App() {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState(null);

  // Position data from browser (useEffect on line 199)
  const [userPosition, setUserPosition] = useState(null);
  // Error on unsuccessful attempt to get user position. Pass to home component to display
  const [positionError, setPositionError] = useState("");
  // API call based on user's location
  const [ticketMasterEvents, setTicketMasterEvents] = useState([]);
  const [selectedClassifiedsCategory, setSelectedClassifiedsCategory] =
    useState(null);

  // controls state for smooth transitions between routes
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage("fadeOut");
  }, [location, displayLocation]);
  // transitions code END

  // API Keys:
  const geoKey = process.env.REACT_APP_GMAPS_GEO_KEY;
  const ticketMasterKey = process.env.REACT_APP_CONSUMER_KEY;
  const ticketMasterSecret = process.env.REACT_APP_CONSUMER_SECRET;

  //Search for current, logged-in user on page refresh or if user navigates away and comes back
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

  // Geolocation from browser:

  useEffect(() => {
    if (user) {
      // console.log("here");
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        setPositionError("Geolocation is not supported by this browser.");
      }

      // function getLocation() {
      //   if (navigator.geolocation) {
      //     navigator.geolocation.getCurrentPosition(showPosition, showError);
      //   } else {
      //     setPositionError("Geolocation is not supported by this browser.");
      //   }
      // }

      function showError(error) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setPositionError("User denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            setPositionError("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            setPositionError("The request to get user location timed out.");
            break;
          case error.UNKNOWN_ERROR:
            setPositionError("An unknown error occurred.");
            break;
        }
      }

      function showPosition(position) {
        console.log("showPosition");
        setUserPosition(position);
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const latlon = lat + "," + lon;
        console.log("latlon: ", latlon);
        console.log("ticketMasterKey: ", ticketMasterKey);

        fetch(
          `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${ticketMasterKey}&latlong=${latlon}`
        ).then((r) => {
          if (r.ok) {
            r.json().then((data) => {
              console.log("loc ok: ", data);
              // showEvents(data);
            });
          } else {
            r.json().then((data) => console.error("error", data));
          }
        });
        // $.ajax({
        //   type: "GET",
        //   url:
        //     "https://app.ticketmaster.com/discovery/v2/events.json?apikey=pLOeuGq2JL05uEGrZG7DuGWu6sh2OnMz&latlong=" +
        //     latlon,
        //   async: true,
        //   dataType: "json",
        //   success: function (json) {
        //     console.log(json);
        //     var e = document.getElementById("events");
        //     e.innerHTML = json.page.totalElements + " events found.";
        //     showEvents(json);
        //     initMap(position, json);
        //   },
        //   error: function (xhr, status, err) {
        //     console.log(err);
        //   },
        // });
      }
    }
  }, [user]);
  console.log("userPosition: ", userPosition);

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
      <div
        className={`whole ${transitionStage}`}
        onAnimationEnd={() => {
          if (transitionStage === "fadeOut") {
            setTransitionStage("fadeIn");
            setDisplayLocation(location);
          }
        }}
      >
        <div className="sides left">
          {user ? <UserMenu user={user} avatar={avatar} /> : <div></div>}
        </div>
        {/* <div className="leftMiddleSpace"></div> */}
        <div className="middle">
          <Routes location={displayLocation}>
            <Route
              exact
              path="/"
              element={
                user ? (
                  <Home
                    onAvatarChange={onAvatarChange}
                    user={user}
                    onUpdateUser={onUpdateUser}
                    positionError={positionError}
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
        <div className="sides right">
          <RightSideContainer user={user} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
