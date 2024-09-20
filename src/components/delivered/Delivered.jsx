import React, { useState, useEffect, useRef } from "react";
import "./Delivered.css";

function Delivered() {
  const [productCount, setProductCount] = useState(0);
  const [employeeCount, setEmployeeCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has run
  const deliveredRef = useRef(null); // Reference to the section

  // Helper function to increment the count
  const countUp = (target, setStateFunction, duration) => {
    let start = 0;
    const increment = Math.ceil(target / (duration / 8)); // Adjust increment based on duration

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target; // Ensure exact count at the end
        clearInterval(timer);
      }
      setStateFunction(start);
    }, 100); // 50ms for smooth animation
  };

  // Trigger the counting animation when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); // Ensure animation runs only once
          countUp(23, setProductCount, 1000); // Count to 20+ in 1 second
          countUp(8, setEmployeeCount, 1000); // Count to 10 in 1 second
          countUp(31, setClientCount, 1000); // Count to 30+ in 1 second
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (deliveredRef.current) {
      observer.observe(deliveredRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (deliveredRef.current) {
        observer.unobserve(deliveredRef.current);
      }
    };
  }, [hasAnimated]); // Depend on hasAnimated to avoid re-triggering

  return (
    <div className="container mt-5 mb-5" ref={deliveredRef}>
      <div className="products_delivered">
        <div className="products_delivered_iteam">
          <p>{productCount}+</p>
          <h5>Products</h5>
        </div>
        <div className="products_delivered_iteam">
          <p>{employeeCount}+</p>
          <h5>Employees</h5>
        </div>
        <div className="products_delivered_iteam">
          <p>{clientCount}+</p>
          <h5>Clients</h5>
        </div>
      </div>
    </div>
  );
}

export default Delivered;
