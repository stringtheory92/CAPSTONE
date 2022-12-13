import React from "react";
import TickerEvent from "./TickerEvent";

function TickerEvents({ ticketMasterEvents }) {
  return (
    <div>
      {ticketMasterEvents ? (
        ticketMasterEvents.map((event) => (
          <TickerEvent key={event.id} event={event} />
        ))
      ) : (
        <h2 style={{ visibility: "hidden" }}>"placeholder"</h2>
      )}
    </div>
  );
}

export default TickerEvents;
