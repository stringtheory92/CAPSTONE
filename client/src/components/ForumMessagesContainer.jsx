import React from "react";
import { useParams } from "react-router-dom";

function ForumMessagesContainer() {
  const { subForumID } = useParams();

  return <div>ForumMessagesContainer</div>;
}

export default ForumMessagesContainer;
