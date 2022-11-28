import React from "react";

function ClassifiedListUnit({ item }) {
  const {
    bass,
    city,
    classified_category,
    country,
    id,
    manufacture_year,
    price,
    state,
    status,
    strings,
    user,
  } = item;
  return (
    <div>
      <h2>{`${item.bass} : ${item.price}`}</h2>;
    </div>
  );
}

export default ClassifiedListUnit;
