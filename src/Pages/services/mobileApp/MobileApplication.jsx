import React from 'react'
import "./MobileApplication.css";
import MobileImage from "../../../assets/images/Mobile_login.gif";
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
import CodingWorkShop from "../../../assets/images/CodeWorkSpace.gif";

import Carousel from 'react-bootstrap/Carousel';
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
                            <div className='mobileapplication_header_button_div'>
                                <div className="mobileapplication_header_button row ">
                                    <Link to="/reachUs" style={{ textDecoration: "none" }}>
                                        <button>
                                            Let's Talk{" "}
                                            <span>
                                                <MoveRight />
                                            </span>
                                        </button>
                                    </Link>
                                </div>
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

            <div className="container mt-5 mb-5">
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
            </div>

            {/* section 5 products */}
            <div className="container mt-5 mb-5">
                <div className="webAppCards_heading mt-5 mb-5">
                    <p>Partner with a team ready to elevate your product</p>
                </div>
                <div className='mt-5 mb-3'>
                    <h3>Our Products</h3>
                </div>
              <motion.div
               variants={fadeIn("up", 0.2)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.2 }}
              >
                    <Carousel className='carousel_box'>
                        <Carousel.Item>
    
                            <div className="carousel_item row">
                                <div className="carousel_item_img col-md-6">
                                    <img src="https://i.pinimg.com/736x/14/2c/0a/142c0a0200a6bdb83e38406a814e9c80.jpg" alt="dhdf" className="" />
                                </div>
                                <div className="carousel_item_text col-md-6">
                                    <h4 className='mb-5'>Shoes E-commerce App</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquid vel, nostrum tenetur voluptas possimus est explicabo omnis harum quia corporis odio aspernatur doloremque repellendus? Magnam corrupti dolores debitis tenetur?
                                    </p>
                                </div>
                            </div>
    
                        </Carousel.Item>
                        <Carousel.Item>
    
                            <div className="carousel_item row">
                                <div className="carousel_item_img col-md-6">
                                    <img src="https://i.pinimg.com/564x/f6/70/54/f67054039c162fdf6ae70d3daf619726.jpg" alt="dhdf" className="" />
                                </div>
                                <div className="carousel_item_text col-md-6">
                                    <h4 className='mb-5'>Shoes E-commerce App</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquid vel, nostrum tenetur voluptas possimus est explicabo omnis harum quia corporis odio aspernatur doloremque repellendus? Magnam corrupti dolores debitis tenetur?
                                    </p>
                                </div>
                            </div>
    
                        </Carousel.Item>
                        <Carousel.Item>
    
                            <div className="carousel_item row">
                                <div className="carousel_item_img col-md-6">
                                    <img src="https://i.pinimg.com/564x/fe/31/28/fe3128ca66e18ae9cefb5163de21c99a.jpg" alt="dhdf" className="" />
                                </div>
                                <div className="carousel_item_text col-md-6">
                                    <h4 className='mb-5'>Shoes E-commerce App</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquid vel, nostrum tenetur voluptas possimus est explicabo omnis harum quia corporis odio aspernatur doloremque repellendus? Magnam corrupti dolores debitis tenetur?
                                    </p>
                                </div>
                            </div>
    
                        </Carousel.Item>
                        <Carousel.Item>
    
                            <div className="carousel_item row">
                                <div className="carousel_item_img col-md-6">
                                    <img src="https://i.pinimg.com/564x/6d/96/67/6d96673ea9da5fedbf1eb47393404a16.jpg" alt="dhdf" className="" />
                                </div>
                                <div className="carousel_item_text col-md-6">
                                    <h4 className='mb-5'>Shoes E-commerce App</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquid vel, nostrum tenetur voluptas possimus est explicabo omnis harum quia corporis odio aspernatur doloremque repellendus? Magnam corrupti dolores debitis tenetur?
                                    </p>
                                </div>
                            </div>
    
                        </Carousel.Item>
    
                    </Carousel>
              </motion.div>
            </div>


            {/* section 2 Why Choose Us? */}
            <div className='mobile_boxs container mt-5 mb-5'>
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
            </div>




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
                        <div className="Technologies_img_box col-md-2">
                            <img src={reactLogo} alt="" />
                            <p>React JS</p>
                        </div>
                        <div className="Technologies_img_box col-md-2">
                            <img src={nodeIcons} alt="" />
                            <p>Node JS</p>
                        </div>
                        <div className="Technologies_img_box col-md-2">
                            <img src={mongodbicons} alt="" />
                            <p>Mongo DB</p>
                        </div>
                        <div className="Technologies_img_box col-md-2">
                            <img src={mysql} alt="" />
                            <p>MySql</p>
                        </div>
                        <div className="Technologies_img_box col-md-2">
                            <img src={phpicon} alt="" />
                            <p>Php</p>
                        </div>
                        <div className="Technologies_img_box col-md-2">
                            <img src={razorpay} alt="" />
                            <p>Razorpay</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* section 7 contact us */}

            <div className="container mt-5 mb-5">
                <motion.div
                    className="contactUs_box"
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h1>Get Started Today!</h1>
                    <p>
                        Ready to take your business to the next level with a custom web
                        application? Contact us to schedule a free consultation.
                    </p>
                    <Link to="/reachUs" style={{ textDecoration: "none" }}>
                        <button>Reach Us</button>
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

export default MobileApplication