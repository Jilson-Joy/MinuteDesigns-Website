import React, { useState, useEffect } from "react";
import "../assets/css/Testimonial.css";
// import './Testimonial.css';
import { MoveLeft, MoveRight, XCircle } from 'lucide-react';
import { listAlltestimonials } from "../api/frontendApis/pagesApi";
import { Carousel } from "react-bootstrap";
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';


function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

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



            {testimonials.length > 0 && (
              <div key={testimonials[currentIndex]._id}>
                <div className="text-center mb-2">
                  <Quote className="quote" />
                </div>
                <div className="text_des">{testimonials[currentIndex].description}</div>
                <div className="info-box">
                  <div className="thumb">
                    {testimonials[currentIndex].imageUrl ? (
                      <img
                        src={`${baseUrl}${testimonials[currentIndex].imageUrl}`}
                        alt={testimonials[currentIndex].title}
                      // style={{ width: "300px", height: "300px" }}
                      />
                    ) : (
                      "No uploaded files available."
                    )}

                  </div>
                  <div className="text-center">
                    <h4 className="name">{testimonials[currentIndex].title}</h4>
                    <p className="designation">{testimonials[currentIndex].companyName}</p>
                  </div>
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
