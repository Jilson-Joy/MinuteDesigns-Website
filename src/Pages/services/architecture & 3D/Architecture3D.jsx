import React from 'react'
// import "./WebApplication.css";
import './Architecture3D.css';

import Building from "../../../assets/images/image-removebg-preview.png";
import process3d from "../../../assets/images/3dprocess.gif";
import Benefits from "../../../assets/images/Benefits.gif";
import Card from "react-bootstrap/Card";
import { ChevronDown, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import Architectural3D from "../../../assets/images/Architectural3D.png";
import cube3D from "../../../assets/images/cube3D.gif";
import vr3D from "../../../assets/images/vr3D.gif";
import AnimationServices from "../../../assets/images/Animation Services.gif";
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
function Architecture3D() {
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
                                Enhance Your Vision with Architecture & 3D Visualization
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
                            src={Building}
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

            <div className="container mt-5 mb-5">
                <motion.div
                    className="Introduction_box"
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <p>
                        At Minute Designs, we are dedicated to transforming your architectural ideas into stunning visual experiences. Our team combines creativity and technical expertise to deliver exceptional 3D visualizations that not only enhance the design process but also help you effectively communicate your vision to clients and stakeholders.
                    </p>
                </motion.div>
            </div>

            {/* section 2  Our Expertise*/}

            <div className="container mt-5 mb-5">
                <h1>Our Expertise</h1>
                <motion.div
                    className="offer row mt-5"
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div
                        className="Offer_card col-md-6"
                    >
                        <Card.Body>
                            <div className="d-flex flex-row justify-content-between align-items-center">
                                <Card.Title>Architectural Design</Card.Title>
                                <img
                                    src={Architectural3D}
                                    alt=""
                                    width={"20%"}
                                    className="Offer_card_img"
                                />
                            </div>
                            <Card.Text>
                                Our skilled architects bring a wealth of experience in designing a variety of projects, including residential homes, commercial buildings, and public spaces. We focus on innovative solutions that reflect your style and meet functional requirements.
                            </Card.Text>
                        </Card.Body>
                    </div>
                    <div className="Offer_card col-md-6"
                        style={{ backgroundColor: "#0b141c", color: "#c8c8c8" }}

                    >
                        <Card.Body>
                            <div className="d-flex flex-row justify-content-between align-items-center">
                                <Card.Title>3D Rendering</Card.Title>
                                <img
                                    src={cube3D}
                                    alt=""
                                    width={"20%"}
                                    className="Offer_card_img"
                                />
                            </div>
                            <Card.Text>
                                We specialize in creating high-quality 3D renderings that depict your project in the most realistic way possible. Our renderings include detailed textures, accurate lighting, and lifelike materials, allowing you to visualize the final product before construction begins.
                            </Card.Text>
                        </Card.Body>
                    </div>
                </motion.div>
                <motion.div
                    className="offer row mt-3"
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className="Offer_card col-md-6"
                        style={{ backgroundColor: "#0b141c", color: "#c8c8c8" }}

                    >
                        <Card.Body>
                            <div className="d-flex flex-row justify-content-between align-items-center">
                                <Card.Title>Animation Services</Card.Title>
                                <img
                                    src={AnimationServices}
                                    alt=""
                                    width={"20%"}
                                    className="Offer_card_img"
                                />
                            </div>
                            <Card.Text>
                                With our 3D animation capabilities, we can create engaging walkthroughs and flyovers that showcase your project’s features. This dynamic presentation is an effective tool for marketing and client presentations.
                            </Card.Text>
                        </Card.Body>
                    </div>
                    <div className="Offer_card col-md-6">
                        <Card.Body>
                            <div
                                className="d-flex flex-row justify-content-between align-items-center"

                            >
                                <Card.Title>Virtual Reality (VR) and Augmented Reality (AR)</Card.Title>
                                <img
                                    src={vr3D}
                                    alt=""
                                    width={"20%"}
                                    className="Offer_card_img"
                                />
                            </div>
                            <Card.Text>
                                We leverage cutting-edge VR and AR technologies to provide immersive experiences. Clients can explore their projects in a virtual environment, gaining a better understanding of scale, layout, and design elements.
                            </Card.Text>
                        </Card.Body>
                    </div>
                </motion.div>

            </div>


            {/* Benefits of Our Services */}
            <div className='container mt-5 mb-5' >
                <div className='mb-5'>
                    <h1 className="">Benefits of Our Services</h1> {/* Centered Heading */}
                </div>
                <motion.div className="Benefits_Services row align-items-center"
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                > {/* Align items vertically in the center */}
                    <div className="Benefits_Services_img col-md-6 mb-4 mb-md-0"> {/* Add margin-bottom for mobile */}
                        <img src={Benefits} alt="" className="img-fluid" /> {/* Make image responsive */}
                    </div>
                    <div className="col-md-6">
                        <ul className="list-unstyled"> {/* Remove default list styling */}
                            <li className="mb-3"> {/* Add margin-bottom for list items */}
                                <strong>Enhanced Communication:</strong> Our visualizations make it easier to communicate complex ideas to clients, investors, and contractors, reducing misunderstandings and aligning expectations.
                            </li>
                            <li className="mb-3">
                                <strong>Informed Decision-Making:</strong> By visualizing designs early in the process, you can make informed decisions regarding materials, layouts, and aesthetics, leading to better outcomes.
                            </li>
                            <li className="mb-3">
                                <strong>Effective Marketing Tools: </strong>Stunning 3D visuals can be powerful marketing tools, attracting potential buyers and investors by showcasing the beauty and functionality of your designs.
                            </li>
                            <li>
                                <strong>Cost-Effective Solutions:</strong> Investing in 3D visualization can save you time and money in the long run by identifying design flaws and making adjustments before construction begins.
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>

            {/* Our Process */}
            <div className='container mb-5'>
                <div className='mb-5'>
                    <h1 className="">Our Process</h1> {/* Centered Heading */}
                </div>
                <motion.div className="Benefits_Services row align-items-center"
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                > {/* Align items vertically in the center */}

                    <div className="col-md-6"> {/* Text column first */}
                        <ul className="list-unstyled"> {/* Remove default list styling */}
                            <li className="mb-3"> {/* Add margin-bottom for list items */}
                                <strong>Initial Consultation:</strong> We begin with a comprehensive discussion to understand your vision, project requirements, and design preferences. This collaborative approach ensures we capture your goals from the start.
                            </li>
                            <li className="mb-3">
                                <strong>Concept Development:</strong> Our architects develop initial design concepts, providing sketches and mood boards to establish a clear direction for the project.
                            </li>
                            <li className="mb-3">
                                <strong>3D Modeling:</strong> Using advanced software, we create detailed 3D models that reflect your design accurately. This step includes selecting materials and finishes that match your vision.
                            </li>
                            <li>
                                <strong>Rendering & Visualization:</strong> We produce high-resolution renderings that showcase your project in various lighting conditions and perspectives. This stage often involves client feedback to fine-tune the visuals.
                            </li>
                            <li>
                                <strong>Animation & Virtual Reality:</strong> For projects that benefit from dynamic presentations, we create animated walkthroughs or VR experiences, providing a comprehensive view of the space.
                            </li>
                            <li>
                                <strong>Final Presentation:</strong> The final deliverables include a complete set of visualizations, animations, and any additional materials you may need for marketing or presentations.
                            </li>
                        </ul>
                    </div>

                    <div className="Benefits_Services_img col-md-6 mb-4 mb-md-0"> {/* Image column on the right */}
                        <img src={process3d} alt="Benefits of Our Services" className="img-fluid" /> {/* Make image responsive */}
                    </div>
                </motion.div>
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

            {/* section 3 Technologies  */}

            {/* <div className="container">
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
            </div> */}

            {/* section 5  Why Choose Minute Designs?*/}
            <div className="container mt-5 mb-5">
                <motion.div
                    className="Choose row"
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className="Choose_img col-md-6">
                        <img src={Building} alt="" />
                    </div>
                    <div className="Choose_text col-md-6">
                        <h1>Industries We Serve</h1>
                        <ul>
                            <li><strong>Residential:</strong> Custom homes, renovations, and interior designs.</li>
                            <li><strong>Commercial:</strong> Offices, retail spaces, and hospitality.</li>
                            <li><strong>Public Sector:</strong> Community centers, parks, and municipal buildings.</li>
                            <li><strong>Industrial:</strong> Warehouses, factories, and logistical centers.</li>
                        </ul>
                    </div>
                </motion.div>
            </div>

            {/* section 5 products */}
            <div className="container mt-5 mb-5">
                <div className="webAppCards_heading">
                    <p>Partner with a team ready to elevate your product</p>
                </div>

                <div className="">
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
                                    We develop intuitive, secure, and scalable web applications
                                    that drive growth & success for your business. We make sure
                                    every app is fully tailored for your unique requirements.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img
                                style={{
                                    height: "200px",
                                    objectFit: "cover",
                                    borderRadius: "10px",
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
                                    CRM systems empower businesses to build & nurture strong
                                    customer relationships. With data-driven insights and
                                    intuitive interfaces, our CRM solutions streamline sales,
                                    marketing, and customer service
                                </Card.Text>
                            </Card.Body>
                            <Card.Img
                                style={{
                                    height: "200px",
                                    objectFit: "cover",
                                    borderRadius: "10px",
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
                                    With robust features and customizable settings, our admin
                                    panles provide you with complete control over user management,
                                    content management, data analysis, and system configuration.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img
                                style={{
                                    height: "200px",
                                    objectFit: "cover",
                                    borderRadius: "10px",
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
                                    Dashboards provide a comprehensive and visual representation
                                    of your business's key metrics and data. With user-friendly
                                    interfaces and real-time analytics, we create dashboards that
                                    enable you to make data-driven decisions with ease.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img
                                style={{
                                    height: "200px",
                                    objectFit: "cover",
                                    borderRadius: "10px",
                                }}
                                variant="top"
                                src="https://i.pinimg.com/736x/6a/00/e3/6a00e3a85e84aac71cb1a14ddd8011ce.jpg"
                            />
                        </motion.div>
                    </div>
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
        </div>)
}

export default Architecture3D