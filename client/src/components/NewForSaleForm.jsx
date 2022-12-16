import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FileInputStyled,
  NewForSaleFormStyled,
  SubmitButtonStyled,
} from "./shared";

function NewForSaleForm({ user, avatar, selectedClassifiedsCategory }) {
  const { category_id } = useParams();
  const navigate = useNavigate();
  // user and avatar are passed down from App.js and represent the seller of the newly-created forSaleItem.
  // selectedClassifiedsCategory is the categoryID passed up from ClassifiedsHome to App, set to state, and passed down to NewSaleForm
  const [formData, setFormData] = useState({
    bass: "",
    manufacture_year: "",
    status: "For Sale",
    price: "",
    strings: "",
    city: "",
    state: "",
    country: "",
    views: null,
    classified_category_id: category_id,
    user_id: sessionStorage.getItem("user_id"),
    // need to pass down id of classified_category via routes (like in subforums)
  });
  const [itemPic, setItemPic] = useState(null);
  const [explanation, setExplanation] = useState("");

  console.log(
    'sessionStorage.getItem("user_id"): ',
    sessionStorage.getItem("user_id")
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name: ", name);
    console.log("value: ", value);

    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      bass,
      manufacture_year,
      status,
      price,
      strings,
      city,
      state,
      country,
      classified_category_id,
      user_id,
    } = formData;
    console.log("formData: ", formData);

    // create new formData object (not to be confused with the formData state variable)
    const newFormData = new FormData();
    newFormData.append("bass", bass);
    newFormData.append("manufacture_year", Number(manufacture_year));
    newFormData.append("status", status);
    newFormData.append("price", Number(price));
    newFormData.append("strings", Number(strings));
    newFormData.append("city", city);
    newFormData.append("state", state);
    newFormData.append("country", country);
    newFormData.append("classified_category_id", classified_category_id);
    newFormData.append("user_id", user_id);
    newFormData.append("pic", itemPic);

    const configObj = {
      method: "POST",
      body: newFormData,
    };
    fetch(`/classified_for_sales`, configObj)
      .then((r) => r.json())
      .then((data) => {
        console.log("ok: ", data);
        navigate(`/classifieds/${category_id}/${data.item.id}`);
      });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <NewForSaleFormStyled action="" onSubmit={handleSubmit}>
        <label htmlFor="bass">Headline</label>
        <input
          type="text"
          name="bass"
          value={formData.bass}
          onChange={handleChange}
        />
        <label htmlFor="manufacture_year">Year</label>
        <input
          type="text"
          name="manufacture_year"
          value={formData.manufacture_year}
          onChange={handleChange}
        />
        {/* STATUS USING RADIO BUTTONS AT THE END OF FORM */}
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        <label htmlFor="strings">Number of strings</label>
        <input
          type="number"
          name="strings"
          value={formData.strings}
          onChange={handleChange}
        />
        {/* FIND QUALITY NPM FOR CITY/STATE/COUNTRY FOR CONSISTENCY   */}
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        <label htmlFor="state">State</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
        {/* <label htmlFor="status">Transaction Type</label> */}
        <label htmlFor="" className="radioLabel">
          <input
            className="radio"
            type="radio"
            name="status"
            id=""
            value="For Sale"
            checked={formData.status === "For Sale"}
            onChange={handleChange}
          />
          For Sale
        </label>
        <label htmlFor="" className="radioLabel">
          <input
            className="radio"
            type="radio"
            name="status"
            id=""
            value="For Trade"
            checked={formData.status === "For Trade"}
            onChange={handleChange}
          />
          For Trade
        </label>
        {/* <input type="radio" name="status" id="" value="Sold"/> */}
        <br />

        <label htmlFor="itemPic">Upload an picture</label>
        <div className="picUploadContainer">
          <FileInputStyled
            type="file"
            accept="image/*"
            onChange={(e) => setItemPic(e.target.files[0])}
          />
        </div>
        <br />
        {/* submitButtonContainer keeps form from moving when button is pressed */}
        <div className="submitButtonContainer">
          <SubmitButtonStyled type="submit" className="submitButton">
            Post!
          </SubmitButtonStyled>
        </div>
      </NewForSaleFormStyled>
    </div>
  );
}

export default NewForSaleForm;
