import React from "react";
import Heading2 from "../Heading2";
import Content from "./Content";
import Arrow from "../../Media/Services/arrow.png";

const Services = () => {
  return (
    <div className="services">
      <Heading2 heading="Services and Products" />
      <div className="arrow1">
        <img src={Arrow} alt="" />
      </div>
      <div className="arrow2">
        <img src={Arrow} alt="" />
      </div>
      <div className="arrow3">
        <img src={Arrow} alt="" />
      </div>
      <Content />
    </div>
  );
};

export default Services;
