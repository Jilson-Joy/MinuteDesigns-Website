import React, { useState, useEffect} from "react";
import "../assets/css/Testimonial.css";
import { MoveLeft, MoveRight } from 'lucide-react';

function Testimonial() {

    const testimonials = [
        {
          text: 'Why is this important? Because clients want to know the businesses they depend on for advice are well-managed in their own right.',
          name: 'Mahfuz Riad',
          designation: 'UI Designer & CEO',
          img: 'http://t.commonsupport.com/adro/images/resource/thumb-1.jpg',
        },
        {
          text: 'Not only that, but this event gives you the chance to support your back-office team and show how well-managed your business is.',
          name: 'John Doe',
          designation: 'Software Engineer',
          img: 'http://t.commonsupport.com/adro/images/resource/thumb-1.jpg',
        },
        {
          text: 'This testimonial demonstrates how much the clients trust us for our business advice and management expertise.',
          name: 'Jane Smith',
          designation: 'Product Manager',
          img: 'http://t.commonsupport.com/adro/images/resource/thumb-1.jpg',
        },
      ];
      
    
        const [currentIndex, setCurrentIndex] = useState(0);
      
        // Auto-slide every 5 seconds
        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
              prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
          }, 5000);
      
          return () => clearInterval(interval);
        }, []);
      
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
      <div className="testimonial-block" style={{ transition: 'transform 0.5s ease' }}>
        <div className="inner-box">
          <button className="arrow left-arrow" onClick={handlePrev}>
          <MoveLeft />
          </button>
          <div className="text">{testimonials[currentIndex].text}</div>
          <div className="info-box">
            <div className="thumb">
              <img src={testimonials[currentIndex].img} alt={testimonials[currentIndex].name} />
            </div>
            <h4 className="name">{testimonials[currentIndex].name}</h4>
            <span className="designation">{testimonials[currentIndex].designation}</span>
          </div>

          <button className="arrow right-arrow" onClick={handleNext}>
          <MoveRight />
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonial