import React from "react";
import { MessageStyled } from "./shared";
import parse from "html-react-parser";
import { DateTime } from "luxon";

function Message({ message }) {
  // Pass down the type of messages that it's downstream of in the instance: Forum, Classifieds, Dm
  console.log("message: ", message);

  const date = DateTime.fromISO(`${message.created_at}`).toFormat(
    `LLL dd, yyyy `
  );
  const time = DateTime.fromISO(`${message.created_at}`).toFormat(`HH${":"}mm`);

  return (
    <div>
      <MessageStyled className="messageWrapper">
        <div className="topBar">
          {date} at {time}
        </div>
        <div className="mainBody">
          <div className="authorInfo">
            <img src={message.user.avatar} alt="" />
            <div className="details">
              <h2>*{message.user.user_name}*</h2>
            </div>
          </div>
          <hr className="line" />
          <div className="messageContent">{parse(message.content)}</div>
        </div>
      </MessageStyled>
    </div>
  );
}

export default Message;
