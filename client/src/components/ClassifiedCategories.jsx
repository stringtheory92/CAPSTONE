import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";

function ClassifiedCategories({ onCategorySelect }) {
  const [allCategories, setAllCategories] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch("/classified_categories").then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log("ok: ", data);
          setAllCategories(data);
        });
      } else {
        r.json().then((data) => {
          console.log("not ok: ", data);
          setErrors(data);
        });
      }
    });
  }, []);

  //===============================================================
  const cardContainerStyles = {
    // border: "1px solid #222",
    // display: "grid",
    // gridTemplateColumns: "repeat(2, 35fr)",
    // gap: "10rem",
    // alignItems: "center",
    // justifyContent: "center",
  };

  //===============================================================

  let displayedCategories = allCategories?.map((category) => (
    <CategoryCard
      key={category.id}
      category={category}
      onCategorySelect={onCategorySelect}
    />
  ));

  return (
    <div className="gridContainer">
      <div>ClassifiedCategories</div>
      <div style={cardContainerStyles} className="cardContainer">
        {displayedCategories}
      </div>
    </div>
  );
}

export default ClassifiedCategories;
