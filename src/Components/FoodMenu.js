/** @format */

import React from "react";
import ShrimpTempura from "../Assets/shrimp-tempura-recipe-8.jpg";
import ChickenTikka from "../Assets/Chicken-Tikka-Masala_0-SQ.webp";

const FoodMenu = () => {
    const menuItems = [
        {
            image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=500&auto=format&fit=crop&q=60",
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
            image: ChickenTikka,
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
            image: "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?w=500&auto=format&fit=crop&q=60",
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
            image: ShrimpTempura,
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
            image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=500&auto=format&fit=crop&q=60",
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
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60",
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
            image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&auto=format&fit=crop&q=60",
            title: "Steamed Sea Bass",
            category: "Healthy",
            price: "$19.99",
            text: "Zesty steamed sea bass served with ginger, spring onions, and bok choy.",
        },
    ];

    return (
        <div className="menu-page-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Menu</p>
                <h1 className="primary-heading">Our Full Range</h1>
                <p className="primary-text">
                    Choose from our {menuItems.length} specially curated dishes, prepared fresh every day
                    by our master chefs.
                </p>
            </div>
            <div className="work-section-bottom">
                {menuItems.map((item, index) => (
                    <div className="work-section-info" key={index}>
                        <div className="info-boxes-img-container" style={{ position: "relative" }}>
                            <img src={item.image} alt={item.title} />
                            <span className="category-badge">{item.category}</span>
                        </div>
                        <h2>{item.title}</h2>
                        <p className="menu-price">{item.price}</p>
                        <p>{item.text}</p>
                        <button className="secondary-button" style={{ marginTop: "1rem" }}>
                            Order Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodMenu;
