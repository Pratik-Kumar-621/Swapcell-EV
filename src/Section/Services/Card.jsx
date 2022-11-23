import React from "react";

const Card = ({ image1, title, image2, alt, desc, head2 }) => {
  return (
    <div className="flipCircle-card">
      <div className="flipCircle-card-inner">
        <div className="flipCircle-card-front">
          <div className="frontContent">
            <img src={image1} alt={alt} />
            <div className="contentCard">{title}</div>
          </div>
        </div>
        <div className="flipCircle-card-back">
          <div className="backContent">
            <img src={image2} alt={alt} />
            <p className="descFlipCircle2">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
