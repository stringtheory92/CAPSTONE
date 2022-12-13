import React from "react";
import EventCard from "./EventCard";
import { GenreCardStyled } from "./shared";

function GenreCard({ genre, events }) {
  const mapped = events?.map((event) => {});
  console.log("genreCard");
  return (
    <GenreCardStyled style={{ color: "white" }}>
      <div className="genreDiv">{genre}</div>
      <div>
        {events?.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
    </GenreCardStyled>
  );
}

export default GenreCard;
