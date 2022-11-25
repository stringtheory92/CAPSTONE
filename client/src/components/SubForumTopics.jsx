import React, { useEffect, useState } from "react";
import ListUnit from "./ListUnit";

function SubForumTopics({ onSubForumTopicSelect, subForumID }) {
  const [allSubForumTopics, setAllSubForumTopics] = useState([]);

  useEffect(() => {
    fetch("/forum_discussion_topics")
      .then((r) => r.json())
      .then(setAllSubForumTopics);
  }, []);
  console.log("allSubForumTopics: ", allSubForumTopics);

  const list = allSubForumTopics
    ?.filter((forum) => forum.id === subForumID)
    .map((forum) => (
      <ListUnit
        key={forum.id}
        forum={forum}
        onSubForumTopicSelect={onSubForumTopicSelect}
      />
    ));

  return (
    <div>
      <h1>SubForum Topics</h1>
      {list ? list : null}
    </div>
  );
}

export default SubForumTopics;
