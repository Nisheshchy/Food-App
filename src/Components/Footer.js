/** @format */

import React from "react";
import Logo from "../Assets/logo.png";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <FaFacebook />
          <SiLinkedin />
          <BsYoutube />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Careers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>+977-9812345678</span>
          <span>g8F4M@caffet.com</span>

          <span>contact@caffet.com</span>
          <span>Kathmandu, Nepal</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
