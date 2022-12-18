import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ForSaleItemStyled, SellerImageStyled } from "./shared";
import { DateTime } from "luxon";
import whiteLogo from "../icons/SubSonic-logo-white-A-alt.png";

function ClassifiedListUnit({ item }) {
  const { category_id } = useParams();
  const navigate = useNavigate();
  const [sellerAvatar, setSellerAvatar] = useState(null);
  const [forSalePic, setForSalePic] = useState(null);
  const {
    bass,
    city,
    classified_category,
    country,
    id,
    manufacture_year,
    price,
    state,
    status,
    strings,
    user,
    pic,
    last_message,
    total_messages,
  } = item;

  let lastMessageTime;
  if (last_message) {
    const date = DateTime.fromISO(`${last_message.created_at}`).toFormat(
      `LLL dd, yyyy `
    );
    const time = DateTime.fromISO(`${last_message.created_at}`).toFormat(
      `HH${":"}mm`
    );
    lastMessageTime = `${date} at ${time}`;
  } else {
    lastMessageTime = "No messages yet!";
  }
  useEffect(() => {
    fetch(`/users/by_name/${user.user_name}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.avatar) setSellerAvatar(data.avatar);
        if (pic) setForSalePic(pic);
      });
  }, []);
  console.log("pic: ", forSalePic);
  console.log("user.avatar: ", sellerAvatar);
  const statusRed = {
    color: "var(--white)",
    backgroundColor: "tomato",
    padding: "0 0.3rem",
  };
  const statusGreen = {
    color: "var(--white)",
    backgroundColor: "green",
    padding: "0 0.3rem",
    textShadow: "1px 1px 0 #333",
  };
  const statusYellow = {
    color: "var(--white)",
    backgroundColor: "#edbe13",
    padding: "0 0.3rem",
    textShadow: "0px 0px 3px #333",
  };

  const styledStatus = [statusGreen, statusYellow, statusRed];

  const styleIndex = () => {
    if (status === "For Sale") return 0;
    if (status === "For Trade") return 1;
    if (status === "Sold") return 2;
  };

  return (
    <ForSaleItemStyled className="border">
      <div
        className="topBar"
        onClick={() => navigate(`/classifieds/${category_id}/${id}`)}
      >
        <h2 className="itemDescription forSale">
          <span style={styledStatus[styleIndex()]}>{`${status}`}</span>
          {` ${bass}`}
        </h2>
      </div>
      {/* <h2 className="itemDescription">{`${status}: ${bass}`}</h2> */}
      {/* {styledItemDescription[elementIndex()]} */}
      <div
        className="wholeItemContainer"
        onClick={() => navigate(`/classifieds/${category_id}/${id}`)}
      >
        <div className="imageAndInfoContainer">
          <div className="forSaleImageContainer">
            {forSalePic ? (
              <img className="forSaleImage" src={forSalePic} />
            ) : (
              <img className="forSaleImage" src={whiteLogo} alt="" />
            )}
          </div>
          <div className="forSaleItemInfo">
            <ul>
              <li className="price">{`$${price}`}</li>

              <li>
                <span>Year:</span> {manufacture_year}
              </li>

              <li>
                <span>Strings:</span> {strings}
              </li>

              <li>
                <span>Location:</span> {city}, {state}
              </li>
            </ul>
          </div>
        </div>
        <div className="extraInfo">
          <ul>
            <li>Total messages: {total_messages}</li>
            {total_messages ? <li>Last message:</li> : null}
            <li>{lastMessageTime}</li>
          </ul>
        </div>
        <div className="sellerInfo">
          <h3>Seller:</h3>
          <div className="sellerImageContainer">
            {sellerAvatar ? (
              <SellerImageStyled src={sellerAvatar} alt="" />
            ) : (
              <SellerImageStyled src={whiteLogo} alt="" />
            )}
            <h3>{user.user_name}</h3>
          </div>
        </div>
      </div>
    </ForSaleItemStyled>
  );
}

export default ClassifiedListUnit;
