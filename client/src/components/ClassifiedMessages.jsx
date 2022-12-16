import React, { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import Message from "./Message";
import NewForumMessageForm from "./NewForumMessageForm";

function ClassifiedMessages({ user }) {
  const { category_id, item_id } = useParams();
  const navigate = useNavigate();
  const [allMessages, setAllMessages] = useState();
  const [isCreatingNewMessage, setIsCreatingNewMessage] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch(`/classified_for_sales/${item_id}`)
      .then((r) => r.json())
      .then((item) => {
        console.log("messages: ", item.for_sale_messages);
        setAllMessages(item.for_sale_messages);
      });
  }, [isCreatingNewMessage]);

  const toggleIsCreatingNewMessage = (e) => {
    setIsCreatingNewMessage((status) => !status);
  };

  let displayedMessages = allMessages?.map((message) => (
    <Message key={message.id} message={message} />
  ));

  return (
    <div>
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
          category_id={category_id}
          item_id={item_id}
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

export default ClassifiedMessages;
