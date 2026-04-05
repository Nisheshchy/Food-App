/** @format */

import React from "react";
import { FiArrowRight, FiStar, FiTruck, FiAward, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import BannerImage from "../Assets/home-banner-image.png";

const Home = () => {
  const features = [
    { icon: <FiTruck />, title: "30 Min Delivery", desc: "Lightning fast to your door" },
    { icon: <FiStar />, title: "4.9 Rated", desc: "Loved by 10,000+ customers" },
    { icon: <FiAward />, title: "Best Quality", desc: "Fresh ingredients guaranteed" },
    { icon: <FiMapPin />, title: "Live Tracking", desc: "Real-time order updates" },
  ];

  return (
    <div id="home" className="home-container">
      {/* Modern Hero Section */}
      <div className="modern-hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badges">
              <div className="hero-badge">#1 Food Delivery App</div>
              <div className="live-status-badge">
                <span className="live-dot"></span> Kitchen is Open
              </div>
            </div>
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
              <Link to="/about">
                <button className="hero-cta-secondary">
                  Our Story
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
              <span className="floating-emoji">⭐</span>
              <div>
                <strong>4.9 Rating</strong>
                <p>2k+ Reviews</p>
              </div>
            </div>
            <div className="floating-card floating-card-2">
              <span className="floating-emoji">🛵</span>
              <div>
                <strong>30 Min</strong>
                <p>Fast Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By / Stats Section */}
      <div className="trusted-by-section">
        <div className="trusted-by-title">Trusted by thousands of foodies</div>
        <div className="trusted-stats">
          <div className="stat-item">
            <span className="stat-value">50k+</span>
            <span className="stat-label">Active Users</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">200+</span>
            <span className="stat-label">Top Restaurants</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">4.9/5</span>
            <span className="stat-label">Google Rating</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">15m</span>
            <span className="stat-label">Avg Delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
