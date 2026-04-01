/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
    const productInfoData = [
        {
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60",
            title: "Delicious Pizza",
            text: "Experience the authentic taste of wood-fired pizza with fresh toppings and gooey cheese.",
        },
        {
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60",
            title: "Healthy Salad",
            text: "A vibrant mix of organic greens, crunchy vegetables, and our signature balsamic dressing.",
        },
        {
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60",
            title: "Classic Burger",
            text: "Juicy beef patty with caramelized onions, melted cheddar, and secret sauce on a brioche bun.",
        },
    ];

    return (
        <div id="product" className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Products</p>
                <h1 className="primary-heading">Our Best Sellers</h1>
                <p className="primary-text">
                    Explore our wide range of delicious and healthy meals prepared with the
                    finest ingredients, delivered straight to your door.
                </p>
                <Link to="/menu" style={{ textDecoration: "none" }}>
                    <button className="secondary-button" style={{ marginTop: "1rem" }}>
                        View Full Menu
                    </button>
                </Link>
            </div>
            <div className="work-section-bottom">
                {productInfoData.map((data) => (
                    <div className="work-section-info menu-card" key={data.title}>
                        <div className="info-boxes-img-container menu-img-container">
                            <img src={data.image} alt={data.title} />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                        <Link to="/menu" style={{ textDecoration: "none" }}>
                            <button className="secondary-button" style={{ margin: "1rem 2rem 2.5rem 2rem" }}>
                                View in Menu
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
