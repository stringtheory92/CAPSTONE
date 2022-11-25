import React, { useState, useEffect } from "react";
import ListUnit from "./ListUnit";

function MainForums() {
  const [allMainForums, setAllMainForums] = useState([]);

  useEffect(() => {
    fetch("/main_forums")
      .then((r) => r.json())
      .then(setAllMainForums);
  }, []);
  console.log("allMainForums: ", allMainForums);

  const list = allMainForums?.map((forum) => (
    <ListUnit key={forum.id} forum={forum} />
  ));

  return (
    <div>
      <h1>MainForums</h1>
      {list ? list : null}
    </div>
  );
}

export default MainForums;
