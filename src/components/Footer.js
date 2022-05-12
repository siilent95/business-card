import React from "react";

import FaceIcon from "../images/FacebookIcon.png";
import GitIcon from "../images/GitHubIcon.png";
import InstaIcon from "../images/InstagramIcon.png";
import TwitterIcon from "../images/TwitterIcon.png";

export default function Footer() {
  return (
    <div className="footer">
      <img src={TwitterIcon} alt="" />
      <img src={FaceIcon} alt="" />
      <img src={InstaIcon} alt="" />
      <img src={GitIcon} alt="" />
    </div>
  );
}
