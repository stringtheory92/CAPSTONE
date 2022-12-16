import React, { useState, useEffect } from "react";
import ClassifiedListUnit from "./ClassifiedListUnit";
import { NavLink, useParams } from "react-router-dom";
import { ForSaleStyled } from "./shared";

function ClassifiedForSale() {
  let { category_id } = useParams();
  const [allItems, setAllItems] = useState([]);
  const [errors, setErrors] = useState([]);

  console.log("param: ", category_id);

  useEffect(() => {
    fetch(`/classified_for_sales/from_category/${category_id}`).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log("ok: ", data);
          const mapped = data.map((item) => {
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
  }, []);

  const displayedItems = allItems?.map(
    (item) => {
      console.log("item: ", item);
      return <ClassifiedListUnit key={item.id} item={item} />;
    }
    // <h2>{item.bass}</h2>
    // <img src={item.pic} alt="" />
  );

  return (
    <ForSaleStyled>
      <h1 className="classifiedForSaleHeading">For Sale</h1>
      <div className="forSaleGridContainer">{displayedItems}</div>
      <NavLink to={`/new_for_sale`}>List My Stuff</NavLink>
    </ForSaleStyled>
  );
}

export default ClassifiedForSale;
