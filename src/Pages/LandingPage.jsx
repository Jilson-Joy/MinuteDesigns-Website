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
import In3D from "../assets/images/3d-ICON.gif";
import VRICON from "../assets/images/360-ICON.gif";
import Mhome from "../assets/images/MinuteHome1.gif";
import CursorMouse from "../components/CustomCursor";
import Testimonial from "./Testimonial";
import Delivered from "../components/delivered/Delivered";
import Technologies from "../components/technologies/Technologies";
import Melement from "../components/Melement";
import CircleCanvas from "../components/CircleCanvas";
import { listAllServices } from "../api/frontendApis/pagesApi";

function LandingPage() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [servicePage, setServicePage] = useState([])

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await listAllServices();
        console.log("Fetched Services:", data); // Check the structure of 'data' in the console
        // Assuming the services array is inside a property like data.services
        if (data && Array.isArray(data.services)) {
          setServicePage(data.services);
        } else {
          setServicePage([]); // Fallback to an empty array if data is not valid
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchServices();
  }, []);


  const disableRightClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
    <section onContextMenu={disableRightClick} className="no-select">
      <section className="hero-container" >
      <div className="container d-flex justify-content-center align-items-center ms-auto">
  <div className="row d-flex align-items-center">
    <div className="col-md-5  p-5">
      <img src={Mhome} alt="Mhome" className="MDesign" />
    </div>
    <div className="col-md-7 p-5">
      <h1 className="hero-text">
        Design
        <br />
        Innovate
        <br />
        Thrive
      </h1>
      <div className="hero-desc">
        <p className="hero-description">
          "Elevating user experience to its pinnacle"
        </p>
      </div>
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

      <section className="parallax-section ">
        <div className="container">
          <section>
            <div className="container">
              <div className="col-md-12 d-flex align-items-center mb-5">
                <h5 className="head-text">What We Do</h5>
              </div>
            </div>
          </section>

          {/* 1st row service */}

          {/* <div className="row d-flex justify-content-around align-items-center">
            {Array.isArray(servicePage) && servicePage.length > 0 ? (
              servicePage.map((item) => (
                <div key={item._id} className="col-md-6 text-center service-item">
                  <div className="service-icon">
                    <img
                      src={`${API_BASE_URL}${item.imageUrl}`}
                      alt={item.title} // Descriptive alt text
                      style={{ width: "150px", height: "auto", marginRight: "5px" }} // Optional styling
                    />

                  </div>

                  <div className="service-title">
                    <h3>{item.name}</h3>
                  </div>
                  <div className="service-description">
                    <p>{item.shortDescription}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No services available</p>
            )}
          </div> */}






          {/* 2nd row service */}
          <div className="row d-flex justify-content-around align-items-center ">
            <div className="col-md-3 text-center service-item">
              <div className="service-icon">
                <img src={Ecom} alt="Ecommerce" width={110} />
              </div>
              <div className="service-title">
                <h3>E-Commerce</h3>
              </div>
              <div className="service-description">
                <p>
                We create robust e-commerce platforms that provide smooth shopping experiences, secure payments and powerful features for online business growth, ensuring scalability
                </p>
              </div>
            </div>

            <div className="col-md-3 text-center service-item1">
              <div className="service-icon1">
                <img src={UIUX} alt="UIUX" width={110} />
              </div>
              <div className="service-title1">
                <h3>UI / UX Design</h3>
              </div>
              <div className="service-description1">
                <p>
                Our designers create user-friendly, visually appealing interfaces, ensuring a seamless and engaging experience, aiming to elevate brand identity and user engagement.
                </p>
              </div>
            </div>
          </div>

          {/* 3rd row service */}
          <div className="row d-flex justify-content-around align-items-center">
            <div className="col-md-3 text-center service-item">
              <div className="service-icon">
                <img src={Archi} alt="architecture" width={120} />
              </div>
              <div className="service-title">
                <h3>Architecture & 3D </h3>
              </div>
              <div className="service-description">
                <p>
                Our solutions combine contemporary design principles with practical implementation to create visually appealing and efficient spaces.
                </p>
              </div>
            </div>

            <div className="col-md-3 text-center service-item1">
              <div className="service-icon1">
                <img src={Crm} alt="crm" width={120} />
              </div>
              <div className="service-title1">
                <h3>CRM/ ERP</h3>
              </div>
              <div className="service-description1">
                <p>
                We develop comprehensive CRM and ERP systems that streamline business operations, improve customer relationships, and boost productivity.
                </p>
              </div>
            </div>
          </div>
           {/* 4rd row service */}
          <div className="row d-flex justify-content-around align-items-center">
            <div className="col-md-3 text-center service-item">
              <div className="service-icon">
                <img src={In3D} alt="Interactive3D" width={120} />
              </div>
              <div className="service-title">
                <h3>Interactive 3D</h3>
              </div>
              <div className="service-description">
                <p>
                We create immersive, interactive 3D experiences that enable users to explore and interact with products, spaces, or environments in real-time.
                </p>
              </div>
            </div>

            <div className="col-md-3 text-center service-item1">
              <div className="service-icon1">
                <img src={VRICON} alt="360deg" width={120} />
              </div>
              <div className="service-title1">
                <h3>360° VR</h3>
              </div>
              <div className="service-description1">
                <p>
                Our VR solutions offer a captivating and engaging way to explore spaces and scenarios from various angles.
                </p>
              </div>
            </div>
            </div>
        </div>
      </section >

      {/* Technologies */}
      <div div className="container" >
        <Technologies />
      </div >

      {/* testimonials */}

      <div div className="container" >
        <Testimonial />
      </div >

      {/* Delivered */}
      <div div >
        <Delivered />
      </div >



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
</section>
    </>
  );
}

export default LandingPage;
