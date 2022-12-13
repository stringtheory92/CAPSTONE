import React from "react";

function TickerEvent({ event }) {
  const { name, classifications, dates, images, priceRanges, sales } = event;
  const genre = classifications[0].genre.name;
  const dateAndTime = [dates.start.localDate, dates.start.localTime];
  const priceRange = [priceRanges[0].min, priceRanges[0].max];
  const onSaleThrough = sales.endDateTime;
  return <h2>{event ? name : "TickerEvent"}</h2>;
}

export default TickerEvent;
