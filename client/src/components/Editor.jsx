import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Editor({ onEditorChange }) {
  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    onEditorChange(e.target.value);
  };

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}

export default Editor;
