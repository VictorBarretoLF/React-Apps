import React from "react";

// import onlineIcon from "../../icons/onlineIcon.png";
// import closeIcon from "../../icons/closeIcon.png";

import { RiRadioButtonLine } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";

import "./InfoBar.css";
import { Link } from "react-router-dom";

const InfoBar = ({ room = "room" }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <RiRadioButtonLine title="online" className="onlineIcon" />

      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <Link to="/" title="close">
        <AiFillCloseCircle />
      </Link>
    </div>
  </div>
);

export default InfoBar;
