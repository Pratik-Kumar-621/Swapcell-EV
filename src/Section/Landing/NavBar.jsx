import React, { useState } from "react";
import Logo from "../../Media/Landing/Logo.png";
import { Button, IconButton } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navItems navDash">
        <div className="navLinks">
          <NavLink className="navLink" activeClassName="active" to="/home">
            <Button>Home</Button>
          </NavLink>

          <NavLink
            className="navLink"
            activeClassName="active"
            to="/technology"
          >
            <Button>TECHNOLOGY</Button>
          </NavLink>

          <NavLink className="navLink" activeClassName="active" to="/services">
            <Button>OUR SERVICES</Button>
          </NavLink>

          <NavLink className="navLink" activeClassName="active" to="/about">
            <Button>About</Button>
          </NavLink>

          <NavLink className="navLink" activeClassName="active" to="/contact">
            <Button>Contact us</Button>
          </NavLink>
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
