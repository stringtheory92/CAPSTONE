import React, { useState, useEffect } from "react";
import ListUnit from "./ListUnit";

function SubForums({ mainForumID, onSubForumSelect }) {
  const [allSubForums, setAllSubForums] = useState([]);

  useEffect(() => {
    fetch("/sub_forums")
      .then((r) => r.json())
      .then(setAllSubForums);
  }, []);
  console.log("allSubForums: ", allSubForums);

  const list = allSubForums
    ?.filter((forum) => forum.id === mainForumID)
    .map((forum) => (
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
