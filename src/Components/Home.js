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

  const benefits = [
    {
      title: "Handpicked Ingredients",
      desc: "We source our ingredients from local organic farms to ensure the best taste and nutrition.",
      icon: "🥬"
    },
    {
      title: "Professional Chefs",
      desc: "Our culinary team consists of Michelin-star experienced chefs who love what they do.",
      icon: "👨‍🍳"
    },
    {
      title: "Sustainable Packaging",
      desc: "100% biodegradable packaging to keep your food fresh and our planet green.",
      icon: "🌍"
    }
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
            <span className="stat-value">5k+</span>
            <span className="stat-label">Active Users</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">20+</span>
            <span className="stat-label">Top Restaurants</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">4.9/5</span>
            <span className="stat-label">Google Rating</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">1m</span>
            <span className="stat-label">Avg Delivery</span>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div id="benefits" className="benefits-section">
        <div className="benefits-header">
          <p className="primary-subheading">Benefits</p>
          <h1 className="primary-heading">Why Choose Us?</h1>
          <p className="primary-text">
            We're not just about delivery. We're about delivering an experience that 
            makes every meal special and every customer happy.
          </p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, i) => (
            <div className="benefit-card" key={i}>
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* App Download Promo */}
      <div className="app-promo-section">
        <div className="app-promo-content">
          <div className="app-promo-text">
            <h1 className="primary-heading">Food in your pocket.</h1>
            <p className="primary-text">
              Download our mobile app to track orders in real-time, get exclusive 
              discounts, and order your favorites with just one tap.
            </p>
            <div className="app-store-buttons">
              <button className="app-btn">
                <span className="app-btn-icon">🍎</span>
                <div className="app-btn-text">
                  <span>Download on the</span>
                  <strong>App Store</strong>
                </div>
              </button>
              <button className="app-btn">
                <span className="app-btn-icon">🤖</span>
                <div className="app-btn-text">
                  <span>Get it on</span>
                  <strong>Google Play</strong>
                </div>
              </button>
            </div>
          </div>
          <div className="app-promo-visual">
             <div className="phone-mockup">
               <div className="phone-screen">
                 <img src={BannerImage} alt="App screen" />
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div id="newsletter" className="newsletter-section">
        <div className="newsletter-card">
          <h2>Hungry for more?</h2>
          <p>Join our newsletter and get 20% off your first order!</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email address" />
            <button className="secondary-button">Subscribe</button>
          </div>
          <p className="newsletter-note">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
