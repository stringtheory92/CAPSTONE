import React from "react";
import { useLocation } from "react-router-dom";
import { ConcertInfoStyled } from "./shared";

function ConcertInfo() {
  const location = useLocation();
  const { event } = location.state;
  console.log("event", event);
  const { classifications, dates, images, priceRanges, sales } = event;
  const image = images.find((image) => image.ratio === "3_2").url;
  const venueName = event._embedded.venues[0].name;
  const venueLink = event._embedded.venues[0].url;
  const genre = classifications[0].genre.name;
  let name;
  if (event._embedded.attractions[0].name)
    name = event._embedded.attractions[0].name;
  else name = event.name;
  // Cut up date to format for display
  const date = dates.start.localDate;
  const fullDate = formatDate(date);

  // Convert military time format
  let time;
  if (dates.start.noSpecificTime) time = "No Time Specified";
  else if (Number(dates.start.localTime.slice(0, 2)) >= 13) {
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

  const onSaleThrough = formatDate(sales.public.endDateTime.slice(0, 10));
  //   const onSaleThrough = sales.public.endDateTime;

  function formatDate(localDate) {
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
    return `${month} ${day}, ${year}`;
  }
  return (
    <ConcertInfoStyled>
      <img src={image} alt="" className="image" />
      <h1 className="name">{name}</h1>
      <p className="date">{fullDate}</p>
      <hr className="break" />
      <a href={venueLink} className="venue" data-tool-tip="Go to venue page">
        {venueName}
      </a>
      <p className="time">Time: {time}</p>
      <p className="onSaleThrough">
        On sale through: <span>{onSaleThrough}</span>
      </p>
      {priceRanges ? (
        <p className="price">
          From <span className="priceSpan">{`$${priceRange[0]}`}</span> to{" "}
          <span className="priceSpan">{`$${priceRange[1]}`}</span>
        </p>
      ) : (
        "Go to purchase page to see price!"
      )}
      <a
        href={purchaseLink}
        data-tool-tip="Enjoy the show!"
        className="purchaseLink"
      >
        Purchase tickets
      </a>
      <hr className="break" />
    </ConcertInfoStyled>
  );
}

export default ConcertInfo;
