import React, { useEffect, useRef } from "react";
import ProfilePic from "../Assets/nishesh-chy-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = ({ hideHeader }) => {
  const scrollRef = useRef(null);
  const testimonials = [
    {
      image: ProfilePic,
      name: "Nishesh Chaudhary",
      text: "The food quality is exceptional and the delivery is always on time. Highly recommended!",
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
      name: "John Doe",
      text: "I've tried many food delivery services, but this one stands out for its freshness and taste.",
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60",
      name: "Sarah Jenkins",
      text: "Healthy and delicious meals. The salads are vibrant and perfectly seasoned.",
      rating: 4,
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60",
      name: "Michael Wong",
      text: "Incredible service! The customer support team went above and beyond when I had a question.",
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60",
      name: "Emma Wilson",
      text: "A fantastic range of options. My kids love the pizzas, and I love the grilled salmon!",
      rating: 5,
    },
  ];

  // Double the items for seamless looping
  const displayTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let isPaused = false;

    const scroll = () => {
      if (!isPaused) {
        scrollContainer.scrollLeft += 1;

        // Seamless reset: When we reach the middle, jump back to start
        const halfWidth = scrollContainer.scrollWidth / 2;
        if (scrollContainer.scrollLeft >= halfWidth) {
          scrollContainer.scrollLeft -= halfWidth;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => (isPaused = true);
    const handleMouseLeave = () => (isPaused = false);

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div id="testimonials" className="work-section-wrapper">
      {!hideHeader && (
        <div className="work-section-top">
          <p className="primary-subheading">Testimonials</p>
          <h1 className="primary-heading">What Our Customers Say</h1>
          <p className="primary-text">
            Don't just take our word for it. Hear from thousands of happy
            customers who enjoy our fresh, healthy meals every day.
          </p>
        </div>
      )}
      <div className="testimonial-section-container" ref={scrollRef}>
        {displayTestimonials.map((item, index) => (
          <div className="testimonial-section-bottom" key={index}>
            <div className="testimonial-image-container">
              <img src={item.image} alt={item.name} />
            </div>
            <p>{item.text}</p>
            <div className="testimonials-stars-container">
              {[...Array(item.rating)].map((_, i) => (
                <AiFillStar key={i} />
              ))}
            </div>
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
