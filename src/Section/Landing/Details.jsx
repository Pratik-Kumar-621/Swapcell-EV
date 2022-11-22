import React from "react";
import Landing from "../../Media/Landing/Landing.png";
import Heading from "../../Media/Landing/Heading.png";
import Detail from "../../Media/Landing/Detail.png";
import { Button, IconButton } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const Details = () => {
  return (
    <div className="details">
      <div className="contentLanding">
        <div className="titleLanding">
          <div className="headingLanding">
            <img src={Heading} alt="Heading" />
            <span>Electrica Energy</span>
          </div>
          <div className="subHeadingLanding">Don’t change, Just swap!</div>
        </div>
        <div className="imageLanding">
          <img src={Detail} alt="Detail" />
          100 km of ride in just 1 min of swap
        </div>
        <div className="buttonLanding">
          <Button variant="contained">Know More</Button>
        </div>
      </div>
      <div className="imageLanding">
        <img src={Landing} alt="Landing" />
      </div>
      <div className="downButton">
        <IconButton>
          <KeyboardArrowDownRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Details;
