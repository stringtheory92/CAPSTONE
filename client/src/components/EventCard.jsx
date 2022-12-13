import React from "react";
import { EventCardStyled } from "./shared";

function EventCard({ event }) {
  const { name, classifications, dates, images, priceRanges, sales } = event;
  const image = images.find((image) => image.ratio === "3_2").url;
  const genre = classifications[0].genre.name;
  const dateAndTime = [dates.start.localDate, dates.start.localTime];
  // Some events do not have priceRange data, so conditional is necessary
  let priceRange;
  if (priceRanges) priceRange = [priceRanges[0].min, priceRanges[0].max];

  const onSaleThrough = sales.endDateTime;
  return (
    <EventCardStyled>
      <img src={image} alt="" />
      <h3>{name}</h3>
    </EventCardStyled>
  );
}

export default EventCard;
