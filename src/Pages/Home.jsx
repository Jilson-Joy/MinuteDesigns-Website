import React, { useState } from "react";
import "../assets/css/commonStyle.css";
import "../assets/css/mediaQuery.css";
import Button from "react-bootstrap/Button";
import { ArrowUpRight, MousePointer2 } from "lucide-react";
import { Link } from "react-router-dom";
import landImg from "../assets/images/social-media.gif";
import CarouselBox from "../components/carousel/CarouselBox"

function Home() {


  const [activeDescription, setActiveDescription] = useState('vision');

  const technologiesData = [
    {
      title: "React",
      description: "A JavaScript library for building user interfaces.",
      image:
        "https://i.pinimg.com/736x/70/22/fd/7022fde301338644bca180ebce7d51a7.jpg",
      link: "https://reactjs.org/",
    },
    {
      title: "Node.js",
      description:
        "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
      image:
        "https://i.pinimg.com/736x/70/22/fd/7022fde301338644bca180ebce7d51a7.jpg",
      link: "https://nodejs.org/",
    },
    {
      title: "GraphQL",
      description:
        "A query language for APIs and a server-side runtime for executing those queries.",
      image:
        "https://i.pinimg.com/736x/70/22/fd/7022fde301338644bca180ebce7d51a7.jpg",
      link: "https://graphql.org/",
    },
    {
      title: "GraphQL",
      description:
        "A query language for APIs and a server-side runtime for executing those queries.",
      image:
        "https://i.pinimg.com/736x/70/22/fd/7022fde301338644bca180ebce7d51a7.jpg",
      link: "https://graphql.org/",
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
              <div class="land_animation">
                <div class="user user1"></div>
                <div class="user user2"></div>
                <div class="user user3"></div>
                <div class="user user4"></div>
                <div class="user user5"></div>
                <div class="user user6"></div>
                <div class="user user7"></div>
                <div class="user user8"></div>

                <div class="line line1"></div>
                <div class="line line2"></div>
                <div class="line line3"></div>
                <div class="line line4"></div>
                <div class="line line5"></div>
                <div class="line line6"></div>
                <div class="line line7"></div>
                <div class="line line8"></div>
                <div class="line line9"></div>
                <div class="line line10"></div>
                <div class="line line11"></div>
                <div class="line line12"></div>
                <div class="line line13"></div>
                <div class="line line14"></div>
              </div>
              {/* <div className="wrapper">
                <div className="img_container">
                  <input type="radio" name="slide" id="c1" checked />
                  <label for="c1" className="card">
                    <div className="card_row">
                      <div className="icon">1</div>
                      <div className="description">
                        <h4>Winter</h4>
                        <p>Winter has so much to offer -
                          creative activities</p>
                      </div>
                    </div>
                  </label>
                  <input type="radio" name="slide" id="c2" />
                  <label for="c2" className="card">
                    <div className="card_row">
                      <div className="icon">2</div>
                      <div className="description">
                        <h4>Digital Technology</h4>
                        <p>Gets better every day -
                          stay tuned</p>
                      </div>
                    </div>
                  </label>
                  <input type="radio" name="slide" id="c3" />
                  <label for="c3" className="card">
                    <div className="card_row">
                      <div className="icon">3</div>
                      <div className="description">
                        <h4>Globalization</h4>
                        <p>Help people all over the world</p>
                      </div>
                    </div>
                  </label>
                  <input type="radio" name="slide" id="c4" />
                  <label for="c4" className="card">
                    <div className="card_row">
                      <div className="icon">4</div>
                      <div className="description">
                        <h4>New technologies</h4>
                        <p>Space engineering becomes
                          more and more advanced</p>
                      </div>
                    </div>
                  </label>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section>
        <div className="container vm-section">
          <div className="row d-flex justify-content-between align-items-center mb-5 p-5">
            <div className="col-md-6">
              <div className="d-flex align-items-center " onClick={() => setActiveDescription('vision')}>
                <MousePointer2 className={`vm-icon ${activeDescription === 'vision' ? 'active' : ''}`} />
                <p className={`vm-icon ${activeDescription === 'vision' ? 'active' : ''} hero-caption`}  >Vision</p>
              </div>
              <div className="d-flex align-items-center mt-5" onClick={() => setActiveDescription('mission')}>
                <MousePointer2 className={`vm-icon ${activeDescription === 'mission' ? 'active' : ''}`} />
                <p className={`vm-icon ${activeDescription === 'mission' ? 'active' : ''} hero-caption`}  >Mission</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="description-box">
                {activeDescription === 'vision' && (
                  <p className="vm-desc">
                    Our goal is to become a leading digital innovation force, offering businesses efficient and scalable software solutions to thrive in the digital age.
                  </p>
                )}
                {activeDescription === 'mission' && (
                  <p className="vm-desc">
                    We focus on continuous improvement, staying ahead of technology trends, and fostering a collaborative environment that inspires creativity and innovation.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

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
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        {/* Testimonials */}
        <h1>Testimonials</h1>
        <CarouselBox />
      </div>
    </>
  );
}

export default Home;
