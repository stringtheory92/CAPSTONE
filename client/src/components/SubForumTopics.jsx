import React, { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import ListUnit from "./ListUnit";

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

  // const list = allSubForumTopics
  //   ?.filter((forum) => forum.id === subForumID)
  //   .map((forum) => (
  //     <ListUnit
  //       key={forum.id}
  //       forum={forum}
  //       onSubForumTopicSelect={onSubForumTopicSelect}
  //     />
  //   ));

  return (
    <div>
      <h1>SubForum Topics</h1>
      {list ? list : null}
      {/* Pass down the current subForumID and assign it to the new topic */}
      <NavLink to={`/forums/${main_forum_id}/${sub_forum_id}/new_topic`}>
        Create a topic
      </NavLink>
    </div>
  );
}

export default SubForumTopics;
