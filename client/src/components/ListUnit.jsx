import React from "react";
import { useNavigate } from "react-router-dom";
import { MainForumItem, SubForumTopicItem } from "./shared";
import PinButtonStyled from "./shared/PinButtonStyled";

// Intended for use with: ForumsHome(Main Forums), SubForums, SubForumTopics, ClassifiedCategories
function ListUnit({
  forum,
  user,
  onMainForumSelect,
  onSubForumSelect,
  onSubForumTopicSelect,
}) {
  // Might display timestamps to user
  const { id, heading, created_at, updated_at } = forum;
  // console.log("listUnit: ", id);
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
          {/* <h2>{category}</h2> */}
          <h2>{heading}</h2>
          <p>
            serialize data for latest subforum message under RECENT ACTIVITY
          </p>
        </MainForumItem>
      ) : null}
      {onSubForumSelect ? (
        <MainForumItem onClick={(e) => onSubForumSelect(e, id)}>
          <h2>{forum.category}</h2>
          <h2>{heading}</h2>
        </MainForumItem>
      ) : null}
      {onSubForumTopicSelect ? (
        <SubForumTopicItem
          onClick={(e) => {
            console.log("here: ", id);
            onSubForumTopicSelect(e, id);
          }}
        >
          <div className="topBar">
            <div>
              <h2>{forum.category}</h2>
              <h2>{heading}</h2>
            </div>
            <PinButtonStyled
              onClick={(e) => {
                e.stopPropagation();
                handlePinTopic(e);
              }}
            ></PinButtonStyled>
          </div>
          <div className="bodySection"></div>
        </SubForumTopicItem>
      ) : null}
    </>
  );
}

export default ListUnit;
