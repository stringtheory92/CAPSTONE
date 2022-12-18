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
import MainForums from "./components/MainForums";
import SubForums from "./components/SubForums";
import SubForumTopics from "./components/SubForumTopics";
import NewTopicForm from "./components/NewTopicForm";
import ForumMessagesContainer from "./components/ForumMessagesContainer";
import NewForumMessageForm from "./components/NewForumMessageForm";
import UserMenu from "./components/UserMenu";
import NewForSaleForm from "./components/NewForSaleForm";
import RightSideContainer from "./components/RightSideContainer";
import ClassifiedCategories from "./components/ClassifiedCategories";
// Possible main backgrounds to use:
import SSBG_1 from "./bg/SSBG_1.jpg";
import Spotlight from "./bg/spotlight_bg.jpg";
import ConcertInfo from "./components/ConcertInfo";
import ClassifiedForSale from "./components/ClassifiedForSale";
import ClassifiedMessages from "./components/ClassifiedMessages";

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
    --extra-dark-grey-semi-trans: rgba(20, 21, 23, 0.5);
    --turquoise: #00efe1;
    --mid-turquoise: #14d5c9;
    --dark-turquoise: #fa6711;
    --dark-red: #9c0700;
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
    --forumItemInside: ${(props) => props.theme.forumItemInside};
    --forumBorder: ${(props) => props.theme.forumBorder};
    --hover: ${(props) => props.theme.hover};
    --active: ${(props) => props.theme.active};
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
  forumItemInside: "var(--extra-dark-grey-semi-trans)",
  forumBorder: "var(--light-grey)",
  hover: "var(--logo-color)",
  active: "var(--dark-red)",
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
  forumItemInside: "var(--extra-dark-grey-semi-trans)",
  forumBorder: "var(--background-dark-blue)",
  hover: "var(--logo-color)",
  active: "var(--dark-red)",
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
          sessionStorage.setItem("user_id", user.id);
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
      // this condition based on length doesn't work. Always false. The other condition,
      // if (navigator.geolocation) is always true (so far)
      // if (navigator.geolocation.length > 0) {
      if (navigator.geolocation) {
        console.log("nav", navigator.geolocation);
        // since this if is always true (so far), the next line will try to fire whether or not there is location data.
        // Hence, it is necessary to call showPosition in the showError component in case there is an error getting current
        // browser position.
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        setPositionError("Geolocation is not supported by this browser.");
        showPosition(user.state_code);
      }

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
        showPosition(user.state_code);
      }
      console.log("positionError: ", positionError);

      function showPosition(position) {
        console.log("showPosition", position);

        let latlon;
        let locationParam;

        // If using location based on browser data
        if (Boolean(typeof position === "object")) {
          console.log("in line 255");
          setUserPosition(position);
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          latlon = lat + "," + lon;
          locationParam = `latlong=${latlon}`;
          // fall back on using state_code from user's data
        } else locationParam = `stateCode=${user.state_code}`;
        console.log("locationParam: ", locationParam);

        // current date and date 4 months ahead for query params
        const date = new Date();
        const dateTwo = new Date();
        const dateJSON = date.toJSON().slice(0, 19) + "Z";
        const fourMonthsAhead = new Date(dateTwo.setMonth(date.getMonth() + 4));
        const fourMonthsAheadJSON = fourMonthsAhead.toJSON().slice(0, 19) + "Z";

        console.log("date: ", dateJSON);
        console.log("fourMonthsAhead: ", fourMonthsAheadJSON);
        console.log("latlon: ", latlon);
        console.log("locationParam: ", locationParam);

        fetch(
          `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${ticketMasterKey}&${locationParam}&classificationName=music&startDateTime=${dateJSON}&endDateTime=${fourMonthsAheadJSON}&size=200`
        ).then((r) => {
          if (r.ok) {
            r.json().then((data) => {
              // console.log("data: ", data);
              // Many events with multiple showings, so filter out events by unique names for the sake of variety
              const events = data._embedded.events;
              // Without instantiating eventArray with an initial event, eventArray.slice(-1)[0].name throws an error
              let eventArray = [events[0]];
              // Multiple showings are grouped together, so loop over events and compare each name to the last unique event pushed to the eventArray
              for (let event of events) {
                // console.log("eventArray: ", eventArray);
                // Some data sets do not have attractions array, but for the ones who do, attractions.name is better to use
                if (
                  eventArray.find((item) => {
                    let itemName;
                    if (item._embedded.attractions)
                      itemName = item._embedded.attractions[0].name;
                    else itemName = item.name;

                    let eventName;
                    if (event._embedded.attractions)
                      eventName = event._embedded.attractions[0].name;
                    else eventName = event.name;

                    return itemName === eventName;
                  })
                )
                  console.log("match");
                else eventArray.push(event);
              }

              // First filter attempt assumed multi-showings would be grouped together, which was not always the case
              // for (let event of events) {
              //   if (event.name !== eventArray.slice(-1)[0].name)
              //     eventArray.push(event);
              // }
              console.log("loc ok: ", eventArray);

              setTicketMasterEvents(eventArray);
              // showEvents(data);
            });
          } else {
            r.json().then((data) => console.log("error", data));
          }
        });
      }
    }
  }, [user]);
  console.log("userPosition: ", userPosition);

  const toggleLogIn = () => {
    if (user) {
      setUser(null);
      setIsLoggedIn(false);
      sessionStorage.clear();
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
    sessionStorage.setItem("user_id", data.id);
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
                    ticketMasterEvents={ticketMasterEvents}
                  />
                ) : (
                  <Login replace to={"/login"} onSignIn={onSignIn} />
                )
              }
            />

            <Route
              path="/classifieds"
              element={
                <ClassifiedCategories
                  onSelectedClassifiedsCategory={onSelectedClassifiedsCategory}
                />
              }
            />
            <Route
              path="/classifieds/:category_id"
              element={<ClassifiedForSale />}
            />
            <Route
              path="/classifieds/:category_id/new_for_sale"
              element={
                <NewForSaleForm
                  user={user}
                  avatar={avatar}
                  selectedClassifiedsCategory={selectedClassifiedsCategory}
                />
              }
            />
            <Route
              path="/classifieds/:category_id/:item_id"
              element={<ClassifiedMessages user={user} avatar={avatar} />}
            />

            <Route path="/forums" element={<MainForums user={user} />} />
            <Route
              path="/forums/:main_forum_id"
              element={<SubForums user={user} />}
            />
            <Route
              path="/forums/:main_forum_id/:sub_forum_id"
              element={<SubForumTopics user={user} />}
            />

            <Route
              path="/forums/:main_forum_id/:sub_forum_id/new_topic"
              element={<NewTopicForm user={user} />}
            />

            <Route
              path="/forums/:main_forum_id/:sub_forum_id/:sub_forum_topic_id"
              element={<ForumMessagesContainer user={user} />}
            />

            <Route path="/concert_info" element={<ConcertInfo user={user} />} />
          </Routes>
        </div>
        <div className="sides right">
          <RightSideContainer
            user={user}
            ticketMasterEvents={ticketMasterEvents}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
