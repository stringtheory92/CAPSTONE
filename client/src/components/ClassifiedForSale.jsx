import React, { useState, useEffect } from "react";
import ClassifiedListUnit from "./ClassifiedListUnit";

function ClassifiedForSale({ categoryID }) {
  const [allItems, setAllItems] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch(`/classified_for_sales/from_category/${categoryID}`).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log("ok: ", data);
          setAllItems(data);
        });
      } else {
        r.json().then((data) => {
          console.log("not ok: ", data);
          setErrors(data);
        });
      }
    });
  }, [categoryID]);

  const displayedItems = allItems?.map((item) => (
    <ClassifiedListUnit key={item.id} item={item} />
  ));

  return (
    <div>
      <h1 className="classifiedForSaleHeading">For Sale</h1>
      <div className="forSaleGridContainer">{displayedItems}</div>
    </div>
  );
}

export default ClassifiedForSale;
