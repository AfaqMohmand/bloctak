import React from "react";
import "./OurTeam.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
const TeamCards = ({
  teamImg,
  teamHead,
  teamPos,
  linkTwitter,
  linkInstg,
  teamSubPos
}) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="team-cards">
      <img src={teamImg} alt="" />
      <h1 className="team-cards-h1">{teamHead}</h1>
      <p className="team-cards-p">{teamPos}</p>
      <p className="team-cards-p">{teamSubPos}</p>
      <div className="team-icons">
        <a
          href={linkTwitter}
          target="_blank"
          rel="noopener noreferrer"
          className="team-twitter-icon"
        >
          <AiOutlineTwitter size={30} />
        </a>
        <a
          href={linkInstg}
          target="_blank"
          rel="noopener noreferrer"
          className="team-Linkedin-icon"
        >
          <AiFillLinkedin size={30} />
        </a>
      </div>
    </div>
  );
};

export default TeamCards;
