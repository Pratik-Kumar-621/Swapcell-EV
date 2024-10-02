import React from "react";
import Landing from "../../Media/Landing/Landing.png";
import Heading from "../../Media/Landing/Heading.png";
import Detail from "../../Media/Landing/Detail.png";
import { IconButton } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Link } from "react-scroll";

const Details = () => {
  return (
    <div className="landingDetails">
      <div className="contentLanding">
        <div className="titleLanding">
          <div className="headingLanding">
            <img src={Heading} alt="Heading" />
            <span>Swapcell EV</span>
          </div>
          <div className="subHeadingLanding">Don’t change, Just swap!</div>
        </div>
        <div className="imageLanding">
          <img src={Detail} alt="Detail" />
          100 km of ride in just 1 min of swap
        </div>
      </div>
      <div className="imageLanding">
        <img src={Landing} alt="Landing" />
      </div>
      <Link to="about-sec" smooth={true} duration={500} className="downButton">
        <IconButton>
          <KeyboardArrowDownRoundedIcon />
        </IconButton>
      </Link>
    </div>
  );
};

export default Details;
