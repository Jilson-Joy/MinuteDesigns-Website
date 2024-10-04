import React, { useEffect } from "react";
import "./WebApplication.css";
import WebsiteIcon from "../../../assets/images/Website designer.gif";
import Card from "react-bootstrap/Card";
import { ChevronDown, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
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
import whyUs from "../../../assets/images/whyUs.jpg";
import CodingWorkShop from "../../../assets/images/CodeWorkSpace.gif";

function WebApplication() {

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="webApplication_container">
      {/* section 1 */}
      <div className="webAppTop container">
        <div className="row">
          <div className="webapplication_header col-md-6 ">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <p className="webapplication_header_text1">
                Transform Your Vision with Our Web Applications
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
          <motion.div
            className="webapplication_header_img col-md-6 text-center"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <img
              src={WebsiteIcon}
              alt="Web app design"
              className="responsive-img"
            />
          </motion.div>
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
            At Minute Designs, we craft tailored web applications designed to
            meet your business needs. Our team specializes in building scalable,
            secure, and user-friendly web apps that help automate processes,
            enhance customer experiences, and drive growth.
          </p>
        </motion.div>
      </div> */}

      {/* section 2 */}


      <section className="full-container parallax-section">
        <div className="container">
          <h1>What We Offer</h1>
          <motion.div
            className="offer row mt-5"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div
              className="Offer_card col-md-6 mt-3"
              style={{ backgroundColor: "black", color: "white" }}
            >
              <Card.Body>
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <Card.Title>Custom Web Applications</Card.Title>
                  <img
                    src={CustomWebApp}
                    alt=""
                    width={"20%"}
                    className="Offer_card_img"
                  />
                </div>
                <Card.Text>
                  <p>   Our solutions are built from the ground up to meet your specific
                    requirements. Whether you're looking for a simple tool or a
                    complex multi-featured platform, we have you covered.</p>
                </Card.Text>
              </Card.Body>
            </div>
            <div className="Offer_card col-md-6 border ">
              <Card.Body>
                <div className="d-flex flex-row justify-content-between align-items-center ">
                  <Card.Title>Cross-Platform Compatibility</Card.Title>
                  <img
                    src={responsiveWeb}
                    alt=""
                    width={"20%"}
                    className="Offer_card_img"
                  />
                </div>
                <Card.Text>
                  <p>   Whether your users access your app from their desktops, tablets,
                    or smartphones, our web applications are optimized for all
                    devices.</p>
                </Card.Text>
              </Card.Body>
            </div>
          </motion.div>
          <motion.div
            className="offer row mt-5"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="Offer_card col-md-6 border">
              <Card.Body>
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <Card.Title>User-Centered Design</Card.Title>
                  <img
                    src={userWeb}
                    alt=""
                    width={"20%"}
                    className="Offer_card_img"
                  />
                </div>
                <Card.Text>
                  <p>We prioritize usability, creating intuitive interfaces that make
                    your web applications accessible and enjoyable for your users.</p>
                </Card.Text>
              </Card.Body>
            </div>
            <div
              className="Offer_card col-md-6 "
              style={{ backgroundColor: "black", color: "white" }}
            >
              <Card.Body>
                <div
                  className="d-flex flex-row justify-content-between align-items-center"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  <Card.Title>Security</Card.Title>
                  <img
                    src={browserSecurity}
                    alt=""
                    width={"20%"}
                    className="Offer_card_img"
                  />
                </div>
                <Card.Text>
                  <p>   Our top-notch security protocols protect your data and your
                    users, ensuring peace of mind and compliance with industry
                    standards.</p>
                </Card.Text>
              </Card.Body>
            </div>
          </motion.div>
          {/* <div className="offer row mt-3">
            <div className="Offer_card col-md-6">
              <Card.Body>
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <Card.Title>Cross-Platform Compatibility</Card.Title>
                  <img src={responsiveWeb} alt="" width={"20%"} />
                </div>
                <Card.Text>
                  Whether your users access your app from their desktops, tablets,
                  or smartphones, our web applications are optimized for all
                  devices.
                </Card.Text>
              </Card.Body>
            </div>
          </div> */}
        </div>
      </section>


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
                  <img src={reactLogo} alt="" />
                  <p>React JS</p>
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
                  <img src={phpicon} alt="" />
                  <p>Php</p>
                </div>
                <div className="Technologies_img_box col-md-4">
                  <img src={razorpay} alt="" />
                  <p>Razorpay</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* section 5  Why Choose Minute Designs?*/}
        <section className="mb-5">
          <div className="container">
            <motion.div
              className="Choose row"
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
            >
              <div className="Choose_img col-md-6">
                <img src={whyUs} alt="" />
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
                  <h3>Consultation & Planning</h3>
                  <p>
                    We start by understanding your business goals and challenges
                    to create a tailored solution roadmap.
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
                  <h3>Design & Prototype</h3>
                  <p>
                    Our team creates wireframes and prototypes to visualize the
                    user experience and application flow.
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
                    Our agile development, we build your web application while keeping you updated every step of the way. Rigorous testing ensures your app performs flawlessly.
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
                  <h3>Deployment & Support</h3>
                  <p>
                    After deployment, we provide ongoing support and maintenance
                    to keep your web application running smoothly and up-to-date.{" "}
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </section>


      {/* section 5 products */}
      <section className="full-container">
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
                <Card.Title>Web Apps</Card.Title>
                <Card.Text className="webApp_text">
                  We create user-friendly, secure, and scalable web applications that drive business growth and success, ensuring each app is tailored to your specific needs.
                </Card.Text>
              </Card.Body>
              <Card.Img
                style={{
                  height: "200px",
                  objectFit: "cover",
                }}
                variant="top"
                src="https://i.pinimg.com/564x/24/bd/46/24bd46f5e985ca76b7de56eb47569c3e.jpg"
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
                <Card.Title>CRM</Card.Title>
                <Card.Text className="webApp_text">
                  CRM systems help businesses maintain strong customer relationships, enhancing sales and customer service through data-driven insights and user-friendly interfaces.
                </Card.Text>
              </Card.Body>
              <Card.Img
                style={{
                  height: "200px",
                  objectFit: "cover",
                }}
                variant="top"
                src="https://i.pinimg.com/564x/d0/38/43/d03843f15d986adb51d862cda2e8376a.jpg"
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
                <Card.Title>Admin Panel</Card.Title>
                <Card.Text className="webApp_text">
                  Our admin panles offer comprehensive control over user content management, data analysis, and system configuration through robust features and customizable settings.
                </Card.Text>
              </Card.Body>
              <Card.Img
                style={{
                  height: "200px",
                  objectFit: "cover",
                }}
                variant="top"
                src="https://i.pinimg.com/564x/59/b8/df/59b8dfa2b099f33872402445830af6c5.jpg"
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
                <Card.Title>Dashboard</Card.Title>
                <Card.Text className="webApp_text">
                  Dashboards offer a visually appealing representation of your business's key metrics, enabling easy data-driven decision-making through user-friendly interfaces and real-time analytics.
                </Card.Text>
              </Card.Body>
              <Card.Img
                style={{
                  height: "200px",
                  objectFit: "cover",
                }}
                variant="top"
                src="https://i.pinimg.com/736x/6a/00/e3/6a00e3a85e84aac71cb1a14ddd8011ce.jpg"
              />
            </motion.div>
          </div>
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
              Ready to take your business to the next level with our Web Application service? Contact us to schedule a free consultation.
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
  );
}

export default WebApplication;