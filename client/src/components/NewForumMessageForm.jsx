import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NewForumMessageFormStyled } from "./shared";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function NewForumMessageForm({
  subForumTopicID,
  toggleIsCreatingNewMessage,
  user,
}) {
  const { sub_forum_topic_id } = useParams();
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    content: "",
    media: "",
    forum_discussion_topic_id: sub_forum_topic_id,
    user_id: sessionStorage.getItem("user_id"),
  });
  const [value, setValue] = useState("");

  useEffect(() => {
    setFormData({ ...formData, content: value });
  }, [value]);

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
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={NewForumMessageForm.modules}
        formats={NewForumMessageForm.formats}
      />
      {/* <textarea
        name="content"
        id="content"
        cols="30"
        rows="10"
        value={formData.content}
        onChange={handleChange}
      ></textarea> */}
      <button type="submit" style={{ border: "1px solid black" }}>
        Post
      </button>
    </NewForumMessageFormStyled>
  );
}

NewForumMessageForm.modules = {
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
NewForumMessageForm.formats = [
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

export default NewForumMessageForm;
