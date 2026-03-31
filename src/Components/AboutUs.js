import React, { useState, useEffect } from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";

const AboutUs = () => {
    const [years, setYears] = useState(0);
    const [customers, setCustomers] = useState(0);
    const [chefs, setChefs] = useState(0);

    useEffect(() => {
        const duration = 2000; // 2 seconds
        const interval = 20;
        const steps = duration / interval;

        const yearsIncrement = 10 / steps;
        const customersIncrement = 50000 / steps;
        const chefsIncrement = 15 / steps;

        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            setYears((prev) => Math.min(Math.round(currentStep * yearsIncrement), 10));
            setCustomers((prev) =>
                Math.min(Math.round(currentStep * customersIncrement), 50000)
            );
            setChefs((prev) => Math.min(Math.round(currentStep * chefsIncrement), 15));

            if (currentStep >= steps) clearInterval(timer);
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="about-page-wrapper">
            <div className="about-section-container" style={{ marginTop: "5rem" }}>
                <div className="about-background-image-container">
                    <img src={AboutBackground} alt="" />
                </div>
                <div className="about-section-image-container">
                    <img src={AboutBackgroundImage} alt="" />
                </div>
                <div className="about-section-text-container">
                    <p className="primary-subheading">Our Story</p>
                    <h1 className="primary-heading">
                        Established with a Passion for Pure Taste.
                    </h1>
                    <p className="primary-text">
                        Founded in 2025, our journey began with a simple idea: to bring
                        restaurant-quality, healthy meals directly to people's doorsteps. We
                        noticed a gap between fast food and home cooking, and we set out to
                        bridge it with love and fresh ingredients.
                    </p>
                    <p className="primary-text">
                        What started as a small kitchen in a suburban garage has grown into
                        a nationwide movement. Our mission is to transform how people
                        perceive "delivery food" — making it synonymous with nutrition,
                        flavor, and elegance.
                    </p>
                    <p className="primary-text">
                        Every dish we serve is a testament to our commitment to culinary
                        excellence. We work closely with local farmers to ensure every
                        ingredient is peak-season and organic, supporting the community that
                        supports us.
                    </p>
                </div>
            </div>

            <div className="about-values-section">
                <div className="work-section-top">
                    <p className="primary-subheading">Values</p>
                    <h1 className="primary-heading">What Drives Us</h1>
                </div>
                <div className="work-section-bottom">
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img
                                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&auto=format&fit=crop&q=60"
                                alt="Quality"
                            />
                        </div>
                        <h2>Quality First</h2>
                        <p>
                            We never compromise on ingredients. Only the freshest, most
                            nutritious produce makes it into our kitchen.
                        </p>
                    </div>
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img
                                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&auto=format&fit=crop&q=60"
                                alt="Sustainability"
                            />
                        </div>
                        <h2>Sustainability</h2>
                        <p>
                            From eco-friendly packaging to supporting local agriculture, we
                            care deeply about our environmental footprint.
                        </p>
                    </div>
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img
                                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60"
                                alt="Customer Support"
                            />
                        </div>
                        <h2>Customer Care</h2>
                        <p>
                            Your satisfaction is our priority. Our support team is available
                            24/7 to listen, adapt, and exceed your expectations.
                        </p>
                    </div>
                </div>
            </div>

            <div className="about-stats-section">
                <div className="stats-container">
                    <div className="stat-box">
                        <h1>{years}+</h1>
                        <p>Years of Service</p>
                    </div>
                    <div className="stat-box">
                        <h1>{customers > 999 ? (customers / 1000).toFixed(0) + "k" : customers}+</h1>
                        <p>Happy Customers</p>
                    </div>
                    <div className="stat-box">
                        <h1>{chefs}+</h1>
                        <p>Master Chefs</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
