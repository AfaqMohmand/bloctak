import React, { useState } from "react";
import "./services.css";
import ReactCardFlip from "react-card-flip";
import FrontSide from "./FrontSide";
import BackSide from "./BackSide";
import CenterHeading from "../CenterHeading/CenterHeading";
import {
  Dapp,
  Discord,
  WebsiteCreation,
  Web3,
  NFTGeneration,
  SmartContractCreation,
  SmartContractAudit,
  SecurityAudit,
  WhitepaperDevelopment
} from "./ImagesGallery";
const Services = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCard, setCard] = useState(0);
  const handleClick = (index) => {
    setCard(index);
    setIsFlipped(!isFlipped);
    console.log(index);
  };
  const servicesArray = [
    {
      index: 1,
      heading: "Discord Servers",
      icon: Discord,
      content:
        "We’ll set up Discord servers for your projects and install all the essential bots that are needed to run your servers smoothly. We’ll also integrate smart contracts with your Discord servers"
    },
    {
      index: 2,
      heading: "Website Creation",
      icon: WebsiteCreation,
      content:
        "We’ll design and create a visually appealing bespoke website that will contain pages such as About Us, Roadmap, Team, and Overview. ",
      className: "first-card"
    },
    {
      index: 3,
      heading: "Web 3.0 Mint DApp Page",
      icon: Web3,
      content:
        "With us, you’ll get an unparalleled minting experience. We’ll create a page solely for minting so when you’re done minting, you leave feeling satisfied. "
    },
    {
      index: 4,
      heading: "NFT Generation",
      icon: NFTGeneration,
      content:
        "We’ll create non-fungible tokens (NFTs) for you that will be made of multiple traits and layers. These NFTs can be sold on any marketplace."
    },
    {
      index: 5,
      heading: "Smart Contract Creation",
      icon: SmartContractCreation,
      content:
        "We’ll help you set up smart contracts for your business so you can automate your operations as much as possible. "
    },
    {
      index: 6,
      heading: "Smart Contract Audit",
      icon: SmartContractAudit,
      content:
        "We perform an in-depth evaluation of smart contracts, which means we use the latest tools such as Oyente, Slither, and Solhint to make sure your smart contracts run securely."
    },
    {
      index: 7,
      heading: "Security Audit",
      icon: SecurityAudit,
      content:
        "We will perform a full security audit of your website, Discord server, and smart contract to make sure that you don’t run into any unexpected errors or bugs. This will ensure that everything runs smoothly."
    },
    {
      index: 8,
      heading: "Whitepaper Development",
      icon: WhitepaperDevelopment,
      content:
        "We’ll write a detailed whitepaper for you that will contain everything there is to know about your project."
    },
    {
      index: 9,
      heading: "Dapp",
      icon: Dapp,
      content:
        "Not only will we create DApps (decentralized apps) for you, but we also offer consultancy services so if you get stuck at any point, you can get in touch with one of our professionals and we’ll help you out!"
    }
  ];
  return (
    <section className="whole-card" id="Services">
      <CenterHeading firstText="our" secondText="services" />
      <div className="complete-section">
        {servicesArray.map((service) => {
          return (
            <ReactCardFlip
              isFlipped={currentCard === service.index && isFlipped}
              key={service.index}
              flipDirection="horizontal"
            >
              <div
                onMouseEnter={() => handleClick(service.index)}
                className="front-side"
              >
                <FrontSide
                  frontSideImg={service.icon}
                  frontSideHeading={service.heading}
                />
              </div>
              <div
                onMouseLeave={() => handleClick(service.index)}
                className="back-side"
              >
                <BackSide text={service.content} />
              </div>
            </ReactCardFlip>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
