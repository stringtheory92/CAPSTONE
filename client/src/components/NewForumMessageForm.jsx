import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NewForumMessageFormStyled } from "./shared";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function NewForumMessageForm({
  subForumTopicID,
  toggleIsCreatingNewMessage,
  user,
}) {
  const navigate = useNavigate();
  const { sub_forum_topic_id, category_id, item_id } = useParams();
  const [errors, setErrors] = useState([]);
  const [forumFormData, setForumFormData] = useState({
    content: "",
    media: "",
    forum_discussion_topic_id: sub_forum_topic_id,
    user_id: sessionStorage.getItem("user_id"),
  });
  const [classifiedFormData, setClassifiedFormData] = useState({
    content: "",
    media: "",
    classified_for_sale_id: item_id,
    user_id: sessionStorage.getItem("user_id"),
  });
  const [value, setValue] = useState("");

  useEffect(() => {
    sub_forum_topic_id
      ? setForumFormData({ ...forumFormData, content: value })
      : setClassifiedFormData({ ...classifiedFormData, content: value });
  }, [value]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setFormData({ ...formData, [name]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = sub_forum_topic_id
      ? "/forum_topic_messages"
      : "/for_sale_messages";

    const configObj = sub_forum_topic_id
      ? {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(forumFormData),
        }
      : {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(classifiedFormData),
        };
    fetch(url, configObj).then((r) => {
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
