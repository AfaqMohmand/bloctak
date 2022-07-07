import React from "react";
import "./services.css";
const BackSide = ({ text }) => {
  return (
    <>
      <div className="back-card-flex">
        <p className="back-side-text">{text}</p>
      </div>
    </>
  );
};
export default BackSide;
