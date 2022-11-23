import React from "react";

const Heading2 = ({ heading }) => {
  return (
    <div className="heading2">
      <div className="line-border-right"></div>
      <span>{heading}</span>
      <div className="line-border-left"></div>
    </div>
  );
};

export default Heading2;
