import React from "react";

function HomePinnedTopic({ topic, handlePinnedTopicClick }) {
  console.log("topic: ", topic);
  return (
    <div
      // class 'item' referenced in parent element in Home
      className="item"
      onClick={(e) =>
        handlePinnedTopicClick(
          e,
          topic.id,
          topic.wrapped_sub_forum.id,
          topic.wrapped_sub_forum.main_forum_id
        )
      }
    >{`${topic.wrapped_sub_forum.heading} >> \n ${topic.heading}`}</div>
  );
}

export default HomePinnedTopic;
