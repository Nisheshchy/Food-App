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
    {
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60",
      name: "David Chen",
      text: "The best burger I've had in years! The ingredients are so fresh and the flavors are perfectly balanced.",
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60",
      name: "Sophia Rodriguez",
      text: "I love how easy it is to order healthy options. The meal plans have made my life so much easier!",
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=500&auto=format&fit=crop&q=60",
      name: "James Smith",
      text: "Quick delivery and the pizza was still hot when it arrived. My new go-to for weekend treats.",
      rating: 4,
    },
    {
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60",
      name: "Lisa Wang",
      text: "Excellent variety of vegetarian dishes. The tofu stir-fry is a must-try!",
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60",
      name: "Robert Taylor",
      text: "Very satisfied with the portion sizes and the quality of the packaging. Everything arrived in perfect condition.",
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
      name: "Elena Gilbert",
      text: "The pasta here is divine! It reminds me of my grandmother's cooking in Italy. Pure comfort food.",
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
      name: "Marcus Thorne",
      text: "As a fitness enthusiast, I appreciate the transparency in ingredients. The high-protein bowls are my post-workout essentials.",
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60",
      name: "Isabella Rossi",
      text: "The dessert selection is surprisingly good for a health-focused app. The flourless chocolate cake is to die for!",
      rating: 4,
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60",
      name: "Kevin Patel",
      text: "Great value for money. The family bundles are perfect for mid-week dinners when we're too busy to cook.",
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60",
      name: "Natalie Brooks",
      text: "I had an issue with my order and the support team resolved it within minutes. Top-notch service!",
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
