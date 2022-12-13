import React from "react";
import { useLocation } from "react-router-dom";

function ConcertInfo() {
  const location = useLocation();
  const { event } = location.state;
  console.log("event", event);
  const { name, classifications, dates, images, priceRanges, sales } = event;
  const image = images.find((image) => image.ratio === "3_2").url;
  const genre = classifications[0].genre.name;
  const date = dates.start.localDate;
  const time = dates.start.localTime;
  // Some events do not have priceRange data, so conditional is necessary
  let priceRange;
  if (priceRanges) priceRange = [priceRanges[0].min, priceRanges[0].max];

  const onSaleThrough = sales.endDateTime;
  return (
    <div>
      <img src={image} alt="" />
    </div>
  );
}

export default ConcertInfo;
