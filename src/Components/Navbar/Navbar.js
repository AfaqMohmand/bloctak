import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import BlocTakLogo from "../../assets/BlocTAKLogo.png";
import ScrollspyNav from "react-scrollspy-nav";
import vectorPhone from "../../assets/Vector.png";
import PorjectsCarousel from "../../Components/ProjectsCarousel/ProjectsCarousel";
import { HashRouter } from "react-router-dom";
function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <NavLink exact to="/" className="nav-logo">
          <img src={BlocTakLogo} alt="" />
        </NavLink>
        <div className="nav-container">
          <ScrollspyNav
            scrollTargetIds={["About", "Projects", "Services", "Team"]}
            offset={100}
            scrollDuration="1000"
            headerBackground="true"
            currentClassName="is-current"
            router="#team"
          >
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <a href="#About">About</a>
              </li>
              <li className="nav-item">
                <a href="#Projects">Projects</a>
              </li>
              <li className="nav-item">
                <a href="#Services">Services</a>
              </li>
              <li className="nav-item">
                <a href="#Team">Team</a>
              </li>
            </ul>
          </ScrollspyNav>
          <NavLink
            exact
            to="/contactus"
            className="btnGlobal nav-logo navBar-Btn"
            onClick={handleClick}
          >
            <img src={vectorPhone} alt="" /> <span>Contact Us</span>
          </NavLink>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
