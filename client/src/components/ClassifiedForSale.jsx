import React, { useState, useEffect } from "react";

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
    <h2>{`${item.bass} : ${item.price}`}</h2>
  ));

  return (
    <div>
      <h1>ClassifiedForSale</h1>
      {displayedItems}
    </div>
  );
}

export default ClassifiedForSale;
