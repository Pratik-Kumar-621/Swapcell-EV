import React from "react";
import About from "../Section/About/About";
import Features from "../Section/Features/Features";
import Footer from "../Section/Footer/Footer";
import Landing from "../Section/Landing/Landing";
import MobilePlat from "../Section/MobilePlat/MobilePlat";
import Partner from "../Section/Partner/Partner";
import Services from "../Section/Services/Services";
import Swapping from "../Section/Swapping/Swapping";
import Technology from "../Section/Technology/Technology";

const Home = () => {
  return (
    <div>
      <Landing />
      <About />
      <Features />
      <Services />
      <Swapping />
      <Partner />
      <MobilePlat />
      <Technology />
      <Footer />
    </div>
  );
};

export default Home;
