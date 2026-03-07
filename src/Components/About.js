/** @format */

import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About Us</p>
        <h1 className="primary-heading">
          We Believe in Quality Food & Healthy Life.
        </h1>
        <p className="primary-text">
          At our kitchen, we combine traditional recipes with modern nutritional
          science to create meals that are both delicious and healthy. Every
          ingredient is hand-picked for its quality and freshness.
        </p>
        <p className="primary-text">
          Our mission is to make gourmet dining accessible and convenient,
          ensuring you never have to choose between your busy schedule and
          your health. Experience the difference of passionate cooking delivered
          right to your door.
        </p>
        <div className="about-buttons-container">
          <Link to="/about" style={{ textDecoration: "none" }}>
            <button className="secondary-button">Learn More</button>
          </Link>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;