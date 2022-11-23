import React from "react";
import About from "./Section/About/About";
import Features from "./Section/Features/Features";
import Landing from "./Section/Landing/Landing";
import Services from "./Section/Services/Services";

import "./Styles/app.scss";

const App = () => {
  return (
    <div>
      <Landing />
      <About />
      <Features />
      <Services />
    </div>
  );
};

export default App;
