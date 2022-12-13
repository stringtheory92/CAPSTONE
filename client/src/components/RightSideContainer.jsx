import React, { useState, useEffect } from "react";
import Ticker from "react-ticker";
import EventsGridStyled from "./shared/EventsGridStyled";
import GenreCard from "./GenreCard";
import TickerEvent from "./TickerEvent";

function RightSideContainer({ user, ticketMasterEvents }) {
  const [genreArray, setGenreArray] = useState(null);
  // intended genreObj structure: {rock: [{event1}, {event2}], R&B: [{event1}, {event2}], ...}
  // goal is to programmatically create a div.genre for each key and a div.event for each event, rendered together in groups

  useEffect(() => {
    let genreObj = {};
    ticketMasterEvents?.forEach((event) => {
      const { name, classifications, dates, images, priceRanges, sales } =
        event;
      const genre = classifications[0].genre.name;
      const dateAndTime = [dates.start.localDate, dates.start.localTime];
      // Some events do not have priceRange data, so conditional is necessary
      let priceRange;
      if (priceRanges) priceRange = [priceRanges[0].min, priceRanges[0].max];

      const onSaleThrough = sales.endDateTime;
      // sort into genreObj
      if (!Object.keys(genreObj).includes(genre)) genreObj[genre] = [event];
      else genreObj[genre].push(event);
      //   console.log("genreObj: ", genreObj);
    });
    let genreCardArray = [];
    for (let genre in genreObj) {
      //   console.log("genre", genre);
      genreCardArray.push(
        <GenreCard genre={genre} events={genreObj[genre]} key={genre} />
      );
    }
    console.log("genreCardArray: ", genreCardArray);
    setGenreArray(genreCardArray);
  }, [ticketMasterEvents]);

  return (
    <div>
      {user ? (
        <>
          {genreArray ? (
            <Ticker offset="run-in" mode="await" speed={4}>
              {() => (
                <>
                  {genreArray ? (
                    <h1
                      style={{
                        color: "white",
                        fontSize: "2rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Music Happening Near You!
                    </h1>
                  ) : null}
                </>
              )}
            </Ticker>
          ) : null}
          <EventsGridStyled className="eventsGrid ">
            {genreArray ? genreArray : null}
          </EventsGridStyled>
        </>
      ) : null}
    </div>
  );
}

export default RightSideContainer;
