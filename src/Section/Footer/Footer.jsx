import React from "react";
import Heading from "../../Media/Landing/Heading.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";

const Footer = () => {
  return (
    <footer>
      <div id="footer" className="logo-foot">
        <img src={Heading} alt="Heading" />
        <div className="foot-name">Electrica Energy</div>
        <div className="foot-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
      <div className="address-foot">
        <div className="foot-title">Address</div>
        <div className="foot-desc">
          <LocationOnIcon />
          &nbsp; 123, ABC Street, XYZ City, India - 123456
        </div>
      </div>
      <div className="explore-foot">
        <div className="foot-title">Explore</div>
        <div className="links-foot">
          <Button>
            <LinkedInIcon />
          </Button>
          <Button>
            <TwitterIcon />
          </Button>
          <Button>
            <EmailIcon />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
