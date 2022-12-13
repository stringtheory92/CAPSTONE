import React from "react";
import Ticker from "react-ticker";

function RightSideContainer({ user }) {
  return (
    <div>
      {user ? (
        <Ticker offset="run-in">
          {({ index }) => (
            <>
              <h1 style={{ paddingRight: "0.5em", color: "white" }}>
                This is the Headline of element #{index}!
              </h1>
            </>
          )}
        </Ticker>
      ) : null}
    </div>
  );
}

export default RightSideContainer;
