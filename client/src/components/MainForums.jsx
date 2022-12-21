import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ListUnit from "./ListUnit";
import { MainForumStyled } from "./shared";

function MainForums() {
  const navigate = useNavigate();
  const [allMainForums, setAllMainForums] = useState([]);

  useEffect(() => {
    fetch("/main_forums")
      .then((r) => r.json())
      .then(setAllMainForums);
  }, []);
  console.log("allMainForums: ", allMainForums);

  const onMainForumSelect = (e, mainID) => {
    // To SubForums
    navigate(`/forums/${mainID}`);
  };

  // const fullList = allMainForums?.map((forum) => (
  //   <ListUnit
  //     key={forum.id}
  //     forum={forum}
  //     onMainForumSelect={onMainForumSelect}
  //   />
  // ));
  const bgList = allMainForums
    .filter((item) => item.category === "[BG]")
    .map((forum) => (
      <ListUnit
        key={forum.id}
        forum={forum}
        onMainForumSelect={onMainForumSelect}
      />
    ));
  const dbList = allMainForums
    .filter((item) => item.category === "[DB]")
    .map((forum) => (
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
    <MainForumStyled>
      {/* <div className="forum-list-container"> */}
      <h1>Forums</h1>
      {/* <ul>{fullList ? fullList : null}</ul> */}
      <div className="categoryContainer">
        <h2>Double Bass Forums</h2>
      </div>
      <ul>{dbList ? dbList : null}</ul>
      <div className="categoryContainer">
        <h2>Bass Guitar Forums</h2>
      </div>
      <ul>{bgList ? bgList : null}</ul>
    </MainForumStyled>
  );
}

export default MainForums;
