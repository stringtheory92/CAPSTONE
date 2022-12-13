import React from "react";
import Ticker from "react-ticker";
import TickerEvents from "./TickerEvents";

function TickerComponent({ ticketMasterEvents }) {
  return (
    // <Ticker offset="run-in">
    //   <TickerEvents ticketMasterEvents={ticketMasterEvents} />;
    // </Ticker>
    <Ticker offset="run-in">
      {() => {
        <TickerEvents ticketMasterEvents={ticketMasterEvents} />;
      }}
    </Ticker>
  );
}

export default TickerComponent;
