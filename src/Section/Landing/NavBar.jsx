import React from "react";
import Logo from "../../Media/Landing/Logo.png";
import { Button, IconButton, Dialog, Slide } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Link } from "react-scroll";
import { TransitionProps } from "@mui/material/transitions";
import DialogContact from "./Dialog";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>,
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
              to="about-sec"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
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
              to="tech-sec"
              spy={true}
              smooth={true}
              duration={500}
            >
              TECHNOLOGY
            </Link>
          </Button>
          <Button className="navLink contact" onClick={handleClickOpen}>
            Contact us
          </Button>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogContact HandleClose={handleClose} />
          </Dialog>
        </div>
        {/* <div className="navIcons">
          <div className="navIcon search">
            <input type="text" />
            <IconButton className="button" variant="text">
              <SearchRoundedIcon />
            </IconButton>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default NavBar;
