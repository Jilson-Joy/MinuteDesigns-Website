import React, { useState } from "react";
import "../assets/css/commonStyle.css";
import "../assets/css/mediaQuery.css";
import Button from 'react-bootstrap/Button';
import { ArrowUpRight } from 'lucide-react';
import { Link } from "react-router-dom";

function Home() {


  const technologiesData = [
    {
      title: "React",
      description: "A JavaScript library for building user interfaces.",
      image: "https://i.pinimg.com/736x/70/22/fd/7022fde301338644bca180ebce7d51a7.jpg",
      link: "https://reactjs.org/"
    },
    {
      title: "Node.js",
      description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
      image: "https://i.pinimg.com/736x/70/22/fd/7022fde301338644bca180ebce7d51a7.jpg",
      link: "https://nodejs.org/"
    },
    {
      title: "GraphQL",
      description: "A query language for APIs and a server-side runtime for executing those queries.",
      image: "https://i.pinimg.com/736x/70/22/fd/7022fde301338644bca180ebce7d51a7.jpg",
      link: "https://graphql.org/"
    },
    {
      title: "GraphQL",
      description: "A query language for APIs and a server-side runtime for executing those queries.",
      image: "https://i.pinimg.com/736x/70/22/fd/7022fde301338644bca180ebce7d51a7.jpg",
      link: "https://graphql.org/"
    }
  ];

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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

              <div className="wrapper">
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
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Technologies   */}
      <section >

          <div className="col-md-12 d-flex justify-content-center align-items-center">
            <h1>Technologies</h1>
          </div>

        <div className="container technologies mt-5">
          <div className="row d-flex justify-content-between align-items-center ">

              <div className="row align-items-center">
                {technologiesData.map((tech, index) => (
                  <div className="col-md-6">
                    <div key={index} className="row p-3">
                      <div className="col-md-6">
                        <h3>{tech.title}</h3>
                        <p>{tech.description}</p>
                        <Link to={tech.link} style={{ textDecoration: 'none' }}>
                          <div className="button-with-text">
                            <button className="readMore">
                              <ArrowUpRight className="icon" />
                              <span className="readMore-text">Read More</span>
                            </button>
                          </div>
                        </Link>
                      </div >
                      <div className="col-md-6">
                        <img
                          src={tech.image}
                          alt={tech.title}
                          className="card_img"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                    </div>
                    <hr />
                  </div>
   
                ))}
              </div>
            </div>
        </div>
      </section>

    </>
  );
}

export default Home