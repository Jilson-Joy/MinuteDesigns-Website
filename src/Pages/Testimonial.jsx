import React, { useState, useEffect } from "react";
import "../assets/css/Testimonial.css";
import { MoveLeft, MoveRight } from 'lucide-react';
import { listAlltestimonials } from "../api/frontendApis/pagesApi";
function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await listAlltestimonials();
        console.log("Fetched testimonials:", data); // Check the structure of 'data' in the console
        if (data && Array.isArray(data.testimonials)) {
          setTestimonials(data.testimonials);
        } else {
          setTestimonials([]); // Fallback to an empty array if data is not valid
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchTestimonials();
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="testimonial-section">
      <div className="large-container">
        <div className="sec-title">
          <h5 className="head-text">Testimonial</h5>
          <h5>What Our Core Clients Say?</h5>
        </div>

        {/* Testimonial Card */}
        <div className="testimonial-block">
          <div className="inner-box" style={{ transition: 'transform 0.5s ease' }}>
            <button className="arrow left-arrow" onClick={handlePrev}>
              <MoveLeft />
            </button>
            <button className="arrow right-arrow" onClick={handleNext}>
              <MoveRight />
            </button>

            {/* Display the current testimonial */}
            {testimonials.length > 0 && (
              <div key={testimonials[currentIndex]._id}>
                <div className="text">{testimonials[currentIndex].description}</div>
                <div className="info-box">
                  <div className="thumb">
                    <img 
                      src={`${API_BASE_URL}${testimonials[currentIndex].imageUrl}`}
                      alt={testimonials[currentIndex].title}
                    />
                  </div>
                  <h4 className="name">{testimonials[currentIndex].title}</h4>
                  <span className="designation">{testimonials[currentIndex].companyName}</span>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
