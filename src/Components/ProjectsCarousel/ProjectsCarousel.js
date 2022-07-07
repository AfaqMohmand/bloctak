import React from "react";
import Slider from "react-slick";
import "./ProjectsCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CenterHeading from "../CenterHeading/CenterHeading";
import {
  CarouselImg01,
  CarouselImg02,
  CarouselImg03,
  CarouselImg04,
  CarouselImg05,
  CarouselImg06
} from "./index";
const CarouselSlide = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1025,
        settings: "unslick"
      }
    ]
  };

  return (
    <div className="carousel-div" id="Projects">
      <CenterHeading firstText="Sold out" secondText="projects" />
      <Slider {...settings} className="slider">
        <div>
          <a
            href="https://www.instagram.com/roundwavenft/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={CarouselImg01} alt="" />
          </a>
        </div>
        <div>
          <a
            href="https://phantasia.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={CarouselImg02} alt="" />
          </a>
        </div>
        <div>
          <a
            href="https://nodeminernft.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={CarouselImg03} alt="" />
          </a>
        </div>
        <div>
          <a
            href="https://wivesofsolomon.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={CarouselImg04} alt="" />
          </a>
        </div>
        <div>
          <a
            href="https://www.coral-collection.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={CarouselImg05} alt="" />
          </a>
        </div>
        <div>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={CarouselImg06} alt="" />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselSlide;
