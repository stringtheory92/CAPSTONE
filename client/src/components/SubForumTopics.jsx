import React, { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import ListUnit from "./ListUnit";
import { SubmitButtonStyled, Button, ComposeButtonStyled } from "./shared";
import create from "../resources/create.png";

function SubForumTopics({ user, onPinningTopic }) {
  const { main_forum_id, sub_forum_id } = useParams();
  const navigate = useNavigate();
  const [allSubForumTopics, setAllSubForumTopics] = useState([]);

  useEffect(() => {
    fetch(`/sub_forums/${sub_forum_id}`)
      .then((r) => r.json())
      .then((data) => setAllSubForumTopics(data.forum_discussion_topics));
  }, []);
  console.log("allSubForumTopics: ", allSubForumTopics);

  const onSubForumTopicSelect = (e, sub_forum_topic_id) => {
    // To ForumMessagesContainer
    navigate(`/forums/${main_forum_id}/${sub_forum_id}/${sub_forum_topic_id}`);
  };

  const list = allSubForumTopics?.map((forum) => (
    <ListUnit
      key={forum.id}
      forum={forum}
      user={user}
      onPinningTopic={onPinningTopic}
      onSubForumTopicSelect={onSubForumTopicSelect}
    />
  ));

  const handleComposeNewClick = (e) => {
    navigate(`/forums/${main_forum_id}/${sub_forum_id}/new_topic`);
  };

  // const list = allSubForumTopics
  //   ?.filter((forum) => forum.id === subForumID)
  //   .map((forum) => (
  //     <ListUnit
  //       key={forum.id}
  //       forum={forum}
  //       onSubForumTopicSelect={onSubForumTopicSelect}
  //     />
  //   ));

  const headerStyles = {
    color: "white",
    fontSize: "3rem",
    fontWeight: "400",
    letterSpacing: "0.4rem",
    paddingTop: "3rem",
    paddingBottom: "2rem",
    textAlign: "center",
  };
  const mainContainerStyles = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div>
      <h1 style={headerStyles}>Topics</h1>
      <div className="mainContainer" style={mainContainerStyles}>
        <ComposeButtonStyled
          className="composeBtn"
          onClick={handleComposeNewClick}
        ></ComposeButtonStyled>
        {list ? list : null}
        {/* Pass down the current subForumID and assign it to the new topic */}
        {/* <div style={navLinkStyles}>
          <Button
            as={NavLink}
            to={`/forums/${main_forum_id}/${sub_forum_id}/new_topic`}
          >
            Create a topic
          </Button>
        </div> */}
      </div>
    </div>
  );
}

export default SubForumTopics;
