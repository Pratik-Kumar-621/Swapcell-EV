import React from "react";

const Heading = ({ heading }) => {
  return (
    <div className="mainHeading">
      <div className="dotted"></div>
      <span>{heading}</span>
      <div className="dotted"></div>
    </div>
  );
};

export default Heading;
