import React, { useState } from "react";

function NewForSaleForm({ user, avatar }) {
  // user and avatar are passed down from App.js and represent the seller of the newly-created forSaleItem.
  const [formData, setFormData] = useState({
    bass: "",
    manufacture_year: null,
    status: "",
    price: null,
    strings: null,
    city: "",
    state: "",
    country: "",
    views: null,
    // need to pass down id of classified_category via routes (like in subforums)
  });
  return <div>NewForSaleForm</div>;
}

export default NewForSaleForm;
