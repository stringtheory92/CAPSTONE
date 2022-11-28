import React, { useState, useEffect } from "react";
import ClassifiedCategories from "./ClassifiedCategories";
import ClassifiedForSale from "./ClassifiedForSale";

function ClassifiedsHome() {
  const [categoryID, setCategoryID] = useState(null);
  const onCategorySelect = (e, id) => {
    setCategoryID(id);
  };

  const componentIndex = () => {
    // if category was selected, display items for sale
    if (categoryID) return 1;
    // or else display categories
    return 0;
  };
  const componentArray = [
    <ClassifiedCategories onCategorySelect={onCategorySelect} />,
    <ClassifiedForSale categoryID={categoryID} />,
  ];

  return <div>{componentArray[componentIndex()]}</div>;
}

export default ClassifiedsHome;
