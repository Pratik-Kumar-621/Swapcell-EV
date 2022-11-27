import React from "react";
import Main from "../../Media/Technology/Main.png";

const Details = () => {
  return (
    <div className="details-tech">
      <div className="details-tech-image">
        <img src={Main} alt="Main" />
      </div>
      <div className="details-tech-content">
        The E-mobility industry is rapidly expanding.Therefore, Electica Energy
        uses the battery management system(BMS). BMS is a technology to monitor
        the health of the battery, control its charging and discharging to
        maximise battery health and performance, protect the battery by
        maintaining its cell's voltage within the specifications and report the
        battery’s health status to the user.
        <br />
        <br />
        With our BMS, we enhance the life span of the battery cells in our
        customer's electric vehicle.
      </div>
    </div>
  );
};

export default Details;
