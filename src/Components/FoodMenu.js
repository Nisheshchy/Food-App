/** @format */

import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import { FiCheckCircle, FiSearch } from "react-icons/fi";

const FoodMenu = () => {
    const { addToCart } = useCart();
    const [showToast, setShowToast] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const handleAddToCart = (item) => {
        // Clean price string to number
        const numericPrice = parseFloat(item.price.replace("$", ""));
        addToCart({
            id: item.title, // Using title as ID since unique IDs aren't provided
            name: item.title,
            price: numericPrice,
            image: item.image
        });

        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    const menuItems = [
        {
            image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&auto=format&fit=crop&q=60",
            title: "Spaghetti Carbonara",
            category: "Italian",
            price: "$14.99",
            text: "Classic Italian pasta with creamy eggs, crispy pancetta, and parmesan.",
        },
        {
            image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&auto=format&fit=crop&q=60",
            title: "Premium Sushi Platter",
            category: "Japanese",
            price: "$24.99",
            text: "Assorted nigiri and signature rolls with fresh salmon and tuna.",
        },
        {
            image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&auto=format&fit=crop&q=60",
            title: "Honey Grilled Salmon",
            category: "Healthy",
            price: "$18.99",
            text: "Freshly grilled salmon fillet with lemon slices and honey glaze.",
        },
        {
            image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop&q=60",
            title: "Chicken Tikka Masala",
            category: "Indian",
            price: "$15.99",
            text: "Rich and creamy Indian curry served with authentic naan bread.",
        },
        {
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60",
            title: "Delicious Pizza",
            category: "Italian",
            price: "$12.99",
            text: "Wood-fired pizza with fresh toppings and gooey mozzarella.",
        },
        {
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60",
            title: "Healthy Garden Salad",
            category: "Healthy",
            price: "$9.99",
            text: "Vibrant organic greens with crunchy vegetables and balsamic dressing.",
        },
        {
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60",
            title: "Classic Beef Burger",
            category: "Fast Food",
            price: "$13.99",
            text: "Juicy beef patty with cheddar cheese and our secret sauce.",
        },
        {
            image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=60",
            title: "Avocado Toast",
            category: "Healthy",
            price: "$11.99",
            text: "Smashed avocado on sourdough toast with poached eggs.",
        },
        {
            image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&auto=format&fit=crop&q=60",
            title: "Street Style Tacos",
            category: "Mexican",
            price: "$10.99",
            text: "Corn tortillas with pineapple, cilantro, and onions.",
        },
        {
            image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop&q=60",
            title: "Chocolate Lava Cake",
            category: "Dessert",
            price: "$8.99",
            text: "Warm molten chocolate cake with vanilla ice cream.",
        },
        // Indian Dishes
        {
            image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&auto=format&fit=crop&q=60",
            title: "Paneer Butter Masala",
            category: "Indian",
            price: "$14.99",
            text: "Cubes of fresh cottage cheese in a rich, velvety tomato and butter gravy.",
        },
        {
            image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format&fit=crop&q=60",
            title: "Lamb Biryani",
            category: "Indian",
            price: "$17.99",
            text: "Fragrant basmati rice cooked with tender lamb and aromatic Indian spices.",
        },
        // Japanese Dishes
        {
            image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=60",
            title: "Tonkotsu Ramen",
            category: "Japanese",
            price: "$16.99",
            text: "Rich pork bone broth served with noodles, chashu pork, and a soft-boiled egg.",
        },
        {
            image: "https://images.unsplash.com/photo-1581184953963-d15972933db1?w=500&auto=format&fit=crop&q=60",
            title: "Crispy Tempura Platter",
            category: "Japanese",
            price: "$15.99",
            text: "Lightly battered shrimp and seasonal vegetables served with tentsuyu sauce.",
        },
        // Italian Dishes
        {
            image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=500&auto=format&fit=crop&q=60",
            title: "Pesto Genovese",
            category: "Italian",
            price: "$13.99",
            text: "Trofie pasta tossed in a vibrant basil, pine nut, and parmesan pesto.",
        },
        {
            image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&auto=format&fit=crop&q=60",
            title: "Homemade Lasagna",
            category: "Italian",
            price: "$16.49",
            text: "Layers of pasta with slow-cooked ragu, béchamel, and melted mozzarella.",
        },
        // Healthy Dishes
        {
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60",
            title: "Quinoa Power Bowl",
            category: "Healthy",
            price: "$12.49",
            text: "Nutrient-rich quinoa with roasted chickpeas, avocado, and tahini dressing.",
        },
        {
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&auto=format&fit=crop&q=60",
            title: "Grilled Tofu Salad",
            category: "Healthy",
            price: "$11.99",
            text: "Marinated tofu with mixed greens, edamame, and a ginger soy dressing.",
        },
        {
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&auto=format&fit=crop&q=60",
            title: "Mediterranean Wrap",
            category: "Healthy",
            price: "$10.99",
            text: "Whole-wheat wrap with hummus, feta, olives, and fresh vegetables.",
        },
        {
            image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format&fit=crop&q=60",
            title: "Steamed Sea Bass",
            category: "Healthy",
            price: "$19.99",
            text: "Zesty steamed sea bass served with ginger, spring onions, and bok choy.",
        },
    ];

    const categories = ["All", ...Array.from(new Set(menuItems.map(item => item.category)))];

    const filteredItems = menuItems.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === "All" || item.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="menu-page-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Menu</p>
                <h1 className="primary-heading">Our Full Range</h1>
                <p className="primary-text">
                    Choose from our specially curated dishes, prepared fresh every day
                    by our master chefs.
                </p>
            </div>

            {/* Enhanced Filtering & Search Section */}
            <div className="menu-filters-container">
                <div className="search-bar-wrapper">
                    <FiSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search for your favorite dish..."
                        className="menu-search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="category-filters-scroll">
                    <div className="category-filters">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`category-filter-btn ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="work-section-bottom menu-grid">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <div className="work-section-info menu-card" key={index}>
                            <div className="info-boxes-img-container menu-img-container" style={{ position: "relative" }}>
                                <img src={item.image} alt={item.title} />
                                <span className="category-badge">{item.category}</span>
                            </div>
                            <h2>{item.title}</h2>
                            <p className="menu-price">{item.price}</p>
                            <p>{item.text}</p>
                            <button
                                className="secondary-button"
                                style={{ marginTop: "1rem" }}
                                onClick={() => handleAddToCart(item)}
                            >
                                Order Now
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="no-results-container">
                        <h2>No dishes found!</h2>
                        <p>We couldn't find any dishes matching "{searchTerm}". Try a different search term or category.</p>
                        <button
                            className="secondary-button"
                            style={{ marginTop: "1.5rem" }}
                            onClick={() => {
                                setSearchTerm("");
                                setActiveCategory("All");
                            }}
                        >
                            Reset Filters
                        </button>
                    </div>
                )}
            </div>

            {/* Success Toast */}
            {showToast && (
                <div className="toast-notification">
                    <div className="toast-icon">
                        <FiCheckCircle />
                    </div>
                    <div className="toast-text">
                        <h3>Added!</h3>
                        <p>Item successfully added to your cart.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FoodMenu;
