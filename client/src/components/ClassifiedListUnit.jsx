import React, { useEffect, useState } from "react";
import { ForSaleItemStyled, SellerImageStyled } from "./shared";

function ClassifiedListUnit({ item }) {
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
  } = item;

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
  };
  const statusYellow = {
    color: "var(--white)",
    backgroundColor: "gold",
    padding: "0 0.3rem",
  };

  const styledStatus = [statusGreen, statusYellow, statusRed];

  const styleIndex = () => {
    if (status === "For Sale") return 0;
    if (status === "For Trade") return 1;
    if (status === "Sold") return 2;
  };

  return (
    <div className="border">
      <h2 className="itemDescription forSale">
        <span style={styledStatus[styleIndex()]}>{`${status}`}</span>
        {` ${bass}`}
      </h2>
      {/* <h2 className="itemDescription">{`${status}: ${bass}`}</h2> */}
      {/* {styledItemDescription[elementIndex()]} */}
      <ForSaleItemStyled className="wholeItemContainer">
        <div className="imageAndInfoContainer">
          <div className="forSaleImageContainer">
            {forSalePic ? (
              <img className="forSaleImage" src={forSalePic} />
            ) : null}
          </div>
          <div className="forSaleItemInfo">
            <ul>
              {/* <li className="itemDescription">{`${status}: ${bass}`}</li> */}
              <li className="price">{`$${price}`}</li>
              <li>{`Strings: ${strings}`}</li>
            </ul>
          </div>
        </div>
        <div className="extraInfo"></div>
        <div className="sellerInfo">
          <h3>Seller:</h3>
          <div className="sellerImageContainer">
            {sellerAvatar ? (
              <SellerImageStyled src={sellerAvatar} alt="" />
            ) : null}
          </div>
          <h3>{user.user_name}</h3>
        </div>
      </ForSaleItemStyled>
    </div>
  );
}

export default ClassifiedListUnit;
