import React, { useState, useEffect } from "react";
import ClassifiedListUnit from "./ClassifiedListUnit";
import { NavLink } from "react-router-dom";

function ClassifiedForSale({ categoryID }) {
  const [allItems, setAllItems] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch(`/classified_for_sales/from_category/${categoryID}`).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log("ok: ", data);
          const mapped = data.map((item) => {
            console.log("data.pic: ", data.pic);
            if (item.pic) {
              item.item["pic"] = item.pic;
            } else {
              item.item["pic"] = null;
            }
            return item.item;
          });
          console.log("mapped: ", mapped);
          setAllItems(mapped);
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
    // <h2>{item.bass}</h2>
    // <img src={item.pic} alt="" />
    <ClassifiedListUnit key={item.id} item={item} />
  ));

  return (
    <div>
      <h1 className="classifiedForSaleHeading">For Sale</h1>
      <div className="forSaleGridContainer">{displayedItems}</div>
      <NavLink to={`/new_for_sale`}>List My Stuff</NavLink>
    </div>
  );
}

export default ClassifiedForSale;
