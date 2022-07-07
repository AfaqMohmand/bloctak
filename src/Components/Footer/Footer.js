import React from "react";
import "./Footer.css";
import BlocTAKLogo from "../../assets/BlocTAKLogo.png";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <section className="footer-section">
      <div className="first-col">
        <img src={BlocTAKLogo} />
        <div className="footer-icons">
          <a href="https://www.linkedin.com/company/blocktak/">
            <AiFillLinkedin
              size={30}
              target="_blank"
              rel="noopener noreferrer"
            />
          </a>
          <a href="https://www.instagram.com/bloc.tak/">
            <AiFillInstagram
              size={30}
              target="_blank"
              rel="noopener noreferrer"
            />
          </a>
          <a href="https://twitter.com/home">
            <AiFillTwitterCircle
              size={30}
              target="_blank"
              rel="noopener noreferrer"
            />
          </a>
        </div>
      </div>
      <div className="second-col">
        <h6 className="second-col-h6">Menu Items</h6>
        <p>What we're about</p>
        <p>Sold Out Projects</p>
        <p>Our Services</p>
        <p>Our Team</p>
      </div>
      <div className="third-col">
        <h6 className="second-col-h6">Other Pages</h6>
        <p>Privacy Policy</p>
        <p>Term and Conditions</p>
      </div>
      <div className="fourth-col">
        <p className="fourth-col-p">
          Copyright <span>BlocTak</span>
        </p>
        <p className="fourth-col-p">
          All Right Reserved, <span>2022</span>
        </p>
      </div>
    </section>
  );
};

export default Footer;
