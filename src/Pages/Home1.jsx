import React, { useState, useEffect, useRef } from "react";
import "../assets/css/Home.css";
import "../assets/css/commonStyle.css";
import "../assets/css/mediaQuery.css";
import Button from "react-bootstrap/Button";
import { ArrowUpRight, MousePointer2 } from "lucide-react";
import { Link } from "react-router-dom";
import MobApp from "../assets/images/mobile_application.png";
import Ecommerce from "../assets/images/ecommerce.png";
import UIUX from "../assets/images/uiux.png";
import WebApp from "../assets/images/web-development.png";
import CarouselBox from "../components/carousel/CarouselBox";
import Technologies from "../components/technologies/Technologies";

function Home1() {
  // testimonial
  const testimonials = [
    {
      name: "June Cha",
      position: "Software Engineer",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!",
    },
    {
      name: "Iida Niskanen",
      position: "Data Entry",
      photo: "https://randomuser.me/api/portraits/women/67.jpg",
      text: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
    },
    {
      name: "Renee Sims",
      position: "Receptionist",
      photo: "https://randomuser.me/api/portraits/women/8.jpg",
      text: "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
    },
    {
      name: "Sasha Ho",
      position: "Accountant",
      photo:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
      text: "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!",
    },
    {
      name: "Veeti Seppanen",
      position: "Director",
      photo: "https://randomuser.me/api/portraits/men/97.jpg",
      text: "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const dots = document.querySelectorAll(".progress-dot");
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }, [currentIndex]);

  useEffect(() => {
    const autoScroll = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(autoScroll);
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

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const { name, position, photo, text } = testimonials[currentIndex];

  // testimonial end here

  const webAppRef = useRef(null);
  const mobileAppRef = useRef(null);
  const ecommerceRef = useRef(null);
  const uiuxRef = useRef(null);

  const circleRef = useRef(null);
  const mobileCircleRef = useRef(null);
  const ecommerceCircleRef = useRef(null);
  const uiuxCircleRef = useRef(null);

  const [circlePosition, setCirclePosition] = useState({ top: 0, left: 0 });
  const [mobileCirclePosition, setMobileCirclePosition] = useState({
    top: 0,
    left: 0,
  });
  const [ecommerceCirclePosition, setEcommerceCirclePosition] = useState({
    top: 0,
    left: 0,
  });
  const [uiuxCirclePosition, setUiuxCirclePosition] = useState({
    top: 0,
    left: 0,
  });

  const [inView, setInView] = useState(false);
  const [mobileInView, setMobileInView] = useState(false);
  const [ecommerceInView, setEcommerceInView] = useState(false);
  const [uiuxInView, setUiuxInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          const webAppRect = webAppRef.current.getBoundingClientRect();
          const circleRect = circleRef.current.getBoundingClientRect();
          setCirclePosition({
            top: webAppRect.top + window.scrollY,
            left: webAppRect.left - circleRect.width - 10,
          });
        } else {
          setInView(false);
          setCirclePosition({
            top: "50%",
            left: "58%",
          });
        }
      },
      { threshold: 0.5 }
    );

    const mobileObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMobileInView(true);
          const mobileAppRect = mobileAppRef.current.getBoundingClientRect();
          const mobileCircleRect =
            mobileCircleRef.current.getBoundingClientRect();
          setMobileCirclePosition({
            top: mobileAppRect.top + window.scrollY,
            left: mobileAppRect.left - mobileCircleRect.width - 10,
          });
        } else {
          setMobileInView(false);
          setMobileCirclePosition({
            top: "60%",
            left: "68%",
          });
        }
      },
      { threshold: 0.5 }
    );

    const ecommerceObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEcommerceInView(true);
          const ecommerceRect = ecommerceRef.current.getBoundingClientRect();
          const ecommerceCircleRect =
            ecommerceCircleRef.current.getBoundingClientRect();
          setEcommerceCirclePosition({
            top: ecommerceRect.top + window.scrollY,
            left: ecommerceRect.left - ecommerceCircleRect.width - 10,
          });
        } else {
          setEcommerceInView(false);
          setEcommerceCirclePosition({
            top: "70%",
            left: "58%",
          });
        }
      },
      { threshold: 0.5 }
    );

    const uiuxObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setUiuxInView(true);
          const uiuxRect = uiuxRef.current.getBoundingClientRect();
          const uiuxCircleRect = uiuxCircleRef.current.getBoundingClientRect();
          setUiuxCirclePosition({
            top: uiuxRect.top + window.scrollY,
            left: uiuxRect.left - uiuxCircleRect.width - 10,
          });
        } else {
          setUiuxInView(false);
          setUiuxCirclePosition({
            top: "50%",
            left: "78%",
          });
        }
      },
      { threshold: 0.5 }
    );

    if (webAppRef.current) observer.observe(webAppRef.current);
    if (mobileAppRef.current) mobileObserver.observe(mobileAppRef.current);
    if (ecommerceRef.current) ecommerceObserver.observe(ecommerceRef.current);
    if (uiuxRef.current) uiuxObserver.observe(uiuxRef.current);

    return () => {
      if (webAppRef.current) observer.unobserve(webAppRef.current);
      if (mobileAppRef.current) mobileObserver.unobserve(mobileAppRef.current);
      if (ecommerceRef.current)
        ecommerceObserver.unobserve(ecommerceRef.current);
      if (uiuxRef.current) uiuxObserver.unobserve(uiuxRef.current);
    };
  }, []);

  return (
    <>
      <section className="hero-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="hero-text">
                Design
                <br />
                Innovate
                <br />
                Thrive
              </h1>
              <p className="hero-caption">
                "Elevating user experience to its pinnacle."
              </p>
            </div>
            <div className="col-md-6">
              {/* <div className="group">
                  <span className="dot dot1"></span>
                  <span className="dot dot2"></span>
                  <span className="dot dot3"></span>
                  <span className="dot dot4"></span>
                  <span className="dot dot5"></span>
                  <span className="dot dot6"></span>
                  <span className="dot dot7"></span>
                  <span className="dot dot8"></span>
                  <span className="dot dot9"></span>
                </div> */}

              {/* Moving Circle for Web Application */}
              <div
                ref={circleRef}
                className={`circle-dot ${inView ? "move-to-webapp" : ""}`}
                style={{ top: circlePosition.top, left: circlePosition.left }}
              ></div>

              {/* Moving Circle for Mobile Application */}
              <div
                ref={mobileCircleRef}
                className={`circle-dot green-circle ${
                  mobileInView ? "move-to-mobileapp" : ""
                }`}
                style={{
                  top: mobileCirclePosition.top,
                  left: mobileCirclePosition.left,
                }}
              ></div>
              {/* Moving Circle for E-commerce */}
              <div
                ref={ecommerceCircleRef}
                className={`circle-dot blue-circle ${
                  ecommerceInView ? "move-to-ecommerce" : ""
                }`}
                style={{
                  top: ecommerceCirclePosition.top,
                  left: ecommerceCirclePosition.left,
                }}
              ></div>
              {/* Moving Circle for UI/UX */}
              <div
                ref={uiuxCircleRef}
                className={`circle-dot violet-circle ${
                  uiuxInView ? "move-to-uiux" : ""
                }`}
                style={{
                  top: uiuxCirclePosition.top,
                  left: uiuxCirclePosition.left,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <section className="hero-container parallax-section">
        <div className="container technologies-container">
          <div className="col-md-12 d-flex align-items-center mb-3">
            <h5 className="head-text">Our Services</h5>
          </div>

          <div className="row d-flex justify-content-between align-items-center  mb-2">
            {/* Web Application Section */}
            <div className="col-md-8 service-head">
              <h3 ref={webAppRef}>Web Application</h3>
            </div>
          </div>

          <div className="row d-flex justify-content-between align-items-center mb-2 ">
            {/* Mobile Application Section */}
            <div className="col-md-8 service-head">
              <h3 ref={mobileAppRef}>Mobile Application</h3>
            </div>
          </div>

          <div className="row d-flex justify-content-between align-items-center  mb-2">
            {/* E-commerce Section */}
            <div className="col-md-8 service-head">
              <h3 ref={ecommerceRef}>E-commerce</h3>
            </div>
          </div>

          <div className="row d-flex justify-content-between align-items-center mb-2">
            {/* UI/UX Section */}
            <div className="col-md-8 service-head">
              <h3 ref={uiuxRef}>UI/UX</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight text */}
      <section>
      <div className="container mt-5 mb-5">
          <h5 className="about-text-bold">Transforming Ideas into Reality with Expert Web & App Solutions</h5>
        </div>
      </section>

      {/* Technologies */}
      <section>
        <div className="container mt-5 mb-5">
          <h5 className="head-text">Technologies</h5>
          <Technologies />
        </div>
      </section>

      {/* testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h5 className="head-text">Testimonials</h5>
          <div className="testimonials-wrapper">
            <button
              className="testimonial-btn"
              id="btn-prev"
              onClick={handlePrev}
            >
              &lt;
            </button>
            <div className="testimonials-container">
              <div className="testimonial">
                <img
                  src={photo}
                  alt={`${name}'s photo`}
                  className="user-image"
                />
                <div className="testimonial-content">
                  <h2 className="username">{name}</h2>
                  <p className="role">{position}</p>
                  <p className="testimonial-text">{text}</p>
                </div>
              </div>
            </div>
          </div>
          <div id="progress-dots">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`progress-dot ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>

          {/* <button className="testimonial-btn" id="btn-next" onClick={handleNext}>
            &gt;
          </button> */}
        </div>
      </section>
    </>
  );
}

export default Home1;
