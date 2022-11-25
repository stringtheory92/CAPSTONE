import React, { useEffect, useState } from "react";
import MainForums from "./MainForums";
import SubForums from "./SubForums";
import SubForumTopics from "./SubForumTopics";

function ForumsHome() {
  const [allMainForums, setAllMainForums] = useState([]);

  useEffect(() => {
    fetch("/main_forums")
      .then((r) => r.json())
      .then(setAllMainForums);
  }, []);
  console.log("allMainForums: ", allMainForums);

  return <div>ForumsHome</div>;
}

export default ForumsHome;
