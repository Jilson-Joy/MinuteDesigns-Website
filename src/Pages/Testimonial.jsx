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


            
            {testimonials.length > 0 && (
              <div key={testimonials[currentIndex]._id}>
                <div className="text-center mb-2">
                  <Quote className="quote"  />
                </div>
                <div className="text_des">{testimonials[currentIndex].description}</div>
                <div className="info-box">
                  <div className="thumb">
                    {testimonials[currentIndex].imageUrl && testimonials[currentIndex].imageUrl.length > 0 ? (
                      <div className="d-flex flex-wrap">
                        {testimonials[currentIndex].imageUrl.map((url, idx) => {
                          const fullUrl = `${API_BASE_URL}${url}`;
                          return (
                            <img
                              key={idx}
                              src={fullUrl}
                              alt={`Gallery Image ${idx + 1}`}
                              // style={{ width: "150px", height: "auto", marginRight: "5px" }}
                            />
                          );
                        })}
                      </div>
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

        {/* hfdhdh */}

        {/* <div className="container mt-5 mb-5">
          <Carousel className='carousel_box'>
            <Carousel.Item>
              <div className="carousel_item row">
                <div className="carousel_item_img col-md-6">
                  <img src="https://i.pinimg.com/736x/14/2c/0a/142c0a0200a6bdb83e38406a814e9c80.jpg" alt="dhdf" className="" />
                </div>
                <div className="carousel_item_text col-md-6">
                  <h4 className='mb-5'>Shoes E-commerce App</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquid vel, nostrum tenetur voluptas possimus est explicabo omnis harum quia corporis odio aspernatur doloremque repellendus? Magnam corrupti dolores debitis tenetur?
                  </p>
                </div>
              </div>

            </Carousel.Item>
          </Carousel>
        </div> */}

      </div>
    </section>
  );
}

export default Testimonial;
