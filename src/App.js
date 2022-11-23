import React from "react";
import About from "./Section/About/About";
import Features from "./Section/Features/Features";
import Landing from "./Section/Landing/Landing";
import Services from "./Section/Services/Services";
import Swapping from "./Section/Swapping/Swapping";

import "./Styles/app.scss";

const App = () => {
  return (
    <div>
      <Landing />
      <About />
      <Features />
      <Services />
      <Swapping />
    </div>
  );
};

export default App;
