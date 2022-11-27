import React from "react";
import { CategoryCardStyled } from "./shared";
import db from "../resources/category-ub.png";
import bg from "../resources/Jap-Fodera-bg.jpeg";
import amp from "../resources/amp-small2.jpeg";
import acc from "../resources/fodera-head-bg.jpeg";

function CategoryCard({ category, onCategorySelect }) {
  const { id, heading } = category;
  const imageArray = [db, bg, amp, acc];
  //   const imageArray = [
  //     "../resources/category-ub.png",
  //     "../resources/Jap-Fodera-bg.jpeg",
  //     "../resources/amp-small2.jpeg",
  //     "../resources/fodera-head-bg.jpeg",
  //   ];
  const imageIndex = () => {
    if (heading === "Upright Basses") return 0;
    if (heading === "Bass Guitars") return 1;
    if (heading === "Amplifiers") return 2;
    // for Accessories heading
    return 3;
  };
  const backgroundPic = imageArray[imageIndex()];
  console.log("imageArray[imageIndex]: ", imageArray[imageIndex()]);
  //   console.log(imageArray[1], imageIndex);

  console.log(category);
  return (
    <CategoryCardStyled
      backgroundImage={backgroundPic}
      onClick={(e) => onCategorySelect(e, id)}
    >
      {/* <img src={backgroundPic} alt="" /> */}
      <h2>{heading}</h2>
    </CategoryCardStyled>
  );
}

export default CategoryCard;
