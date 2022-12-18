import React, { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import Message from "./Message";
import NewForumMessageForm from "./NewForumMessageForm";
import { MessageContainerStyled } from "./shared";

function ForumMessagesContainer({ user }) {
  const { main_forum_id, sub_forum_id, sub_forum_topic_id } = useParams();
  const navigate = useNavigate();
  const [allMessages, setAllMessages] = useState([]);
  const [topicHeading, setTopicHeading] = useState(null);
  const [isCreatingNewMessage, setIsCreatingNewMessage] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch(`/forum_topic_messages/common_topic/${sub_forum_topic_id}`).then(
      (r) => {
        if (r.ok) {
          r.json().then((data) => {
            console.log("ok: ", data);
            setAllMessages(data);
          });
        } else {
          r.json().then(setErrors);
        }
      }
    );
  }, [sub_forum_topic_id, isCreatingNewMessage]);

  useEffect(() => {
    fetch(`/forum_discussion_topics/${sub_forum_topic_id}`).then((r) => {
      if (r.ok) {
        r.json().then((topic) => {
          console.log("topic: ", topic);
          setTopicHeading(topic.heading);
        });
      } else r.json().then(console.log);
    });
  }, []);

  const toggleIsCreatingNewMessage = (e) => {
    setIsCreatingNewMessage((status) => !status);
  };

  let displayedMessages = allMessages.map((message) => (
    <Message key={message.id} message={message} />
  ));
  //===========================================================

  //===========================================================
  return (
    <MessageContainerStyled>
      {topicHeading ? <h2 className="heading">{topicHeading}</h2> : null}
      {displayedMessages}
      {/* <button onClick={toggleIsCreatingNewMessage}>Compose message</button> */}
      {isCreatingNewMessage ? null : (
        <button onClick={toggleIsCreatingNewMessage} style={{ color: "white" }}>
          Compose message
        </button>
      )}
      {isCreatingNewMessage ? (
        <NewForumMessageForm
          user={user}
          subForumTopicID={sub_forum_topic_id}
          // toggle status so new message button and form don't appear at same time
          toggleIsCreatingNewMessage={toggleIsCreatingNewMessage}
        />
      ) : null}
      {/* <NavLink to={`/new_forum_message/${subForumTopicID}`}>
        Compose message
      </NavLink> */}
    </MessageContainerStyled>
  );
}

export default ForumMessagesContainer;
