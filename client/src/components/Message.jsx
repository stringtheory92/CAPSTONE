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
        <div className="authorInfo">
          {/* <img src={message.author.avatar} alt="" /> */}
          <img src={message.user.avatar} alt="" />
          <div className="details">
            <p>{date}</p>
            <p>At: {time}</p>
            <h2>By: {message.user.user_name}</h2>
            {/* <h2>By: {message.author.user_name}</h2> */}
          </div>
        </div>
        <hr className="line" />

        {parse(message.content)}
      </MessageStyled>
      {/* <MessageStyled>{`${message.content} - ${message.user.user_name}`}</MessageStyled> */}
    </div>
  );
}

export default Message;
