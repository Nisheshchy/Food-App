/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login details:", { email, password });
    };

    return (
        <div className="auth-page-container">
            <div className="auth-background-overlay"></div>
            <div className="auth-card-wrapper">
                <div className="auth-card glassmorphism">
                    <div className="auth-header">
                        <h2>Welcome Back</h2>
                        <p>Please enter your details to sign in</p>
                    </div>
                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="input-group">
                            <label htmlFor="email">Email Address</label>
                            <div className="input-with-icon">
                                <FiMail className="input-icon" />
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="label-with-link">
                                <label htmlFor="password">Password</label>
                                <Link to="/forgot-password">Forgot password?</Link>
                            </div>
                            <div className="input-with-icon">
                                <FiLock className="input-icon" />
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="auth-checkbox">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Remember me for 30 days</label>
                        </div>
                        <button type="submit" className="auth-primary-button">
                            Sign In <FiArrowRight />
                        </button>
                    </form>
                    <div className="auth-footer">
                        <p>
                            Don't have an account? <Link to="/signup">Sign up for free</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
