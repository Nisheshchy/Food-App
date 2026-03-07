import React, { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

const Contact = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    e.target.reset();
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="contact-page-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Have Any Questions?</h1>
        <h1 className="primary-heading">Let Us Contact You</h1>
      </div>
      <form className="contact-form-container-home" onSubmit={handleSubmit}>
        <input type="email" placeholder="yourmail@gmail.com" required />
        <button type="submit" className="secondary-button">Submit</button>
      </form>

      {/* Success Toast */}
      {showToast && (
        <div className="toast-notification">
          <div className="toast-icon">
            <FiCheckCircle />
          </div>
          <div className="toast-text">
            <h3>Submitted!</h3>
            <p>We'll contact you at your email address.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
