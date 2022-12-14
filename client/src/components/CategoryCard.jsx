import React from "react";
import { CategoryCardStyled } from "./shared";
import db from "../resources/category-ub.png";
import bg from "../resources/bg-card-lg2.jpeg";
// import bg from "../resources/bg-lg.jpeg";
import amp from "../resources/amp2-lg.jpeg";
import acc from "../resources/acc-lg.jpg";

import dbSide from "../resources/category-ub-side.png";
import bgSide from "../resources/fodera-woodbackground-bg.jpeg";
import ampSide from "../resources/amp-coverphoto.png";
import accSide from "../resources/acc-side.jpg";
import { useNavigate } from "react-router-dom";

function CategoryCard({ category, onCategorySelect }) {
  const navigate = useNavigate();
  const { id, heading } = category;
  const imageArray = [db, bg, amp, acc];
  const smImageArray = [dbSide, bgSide, ampSide, accSide];
  const imageIndex = () => {
    if (heading === "Upright Basses") return 0;
    if (heading === "Bass Guitars") return 1;
    if (heading === "Amplifiers") return 2;
    // for Accessories heading
    return 3;
  };
  const backgroundPic = imageArray[imageIndex()];
  const smBackgroundPic = smImageArray[imageIndex()];
  console.log("imageArray[imageIndex]: ", imageArray[imageIndex()]);
  //   console.log(imageArray[1], imageIndex);

  const textColorArray = ["var(--white)", "var(--black)"];
  const headingArray = [
    <h2 className="db-card">{heading}</h2>,
    <h2 className="bg-card">{heading}</h2>,
    <h2 className="amp-card">{heading}</h2>,
    <h2 className="acc-card">{heading}</h2>,
  ];
  const headingWithStyles = headingArray[imageIndex()];

  console.log(category);
  const handleClick = () => {
    navigate(`/classifieds/${id}`);
  };
  return (
    <CategoryCardStyled
      backgroundImageLg={backgroundPic}
      backgroundImageSm={smBackgroundPic}
      textColor={backgroundPic === db ? textColorArray[0] : textColorArray[1]}
      textShadow={backgroundPic === db ? "2px 2px 0 var(--black)" : "none"}
      onClick={handleClick}
      // onClick={(e) => onCategorySelect(e, id)}
    >
      {/* <img src={backgroundPic} alt="" /> */}
      <div>{headingWithStyles}</div>
    </CategoryCardStyled>
  );
}

export default CategoryCard;
