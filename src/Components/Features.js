/** @format */

import React from "react";

const Features = () => {
    const featuresData = [
        {
            image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500&auto=format&fit=crop&q=60",
            title: "Quality Ingredients",
            text: "We source only the freshest organic produce from local farmers every morning.",
        },
        {
            image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=500&auto=format&fit=crop&q=60",
            title: "Fast Delivery",
            text: "Your meal is prepared and delivered within 30 minutes, guaranteed hot and fresh.",
        },
        {
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60",
            title: "Best Prices",
            text: "Enjoy gourmet meals at affordable prices with our exclusive deals and rewards.",
        },
    ];

    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Why Choose Us</p>
                <h1 className="primary-heading">Excellence in Every Bite</h1>
                <p className="primary-text">
                    We pride ourselves on providing a premium dining experience that combines
                    convenience with the highest culinary standards.
                </p>
            </div>
            <div className="work-section-bottom">
                {featuresData.map((feature, index) => (
                    <div className="work-section-info" key={index}>
                        <div className="info-boxes-img-container">
                            <img src={feature.image} alt={feature.title} />
                        </div>
                        <h2>{feature.title}</h2>
                        <p>{feature.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
