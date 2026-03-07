/** @format */

import React from "react";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";

const ContactUs = () => {
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch("https://formsubmit.co/ajax/tharunishesh2025@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setIsSubmitted(true);
                setTimeout(() => setIsSubmitted(false), 5000);
                e.target.reset();
            }
        } catch (error) {
            console.error("Submission failed:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="contact-page-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Contact</p>
                <h1 className="primary-heading">Have Any Questions?</h1>
                <p className="primary-text">
                    Whether you have a question about our menu, delivery, or anything
                    else, our team is ready to answer all your questions.
                </p>
            </div>

            <div className="contact-main-container">
                <div className="contact-info-section">
                    <div className="contact-info-card">
                        <FiPhoneCall className="contact-icon" />
                        <h3>Call Us</h3>
                        <p>+1 234 567 890</p>
                    </div>
                    <div className="contact-info-card">
                        <FiMail className="contact-icon" />
                        <h3>Email Us</h3>
                        <p>tharunishesh2025@gmail.com</p>
                    </div>
                    <div className="contact-info-card">
                        <FiMapPin className="contact-icon" />
                        <h3>Visit Us</h3>
                        <p>Durbar Marg, Kathmandu, Nepal, 44600</p>
                    </div>
                </div>

                <div className="contact-form-section">
                    <form onSubmit={handleSubmit} className="contact-form-container-main">
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="yourmail@gmail.com" required />
                        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                        <button type="submit" className="secondary-button" style={{ width: '100%' }}>Send Message</button>
                    </form>
                </div>

                {isSubmitted && (
                    <div className="toast-notification">
                        <div className="toast-icon">✓</div>
                        <div className="toast-text">
                            <h3>Message Sent!</h3>
                            <p>We'll get back to you soon.</p>
                        </div>
                    </div>
                )}
            </div>

            <div className="contact-map-section">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1764658097063!2d85.31558237536968!3d27.712258925183422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1907b03657ff%3A0xe5499257e8fa1347!2sDurbar+Marg%2C+Kathmandu+44600!5e0!3m2!1sen!2snp!4v1741309300000!5m2!1sen!2snp"
                    width="100%"
                    height="650"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactUs;
