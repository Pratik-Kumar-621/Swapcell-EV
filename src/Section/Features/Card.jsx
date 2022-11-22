import React from "react";

const Card = ({ image1, title, image2, numbering, alt, head1, head2 }) => {
  return (
    <div className="flip">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="frontContent">
              <img src={image1} alt={alt} />
              <div className="contentCard">{title}</div>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="backContent">
              <img src={image2} alt={alt} />
              <p className="headingFlip2">{head1}</p>
              <p className="descFlip2">{head2}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flip-card-img">{numbering}</div>
    </div>
  );
};

export default Card;
