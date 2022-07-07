import React from "react";
import "./centerheading.css";
import AboutUsStar from "../../assets/AboutUsStar.png";
const CenterHeading = ({ firstText, secondText }) => {
  return (
    <div className="center-heading">
      <img src={AboutUsStar} alt="" />
      <h1 className="center-heading-h1">
        {firstText} <span>{secondText}</span>
      </h1>
    </div>
  );
};

export default CenterHeading;
