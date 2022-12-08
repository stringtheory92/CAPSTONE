import React from "react";
import { useNavigate } from "react-router-dom";
import { MainForumItem } from "./shared";

// Intended for use with: ForumsHome(Main Forums), SubForums, SubForumTopics, ClassifiedCategories
function ListUnit({
  forum,
  user,
  onMainForumSelect,
  onSubForumSelect,
  onSubForumTopicSelect,
}) {
  // Might display timestamps to user
  const { id, category, heading, created_at, updated_at } = forum;
  const navigate = useNavigate();

  const handlePinTopic = (e) => {
    // console.log("e.currentTarget: ", e.currentTarget);
    // console.log("e.target: ", e.target);
    fetch(`/pins`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        forum_discussion_topic_id: id,
      }),
    })
      .then((r) => r.json())
      .then((pinObj) => console.log("ok: ", pinObj));
  };

  return (
    <>
      {onMainForumSelect ? (
        <MainForumItem onClick={(e) => onMainForumSelect(e, id)}>
          <h2>{category}</h2>
          <h2>{heading}</h2>
        </MainForumItem>
      ) : null}
      {onSubForumSelect ? (
        <MainForumItem onClick={(e) => onSubForumSelect(e, id)}>
          <h2>{category}</h2>
          <h2>{heading}</h2>
        </MainForumItem>
      ) : null}
      {onSubForumTopicSelect ? (
        <MainForumItem
          onClick={(e) => {
            onSubForumTopicSelect(e, id);
          }}
        >
          <h2>{category}</h2>
          <h2>{heading}</h2>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePinTopic(e);
            }}
          >
            pin topic
          </button>
        </MainForumItem>
      ) : null}
    </>
    // <MainForumItem >
    //   <h2>{category}</h2>
    //   <h2>{heading}</h2>
    //   {onMainForumSelect ? (
    //     <button onClick={(e) => onMainForumSelect(e, id)}>Select</button>
    //   ) : null}
    //   {onSubForumSelect ? (
    //     <button onClick={(e) => onSubForumSelect(e, id)}>Select</button>
    //   ) : null}
    //   {onSubForumTopicSelect ? (
    //     <button onClick={(e) => onSubForumTopicSelect(e, id)}>Select</button>
    //   ) : null}
    // </MainForumItem>
  );
}

export default ListUnit;
