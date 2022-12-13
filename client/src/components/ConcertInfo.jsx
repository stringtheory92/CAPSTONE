import React from "react";
import { useLocation } from "react-router-dom";
import { ConcertInfoStyled } from "./shared";

function ConcertInfo() {
  const location = useLocation();
  const { event } = location.state;
  console.log("event", event);
  const { name, classifications, dates, images, priceRanges, sales } = event;
  const image = images.find((image) => image.ratio === "3_2").url;
  const genre = classifications[0].genre.name;
  const date = dates.start.localDate;
  // Cut up date to format for display
  const year = date.slice(0, 4);
  const monthNumber = Number(date.slice(5, 7));
  let month;
  switch (monthNumber) {
    case 1:
      month = "January";
      break;
    case 2:
      month = "February";
      break;
    case 3:
      month = "March";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;
  }
  const day = date.slice(8, 10);
  const fullDate = `${month} ${day}, ${year}`;

  // Convert military time format
  let time;
  if (Number(dates.start.localTime.slice(0, 2)) >= 13) {
    const hour = Number(dates.start.localTime.slice(0, 2)) - 12;
    time = `${hour}:${dates.start.localTime.slice(3, 5)}pm`;
  } else {
    time = `${dates.start.localTime.slice(0, 5)}am`;
  }

  const venue = event._embedded.venues[0].name;
  const purchaseLink = event._embedded.venues[0].url;
  // Some events do not have priceRange data, so conditional is necessary
  let priceRange;
  if (priceRanges)
    priceRange = [priceRanges[0].min.toFixed(2), priceRanges[0].max.toFixed(2)];

  const onSaleThrough = sales.endDateTime;
  return (
    <ConcertInfoStyled>
      <img src={image} alt="" />
      <h1>{name}</h1>
      <p>{fullDate}</p>
      <p>Time: {time}</p>
      {priceRanges ? (
        <p>{`Tickets range from $${priceRange[0]} to $${priceRange[1]}`}</p>
      ) : (
        "Go to purchase page to see price!"
      )}
      <a href={purchaseLink}>Purchase tickets</a>
    </ConcertInfoStyled>
  );
}

export default ConcertInfo;
