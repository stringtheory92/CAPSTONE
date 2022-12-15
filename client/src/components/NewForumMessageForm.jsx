import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NewForumMessageFormStyled } from "./shared";

function NewForumMessageForm({
  subForumTopicID,
  toggleIsCreatingNewMessage,
  user,
}) {
  // const [user, setUser] = useState({})
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    content: "",
    media: "",
    forum_discussion_topic_id: subForumTopicID,
    user_id: user.id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const configObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    fetch("/forum_topic_messages", configObj).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          toggleIsCreatingNewMessage();
          console.log("ok: ", data);
        });
      } else {
        r.json().then((data) => {
          console.log("not ok: ", data);
          setErrors(data);
        });
      }
    });
  };
  return (
    <NewForumMessageFormStyled action="" onSubmit={handleSubmit}>
      <label htmlFor="content">Compose message</label>
      <textarea
        name="content"
        id="content"
        cols="30"
        rows="10"
        value={formData.content}
        onChange={handleChange}
      ></textarea>
      {/* <label htmlFor="media">Media</label>
      <input
        type="text"
        name="media"
        id="media"
        value={formData.media}
        onChange={handleChange}
      /> */}
      <button type="submit" style={{ border: "1px solid black" }}>
        Post
      </button>
    </NewForumMessageFormStyled>
  );
}

export default NewForumMessageForm;
