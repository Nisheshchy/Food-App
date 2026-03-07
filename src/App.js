/** @format */

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Product from "./Components/Product";
import Footer from "./Components/Footer";
import FoodMenu from "./Components/FoodMenu";
import Navbar from "./Components/Navbar";
import ContactUs from "./Components/ContactUs";
import TestimonialsPage from "./Components/TestimonialsPage";
import AboutUs from "./Components/AboutUs";
import Cart from "./Components/Cart";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <div className="content-wrapper">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                    <About />
                    <Work />
                    <Product />
                    <Testimonial />
                    <Contact />
                  </>
                }
              />
              <Route path="/menu" element={<FoodMenu />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
