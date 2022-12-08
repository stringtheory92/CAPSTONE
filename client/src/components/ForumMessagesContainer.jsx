import React, { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import Message from "./Message";
import NewForumMessageForm from "./NewForumMessageForm";

function ForumMessagesContainer({ user }) {
  const navigate = useNavigate();
  const [allMessages, setAllMessages] = useState([]);
  const [isCreatingNewMessage, setIsCreatingNewMessage] = useState(false);
  const [errors, setErrors] = useState([]);
  const { subForumTopicID } = useParams();

  useEffect(() => {
    fetch(`/forum_topic_messages/common_topic/${subForumTopicID}`).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log("ok: ", data);
          setAllMessages(data);
        });
      } else {
        r.json().then(setErrors);
      }
    });
  }, [subForumTopicID, isCreatingNewMessage]);

  const toggleIsCreatingNewMessage = (e) => {
    setIsCreatingNewMessage((status) => !status);
  };

  let displayedMessages = allMessages.map((message) => (
    <Message key={message.id} message={message} />
  ));
  //===========================================================

  //===========================================================
  return (
    <div>
      {displayedMessages}
      {/* <button onClick={toggleIsCreatingNewMessage}>Compose message</button> */}
      {isCreatingNewMessage ? null : (
        <button onClick={toggleIsCreatingNewMessage}>Compose message</button>
      )}
      {isCreatingNewMessage ? (
        <NewForumMessageForm
          user={user}
          subForumTopicID={subForumTopicID}
          // toggle status so new message button and form don't appear at same time
          toggleIsCreatingNewMessage={toggleIsCreatingNewMessage}
        />
      ) : null}
      {/* <NavLink to={`/new_forum_message/${subForumTopicID}`}>
        Compose message
      </NavLink> */}
    </div>
  );
}

export default ForumMessagesContainer;
