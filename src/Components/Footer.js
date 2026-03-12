import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.png";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";

const Footer = () => {
  const [showToast, setShowToast] = useState(false);
  const [email, setEmail] = useState("");

  const handleJoin = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setShowToast(true);
      setEmail("");
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  return (
    <footer className="new-footer">
      <div className="footer-main-content">
        <div className="footer-brand-section">
          <div className="footer-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <p className="footer-description">
            Experience the taste of quality and nutrition. We deliver fresh,
            chef-prepared meals directly to your doorstep, ensuring health meets
            convenience in every bite.
          </p>
          <div className="footer-social-links">
            <a href="#" aria-label="Twitter">
              <BsTwitter />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="LinkedIn">
              <SiLinkedin />
            </a>
            <a href="#" aria-label="YouTube">
              <BsYoutube />
            </a>
          </div>
        </div>

        <div className="footer-links-container">
          <div className="footer-nav-column">
            <h3>Links</h3>
            <div className="footer-nav-links">
              <Link to="/about">Quality</Link>
              <Link to="/contact">Help</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/">Careers</Link>
              <Link to="/testimonials">Testimonials</Link>
              <Link to="/">Work</Link>
            </div>
          </div>

          <div className="footer-nav-column">
            <h3>Contact</h3>
            <div className="footer-nav-links">
              <a href="tel:+9779812345678">+977-9812345678</a>
              <a href="mailto:contact@caffet.com">contact@caffet.com</a>
              <span>Durbar Marg, Kathmandu, Nepal</span>
              <span>Sun - Fri: 8am - 9pm</span>
            </div>
          </div>

          <div className="footer-newsletter-section">
            <h3>Newsletter</h3>
            <p>Subscribe for weekly meal plans and exclusive offers.</p>
            <form className="newsletter-form" onSubmit={handleJoin}>
              <input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-btn">
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="footer-divider"></div>
        <div className="footer-copyright-content">
          <p>
            &copy; {new Date().getFullYear()} Caffet Food App. All Rights
            Reserved.
          </p>
          <div className="footer-legal-links">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>

      {/* Success Toast */}
      {showToast && (
        <div className="toast-notification">
          <div className="toast-icon">
            <FiCheckCircle />
          </div>
          <div className="toast-text">
            <h3>Success!</h3>
            <p>Welcome to our culinary community!</p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
