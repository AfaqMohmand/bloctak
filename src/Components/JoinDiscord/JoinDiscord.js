import React from "react";
import "./JoinDiscord.css";
import DiscordIcon from "../../assets/Icon.png";
import Pattern from "../../assets/Pattern.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
const JoinDiscord = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <section className="JoinDiscord">
      <div className="join-discord-container">
        <div className="first-con">
          <FaDiscord size={40} className="joinDiscord-icon" />
          <p>Discord</p>
        </div>
        <div className="second-con">
          <h1 className="discord-h1">
            Join Our <span> Discord</span>
          </h1>
          <p>
            <a
              href="https://discord.com/invite/UW8fFTDHV9"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <BsFillArrowRightCircleFill size={30} className="discrod-icon" />
              <span>Join Now</span>
            </a>
          </p>
        </div>
      </div>
      <img src={Pattern} alt="" />
    </section>
  );
};

export default JoinDiscord;
