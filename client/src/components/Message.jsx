import React from "react";
import { MessageStyled } from "./shared";

function Message({ message }) {
  // Pass down the type of messages that it's downstream of in the instance: Forum, Classifieds, Dm
  console.log("message: ", message);
  return (
    <div>
      <MessageStyled>{`${message.content} - ${message.user.user_name}`}</MessageStyled>
    </div>
  );
}

export default Message;
