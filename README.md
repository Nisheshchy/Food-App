# Food App 🍔

A simple, modern, and fully responsive restaurant landing page and e-commerce platform built from scratch using React.js, Material UI (MUI), React Router, and React Icons.

## ✨ New Features & Updates
The application has been recently transformed from a simple landing page into a fully functional frontend e-commerce solution:

- **Global Cart Management**: Implemented React Context (`CartContext`) to manage global cart state, synced with `localStorage` for data persistence.
- **Dynamic Cart UI**: A dedicated `/cart` page including dynamic subtotal and total calculations, item quantity controls, and item removal.
- **Promo Code System**: Functional discount system handling Percentage (`FOOD20`), Fixed Amount (`SAVE10`), and Free Shipping (`FREE`) discount logic.
- **Advanced Food Menu**: View curated dishes with **live search** and **dynamic category filtering** (Italian, Japanese, Healthy, Indian, Fast Food, etc.).
- **Modern Homepage Hero**: An immersive hero section featuring animated floating cards, highlight text, and a glowing backdrop.
- **Offers Section & Live Countdown Timer**: Urgency-driven promotional banners with a real-time javascript countdown timer.
- **Toast Notifications**: Smooth success notifications pop up whenever an item is added to the cart.
- **Dynamic Navbar Badge**: A responsive Material UI badge that updates in real-time to show the number of items in the cart.
- **Premium Responsive Design**: Flawlessly optimized across 4 custom breakpoints ensuring a perfect experience on desktops, tablets, and mobile devices.

## 🛠️ Tech Stack
- **Framework**: React.js
- **Routing**: React Router v6
- **State Management**: React Context API & Custom Hooks
- **Styling**: Vanilla CSS3 (Custom styles provided in `App.css`)
- **Icons**: React Icons
- **UI Components**: Material UI (MUI)
- **Fonts**: Reem Kufi via Google Fonts

## 🚀 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nisheshchy/Food-App.git
   ```

2. **Navigate to the directory:**
   ```bash
   cd Food-App/food
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Install specific libraries (if running into missing peer dependencies):**
   ```bash
   npm install react-icons @mui/material @emotion/react @emotion/styled @mui/icons-material react-router-dom
   ```

5. **Start the Development Server:**
   ```bash
   npm start
   ```

The application will be running at `http://localhost:3000/`.