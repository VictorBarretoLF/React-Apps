import React from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={Logo} alt="logo" />
      <span>
        Made with love and <b>React.js</b>.  
      </span>
    </footer>
  );
};

export default Footer;
