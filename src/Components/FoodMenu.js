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
        // --- NEW ITEMS ---
        {
            image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500&auto=format&fit=crop&q=60",
            title: "Mushroom Risotto",
            category: "Italian",
            price: "$15.99",
            text: "Creamy Arborio rice slow-cooked with wild mushrooms and truffle oil.",
        },
        {
            image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&auto=format&fit=crop&q=60",
            title: "Gnocchi alla Sorrentina",
            category: "Italian",
            price: "$14.49",
            text: "Soft potato gnocchi baked with tomato sauce, mozzarella, and fresh basil.",
        },
        {
            image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?w=500&auto=format&fit=crop&q=60",
            title: "Classic California Roll",
            category: "Japanese",
            price: "$12.99",
            text: "Fresh crab, avocado, and cucumber wrapped in seaweed and seasoned rice.",
        },
        {
            image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format&fit=crop&q=60",
            title: "Beef Teriyaki Bowl",
            category: "Japanese",
            price: "$17.99",
            text: "Sliced tender beef glazed in house-made teriyaki sauce over steamed rice.",
        },
        {
            image: "https://images.unsplash.com/photo-1603894584216-2fd1c53bbc32?w=500&auto=format&fit=crop&q=60",
            title: "Butter Chicken",
            category: "Indian",
            price: "$16.99",
            text: "Tender chicken pieces in a mild, buttery tomato gravy with dried fenugreek.",
        },
        {
            image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=60",
            title: "Dal Makhani",
            category: "Indian",
            price: "$11.99",
            text: "Slow-cooked black lentils with cream and butter, a signature North Indian dish.",
        },
        {
            image: "https://images.unsplash.com/photo-1645112481338-3560e99b32fa?w=500&auto=format&fit=crop&q=60",
            title: "Zucchini Pesto Noodles",
            category: "Healthy",
            price: "$13.49",
            text: "Light and refreshing spiralized zucchini tossed in a vibrant basil pesto.",
        },
        {
            image: "https://images.unsplash.com/photo-1546793665-c746839e6381?w=500&auto=format&fit=crop&q=60",
            title: "Roasted Chicken Salad",
            category: "Healthy",
            price: "$14.99",
            text: "Sliced roasted chicken breast over mixed greens with a lemon-herb vinaigrette.",
        },
        {
            image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=500&auto=format&fit=crop&q=60",
            title: "Crispy Chicken Burger",
            category: "Fast Food",
            price: "$12.99",
            text: "Golden-fried chicken breast with spicy mayo, lettuce, and pickles.",
        },
        {
            image: "https://images.unsplash.com/photo-1513456838258-518f35a73afc?w=500&auto=format&fit=crop&q=60",
            title: "Nachos Supreme",
            category: "Mexican",
            price: "$11.49",
            text: "Crispy tortilla chips topped with melted cheese, jalapenos, and sour cream.",
        },
        {
            image: "https://images.unsplash.com/photo-1599974590225-54619d9b673a?w=500&auto=format&fit=crop&q=60",
            title: "Chicken Quesadilla",
            category: "Mexican",
            price: "$13.99",
            text: "Large wheat tortilla stuffed with grilled chicken, cheese, and peppers.",
        },
        {
            image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&auto=format&fit=crop&q=60",
            title: "Classic Tiramisu",
            category: "Dessert",
            price: "$7.99",
            text: "Authentic Italian dessert with coffee-soaked ladyfingers and mascarpone cream.",
        },
        {
            image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&auto=format&fit=crop&q=60",
            title: "New York Cheesecake",
            category: "Dessert",
            price: "$8.49",
            text: "Rich and creamy baked cheesecake with a classic graham cracker crust.",
        },
        {
            image: "https://images.unsplash.com/photo-1563379091339-03b21ef4a4f8?w=500&auto=format&fit=crop&q=60",
            title: "Vegetable Biryani",
            category: "Indian",
            price: "$13.99",
            text: "Aromatic basmati rice cooked with seasonal vegetables and exotic spices.",
        },
        {
            image: "https://images.unsplash.com/photo-1621510456681-229ef554468b?w=500&auto=format&fit=crop&q=60",
            title: "Shrimp Scampi Pasta",
            category: "Italian",
            price: "$18.99",
            text: "Sautéed shrimp in a garlic, lemon, and white wine butter sauce over linguine.",
        },
        {
            image: "https://images.unsplash.com/photo-1546069901-e516a661fa83?w=500&auto=format&fit=crop&q=60",
            title: "Tuna Poke Bowl",
            category: "Japanese",
            price: "$16.49",
            text: "Marinated raw tuna with seaweed salad, edamame, and pickled ginger over rice.",
        },
        {
            image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=500&auto=format&fit=crop&q=60",
            title: "BBQ Chicken Wings",
            category: "Fast Food",
            price: "$14.99",
            text: "10 pieces of crispy wings tossed in our signature smoky BBQ sauce.",
        },
        {
            image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=500&auto=format&fit=crop&q=60",
            title: "Acai Power Bowl",
            category: "Healthy",
            price: "$10.99",
            text: "Frozen acai berry blend topped with granola, banana, and chia seeds.",
        },
        {
            image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=500&auto=format&fit=crop&q=60",
            title: "Beef Enchiladas",
            category: "Mexican",
            price: "$15.49",
            text: "Three corn tortillas rolled with seasoned beef and baked under red chili sauce.",
        },
        {
            image: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?w=500&auto=format&fit=crop&q=60",
            title: "Matcha Green Tea Cake",
            category: "Dessert",
            price: "$7.49",
            text: "Light sponge cake infused with premium Japanese matcha green tea powder.",
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
