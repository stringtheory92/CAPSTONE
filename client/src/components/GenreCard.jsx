import React from "react";

function GenreCard({ genre, events }) {
  console.log("genreCard");
  return (
    <div style={{ color: "white" }}>
      <div>{genre}</div>
      <div>
        {events?.map((event) => (
          <h1 key={event.id}>{event.name}</h1>
        ))}
      </div>
    </div>
  );
}

export default GenreCard;
