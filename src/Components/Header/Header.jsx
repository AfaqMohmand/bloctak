import React from "react";
import "./Header.css";
import headerBtnLogo from "../../assets/Vector.png";
import HeaderImg from "../../assets/HeaderImg.png";
import Bookmeeting from "../../assets/BookMeeting.png";
const Header = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="Header-section flex">
      <div className="header-content">
        <h1 className="header-content-h1">
          Let's Start <br />
          <span className="header-span">Something Big</span>
          <br /> Together
        </h1>
        <p className="header-content-p">
          Create, Explore and Collect Digital Art NFT’s
        </p>
        <div className="btns-container">
          <button className="btnGlobal Header-Btn">
            {" "}
            <img src={headerBtnLogo} alt="" /> <span>Contact us</span>
          </button>
          <button className="book-meeting">
            <a
              href="https://calendly.com/khawajaali/bloctak?month=2022-07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Bookmeeting} alt="" />
              <span>Book a meeting</span>
            </a>
          </button>
        </div>
        <div className="header-inner-flex">
          <div className="3M">
            <h3>
              $3M <span>+</span>
            </h3>
            <h5>Value Created</h5>
          </div>
          <div className="ETH">
            <h3>
              1245ETH <span>+</span>
            </h3>
            <h5>Traded Volume</h5>
          </div>
          <div className="4.6k">
            <h3>
              4.6k <span>+</span>
            </h3>
            <h5>NFT minted</h5>
          </div>
        </div>
      </div>
      <div className="header-img">
        <img src={HeaderImg} alt="" />
      </div>
    </div>
  );
};

export default Header;
