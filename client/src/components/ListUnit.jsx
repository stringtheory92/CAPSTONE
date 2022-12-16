import React from "react";
import { useNavigate } from "react-router-dom";
import { MainForumItem, SubForumTopicItem } from "./shared";
import PinButtonStyled from "./shared/PinButtonStyled";
import { DateTime } from "luxon";

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
  const date = DateTime.fromISO(`${forum.last_message_date}`).toFormat(
    `LLL dd, yyyy `
  );
  const time = DateTime.fromISO(`${forum.last_message_date}`).toFormat(
    `HH${":"}mm`
  );
  // const date = DateTime.fromISO(`${updated_at}`).toFormat(`dd LLL yyyy `);
  // const time = DateTime.fromISO(`${updated_at}`).toFormat(`hh${":"}mm`);

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
        <SubForumTopicItem onClick={(e) => onSubForumSelect(e, id)}>
          <div className="topBar">
            <div>
              <h2>{forum.category}</h2>
              <h2>{heading}</h2>
            </div>
            {/* <PinButtonStyled
              onClick={(e) => {
                e.stopPropagation();
                handlePinTopic(e);
              }}
            ></PinButtonStyled> */}
          </div>
          <div className="bodySection">
            <h3>
              {/* Latest message:
              {forum.last_message_date
                ? ` ${date} at ${time}`
                : " No Messages Yet!"} */}
              {/* {DateTime.fromISO(`${updated_at}`).toFormat(
                `HH${":"}mm dd LLL yyyy `
              )} */}
            </h3>
            <h3>Topics: {forum.forum_discussion_topics.length}</h3>
          </div>
        </SubForumTopicItem>
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
          <div className="bodySection">
            <h3>
              Latest message:
              {forum.last_message_date
                ? ` ${date} at ${time}`
                : " No Messages Yet!"}
              {/* {DateTime.fromISO(`${updated_at}`).toFormat(
                `HH${":"}mm dd LLL yyyy `
              )} */}
            </h3>
            <h3>Total messages: {forum.total_messages}</h3>
          </div>
        </SubForumTopicItem>
      ) : null}
    </>
  );
}

export default ListUnit;
