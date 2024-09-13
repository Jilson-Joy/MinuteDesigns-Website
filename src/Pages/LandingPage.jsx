import React, { useState, useEffect, useRef } from "react";
// import "../assets/css/Home.css";
import "../assets/css/LandingPage.css";
import "../assets/css/commonStyle.css";
import "../assets/css/mediaQuery.css";
function LandingPage() {


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
              {/* <div>
                <h2>M</h2>
              </div> */}
              <div class="cont">
                <div class="dots d1"></div>
                <div class="dots d2"></div>
                <div class="dots d3"></div>
                <div class="dots d4"></div>
                <div class="dots d5"></div>
                <div class="dots d6"></div>
                <div class="dots d7"></div>
                <div class="dots d8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
          {/* Highlight text */}
          <section>
      <div className="container highlight-container  mt-5">
      <div className="row d-flex justify-content-between align-items-center  mb-2">
        <div className="col-md-9 service-head">
          <p className="about-text">
            <b >Transforming Ideas into Reality with <br /> Expert Web & App Solutions</b>
          </p>
          </div>
          <div className="col-md-3 ">
        <div className="main-dot">
        <ul>
                  <li className="high-ball" >
                    <span className="ball-1"></span>
                  </li>
                  <li className="high-ball">
                    <span className="ball-2"></span>
                  </li>
                  <li className="high-ball" >
                    <span className="ball-3"></span>
                  </li>
                  <li className="high-ball">
                    <span className="ball-4"></span>
                  </li>
                  <li className="high-ball" >
                    <span className="ball-5"></span>
                  </li>
                  <li className="high-ball">
                    <span className="ball-6"></span>
                  </li>
                </ul>
                </div>
                </div>
                </div>
      </div>
    </section>
    


      {/* Services section */}
 <section className="parallax-section">
  <div className="container">
    <div className="col-md-12 d-flex align-items-center mb-3">
      <h5 className="head-text">Our Services</h5>
    </div>

    <div className="row d-flex justify-content-between align-items-center  mb-2 ladder-layout">

      {/* Web Application Section */}
      <div className="col-md-4 service-head">
        <div className="service-detail">
          <h3>Web Application</h3>
        </div>
        <div className="service-desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam
            velit eveniet natus commodi consequuntur quae, est.
          </p>
        </div>
      </div>

      {/* Mobile Application Section */}
      <div className="col-md-4 service-head">
        <div className="service-detail">
          <h3>Mobile Application</h3>
        </div>
        <div className="service-desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam
            velit eveniet natus commodi consequuntur quae, est.
          </p>
        </div>
      </div>

      {/* E-Commerce Section */}
      <div className="col-md-4 service-head">
        <div className="service-detail">
          <h3>E-Commerce</h3>
        </div>
        <div className="service-desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam
            velit eveniet natus commodi consequuntur quae, est.
          </p>
        </div>
      </div>

        {/* ui-ux Section */}
        {/* <div className="col-md-4 service-head">
        <div className="service-detail">
        <h3>UI/UX</h3>
        </div>
        <div className="service-desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam
            velit eveniet natus commodi consequuntur quae, est.
          </p>
        </div>
      </div> */}

            {/* Architecture Section */}
           {/* <div className="col-md-4 service-head">
        <div className="service-detail">
        <h3>Architecture</h3>
        </div>
        <div className="service-desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam
            velit eveniet natus commodi consequuntur quae, est.
          </p>
        </div>
      </div> */}
       {/* 3D Rendering Section */}
        {/* <div className="col-md-4 service-head">
        <div className="service-detail">
            <span></span>
        <h3> 3D Rendering Service </h3>
        </div>
        <div className="service-desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam
            velit eveniet natus commodi consequuntur quae, est.
          </p>
        </div>
      </div> */}
    </div>
  </div>
</section>

      {/* Add services or other content here */}
    </>
  );
}

export default LandingPage;
