import React from "react";
import CenterHeading from "../CenterHeading/CenterHeading";
import "./OurTeam.css";
import TeamCards from "./TeamCards";
import Team01 from "../../assets/team-01.png";
import Team02 from "../../assets/team-02.png";
import Team03 from "../../assets/team-03.png";
const OurTeam = () => {
  return (
    <div className="team-section" id="Team">
      <CenterHeading firstText="our" secondText="team" />
      <div className="team-section-cards">
        <TeamCards
          teamImg={Team01}
          teamHead="Khawaja .M. Ali"
          teamPos="CO-FOUNDER"
          teamSubPos="HEAD OF BUSINESS DEVELOPMENT AND OPERATIONS"
          linkTwitter="https://twitter.com/beardedbroeth"
          linkInstg="https://www.linkedin.com/in/khawaja-ali/"
        />
        <TeamCards
          teamImg={Team02}
          teamHead="Abdullah Abid"
          teamPos="CO-FOUNDER"
          teamSubPos="HEAD OF DEVELOPMENT TEAM"
          linkTwitter="https://twitter.com/Abdulla65678022"
          linkInstg="https://www.linkedin.com/in/abdullah-abid-30521515b/"
        />
        <TeamCards
          teamImg={Team03}
          teamHead="Muhammad Tahseen"
          teamPos="CO-FOUNDER"
          teamSubPos="HEAD OF CONTENT AND MARKETING"
          linkTwitter="https://twitter.com/home"
          linkInstg="https://www.linkedin.com/in/tahseen-tauseef-635ba7205/"
        />
      </div>
    </div>
  );
};

export default OurTeam;
