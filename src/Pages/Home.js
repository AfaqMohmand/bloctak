import React from "react";
import "../App.css";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import AboutUs from "../Components/AboutUs/AboutUs";
import CarouselSlide from "../Components/ProjectsCarousel/ProjectsCarousel";
import Services from "../Components/Services/index";
import Footer from "../Components/Footer/Footer";
import OurTeam from "../Components/OurTeam/OurTeam";
import JoinDiscord from "../Components/JoinDiscord/JoinDiscord";
function Home() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <CarouselSlide />
      <Services />
      <OurTeam />
      <JoinDiscord />
      <Footer />
    </div>
  );
}
export default Home;
