import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Technology from "./Pages/Technology";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./Styles/app.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/services" exact>
          <Services />
        </Route>
        <Route path="/technology" exact>
          <Technology />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
