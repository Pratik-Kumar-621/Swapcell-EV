import React from "react";
import Logo from "../../Media/Landing/Logo.png";
import { Button, IconButton } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navItems">
        <div className="navLinks">
          <Button className="navLink active">
            <Link
              className="link-nav-scroll"
              to="home"
              smooth={true}
              duration={500}
              activeClass="active1"
            >
              Home
            </Link>
          </Button>
          <Button className="navLink">
            <Link
              className="link-nav-scroll"
              to="technology-sec"
              spy={true}
              smooth={true}
              duration={500}
            >
              TECHNOLOGY
            </Link>
          </Button>
          <Button className="navLink">
            <Link
              className="link-nav-scroll"
              to="services-sec"
              spy={true}
              smooth={true}
              duration={500}
            >
              OUR SERVICES
            </Link>
          </Button>
          <Button className="navLink">
            <Link
              className="link-nav-scroll"
              to="about-sec"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </Button>
          <Button className="navLink contact">Contact us</Button>
        </div>
        <div className="navIcons">
          <div className="navIcon search">
            <input type="text" />
            <IconButton className="button" variant="text">
              <SearchRoundedIcon />
            </IconButton>
          </div>
          <div className="navIcon profile">
            <IconButton className="button" variant="text">
              <PersonOutlineIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
