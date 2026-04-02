import React, { useState, useEffect } from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import MasterChef from "../Assets/master-chef.png";

const AboutUs = () => {
    const [years, setYears] = useState(0);
    const [customers, setCustomers] = useState(0);
    const [chefs, setChefs] = useState(0);

    useEffect(() => {
        const duration = 2000;
        const interval = 20;
        const steps = duration / interval;

        const yearsIncrement = 4 / steps;
        const customersIncrement = 7000 / steps;
        const chefsIncrement = 20 / steps;

        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            setYears((prev) => Math.min(Math.round(currentStep * yearsIncrement), 15));
            setCustomers((prev) =>
                Math.min(Math.round(currentStep * customersIncrement), 75000)
            );
            setChefs((prev) => Math.min(Math.round(currentStep * chefsIncrement), 25));

            if (currentStep >= steps) clearInterval(timer);
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="about-page-wrapper">
            {/* --- HERO SECTION --- */}
            <div className="about-section-container" style={{ marginTop: "5rem" }}>
                <div className="about-background-image-container">
                    <img src={AboutBackground} alt="" />
                </div>
                <div className="about-section-image-container">
                    <img src={AboutBackgroundImage} alt="Our Heritage" />
                </div>
                <div className="about-section-text-container">
                    <p className="primary-subheading">Our Legacy</p>
                    <h1 className="primary-heading">
                        Crafting Culinary Excellence Since 2023.
                    </h1>
                    <p className="primary-text">
                        What began as a small family kitchen driven by a passion for pure flavor has evolved into a nationwide standard for premium dining. We believe that food isn't just fuel—it's an experience that connects us all.
                    </p>
                    <p className="primary-text">
                        Every ingredient in our kitchen is hand-selected from local sustainable farms. Our commitment to organic, non-GMO produce ensures that every bite you take is packed with nutrition and the authentic taste of nature.
                    </p>
                </div>
            </div>

            {/* --- MISSION & VISION SECTION (New Feature) --- */}
            <div className="mission-vision-container">
                <div className="mission-card">
                    <div className="card-icon">🎯</div>
                    <h2>Our Mission</h2>
                    <p className="primary-text">
                        To redefine the food delivery experience by combining restaurant-quality gourmet meals with the convenience of modern technology, without ever compromising on health or sustainability.
                    </p>
                </div>
                <div className="vision-card">
                    <div className="card-icon">✨</div>
                    <h2>Our Vision</h2>
                    <p className="primary-text">
                        To become the world's most trusted partner in healthy living, proving that fast delivery and high-quality organic nutrition can coexist beautifully in every home.
                    </p>
                </div>
            </div>

            {/* --- STATS SECTION --- */}
            <div className="about-stats-section">
                <div className="stats-container">
                    <div className="stat-box">
                        <h1>{years}+</h1>
                        <p>Years of Perfection</p>
                    </div>
                    <div className="stat-box">
                        <h1>{customers > 999 ? (customers / 1000).toFixed(0) + "k" : customers}+</h1>
                        <p>Delighted Guests</p>
                    </div>
                    <div className="stat-box">
                        <h1>{chefs}+</h1>
                        <p>Master Artisans</p>
                    </div>
                </div>
            </div>

            {/* --- TEAM SECTION (New Feature) --- */}
            <div className="about-team-section">
                <p className="primary-subheading">The Artisans</p>
                <h1 className="primary-heading">Meet Our Master Chefs</h1>
                <div className="team-grid">
                    <div className="team-member-card">
                        <img src={MasterChef} alt="Chef Roshni" className="member-image" />
                        <div className="member-info">
                            <h3>Chef Roshni Chaudhary</h3>
                            <p>Executive Chef & Founder</p>
                        </div>
                    </div>
                    <div className="team-member-card">
                        <img src="https://aaft.com/blog/wp-content/uploads/2024/09/pikaso_texttoimage_Steps-to-Becoming-a-Professional-Chef-in-India.jpeg" alt="Chef Bimal" className="member-image" />
                        <div className="member-info">
                            <h3>Chef Bimal Haary</h3>
                            <p>Head of Pastry Arts</p>
                        </div>
                    </div>
                    <div className="team-member-card">
                        <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600&auto=format&fit=crop&q=80" alt="Chef Marcus" className="member-image" />
                        <div className="member-info">
                            <h3>Chef Marcus Thorne</h3>
                            <p>Lead Grill Master</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- VALUES SECTION --- */}
            <div className="about-values-section" style={{ background: "transparent" }}>
                <div className="work-section-top">
                    <p className="primary-subheading">Core Values</p>
                    <h1 className="primary-heading">Our Driving Force</h1>
                </div>
                <div className="work-section-bottom">
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img
                                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&auto=format&fit=crop&q=60"
                                alt="Uncompromising Quality"
                            />
                        </div>
                        <h2>Pure Integrity</h2>
                        <p>
                            We only use zero-chemical, farm-fresh ingredients. If it's not perfect, it doesn't leave our kitchen.
                        </p>
                    </div>
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img
                                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&auto=format&fit=crop&q=60"
                                alt="Sustainability"
                            />
                        </div>
                        <h2>Eco-Innovation</h2>
                        <p>
                            Our carbon-neutral delivery and 100% compostable packaging ensure our planet stays as healthy as our food.
                        </p>
                    </div>
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img
                                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60"
                                alt="Customer Support"
                            />
                        </div>
                        <h2>Guest Obsession</h2>
                        <p>
                            We don't just deliver food; we deliver joy. Every interaction is designed to exceed your highest expectations.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- JOURNEY TIMELINE (New Feature) --- */}
            <div className="about-timeline-section">
                <div className="work-section-top">
                    <p className="primary-subheading">Our Timeline</p>
                    <h1 className="primary-heading">A Decade of Flavor</h1>
                </div>
                <div className="timeline-container">
                    <div className="timeline-item left">
                        <div className="timeline-content">
                            <h2>2024</h2>
                            <h3>The Seed is Sown</h3>
                            <p>Launched as a boutique kitchen catering to local organic food enthusiasts.</p>
                        </div>
                    </div>
                    <div className="timeline-item right">
                        <div className="timeline-content">
                            <h2>2025</h2>
                            <h3>Nationwide Expansion</h3>
                            <p>Opened our 50th hub, bringing the taste of quality across the country.</p>
                        </div>
                    </div>
                    <div className="timeline-item left">
                        <div className="timeline-content">
                            <h2>2026</h2>
                            <h3>Sustainability Milestone</h3>
                            <p>Became the first major delivery platform to operate on 100% renewable energy.</p>
                        </div>
                    </div>
                    <div className="timeline-item right">
                        <div className="timeline-content">
                            <h2>2026</h2>
                            <h3>Next-Gen Kitchens</h3>
                            <p>Integrating AI-driven personalized nutrition into every meal plan.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
