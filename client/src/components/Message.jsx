import React from "react";
import { MessageStyled } from "./shared";
import parse from "html-react-parser";

function Message({ message }) {
  // Pass down the type of messages that it's downstream of in the instance: Forum, Classifieds, Dm
  console.log("message: ", message);

  return (
    <div>
      <MessageStyled className="messageWrapper">
        <h2>{message.author.user_name}</h2>
        {parse(message.content)}
      </MessageStyled>
      {/* <MessageStyled>{`${message.content} - ${message.user.user_name}`}</MessageStyled> */}
    </div>
  );
}

export default Message;
