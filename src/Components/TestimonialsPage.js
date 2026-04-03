import React, { useState } from "react";
import Testimonial from "./Testimonial";
import { AiOutlineClose, AiFillStar } from "react-icons/ai";
import { FiCheckCircle } from "react-icons/fi";

const TestimonialsPage = () => {
    const [rating, setRating] = useState(5);
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(false);
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    return (
        <div className="testimonials-page-wrapper premium-page">
            <div className="work-section-top">
                <div className="hero-badge">TRUSTED BY 10,000+ CUSTOMERS</div>
                <h1 className="primary-heading">Real Stories, <span className="hero-highlight">Pure Love.</span></h1>
                <p className="primary-text" style={{ maxWidth: "700px" }}>
                    We believe data tells part of the story, but voices tell the rest. Read how we've 
                    transformed daily dining for food enthusiasts across the nation.
                </p>
            </div>

            {/* Main Marquee Section */}
            <div className="testimonial-marquee-wrapper">
                <Testimonial hideHeader={true} />
            </div>

            {/* Social Proof Stats */}
            <div className="social-proof-banner">
                <div className="proof-item">
                    <h2>4.9/5</h2>
                    <p>Average Rating</p>
                </div>
                <div className="proof-separator"></div>
                <div className="proof-item">
                    <h2>98%</h2>
                    <p>On-time Delivery</p>
                </div>
                <div className="proof-separator"></div>
                <div className="proof-item">
                    <h2>500k+</h2>
                    <p>Happy Moments</p>
                </div>
            </div>

            {/* Call to action section with enhanced design */}
            <div className="share-experience-section-premium">
                <div className="cta-glass-card">
                    <h2 className="primary-heading">Your Voice Matters</h2>
                    <p className="primary-text">
                        Had a memorable meal? Your feedback fuels our passion for perfection.
                        Join our community of food critics.
                    </p>
                    <button
                        className="hero-cta-primary"
                        onClick={() => setShowModal(true)}
                    >
                        Review Our Service
                    </button>
                    
                    {/* Visual decoration for the section */}
                    <div className="cta-decoration dec-1"></div>
                    <div className="cta-decoration dec-2"></div>
                </div>
            </div>

            {/* Review Modal */}
            {showModal && (
                <div className="review-modal-overlay">
                    <div className="review-modal-content premium-modal">
                        <AiOutlineClose
                            className="close-modal"
                            onClick={() => setShowModal(false)}
                        />
                        <div className="modal-header">
                            <h2>Share Your Experience</h2>
                            <p>Let us know what you loved (or how we can improve).</p>
                        </div>
                        <form className="review-form premium-form" onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="e.g. Nishesh Chaudhary" required />
                            </div>
                            <div className="input-group">
                                <label>Your Feedback</label>
                                <textarea placeholder="The food was amazing because..." rows="4" required></textarea>
                            </div>
                            <div className="rating-selector-placeholder">
                                <span>Rate your experience: </span>
                                <div className="stars-input">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <AiFillStar
                                            key={star}
                                            className={star <= rating ? "star-active" : "star-inactive"}
                                            onClick={() => setRating(star)}
                                            style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
                                        />
                                    ))}
                                </div>
                            </div>
                            <button type="submit" className="auth-primary-button" style={{ width: "100%" }}>
                                Publish Review
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Success Toast */}
            {showToast && (
                <div className="toast-notification premium-toast">
                    <div className="toast-icon">
                        <FiCheckCircle />
                    </div>
                    <div className="toast-text">
                        <h3>Review Published!</h3>
                        <p>Thank you for being part of our journey.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TestimonialsPage;
