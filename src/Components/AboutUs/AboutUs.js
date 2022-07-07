import React from "react";
import "./aboutus.css";
import AboutUsStar from "../../assets/AboutUsStar.png";
import AboutUS from "../../assets/AboutUs.png";
const AboutUs = () => {
  return (
    <div className="about-section" id="About">
      <div className="about-img">
        <img src={AboutUS} alt="" />
      </div>
      <div className="about-content">
        <img src={AboutUsStar} alt="" />
        <h1 className="about-content-h1">
          What we're <span>About</span>
        </h1>
        <p className="about-content-p">
          Lörem ipsum metativ köttnorm bloggbävning heterotos Susanne Blom
          gal–tan–skala. Bokstav permodern Katarina Olsson förstärkt verklighet
          homokompetens. Hypercentrism kontradiktisk även om fidget spinner,
          logokrati innan preligt därför att rekrati.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
