import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

import { useCart } from "../Context/CartContext";

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart } = useCart();
    const [promoCode, setPromoCode] = useState("");
    const [promoApplied, setPromoApplied] = useState(null);
    const [promoError, setPromoError] = useState("");

    const promoCodes = {
        "FOOD20": { type: "percent", value: 20, label: "20% Off" },
        "SAVE10": { type: "fixed", value: 10, label: "$10 Off" },
        "FREE": { type: "shipping", value: 0, label: "Free Shipping" },
    };

    const handleApplyPromo = () => {
        const code = promoCode.trim().toUpperCase();
        if (promoCodes[code]) {
            setPromoApplied({ code, ...promoCodes[code] });
            setPromoError("");
        } else {
            setPromoError("Invalid promo code.");
            setPromoApplied(null);
        }
    };

    const handleRemovePromo = () => {
        setPromoApplied(null);
        setPromoCode("");
        setPromoError("");
    };

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = cartItems.length > 0 ? 5.00 : 0;

    let discount = 0;
    let finalShipping = shipping;
    if (promoApplied) {
        if (promoApplied.type === "percent") {
            discount = (subtotal * promoApplied.value) / 100;
        } else if (promoApplied.type === "fixed") {
            discount = Math.min(promoApplied.value, subtotal);
        } else if (promoApplied.type === "shipping") {
            finalShipping = 0;
        }
    }
    const total = subtotal - discount + finalShipping;

    return (
        <div className="cart-page-wrapper">
            <div className="cart-header">
                <Link to="/menu" className="back-link">
                    <BsArrowLeft /> Back to Menu
                </Link>
                <h1 className="primary-heading">Your Food Cart</h1>
            </div>

            {cartItems.length > 0 ? (
                <div className="cart-content">
                    <div className="cart-items-section">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item-card">
                                <div className="cart-item-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="cart-item-info">
                                    <h3>{item.name}</h3>
                                    <p className="item-price">${item.price.toFixed(2)}</p>
                                </div>
                                <div className="cart-item-actions">
                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(item.id, -1)}><AiOutlineMinus /></button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)}><AiOutlinePlus /></button>
                                    </div>
                                    <p className="item-total">${(item.price * item.quantity).toFixed(2)}</p>
                                    <button className="delete-btn" onClick={() => removeFromCart(item.id || item.name)}>
                                        <AiOutlineDelete />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary-section">
                        <div className="summary-card">
                            <h2>Order Summary</h2>

                            {/* Promo Code Section */}
                            <div className="promo-code-section">
                                <h4>Promo Code</h4>
                                {promoApplied ? (
                                    <div className="promo-applied">
                                        <div className="promo-tag">
                                            <span>🎉 {promoApplied.code} — {promoApplied.label}</span>
                                            <button onClick={handleRemovePromo} className="promo-remove-btn">✕</button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="promo-input-group">
                                        <input
                                            type="text"
                                            placeholder="Enter promo code"
                                            value={promoCode}
                                            onChange={(e) => { setPromoCode(e.target.value); setPromoError(""); }}
                                        />
                                        <button onClick={handleApplyPromo} className="promo-apply-btn">Apply</button>
                                    </div>
                                )}
                                {promoError && <p className="promo-error">{promoError}</p>}
                            </div>

                            <div className="summary-divider"></div>

                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="summary-row">
                                <span>Shipping Fees</span>
                                <span>{finalShipping === 0 && promoApplied?.type === "shipping" ? <s style={{ color: "#aaa" }}>$5.00</s> : ""} ${finalShipping.toFixed(2)}</span>
                            </div>
                            {discount > 0 && (
                                <div className="summary-row discount">
                                    <span>Discount ({promoApplied.label})</span>
                                    <span>-${discount.toFixed(2)}</span>
                                </div>
                            )}
                            <div className="summary-divider"></div>
                            <div className="summary-row total">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <button className="secondary-button" style={{ width: "100%", marginTop: "2rem" }}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="empty-cart-section">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png" alt="Empty Cart" />
                    <h2>Your cart is empty</h2>
                    <p>Looks like you haven't added anything to your cart yet.</p>
                    <Link to="/menu">
                        <button className="secondary-button">Explore Menu</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
