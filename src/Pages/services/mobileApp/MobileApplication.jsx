import React from 'react'
import "./MobileApplication.css";
import MobileImage from "../../../assets/images/Mobile_login.gif";
import Card from "react-bootstrap/Card";
import { ChevronDown, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import Flutter from "../../../assets/images/flutterIcons.png";
import AndroidStudio from "../../../assets/images/AndroidStudio.png";
import CustomWebApp from "../../../assets/images/customWebApp1.gif";
import responsiveWeb from "../../../assets/images/responsiveWeb.gif";
import browserSecurity from "../../../assets/images/output-onlinegiftools.gif";
import userWeb from "../../../assets/images/userWeb.gif";
import analytics from "../../../assets/images/analytics.gif";
import reactLogo from "../../../assets/images/React.png";
import nodeIcons from "../../../assets/images/node.png";
import mongodbicons from "../../../assets/images/mongodbIcons.png";
import mysql from "../../../assets/images/mysql.png";
import phpicon from "../../../assets/images/php.png";
import razorpay from "../../../assets/images/razorpay .png";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
// import CodingWorkShop from "../../../assets/images/CodeWorkSpace.gif";
import whyUs1 from "../../../assets/images/whyus1.jpg";
import AppBank from "../../../assets/images/AppBank.png";
import  AppSchl  from "../../../assets/images/AppSchl.png";
import AppDevry from "../../../assets/images/AppDevry.png";
import AppTravel from "../../../assets/images/AppTravel.png";
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function MobileApplication() {
    return (
        <div className="webApplication_container">
            {/* section top */}
            <div className="webAppTop container">
                <div className="row">
                    <motion.div
                        className="webapplication_header_img col-md-6 text-center"
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <img
                            src={MobileImage}
                            alt="Web app design"
                            className="responsive-img"
                        />
                    </motion.div>
                    <div className="webapplication_header col-md-6 ">
                        <motion.div
                            variants={fadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <p className="webapplication_header_text1">
                                Bring Your Ideas to Life with Our Mobile App Solutions
                            </p>
                            <p>
                                Powerful, Scalable, and Custom-Built Solutions for Your Business
                            </p>
                            <div className="webapplication_header_button row ">
                <Link to="/reachUs" style={{ textDecoration: "none" }}>
                  <button>
                    Let's Talk{" "}
                    <span>
                      <MoveRight />
                    </span>
                  </button>
                </Link>
              </div>
                        </motion.div>
                    </div>

                </div>
                <div className="row">
                    <div className="webAppTop_scroll col-md-12">
                        <p>Scroll Down</p>
                        <ChevronDown className="animate_icon" />
                    </div>
                </div>
            </div>

            {/* section 1*/}

            {/* <div className="container mt-5 mb-5">
                <motion.div
                    className="Introduction_box"
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <p>
                        At Minute Designs, we specialize in creating intuitive and innovative mobile applications tailored to meet your business needs. Our expert team develops robust, user-friendly apps that offer seamless performance across platforms, whether Android, iOS, or cross-platform.
                    </p>
                </motion.div>
            </div> */}

              {/* section 5 products */}
 <section className="full-container parallax-section">
 <div className="container mt-5 mb-5">
        <div className="head-service-head">
          <h1>Collaborate with a team that is prepared to elevate your product</h1>
        </div>

   
          <div className="webAppCards row mt-5">
            <motion.div
              className="webAppCards_card col-md-6 "
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Card.Body className="webApp_card_body">
                <Card.Title>Banking App</Card.Title>
                <Card.Text className="webApp_text">
                Our banking app solutions aim to streamline financial operations, improve user engagement, & provide a seamless digital banking experience.
                </Card.Text>
              </Card.Body>
              <Card.Img
                style={{
                  height: "200px",
                  objectFit: "cover",
                }}
                variant="top"
                src={AppBank}
              />
            </motion.div>

            <motion.div
              className="webAppCards_card col-md-6"
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Card.Body className="webApp_card_body">
                <Card.Title>School App</Card.Title>
                <Card.Text className="webApp_text">
                Our school apps are designed to streamline communication, enhance learning experiences, and simplify school management.
                </Card.Text>
              </Card.Body>
              <Card.Img
                style={{
                  height: "200px",
                  objectFit: "cover",
                }}
                variant="top"
                src={AppSchl}
              />
            </motion.div>
          </div>

          <div className="webAppCards row mt-5">
            <motion.div
              className="webAppCards_card col-md-6"
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Card.Body className="webApp_card_body">
                <Card.Title>Delivery App</Card.Title>
                <Card.Text className="webApp_text">
                We create efficient and user-friendly delivery apps that streamline logistics, improve customer satisfaction, and optimize operations for businesses of all sizes.
                </Card.Text>
              </Card.Body>
              <Card.Img
                style={{
                  height: "200px",
                  objectFit: "cover",
                }}
                variant="top"
                src={AppDevry}
              />
            </motion.div>

            <motion.div
              className="webAppCards_card col-md-6"
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Card.Body className="webApp_card_body">
                <Card.Title>Travel App</Card.Title>
                <Card.Text className="webApp_text">
                Our travel app solutions aim to enhance travel convenience, personalization, and enjoyment by incorporating essential features for both travelers and travel businesses.
                </Card.Text>
              </Card.Body>
              <Card.Img
                style={{
                  height: "200px",
                  objectFit: "cover",
                }}
                variant="top"
                src={AppTravel}
              />
            </motion.div>
          </div>
        </div>
 </section>
      


            {/* section 2 Why Choose Us? */}
            {/* <div className='mobile_boxs container mt-5 mb-5'>
                <div className=" mobile_box row">
                    <motion.div
                        className="mobile_box1 col-md-6 mb-4" // Added mb-4 for bottom margin
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div>
                            <h3>Why Choose Us?</h3>
                        </div>
                        <div className='mt-4'>
                            <ul>
                                <li><strong>Custom Solutions:</strong> We understand that every business is unique. Our team works closely with you to develop a custom mobile app that aligns perfectly with your brand and objectives.
                                </li>
                                <li><strong>User-Centered Design:</strong> We focus on delivering apps with an engaging and intuitive user interface (UI) that enhances user experience (UX) to keep your customers coming back.
                                </li>
                                <li><strong>Cutting-Edge Technology:</strong> Our mobile apps are built using the latest technologies, ensuring that they are fast, scalable, and future-proof.
                                </li>
                                <li><strong>Cross-Platform Expertise:</strong> Whether it’s a native app for iOS or Android or a cross-platform solution, we ensure a smooth and consistent experience on any device.
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div className="mobile_box2 col-md-6 mb-4" // Added mb-4 for bottom margin
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div>
                            <h3>Our Process</h3>
                        </div>
                        <div className='mt-4'>
                            <ol>
                                <li><strong>Consultation & Planning:</strong> We begin with understanding your business goals, target audience, and requirements.
                                </li>
                                <li><strong>Design & Prototyping:</strong> Our designers craft wireframes and prototypes to give you a visual representation of the app before development.
                                </li>
                                <li><strong>Development & Testing:</strong> We code your app using modern frameworks, ensuring it is secure, scalable, and high-performing. Rigorous testing is done to eliminate any bugs.
                                </li>
                                <li><strong>Launch & Support:</strong> Once the app is live, we offer continuous support and maintenance to ensure its success in the market.
                                </li>
                            </ol>
                        </div>
                    </motion.div>
                </div>
            </div> */}




            {/* section 4 Our Process*/}

            {/* <div className="container mt-5 mb-5">
                <div>
                    <h1>Our Process</h1>
                </div>
                <section class="timeline-section">
                    <div class="timeline-items">
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <motion.div
                                class="timeline-content"
                                variants={fadeIn("left", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <h3>Consultation & Planning</h3>
                                <p>
                                    We start by understanding your business goals and challenges
                                    to create a tailored solution roadmap.
                                </p>
                            </motion.div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <motion.div
                                class="timeline-content"
                                variants={fadeIn("right", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <h3>Design & Prototype</h3>
                                <p>
                                    Our team creates wireframes and prototypes to visualize the
                                    user experience and application flow.
                                </p>
                            </motion.div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <motion.div
                                class="timeline-content"
                                variants={fadeIn("left", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <h3>Development & Testing</h3>
                                <p>
                                    Using agile development practices, we build your web
                                    application while keeping you updated every step of the way.
                                    Rigorous testing ensures your app performs flawlessly.{" "}
                                </p>
                            </motion.div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <motion.div
                                class="timeline-content"
                                variants={fadeIn("right", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <h3>Deployment & Support</h3>
                                <p>
                                    After deployment, we provide ongoing support and maintenance
                                    to keep your web application running smoothly and up-to-date.{" "}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div> */}

            {/* section 5  Why Choose Minute Designs?*/}
            {/* <div className="container mt-5 mb-5">
                <motion.div
                    className="Choose row"
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className="Choose_img col-md-6">
                        <img src={CodingWorkShop} alt="" />
                    </div>
                    <div className="Choose_text col-md-6">
                        <h1>Why Choose Minute Designs?</h1>
                        <ul>
                            <li>Expertise in various industries</li>
                            <li>Tailored solutions that match your business needs</li>
                            <li>Fast and secure applications</li>
                            <li>Long-term support and collaboration</li>
                        </ul>
                    </div>
                </motion.div>
            </div> */}


      
      {/* section 3 Technologies  */}

    <section className="full-container">
    <div className="container">
        <div className="Technologies">
          <h1>Technologies We Use</h1>

            <motion.div
            className="Technologies_box row"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="row d-flex justify-content-around mt-5 p-5">
            <div className="Technologies_img_box col-md-4">
              <img src={Flutter} alt="" />
              <p>Flutter</p>
            </div>
            <div className="Technologies_img_box col-md-4">
              <img src={nodeIcons} alt="" />
              <p>Node JS</p>
            </div>
            <div className="Technologies_img_box col-md-4">
              <img src={mongodbicons} alt="" />
              <p>Mongo DB</p>
            </div>
            </div>

            <div className="row d-flex justify-content-around p-5">
            <div className="Technologies_img_box col-md-4">
              <img src={mysql} alt="" />
              <p>MySql</p>
            </div>
            <div className="Technologies_img_box col-md-4">
              <img src={AndroidStudio} alt="" />
              <p>Android Studio</p>
            </div>
            <div className="Technologies_img_box col-md-4">
              <img src={razorpay} alt="" />
              <p>Razorpay</p>
            </div>
            </div>
          </motion.div>
    
        </div>
      </div>

      <section className="mb-5">
                  {/* section 5  Why Choose Minute Designs?*/}
    <div className="container">
        <motion.div
          className="Choose row"
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}
        >
          <div className="Choose_img col-md-6">
            <img src={whyUs1} alt="" />
          </div>
          <div className="Choose_text col-md-6">
            <h1>Why Choose Minute Designs?</h1>
            <ul>
              <li>Innovative Technology</li>
              <li>Agile Development</li>
              <li>Fast and Secure Applications</li>
              <li>Ongoing Support & Maintenance</li>
            </ul>
          </div>
        </motion.div>
      </div>
              </section>
    </section>


          {/* section 4 Our Process*/}
<section className="full-container parallax-section  mt-5 mb-5">
      <div className="container">
        <div>
          <h1>Our Process</h1>
        </div>
        <section class="timeline-section">
          <div class="timeline-items">
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              {/* <div class="timeline-date">Consultation & Planning</div> */}
              <motion.div
                class="timeline-content"
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
              >
                <h3>Research & Analysis</h3>
                <p>
                The research aims to identify industry trends, user pain points, and optimal strategies for app design and development to achieve goals.
                </p>
              </motion.div>
            </div>
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              {/* <div class="timeline-date">2016</div> */}
              <motion.div
                class="timeline-content"
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
              >
                <h3> UI/UX Design</h3>
                <p>
                Our goal is to provide a superior user experience, ensuring a design that is user-friendly, responsive, and aligns with your brand identity.
                </p>
              </motion.div>
            </div>
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              {/* <div class="timeline-date">2017</div> */}
              <motion.div
                class="timeline-content"
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
              >
                <h3>Development & Testing</h3>
                <p>
                We offer native iOS and Android apps or cross-platform solutions, ensuring seamless integration of third-party services, APIs, and databases, depending on your project's requirements.
               </p>
              </motion.div>
            </div>
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              {/* <div class="timeline-date">2018</div> */}
              <motion.div
                class="timeline-content"
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
              >
                <h3>App Launch</h3>
                <p>
                We handle app submissions for Apple App Store and Google Play, preparing assets like app descriptions, icons, screenshots, and videos to create a strong first impression.
                </p>
              </motion.div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              {/* <div class="timeline-date">2017</div> */}
              <motion.div
                class="timeline-content"
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
              >
                <h3>Performance Monitoring & Analytics</h3>
                <p>
                After the app's launch, we utilize analytics tools to track user engagement, downloads, crashes, and other crucial metrics.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      </section>

  {/* section 7 contact us */}
  <section >
<div className="container mt-5 mb-5 text-center bg-black text-white p-2">
<div className="benefit-title">
    <h3>  Get Started Today ! </h3>
  </div>
  <div className="section-footer-para">
  <p>
            Ready to take your business to the next level with our E-commerce service? Contact us to schedule a free consultation.
          </p>
  </div>
       
          <div className="head-btn text-center">
                <Link to="/reachUs" style={{ textDecoration: "none" }}>
                  <button className='service-footer-btn'>
                    Let's Talk
                    <span>
                      <MoveRight />
                    </span>
                  </button>
                </Link>
              </div>
        </div>
   
</section>
        </div>
    )
}

export default MobileApplication