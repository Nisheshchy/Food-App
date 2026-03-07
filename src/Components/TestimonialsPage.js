import React, { useState } from "react";
import Testimonial from "./Testimonial";
import { AiOutlineClose } from "react-icons/ai";
import { FiCheckCircle } from "react-icons/fi";

const TestimonialsPage = () => {
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
        <div className="testimonials-page-wrapper" style={{ marginTop: "5rem" }}>
            <div className="work-section-top">
                <p className="primary-subheading">Reviews</p>
                <h1 className="primary-heading">Customer Stories</h1>
                <p className="primary-text">
                    We take pride in our service and the quality of our food. Read what
                    our regular customers have to say about their experiences with us.
                </p>
            </div>
            <Testimonial hideHeader={true} />

            <div className="share-experience-section" style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                margin: "10rem auto",
                padding: "0 2rem"
            }}>
                <h2 className="primary-heading">Share Your Experience</h2>
                <p className="primary-text" style={{ maxWidth: "600px" }}>
                    Had a great meal? We'd love to hear from you too!
                </p>
                <button
                    className="secondary-button"
                    style={{ marginTop: "2rem" }}
                    onClick={() => setShowModal(true)}
                >
                    Write a Review
                </button>
            </div>

            {/* Review Modal */}
            {showModal && (
                <div className="review-modal-overlay">
                    <div className="review-modal-content">
                        <AiOutlineClose
                            className="close-modal"
                            onClick={() => setShowModal(false)}
                        />
                        <h2>Submit Review</h2>
                        <form className="review-form" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Your Name" required />
                            <textarea placeholder="Tell us about your experience..." rows="4" required></textarea>
                            <button type="submit" className="secondary-button" style={{ width: "100%" }}>
                                Send Review
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Success Toast */}
            {showToast && (
                <div className="toast-notification">
                    <div className="toast-icon">
                        <FiCheckCircle />
                    </div>
                    <div className="toast-text">
                        <h3>Success!</h3>
                        <p>Thank you for your valuable feedback.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TestimonialsPage;
