import React, { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import ListUnit from "./ListUnit";
import { SubmitButtonStyled, Button, ComposeButtonStyled } from "./shared";
import create from "../resources/create.png";

function SubForumTopics({ user }) {
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
    fontSize: "2rem",
    // border: "1px solid white",
    padding: "1rem",
    // marginTop: "1rem",
    color: "var(--textColor)",
    textAlign: "center",
  };
  const mainContainerStyles = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div>
      <h1 style={headerStyles}>SubForum Topics</h1>
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
