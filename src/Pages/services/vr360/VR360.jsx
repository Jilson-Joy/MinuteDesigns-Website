import { Eye, MoveRight } from 'lucide-react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import dreamflowerVR from '../../../assets/images/MAGNUM OPUS.mp4'
import dreamflowerVR from '../../../assets/images/dreamflowerVR360.gif'
import vr2 from '../../../assets/images/vr2.png'
import './VR360.css'
import VrImg from '../../../assets/images/vr.png'
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import { Carousel } from 'react-bootstrap'


function VR360() {

    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            {/* section1 */}
            <section className='full-container'>
                <div className="container">
                    <div className='row text-center'>
                        <div className="head-title mt-5">
                            <h3>
                                Empowering businesses with 360° solutions for seamless operations and engagement.
                            </h3>
                        </div>
                        <div className="head-btn text-center">
                            <Link to="/reachUs" style={{ textDecoration: "none" }}>
                                <button className='service-btn'>
                                    Let's Talk
                                    <span>
                                        <MoveRight />
                                    </span>
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>


            {/* section */}

            <section className='container'>
                <div >
                    <div className='container mt-5 mb-5' >

                        <motion.div className="Benefits_Services row align-items-center"
                            variants={fadeIn("left", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.2 }}
                        > {/* Align items vertically in the center */}
                            <div className="Key_Features_img col-md-4 mb-4 mb-md-0"> {/* Add margin-bottom for mobile */}
                                <img src={VrImg} alt="" className="img-fluid" /> {/* Make image responsive */}
                            </div>
                            <div className="Key_Features_text col-md-8">
                                <div className='mb-5'>
                                    <h1 className="">Key Features:</h1> {/* Centered Heading */}
                                </div>
                                <ul className="Key_Features_list-unstyled"> {/* Remove default list styling */}
                                    <li className="mb-3"> {/* Add margin-bottom for list items */}
                                        <strong>Immersive Exploration:</strong> Experience stunning 360° visuals that allow users to explore spaces and products as if they were truly there.
                                    </li>
                                    <li className="mb-3">
                                        <strong>Interactive Elements:</strong> Engage users with interactive features, from clickable hotspots to guided tours, providing an informative and captivating experience.
                                    </li>
                                    <li className="mb-3">
                                        <strong>Versatile Applications:</strong> Perfect for real estate showcases, product demonstrations, educational training, and virtual events, our service adapts to meet your needs.
                                    </li>
                                    <li>
                                        <strong>High-Quality Production:</strong> Utilizing state-of-the-art technology, we deliver high-resolution visuals and seamless navigation for an unparalleled user experience.
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>


                </div>
            </section>
            {/* section */}

            <section className='container'>
                <div >
                    <div className='container mt-5 mb-5' >

                        <motion.div className="Benefits_Services row align-items-center"
                            variants={fadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.2 }}
                        > {/* Align items vertically in the center */}
                            <div className="Key_Features_text col-md-8">
                                <div className='mb-5'>
                                    <h1 className="">Best Suited For:</h1> {/* Centered Heading */}
                                </div>
                                <ul className="Key_Features_list-unstyled"> {/* Remove default list styling */}
                                    <li className="mb-3"> {/* Add margin-bottom for list items */}
                                        <strong>Real Estate:</strong> Provide prospective buyers with virtual home tours, allowing them to explore every room and detail from anywhere in the world.
                                    </li>
                                    <li className="mb-3">
                                        <strong>Retail & E-Commerce: </strong>Let customers interact with your products in 360°, exploring features up-close before making a purchase decision.
                                    </li>
                                    <li className="mb-3">
                                        <strong>Tourism & Hospitality:</strong> Showcase destinations, hotels, and attractions with interactive VR tours that captivate potential travelers and guests.
                                    </li>
                                    <li className="mb-3">
                                        <strong>Education & Training:</strong> Simulate real-world environments for education or employee training, offering a safe, hands-on learning experience.
                                    </li>
                                    <li className="mb-3">
                                        <strong>Events & Marketing:</strong> Use VR to host virtual product launches, trade shows, and marketing campaigns that wow your audience and increase engagement.
                                    </li>
                                </ul>
                            </div>
                            <div className="Key_Features_img col-md-4 mb-4 mb-md-0"> {/* Add margin-bottom for mobile */}
                                <img src={vr2} alt="" className="img-fluid" /> {/* Make image responsive */}
                            </div>

                        </motion.div>
                    </div>


                </div>
            </section>

            {/* section 2 */}

            <section className='vr_box container'>
                <div className='vr_section1'>
                    {/* <div className='vr_text'>
                        <h3>At every point of the client experience, Minute Designs makes sure that all of your teams remain in sync.</h3>
                    </div> */}
                    <div className="vr_row row mt-5">
                        <div className="vr_section1_img col-md-6 position-relative">
                            <img src={dreamflowerVR} className="img-fluid" alt="VR Display" />
                            <p className="icon-overlay">
                                <a href='https://dreamflower.pro/magnumopus/' target='_blank'><Eye className="icon-large" /></a>
                            </p>
                        </div>
                        <div className="vr_section1_text col-md-12 mt-3">
                            <div>
                                <h3>Dream Flower</h3>
                            </div>
                            <div>
                                <p>
                                    Step into a world of limitless possibilities with our 360° Virtual Reality (VR) service. Designed for businesses and individuals alike, our VR experiences transport users into fully interactive environments that enhance engagement and deliver impactful storytelling.
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
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
                            <img src={VrImg} alt="" />
                        </div>
                        <div className="Choose_text col-md-6">
                            <h1>Why Choose Minute Designs?</h1>

                            <ul>
                                <li>
                                    Expert Collaboration: From concept development to the final delivery, we collaborate with you at every stage, ensuring your vision comes to life.
                                </li>
                                <li>
                                    Innovative Technology: We stay ahead of the curve with the latest VR advancements to offer you state-of-the-art solutions.

                                </li>
                                <li>
                                    Scalable Solutions: Whether you’re a small business or a large enterprise, our VR services are scalable and adaptable to meet your budget and project needs.
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* <section>
                <div className='vr_section1_text_row row container'>
                  
                </div>
            </section> */}

            {/* products */}

            <section className='full-container'>
                {/* section 5 products */}
                <div className="container mt-5 mb-5">
                    <div className='row text-center'>
                        <div className="benefit-title mb-5">
                            <h3>Popular 360VR Service You May Know </h3>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <motion.div
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <Carousel className='carousel_box'>
                                <Carousel.Item>

                                    <div className="carousel_item row">
                                        <div className="carousel_item_img col-md-7">
                                            <img src={dreamflowerVR} alt="dhdf" className="" />
                                        </div>
                                        <div className="carousel_item_text col-md-5">
                                            <h4 className='mb-5'>Skin Care & Beauty</h4>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquid vel, nostrum tenetur voluptas possimus est explicabo omnis harum quia corporis odio aspernatur doloremque repellendus? Magnam corrupti dolores debitis tenetur?
                                            </p>
                                           <div className='product_360btn'>
                                                <a href="https://dreamflower.pro/magnumopus/" target="_blank" rel="noopener noreferrer">
                                                    <button>View <Eye className="icon-large" /></button>
                                                </a>
                                           </div>

                                        </div>
                                    </div>

                                </Carousel.Item>


                            </Carousel>
                        </motion.div>
                    </div>
                </div>
            </section>

    {/* section 7 contact us */}
    <section >
        <motion.div className="container mt-5 mb-5 text-center bg-black text-white p-2"
         variants={fadeIn("down", 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.2 }}
        >
          <div className="benefit-title">
            <h3>  Get Started Today ! </h3>
          </div>
          <div className="section-footer-para">
            <p>
              Ready to take your business to the next level with our 360 VR service? Contact us to schedule a free consultation.
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
        </motion.div>

      </section>

        </>
    )
}

export default VR360