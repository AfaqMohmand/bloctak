import React from "react";
import "./services.css";
const FrontSide = ({ frontSideImg, frontSideHeading, index }) => {
  return (
    <>
      <div className="front-card-flex" key={index}>
        <img src={frontSideImg} alt="" />
        <h2 className="frontSideHeading">{frontSideHeading}</h2>
      </div>
    </>
  );
};

export default FrontSide;
