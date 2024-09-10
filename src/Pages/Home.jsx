import React, { useState, useEffect } from "react";
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

function Home() {

  // dot animation

  const [activeDescription, setActiveDescription] = useState("vision");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 90) {  // Adjust this value as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const technologiesData = [
    {
      title: "Web Application",
      description: "A JavaScript library for building user interfaces.",
      image:WebApp,
      link: "/webapp",
    },
    {
      title: "Mobile Application",
      description:
        "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
      image: MobApp,
      link: "/mobileApp",
    },
    {
      title: "E-commerce",
      description:
        "A query language for APIs and a server-side runtime for executing those queries.",
      image:Ecommerce,
      link: "/e-commerce",
    },
    {
      title: "UI/UX",
      description:
        "A query language for APIs and a server-side runtime for executing those queries.",
      image:UIUX,
      link: "/uiux",
    },
  ];
  return (
    <>
      <section className="hero-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 ">
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
              <div class="dot-container">
                <div class="group top">
                  <span style={{ color: "#ee964b", fontWeight: "bold" }}>
                    M
                  </span>
                  <span style={{ color: "#ee964b", fontWeight: "bold" }}>
                    I
                  </span>
                  <span style={{ color: "#ee964b", fontWeight: "bold" }}>
                    N
                  </span>
                  <span style={{ color: "#ee964b", fontWeight: "bold" }}>
                    U
                  </span>
                  <span style={{ color: "#ee964b", fontWeight: "bold" }}>
                    T
                  </span>
                  <span style={{ color: "#ee964b", fontWeight: "bold" }}>
                    E
                  </span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                </div>
                <div class="group top">
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                </div>
                <div class="group right">
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                </div>
                <div class="group left">
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                </div>
                <div className="middle">
                  <span>•</span>
                </div>
                <div class="group right">
                  <span style={{ color: "#ee964b", fontWeight: "bold" }}>D</span>
                  <span style={{ color: "#ee964b", fontWeight: "bold" }}>E</span>
                  <span style={{ color: "#ee964b", fontWeight: "bold" }}>S</span>
                  <span style={{ color: "#ee964b", fontWeight: "bold" }}>I</span>
                  <span style={{ color: "#ee964b", fontWeight: "bold" }}>G</span>
                  <span style={{ color: "#ee964b", fontWeight: "bold" }}>N</span>
                  <span style={{ color: "#ee964b", fontWeight: "bold" }}>S</span>
                  <span>•</span>
                  <span>•</span>
                </div>
                <div class="group left">
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                </div>
                <div class="group bottom">
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                </div>
                <div class="group bottom">
                  <span></span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        

      </section>
   
      <section>
        <div className="container ">
        <div className="container  ">
        <div className={`${scrolled ? 'scrolled' : ''}`}>
          <div className="circle"></div>
        </div>
      </div>

          {/* <div className="row">
            <div class="flex-container-mission">
              <div class="flex-slide-mission home-mission">
                <div class="flex-title-mission flex-title-home-mission">
                  Vision
                </div>
                <div class="flex-about-mission flex-about-home-mission">
                  <p>
                    Our goal is to become a leading digital innovation force,
                    offering businesses efficient and scalable software
                    solutions to thrive in the digital age.
                  </p>
                </div>
              </div>
              <div class="flex-slide-mission about-mission">
                <div class="flex-title-mission">Mission</div>
                <div class="flex-about-mission">
                  <p>
              
                      We focus on continuous improvement, staying ahead of
                      technology trends, and fostering a collaborative
                      environment that inspires creativity and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Second Section */}
      {/* <section>
        <div className="container vm-section">
          <div className="row d-flex justify-content-between align-items-center mb-5 p-5">
            <div className="col-md-6">
              <div
                className="d-flex align-items-center "
                onClick={() => setActiveDescription("vision")}
              >
                <MousePointer2
                  className={`vm-icon ${
                    activeDescription === "vision" ? "active" : ""
                  }`}
                />
                <p
                  className={`vm-icon ${
                    activeDescription === "vision" ? "active" : ""
                  } hero-caption`}
                >
                  Vision
                </p>
              </div>
              <div
                className="d-flex align-items-center mt-5"
                onClick={() => setActiveDescription("mission")}
              >
                <MousePointer2
                  className={`vm-icon ${
                    activeDescription === "mission" ? "active" : ""
                  }`}
                />
                <p
                  className={`vm-icon ${
                    activeDescription === "mission" ? "active" : ""
                  } hero-caption`}
                >
                  Mission
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="description-box">
                {activeDescription === "vision" && (
                  <p className="vm-desc">
                    Our goal is to become a leading digital innovation force,
                    offering businesses efficient and scalable software
                    solutions to thrive in the digital age.
                  </p>
                )}
                {activeDescription === "mission" && (
                  <p className="vm-desc">
                    We focus on continuous improvement, staying ahead of
                    technology trends, and fostering a collaborative environment
                    that inspires creativity and innovation.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Services   */}

      <section className="parallax-section">
        <div className="container technologies-container">
          <div className="col-md-12 d-flex align-items-center">
            <h1>Our Services</h1>
          </div>
          <div className="row d-flex justify-content-between align-items-center mt-5 mb-2">
            {technologiesData.map((tech, index) => (
              <div className="col-md-6" key={index}>
                <div className="row">
                  <div className="col-md-6">
                    <h3>{tech.title}</h3>
                    <p className="tech-desc">{tech.description}</p>
                    <Link to={tech.link} style={{ textDecoration: "none" }}>
                      <div className="button-with-text">
                        <button className="readMore">
                          <ArrowUpRight className="icon" />
                          <span className="readMore-text">Read More</span>
                        </button>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className="card_img"
                      style={{ width: "100%", height: "170px" }}
                    />
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
   <section>
        <div className="container padding-top mb-4">
        <h1>Technologies</h1>
          <Technologies />
        </div>
   </section>


        {/* Testimonials */}
   <section>
        <div className="container mt-5">
          <h1>Testimonials</h1>
          <CarouselBox />
        </div>
   </section>
    </>
  );
}

export default Home;
