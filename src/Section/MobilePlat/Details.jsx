import React from "react";
import Main from "../../Media/MobilePlat/Main.png";
import Download from "../../Media/MobilePlat/Download.png";

const Details = () => {
  return (
    <div className="mobilePlat">
      <div className="mobilePlatDesc">
        <div className="mobilePlatDesc1">
          Around the world today, mobile is a dominant force with its global
          growth and pervasiveness. So, Swapcell EV has come up with a
          mobile-based platform for handy user experience.
          <br />
          <br /> With our user-friendly Mobile Application, Swapcell EV yearns
          to enhance our customer's and partner's experience. We cherish our
          customers and partners by providing better services.
        </div>
        <div className="mobilePlatDesc2">
          <span>Now Available on PlayStore!</span>
          <img src={Download} alt="Download" />
        </div>
      </div>
      <div className="mobilePlatDash"></div>
      <div className="mobilePlatImg">
        <img src={Main} alt="Main" />
      </div>
    </div>
  );
};

export default Details;
