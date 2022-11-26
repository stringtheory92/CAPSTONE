import React from "react";

function Message({ message }) {
  // Pass down the type of messages that it's downstream of in the instance: Forum, Classifieds, Dm
  return <div>{`${message.content} - ${message.user.user_name}`}</div>;
}

export default Message;
