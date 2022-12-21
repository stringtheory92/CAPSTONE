import React, { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import Message from "./Message";
import NewForumMessageForm from "./NewForumMessageForm";
import whiteLogo from "../icons/SubSonic-logo-white-A-alt.png";
import { ClassifiedMessagesStyled, SubmitButtonStyled } from "./shared";

function ClassifiedMessages({ user }) {
  const { category_id, item_id } = useParams();
  const navigate = useNavigate();
  const [allMessages, setAllMessages] = useState(null);
  const [item, setItem] = useState(null);
  const [itemPic, setItemPic] = useState(null);
  const [isCreatingNewMessage, setIsCreatingNewMessage] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch(`/classified_for_sales/${item_id}`)
      .then((r) => r.json())
      .then((item) => {
        console.log("item: ", item);
        setItem(item.bass);
        setAllMessages(item.for_sale_messages);
        if (item.pic) setItemPic(item.pic);
      });
  }, [isCreatingNewMessage]);
  console.log("allMessages: ", allMessages);
  const toggleIsCreatingNewMessage = (e) => {
    setIsCreatingNewMessage((status) => !status);
  };

  let displayedMessages = allMessages?.map((message) => (
    <Message key={message.id} message={message} />
  ));

  return (
    <ClassifiedMessagesStyled>
      <div className="headingContainer">
        {itemPic ? <img src={itemPic} /> : <img src={whiteLogo} />}
        {item ? <h2>{item}</h2> : null}
      </div>
      {displayedMessages}
      {/* <button onClick={toggleIsCreatingNewMessage}>Compose message</button> */}
      {isCreatingNewMessage ? null : (
        <SubmitButtonStyled
          onClick={toggleIsCreatingNewMessage}
          className="CreateBtn"
        >
          Compose message
        </SubmitButtonStyled>
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
    </ClassifiedMessagesStyled>
  );
}

export default ClassifiedMessages;
