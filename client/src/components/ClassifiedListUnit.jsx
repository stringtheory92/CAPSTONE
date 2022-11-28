import React from "react";
import { ForSaleItemStyled } from "./shared";

function ClassifiedListUnit({ item }) {
  const {
    bass,
    city,
    image,
    classified_category,
    country,
    id,
    manufacture_year,
    price,
    state,
    status,
    strings,
    user,
  } = item;

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
          <div className="forSaleImageContainer"></div>
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
          <div className="sellerImageContainer">{user.image}</div>
          <h3>{user.user_name}</h3>
        </div>
      </ForSaleItemStyled>
    </div>
  );
}

export default ClassifiedListUnit;
