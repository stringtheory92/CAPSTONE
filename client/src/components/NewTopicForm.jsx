import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  NewForumMessageFormStyled,
  NewTopicFormStyled,
  SubmitButtonStyled,
} from "./shared";
import Editor from "./Editor.jsx";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import NewForumMessageForm from "./NewForumMessageForm";

function NewTopicForm({ user }) {
  const [value, setValue] = useState("");
  let { main_forum_id, sub_forum_id } = useParams();
  const navigate = useNavigate();
  const [topicFormData, setTopicFormData] = useState({
    heading: "",
    sub_forum_id: sub_forum_id,
    creator_id: sessionStorage.getItem("user_id"),
  });
  const [messageData, setMessageData] = useState({
    content: "",
    media: "",
    user_id: sessionStorage.getItem("user_id"),
    forum_discussion_topic_id: "",
  });
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "heading")
      setTopicFormData({ ...topicFormData, heading: value });
    else setMessageData({ ...messageData, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();

    const topicConfigObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(topicFormData),
    };

    // Create topic, then set messageData.forum_discussion_topic_id, then create message
    fetch("/forum_discussion_topics", topicConfigObj).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log("ok: ", data);
          // Callback form of state setter necessary to maintain async and dependant fetches
          // the '.then(createMessage)' was not sufficient time to make sure setMessageData had completed
          // without using callback fn in the setter.

          // (createMessage needs id from this fetches new topic)
          setMessageData((oldObj) => {
            return { ...messageData, forum_discussion_topic_id: data.id };
          });
          createMessage(data.id);
        });
        //   .then(createMessage(messageConfigObj));
      } else {
        r.json().then((data) => console.log("not ok: ", data));
      }
    });
  }

  // Only fires if topic creation ok
  const createMessage = (topicID) => {
    const messageConfigObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ...messageData,
        forum_discussion_topic_id: topicID,
      }),
    };

    fetch("/forum_topic_messages", messageConfigObj).then((r) => {
      if (r.ok) {
        r.json()
          .then((data) => {
            console.log("ok: ", data);
          })
          // .then(navigate(`/forum_messages/${topicID}`));
          .then(
            navigate(`/forums/${main_forum_id}/${sub_forum_id}/${topicID}`)
          );
      } else {
        r.json().then((data) => console.log("not ok: ", data));
      }
    });
  };

  useEffect(() => {
    setMessageData({ ...messageData, content: value });
  }, [value]);

  return (
    <div>
      <NewForumMessageFormStyled action="" onSubmit={handleSubmit}>
        {/* <NewTopicFormStyled action="" onSubmit={handleSubmit}> */}
        <div className="headerDiv">
          <h1>Create a New Topic</h1>
        </div>
        <label htmlFor="heading">Topic</label>
        <input
          className="topicInput"
          type="text"
          name="heading"
          id="heading"
          value={topicFormData.heading}
          onChange={handleChange}
        />
        <label htmlFor="content">Question</label>

        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={NewTopicForm.modules}
          formats={NewTopicForm.formats}
        />

        {/* <Editor onEditorChange={onEditorChange} /> */}
        {/* <textarea
          name="content"
          id="content"
          cols="30"
          rows="10"
          value={messageData.content}
          onChange={handleChange}
        ></textarea> */}
        {/* <label htmlFor="media">media</label>
        <input
          type="text"
          name="media"
          id="media"
          value={messageData.media}
          onChange={handleChange}
        /> */}
        <SubmitButtonStyled className="submitBtn" type="submit">
          Start New Topic
        </SubmitButtonStyled>
      </NewForumMessageFormStyled>
      {/* </NewTopicFormStyled> */}
    </div>
  );
}

NewTopicForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"],
  ],
};
NewTopicForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "code-block",
];

export default NewTopicForm;
