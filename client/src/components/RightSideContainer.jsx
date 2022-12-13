import React from "react";
import Ticker from "react-ticker";
import EventsGridStyled from "./shared/EventsGridStyled";
import TickerEvent from "./TickerEvent";

function RightSideContainer({ user, ticketMasterEvents }) {
  // intended genreObj structure: {rock: [{event1}, {event2}], R&B: [{event1}, {event2}], ...}
  async function mapped() {
    let genreObj = {};
    const mapped = await ticketMasterEvents?.map((event) => {
      const { name, classifications, dates, images, priceRanges, sales } =
        event;
      const genre = classifications[0].genre.name;
      const dateAndTime = [dates.start.localDate, dates.start.localTime];
      // Some events do not have priceRange data, so conditional is necessary
      let priceRange;
      if (priceRanges) priceRange = [priceRanges[0].min, priceRanges[0].max];
      // const priceRange = [priceRanges[0].min, priceRanges[0].max];
      const onSaleThrough = sales.endDateTime;
      if (!Object.keys(genreObj).includes(genre)) genreObj[genre] = [event];
      else genreObj[genre].push(event);

      return <div event={event} key={event.id}></div>;
    });

    mapped ? genreMapping(genreObj) : null;
  }
  function genreMapping(genreObj) {}

  console.log("genreObj: ", genreObj);
  return (
    <div>
      {user ? (
        <>
          <Ticker offset="run-in" mode="await" speed={4}>
            {() => (
              <>
                <h1
                  style={{
                    color: "white",
                    fontSize: "2rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  Music Happening Near You!
                </h1>
              </>
            )}
          </Ticker>
          <EventsGridStyled className="eventsGrid ">{mapped}</EventsGridStyled>
        </>
      ) : null}
    </div>
  );
}

export default RightSideContainer;
