import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainForums from "./MainForums";
import SubForums from "./SubForums";
import SubForumTopics from "./SubForumTopics";

function ForumsHome({ user }) {
  const navigate = useNavigate();
  const [mainForumID, setMainForumID] = useState(null);
  const [subForumID, setSubForumID] = useState(null);
  // Must be at top to give displayedComponent access to methods
  const onMainForumSelect = (e, mainID) => {
    setMainForumID(mainID);
  };
  const onSubForumSelect = (e, subID) => {
    setSubForumID(subID);
  };
  const onSubForumTopicSelect = (e, subForumTopicID) => {
    navigate(`/forum_messages/${subForumTopicID}`);
  };

  const componentArray = [
    <MainForums onMainForumSelect={onMainForumSelect} />,
    <SubForums mainForumID={mainForumID} onSubForumSelect={onSubForumSelect} />,
    <SubForumTopics
      user={user}
      subForumID={subForumID}
      onSubForumTopicSelect={onSubForumTopicSelect}
    />,
  ];
  const componentIndex = () => {
    // If subForum was selected, display subForumTopics
    if (subForumID) return 2;
    // If mainForum was selected, display subForum
    if (mainForumID) return 1;
    // Else display mainForum
    return 0;
  };
  // Don't need state to keep track of displayed component!
  // const [displayedComponent, setDisplayedComponent] = useState(
  //   componentArray[componentIndex()]
  // );

  return (
    <div>
      {componentArray[componentIndex()]}
      {/* <MainForums onMainForumSelect={onMainForumSelect} />
      <SubForums mainForumID={mainForumID} />
      <SubForumTopics subForumID={subForumID} /> */}
    </div>
  );
}

export default ForumsHome;
