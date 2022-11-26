import React, { useState, useEffect } from "react";
import ListUnit from "./ListUnit";

function MainForums({ onMainForumSelect }) {
  const [allMainForums, setAllMainForums] = useState([]);

  useEffect(() => {
    fetch("/main_forums")
      .then((r) => r.json())
      .then(setAllMainForums);
  }, []);
  console.log("allMainForums: ", allMainForums);

  const list = allMainForums?.map((forum) => (
    <ListUnit
      key={forum.id}
      forum={forum}
      onMainForumSelect={onMainForumSelect}
    />
  ));
  //========================================================================
  //========================================================================

  //========================================================================
  return (
    <div>
      {/* <div className="forum-list-container"> */}
      <h1>MainForums</h1>
      <ul>{list ? list : null}</ul>
    </div>
  );
}

export default MainForums;
