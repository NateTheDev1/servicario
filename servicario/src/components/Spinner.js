import React from "react";
import "./Spinner.css";

const Spinner = () => (
  <div className="spinner-container">
    <div className="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Spinner;
