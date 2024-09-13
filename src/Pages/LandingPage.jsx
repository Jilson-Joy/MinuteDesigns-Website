import React  from "react";
import "../assets/css/Home.css";
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
              <div class="cont">
                <div 
                  className="dots d1"></div>
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

      {/* Services section */}

      <section className="parallax-section">
        <div className="container ">
          <div className="col-md-12 d-flex align-items-center mb-3">
            <h5 className="head-text">Our Services</h5>
          </div>

          <div className="row d-flex justify-content-between align-items-center  mb-2">
            {/* Web Application Section */}
            <div className="col-md-4 service-head">
              <div className="service-detail">
                <h3>Web Application</h3>
              </div>
              <div className="service-desc">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                    ipsam velit eveniet natus commodi consequuntur quae, est
                  </p>
             </div>
            </div>
            <div className="col-md-4 service-head">
              <div className="service-detail ">
                <h3>Mobile Application</h3>
              </div>
              <div className="service-desc">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                    ipsam velit eveniet natus commodi consequuntur quae, est
                  </p>
             </div>
            </div>
            <div className="col-md-4 service-head">
              <div className="service-detail ">
                <h3>E-Commerce</h3>
              </div>

             <div className="service-desc">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                    ipsam velit eveniet natus commodi consequuntur quae, est
                  </p>
             </div>
            </div>
          </div>
        </div>
      </section>
      {/* Add services or other content here */}

    </>
  );
}

export default LandingPage;
