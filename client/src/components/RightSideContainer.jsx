import React from "react";
import Ticker from "react-ticker";
import TickerEvent from "./TickerEvent";

function RightSideContainer({ user, ticketMasterEvents }) {
  // intended genreObj structure: {rock: [{event1}, {event2}], R&B: [{event1}, {event2}], ...}
  let genreObj = {};
  const mapped = ticketMasterEvents?.map((event) => {
    const { name, classifications, dates, images, priceRanges, sales } = event;
    const genre = classifications[0].genre.name;
    const dateAndTime = [dates.start.localDate, dates.start.localTime];
    // Some events do not have priceRange data, so conditional is necessary
    let priceRange;
    if (priceRanges) priceRange = [priceRanges[0].min, priceRanges[0].max];
    // const priceRange = [priceRanges[0].min, priceRanges[0].max];
    const onSaleThrough = sales.endDateTime;
    if (!Object.keys(genreObj).includes(genre)) genreObj[genre] = [event];
    else genreObj[genre].push(event);

    return <TickerEvent event={event} />;
  });

  console.log("genreObj: ", genreObj);
  return (
    <div>
      {user ? (
        <Ticker offset="run-in">
          {({ index }) => (
            <>
              <h1 style={{ paddingRight: "0.5em", color: "white" }}>
                This is the Headline of element #{index}!
              </h1>
              {/* {mapped[Number(index)]} */}
            </>
          )}
        </Ticker>
      ) : null}
    </div>
  );
}

export default RightSideContainer;
