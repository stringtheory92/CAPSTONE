import React, { useState } from "react";
import { useParams } from "react-router-dom";

function NewTopicForm({}) {
  let { subForumID } = useParams();
  const userID = localStorage.getItem("userID");
  const [topicFormData, setTopicFormData] = useState({
    heading: "",
    sub_forum_id: Number(subForumID),
    user_id: userID,
  });
  const [messageData, setMessageData] = useState({
    content: "",
    media: "",
    user_id: userID,
    forum_discussion_topic_id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "heading")
      setTopicFormData({ ...topicFormData, heading: value });
    else setMessageData({ ...messageData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const topicConfigObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(topicFormData),
    };
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="heading">Title</label>
        <input
          type="text"
          name="heading"
          id="heading"
          value={topicFormData.heading}
          onChange={handleChange}
        />
        <label htmlFor="content">question</label>
        <textarea
          name="content"
          id="content"
          cols="30"
          rows="10"
          value={messageData.content}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="media">media</label>
        <input
          type="text"
          name="media"
          id="media"
          value={messageData.media}
          onChange={handleChange}
        />
        <button type="submit">Create Topic</button>
      </form>
    </div>
  );
}

export default NewTopicForm;
