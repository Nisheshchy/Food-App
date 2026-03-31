/** @format */

import React, { useState, useEffect } from "react";
import { FiArrowRight, FiClock, FiTag, FiStar, FiTruck, FiAward } from "react-icons/fi";
import { Link } from "react-router-dom";
import BannerImage from "../Assets/home-banner-image.png";

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });

  useEffect(() => {
    // Countdown resets daily — ends at midnight tonight
    const deadline = new Date();
    deadline.setHours(23, 59, 59, 999);

    const updateTimer = () => {
      const now = new Date();
      const diff = deadline - now;
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  // Pool of 9 offers — 3 are picked each day based on the date
  const allOffers = [
    { title: "Weekend Special", discount: "20% OFF", code: "FOOD20", description: "On all orders above $30", color: "#fc5c65" },
    { title: "Free Delivery", discount: "FREE", code: "FREESHIP", description: "No shipping charges on any order", color: "#2ecc71" },
    { title: "Flat Discount", discount: "$10 OFF", code: "SAVE10", description: "On your first order", color: "#9b59b6" },
    { title: "Lunch Deal", discount: "15% OFF", code: "LUNCH15", description: "Orders placed between 11am–2pm", color: "#e67e22" },
    { title: "Family Bundle", discount: "25% OFF", code: "FAMILY25", description: "On orders above $60", color: "#e74c3c" },
    { title: "Happy Hour", discount: "$5 OFF", code: "HAPPY5", description: "Every day 4pm–7pm", color: "#1abc9c" },
    { title: "New User Offer", discount: "30% OFF", code: "NEWBIE30", description: "For first-time customers only", color: "#3498db" },
    { title: "Combo Saver", discount: "$8 OFF", code: "COMBO8", description: "On any combo meal above $25", color: "#8e44ad" },
    { title: "Midnight Munchies", discount: "18% OFF", code: "NIGHT18", description: "Orders placed after 9pm", color: "#2c3e50" },
  ];

  // Use today's date number as a seed to rotate 3 offers daily
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const startIndex = seed % allOffers.length;
  const offers = [
    allOffers[startIndex % allOffers.length],
    allOffers[(startIndex + 3) % allOffers.length],
    allOffers[(startIndex + 6) % allOffers.length],
  ];

  const features = [
    { icon: <FiTruck />, title: "30 Min Delivery", desc: "Lightning fast to your door" },
    { icon: <FiStar />, title: "4.9 Rated", desc: "Loved by 10,000+ customers" },
    { icon: <FiAward />, title: "Best Quality", desc: "Fresh ingredients guaranteed" },
  ];

  return (
    <div id="home" className="home-container">
      {/* Modern Hero Section */}
      <div className="modern-hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">#1 Food Delivery App</div>
            <h1 className="hero-title">
              Delicious Food,
              <span className="hero-highlight"> Delivered Fast.</span>
            </h1>
            <p className="hero-subtitle">
              From our kitchen to your doorstep — fresh, chef-prepared meals
              crafted with love and the finest ingredients. Order now and taste
              the difference.
            </p>
            <div className="hero-actions">
              <Link to="/menu">
                <button className="hero-cta-primary">
                  Order Now <FiArrowRight />
                </button>
              </Link>
            </div>

            {/* Quick Feature Pills */}
            <div className="hero-features">
              {features.map((f, i) => (
                <div className="hero-feature-pill" key={i}>
                  <span className="feature-pill-icon">{f.icon}</span>
                  <div>
                    <strong>{f.title}</strong>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image-glow"></div>
            <img src={BannerImage} alt="Delicious food" className="hero-main-image" />
            {/* Floating Cards */}
            <div className="floating-card floating-card-1">
              <span className="floating-emoji"></span>
              <div>
                <strong>4.9 Rating</strong>
                <p>2k+ Reviews</p>
              </div>
            </div>
            <div className="floating-card floating-card-2">
              <span className="floating-emoji"></span>
              <div>
                <strong>30 Min</strong>
                <p>Fast Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offers & Discount Section */}
      <div className="offers-section">
        <div className="offers-header">
          <p className="primary-subheading">Limited Time</p>
          <h2 className="primary-heading">Today's Best Offers</h2>
          <p className="primary-text">
            Grab these exclusive deals before they expire!
          </p>
        </div>

        <div className="countdown-container">
          <div className="countdown-label">
            <FiClock /> Offers end in
          </div>
          <div className="countdown-timer">
            {[
              { val: timeLeft.days, unit: "Days" },
              { val: timeLeft.hours, unit: "Hours" },
              { val: timeLeft.minutes, unit: "Mins" },
              { val: timeLeft.seconds, unit: "Secs" },
            ].map((t, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="countdown-separator">:</span>}
                <div className="countdown-box">
                  <span className="countdown-value">{String(t.val).padStart(2, "0")}</span>
                  <span className="countdown-unit">{t.unit}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="offers-grid">
          {offers.map((offer, index) => (
            <div className="offer-card" key={index} style={{ "--accent": offer.color }}>
              <div className="offer-badge" style={{ background: offer.color }}>
                {offer.discount}
              </div>
              <h3 className="offer-title">{offer.title}</h3>
              <p className="offer-description">{offer.description}</p>
              <div className="offer-code">
                <FiTag />
                <span>Use code: <strong>{offer.code}</strong></span>
              </div>
              <Link to="/menu">
                <button className="offer-btn" style={{ background: offer.color }}>
                  Shop Now <FiArrowRight />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
