import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { EventCardStyled } from "./shared";

function EventCard({ event }) {
  const navigate = useNavigate();
  const { name, classifications, dates, images, priceRanges, sales } = event;
  const image = images.find((image) => image.ratio === "3_2").url;
  let genre;
  if (classifications[0].genre) {
    genre = classifications[0].genre.name;
  } else genre = "Other";
  const dateAndTime = [dates.start.localDate, dates.start.localTime];
  // Some events do not have priceRange data, so conditional is necessary
  let priceRange;
  if (priceRanges) priceRange = [priceRanges[0].min, priceRanges[0].max];

  const onSaleThrough = sales.endDateTime;
  return (
    <EventCardStyled>
      {event ? (
        <Link
          to="/concert_info"
          className="concertLink"
          state={{ event: event }}
        >
          <img src={image} alt="" />
          <h3>{name}</h3>
        </Link>
      ) : (
        "loading..."
      )}
    </EventCardStyled>
  );
}

export default EventCard;
