import React from "react";
import About from "../../Media/About/About.png";
import Mission from "../../Media/About/Mission.png";
import Vision from "../../Media/About/Vision.png";

const Details = () => {
  return (
    <div className="aboutDetails">
      <div className="aboutImage">
        <img src={About} alt="About" />
      </div>
      <div className="aboutContent">
        <div className="contentA">
          A predominant hurdle for EVs in India or globally anywhere is charging
          or the shortage of charging stations, thereby making them impractical
          for lengthy distance drives. <br /> Electica Energy stands here to
          provide convenience in mobility of the two and three wheelers through
          our quick and effortless Battery Swapping platforms.
          <br /> Imagine if your battery is suddenly out of charge. Would you
          wait for hours for it to re-charge?
          <br /> No! Here comes Electica Enerygy to the rescue. Just swap the
          battery at our smart swapping station and continue your journey.
          <br /> Our technology of move-and-charge and wireless power drive will
          help alleviate the overdependence on batteries.
        </div>
        <div className="contentB">
          <div className="contentHeadingAbout">
            <img src={Mission} alt="Mission" />
            <span>Our Mission</span>
          </div>
          <div className="contentAboutDesc">
            To expedite EV movability through renewal source of energy.
          </div>
        </div>
        <div className="contentB">
          <div className="contentHeadingAbout">
            <img src={Vision} alt="Vision" />
            <span>Vision</span>
          </div>
          <div className="contentAboutDesc">
            To be the leading battery swapping platform across the globe.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
