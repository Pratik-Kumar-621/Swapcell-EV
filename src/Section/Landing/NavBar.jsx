import React, { useState } from "react";
import Logo from "../../Media/Landing/Logo.png";
import { Button, IconButton } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const NavBar = () => {
  const [active, setActive] = useState("1");
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navItems">
        <div className="navLinks">
          <Button
            className={`navLink ${active === "1" && "active"}`}
            onClick={() => setActive("1")}
          >
            Home
          </Button>
          <Button
            className={`navLink ${active === "2" && "active"}`}
            onClick={() => setActive("2")}
          >
            TECHNOLOGY
          </Button>
          <Button
            className={`navLink ${active === "3" && "active"}`}
            onClick={() => setActive("3")}
          >
            OUR SERVICES
          </Button>
          <Button
            className={`navLink ${active === "4" && "active"}`}
            onClick={() => setActive("4")}
          >
            About
          </Button>
          <Button
            className={`navLink ${active === "5" && "active"}`}
            onClick={() => setActive("5")}
          >
            Contact us
          </Button>
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
