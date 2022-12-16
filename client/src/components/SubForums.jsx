import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ListUnit from "./ListUnit";

function SubForums() {
  const { main_forum_id } = useParams();
  const navigate = useNavigate();
  const [allSubForums, setAllSubForums] = useState([]);

  useEffect(() => {
    fetch(`/main_forums/${main_forum_id}`)
      .then((r) => r.json())
      .then((data) => {
        setAllSubForums(data.sub_forums);
      });
  }, []);
  console.log("allSubForums: ", allSubForums);

  const onSubForumSelect = (e, subID) => {
    // To SubForumTopics
    navigate(`/forums/${main_forum_id}/${subID}`);
  };

  const list = allSubForums?.map((forum) => (
    <ListUnit
      key={forum.id}
      forum={forum}
      onSubForumSelect={onSubForumSelect}
    />
  ));

  return (
    <div>
      <h1>SubForums</h1>
      {list ? list : null}
    </div>
  );
}

export default SubForums;
