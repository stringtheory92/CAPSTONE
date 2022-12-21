import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomePinnedTopic from "./HomePinnedTopic";
import { PinItem, FileInputStyled } from "./shared";
import Ticker from "react-ticker";
// import TickerComponent from "./TickerComponent";
// import TickerEvents from "./TickerEvents";
// import TickerEvent from "./TickerEvent";
import {
  EditUserFormStyled,
  HomeStyled,
  UpdateProfileButtonStyled,
} from "./shared";
import DefaultAvatar from "../bg/default-avatar.png";

function Home({
  onAvatarChange,
  onUpdateUser,
  user,
  positionError,
  ticketMasterEvents,
  userPinState,
}) {
  const navigate = useNavigate();
  const [updatedUser, setUpdatedUser] = useState(user);
  const [isEditingUser, setIsEditingUser] = useState(false);
  const [newAvatar, setNewAvatar] = useState("");
  const [formData, setFormData] = useState({
    user_name: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState([]);

  const toggleIsEditingUser = () => {
    setIsEditingUser((status) => !status);
  };

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((userObj) => {
          setUpdatedUser(userObj);
        });
      }
    });
  }, [userPinState]);

  const handleAvatarChange = (e) => {
    e.preventDefault();
    // console.log("newAvatar: ", newAvatar);
    const formData = new FormData();
    formData.append("avatar", newAvatar);

    const configObj = {
      method: "PATCH",
      body: formData,
    };
    console.log("DefaultAvatar: ", DefaultAvatar);
    fetch(`/users/${user.id}`, configObj).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log("data: ", data);
          onAvatarChange(data);
          toggleIsEditingUser();
        });
      } else {
        r.json().then((data) => setErrors(data));
      }
    });
    // Console logging formData displays an empty object, but it's in fact not empty
    // console.log("formData: ", formData);
  };

  const handleNewNamePasswordSubmit = (e) => {
    e.preventDefault();

    const configObj = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch(`users/${user.id}`, configObj).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log("data: ", data);
          onUpdateUser(data);
          toggleIsEditingUser();
        });
      } else {
        r.json().then((data) => setErrors(data));
      }
    });
  };

  const handlePinnedTopicClick = (
    e,
    sub_forum_topic_id,
    sub_forum_id,
    main_forum_id
  ) => {
    console.log("e: ", e);
    navigate(`/forums/${main_forum_id}/${sub_forum_id}/${sub_forum_topic_id}`);
  };
  const userPins = updatedUser.forum_discussion_topics?.map((topic) => {
    console.log("topic: ", topic);
    return (
      <HomePinnedTopic
        key={topic.id}
        topic={topic}
        className="item"
        handlePinnedTopicClick={handlePinnedTopicClick}
      ></HomePinnedTopic>
    );
  });

  const handleNamePasswordChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const mapped = ticketMasterEvents?.map((event) => {
  //   const { name, classifications, dates, images, priceRanges, sales } = event;
  //   // const genre = classifications[0].genre.name;
  //   const dateAndTime = [dates.start.localDate, dates.start.localTime];
  //   // const priceRange = [priceRanges[0].min, priceRanges[0].max];
  //   const onSaleThrough = sales.endDateTime;
  //   // console.log(name);

  //   return <TickerEvent event={event} />;
  // });
  // console.log("mapped", mapped);

  return (
    <div>
      <HomeStyled>
        <div className="headerBox">HOME</div>
        <div className="subHeaderBox">
          <div className="leftSide">
            <div className="imageBox">
              {user.avatar ? (
                <img src={user.avatar} alt="" />
              ) : (
                <button
                  onClick={toggleIsEditingUser}
                  className="updateProfileImage"
                >
                  Update Profile/Add Image
                </button>
              )}
            </div>
            <div className="nameBox">{user.user_name}</div>
            {user.avatar ? (
              <button onClick={toggleIsEditingUser} className="updateProfile">
                Update Profile
              </button>
            ) : null}
          </div>
          <div className="rightSide">
            {isEditingUser ? (
              <>
                <EditUserFormStyled
                  action=""
                  onSubmit={handleNewNamePasswordSubmit}
                >
                  <label htmlFor="user_name">New name:</label>
                  <input
                    className="textInput"
                    type="text"
                    name="user_name"
                    id=""
                    value={formData.user_name}
                    onChange={handleNamePasswordChange}
                  />
                  <label htmlFor="password">New password:</label>
                  <input
                    className="textInput"
                    type="text"
                    name="password"
                    id=""
                    value={formData.password}
                    onChange={handleNamePasswordChange}
                  />
                  <label htmlFor="password_confirmation">
                    Confirm password:
                  </label>
                  <input
                    className="textInput"
                    type="text"
                    name="password_confirmation"
                    id=""
                    value={formData.password_confirmation}
                    onChange={handleNamePasswordChange}
                  />
                  <button type="submit">Change name and password</button>
                </EditUserFormStyled>
                <EditUserFormStyled
                  className="uploadForm"
                  action=""
                  onSubmit={handleAvatarChange}
                >
                  {/* <input type="file" accept="image/*" onChange={handleChange} /> */}

                  <FileInputStyled
                    className="avatarUploadInput"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setNewAvatar(e.target.files[0])}
                  />
                  <button type="submit">Update Image</button>
                </EditUserFormStyled>
              </>
            ) : (
              <div>
                <div className="pinnedTopics">Your Pinned Topics</div>
                <div className="pinsContainer">
                  <PinItem>{userPins}</PinItem>
                  {/* double bass by Valter Bispo from{" "}
                <a
                  href="https://thenounproject.com/browse/icons/term/double-bass/"
                  target="_blank"
                  title="double bass Icons"
                >
                  Noun Project
                </a>
                guitar amplifier by Arthur Shlain from{" "}
                <a
                  href="https://thenounproject.com/browse/icons/term/guitar-amplifier/"
                  target="_blank"
                  title="guitar amplifier Icons"
                >
                  Noun Project
                </a>
                guitar strings by Rodolfo Alvarez from{" "}
                <a
                  href="https://thenounproject.com/browse/icons/term/guitar-strings/"
                  target="_blank"
                  title="guitar strings Icons"
                >
                  Noun Project
                </a> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </HomeStyled>

      <p>{positionError}</p>
    </div>
  );
}

export default Home;
