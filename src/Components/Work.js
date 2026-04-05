/** @format */

import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import { Link } from "react-router-dom";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Your Favorites",
      text: "Browse our diverse menu featuring over 50 gourmet dishes from around the world, tailored to your dietary needs.",
    },
    {
      image: ChooseMeals,
      title: "Schedule Delivery",
      text: "Choose a delivery time that fits your busy schedule. We offer flexible slots from early breakfast to late-night cravings.",
    },
    {
      image: DeliveryMeals,
      title: "Enjoy Your Meal",
      text: "Our fast and reliable riders ensure your food arrives hot, fresh, and ready to be enjoyed straight away.",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Process</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Getting your favorite food delivered is now easier than ever. Follow these three simple steps
          to experience gourmet dining at home.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data, index) => (
          <div className="work-section-info" key={data.title}>
            <div className="step-number">{index + 1}</div>
            <div className="info-boxes-img-container">
              <img src={data.image} alt={data.title} className="work-icon" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
      <div className="work-cta-container">
          <Link to="/menu">
            <button className="primary-button">Start Your Order Now</button>
          </Link>
      </div>
    </div>
  );
};

export default Work;
