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
          Lorem ipsum dolor sit amet consectetur. Dolor justo nulla eu egestas.
          Eget adipiscing ut massa sed. Luctus risus adipiscing commodo facilisi
          gravida. Tincidunt massa auctor viverra justo tincidunt in morbi
          viverra. Lobortis etiam tempor non sem nunc varius. Ut risus nisl
          tincidunt lectus urna imperdiet nisl orci et. Ullamcorper ridiculus
          imperdiet diam tristique consequat aliquet tristique eget.
        </div>
        <div className="contentB">
          <div className="contentHeadingAbout">
            <img src={Mission} alt="Mission" />
            <span>Our Mission</span>
          </div>
          <div className="contentAboutDesc">
            Ullamcorper ridiculus imperdiet diam tristique consequat aliquet
            tristique eget. Facilisi aliquet enim amet pharetra sit.
          </div>
        </div>
        <div className="contentB">
          <div className="contentHeadingAbout">
            <img src={Vision} alt="Vision" />
            <span>Vision</span>
          </div>
          <div className="contentAboutDesc">
            Ullamcorper ridiculus imperdiet diam tristique consequat aliquet
            tristique eget. Facilisi aliquet enim amet pharetra sit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
