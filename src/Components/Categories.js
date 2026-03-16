/** @format */

import React from "react";

import { Link } from "react-router-dom";

const Categories = () => {
    const categoriesData = [
        {
            image: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=500&auto=format&fit=crop&q=60",
            title: "Italian",
            count: "15+ Dishes",
        },
        {
            image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=500&auto=format&fit=crop&q=60",
            title: "Japanese",
            count: "20+ Dishes",
        },
        {
            image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&auto=format&fit=crop&q=60",
            title: "Indian",
            count: "25+ Dishes",
        },
        {
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60",
            title: "Healthy",
            count: "10+ Dishes",
        },
    ];

    return (
        <div className="work-section-wrapper" style={{ marginTop: "10rem" }}>
            <div className="work-section-top">
                <p className="primary-subheading">Categories</p>
                <h1 className="primary-heading">Popular Cuisines</h1>
            </div>
            <div className="work-section-bottom">
                {categoriesData.map((category, index) => (
                    <Link to="/menu" key={index} style={{ textDecoration: "none", color: "inherit" }}>
                        <div className="work-section-info category-card" style={{ width: "220px", minHeight: "300px" }}>
                            <div className="info-boxes-img-container" style={{ height: "150px" }}>
                                <img src={category.image} alt={category.title} />
                            </div>
                            <h2>{category.title}</h2>
                            <p style={{ color: "#fe5d0d", fontWeight: "700" }}>{category.count}</p>
                            <span style={{ fontSize: "0.8rem", color: "#6a6a6a", marginTop: "0.5rem" }}>Show Dishes</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;
