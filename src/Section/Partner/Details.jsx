import React from "react";
import Main from "../../Media/Partner/Main.png";
import Tick from "../../Media/Partner/Tick.png";

const Details = () => {
  return (
    <div className="details-partner">
      <div className="details-partnerImg">
        <img src={Main} alt="Main" />
      </div>
      <div className="details-partnerContent">
        <div className="contentDetail">
          <img src={Tick} alt="Tick" />
          <span>Secure BUSINESS START</span>
        </div>
        <div className="contentDetail">
          <img src={Tick} alt="Tick" />
          <span>PAN INDIA Network</span>
        </div>
        <div className="contentDetail">
          <img src={Tick} alt="Tick" />
          <span>GROW Together</span>
        </div>
        <div className="contentDetail">
          <img src={Tick} alt="Tick" />
          <span>Smart BATTERY MANAGEMENT SYSTEM</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
