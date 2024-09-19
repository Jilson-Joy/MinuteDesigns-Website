import React, { useState, useEffect, useRef } from "react";

// import "../assets/css/Home.css";
import "../assets/css/LandingPage.css";
import "../assets/css/commonStyle.css";
import "../assets/css/mediaQuery.css";
import WebDev from "../assets/images/web-developer.gif";
import MobDev from "../assets/images/mobile-phone.gif";
import Ecom from "../assets/images/online-shopping.gif";
import UIUX from "../assets/images/UIUX-ICON.gif";
import Archi from "../assets/images/architecture-ICON.gif";
import Crm from "../assets/images/crm-icon.gif";

import CursorMouse from "../components/CustomCursor";
import Testimonial from "./Testimonial";
function LandingPage() {
  return (
    <>
      <section className="hero-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 ">

            <div className="col-md-6 dot-wrapper">

<div className="d-flex ">
<div class="container land-dot">
  <div className="group top">
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
  <div className="group top">
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
  <div className="group top">
   
  </div>
  <div className="group left">
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
  <div className="middle">
   
  </div>
  <div className="group right">
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
  <div className="group left">
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
  <div className="group bottom">
  
  </div>
  <div className="group bottom">
   
  </div>
</div>


<div className="land-middle">
    <span></span>
  </div>

<div class="container land-dot">
  <div className="group top">
   
  </div>
  <div className="group top">
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
  <div className="group top">
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
  <div className="group right">
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
   
  </div>
  <div className="group top">
  <span style={{ color: "#ee964b", fontWeight: "bold" }}>
      D
    </span>
    <span style={{ color: "#ee964b", fontWeight: "bold" }}>
      E
    </span>
    <span style={{ color: "#ee964b", fontWeight: "bold" }}>
      S
    </span>
    <span style={{ color: "#ee964b", fontWeight: "bold" }}>
      I
    </span>
    <span style={{ color: "#ee964b", fontWeight: "bold" }}>
      G
    </span>
    <span style={{ color: "#ee964b", fontWeight: "bold" }}>
      N
    </span>
      <span>•</span>

    <span style={{ color: "#ee964b", fontWeight: "bold" }}>
      S
    </span>
    <span>•</span>
    <span>•</span>
    <span>•</span>

  </div>
  <div className="group left">
   
  </div>
  <div className="group bottom">
   
  </div>
  <div className="group bottom">
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

</div>
</div>
</div>


            </div>
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
          </div>
        </div>
      </section>

      {/* mouse cursor */}
      <section>
        <div className="container ">
          <CursorMouse />
        </div>
      </section>

      <section className="parallax-section">
        <div className="container">
          <section>
            <div className="container">
              <div className="col-md-12 d-flex align-items-center mb-5">
                <h5 className="head-text">What We Do</h5>
              </div>
            </div>
          </section>
          {/* 1st row service */}

          <div className="row d-flex justify-content-around align-items-center mb-2">
            <div className="col-md-3 text-center service-item">
              <div className="service-icon">
                <img src={WebDev} alt="Web Development" width={120} />
              </div>
              <div className="service-title">
                <h3>Web Application</h3>
              </div>
              <div className="service-description">
                <p>
                  We create responsive and robust web applications tailored to
                  your business needs.
                </p>
              </div>
            </div>

            <div className="col-md-3 text-center service-item1">
              <div className="service-icon1">
                <img src={MobDev} alt="Mobile Development" width={120} />
              </div>
              <div className="service-title1">
                <h3>Mobile Application</h3>
              </div>
              <div className="service-description1">
                <p>
                  We create responsive and robust web applications tailored to
                  your business needs.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd row service */}
          <div className="row d-flex justify-content-around align-items-center mb-2">
            <div className="col-md-3 text-center service-item">
              <div className="service-icon">
                <img src={Ecom} alt="Ecommerce" width={120} />
              </div>
              <div className="service-title">
                <h3>E-Commerce</h3>
              </div>
              <div className="service-description">
                <p>
                  We create responsive and robust web applications tailored to
                  your business needs.
                </p>
              </div>
            </div>

            <div className="col-md-3 text-center service-item1">
              <div className="service-icon1">
                <img src={UIUX} alt="UIUX" width={120} />
              </div>
              <div className="service-title1">
                <h3>UI / UX Design</h3>
              </div>
              <div className="service-description1">
                <p>
                  We create responsive and robust web applications tailored to
                  your business needs.
                </p>
              </div>
            </div>
          </div>

          {/* 3rd row service */}
          <div className="row d-flex justify-content-around align-items-center mb-2">
            <div className="col-md-3 text-center service-item">
              <div className="service-icon">
                <img src={Archi} alt="Ecommerce" width={120} />
              </div>
              <div className="service-title">
                <h3>Architecture 3D </h3>
              </div>
              <div className="service-description">
                <p>
                  We create responsive and robust web applications tailored to
                  your business needs.
                </p>
              </div>
            </div>

            <div className="col-md-3 text-center service-item1">
              <div className="service-icon1">
                <img src={Crm} alt="UIUX" width={120} />
              </div>
              <div className="service-title1-crm">
                <h3>CRM</h3>
              </div>
              <div className="service-description1">
                <p>
                  We create responsive and robust web applications tailored to
                  your business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials */}

      <div className="container">
        <Testimonial />
      </div>

      {/* <div className="thumb-layer paroller">
          <figure className="image">
            <img src="http://t.commonsupport.com/adro/images/resource/user-thumbs.png" alt="User Thumbs" />
          </figure>
        </div> */}

      {/* Services section */}
      {/* <section className="parallax-section">
        <div className="container">
          <div className="col-md-12 d-flex align-items-center mb-3">
            <h5 className="head-text">Our Services</h5>
          </div>

          <div className="row d-flex justify-content-between align-items-center  mb-2 ladder-layout">

            <div className="col-md-4 service-head">
              <div className="service-detail">
                <h3>Web Application</h3>
              </div>
              <div className="service-desc">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  ipsam velit eveniet natus commodi consequuntur quae, est.
                </p>
              </div>
            </div>


            <div className="col-md-4 service-head">
              <div className="service-detail">
                <h3>Mobile Application</h3>
              </div>
              <div className="service-desc">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  ipsam velit eveniet natus commodi consequuntur quae, est.
                </p>
              </div>
            </div>

            <div className="col-md-4 service-head">
              <div className="service-detail">
                <h3>E-Commerce</h3>
              </div>
              <div className="service-desc">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  ipsam velit eveniet natus commodi consequuntur quae, est.
                </p>
              </div>
            </div>


       <div className="col-md-4 service-head">
        <div className="service-detail">
        <h3>UI/UX</h3>
        </div>
        <div className="service-desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam
            velit eveniet natus commodi consequuntur quae, est.
          </p>
        </div>
      </div> 

    
       <div className="col-md-4 service-head">
        <div className="service-detail">
        <h3>Architecture</h3>
        </div>
        <div className="service-desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam
            velit eveniet natus commodi consequuntur quae, est.
          </p>
        </div>
      </div> 
 
      <div className="col-md-4 service-head">
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
      </div> 
          </div>
        </div>
      </section>

      {/* Add services or other content here */}

      {/* Technologies */}
{/* <section>
  <Technologies/>
</section> */}
    </>
  );
}

export default LandingPage;
