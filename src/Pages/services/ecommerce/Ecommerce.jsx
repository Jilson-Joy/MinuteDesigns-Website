import React, { useEffect } from 'react'
import './Ecommerce.css'
import EcommerceImg from '../../../assets/images/Ecommerce_checkout_laptop.gif'
// import reactLogo from '../../assets/images/React.png';
// import nodeIcons from '../../assets/images/node.png';
// import mongodbicons from '../../assets/images/mongodbIcons.png';
// import razorpay from '../../assets/images/razorpay.png';
// import wordpress from '../../assets/images/WordPress-removebg-preview.png';
// import Redux from '../../assets/images/redux-icon.png';
import {  MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
// import Ecms from '../../assets/images/Ecms1.jpg';
import Carousel from 'react-bootstrap/Carousel';
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import skinEcms from '../../../assets/images/skinEcms.png';
import healthEcms from '../../../assets/images/healthEcms.png';
import b2bEcms from '../../../assets/images/b2bEcms.png';
import fashionEcms from '../../../assets/images/fashionEcms.png';

function Ecommerce() {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
<>
<section className='full-container'>
  <div className="container">
   <div className='row text-center'>
    <div className="head-title mt-5">
    <h3>
    Delivering intuitive E-Commerce interfaces for effortless user journeys
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
     <div className="ecommerce-banner mt-5">
    </div>
  </div>
</section>

<section className='full-container bg-black'>
<div className="container">
<div className="row d-flex">
<div className="col-md-7">
  <div className="moving-card-section">
      <div className="moving-card mt-5">
        <h4>Product Discovery</h4>
        <h1>01</h1>
      </div>

      <div className="moving-card">
        <h4>Competitor Analysis</h4>
        <h1>02</h1>
      </div>

      <div className="moving-card mt-5">
        <h4>User Flows</h4>
        <h1>03</h1>
      </div>

      <div className="moving-card">
        <h4>UX Design</h4>
        <h1>04</h1>
      </div>


      <div className="moving-card mt-5">
        <h4>User Interface</h4>
        <h1>05</h1>
      </div>

      <div className="moving-card">
        <h4>User testing</h4>
        <h1>06</h1>
      </div>
  </div>
</div>
<div className="col-md-5">
  <div className="fixed-title">
    <h3> <span style={{opacity:.4}}>Our</span><br /> Process <span style={{opacity:.4}}>for Building your</span> Brand?</h3>
  </div>
</div>


</div>
</div>
</section>

<section className='full-container'>
          {/* section 5 products */}
          <div className="container mt-5 mb-5">
          <div className='row text-center'>
    <div className="benefit-title mb-5">
    <h3>Popular E-commerce Service You May Know </h3>
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
                                    <img src={skinEcms} alt="dhdf" className="" />
                                </div>
                                <div className="carousel_item_text col-md-5">
                                    <h4 className='mb-5'>Skin Care & Beauty</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquid vel, nostrum tenetur voluptas possimus est explicabo omnis harum quia corporis odio aspernatur doloremque repellendus? Magnam corrupti dolores debitis tenetur?
                                    </p>
                                </div>
                            </div>
    
                        </Carousel.Item>
                        <Carousel.Item>
    
                            <div className="carousel_item row">
                                <div className="carousel_item_img col-md-7">
                                    <img src={fashionEcms} alt="Automotive" className="" />
                                   
                                </div>
                                <div className="carousel_item_text col-md-5">
                                    <h4 className='mb-5'>Fashion & Apparel</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquid vel, nostrum tenetur voluptas possimus est explicabo omnis harum quia corporis odio aspernatur doloremque repellendus? Magnam corrupti dolores debitis tenetur?
                                    </p>
                                </div>
                            </div>
    
                        </Carousel.Item>
                        <Carousel.Item>
    
                            <div className="carousel_item row">
                                <div className="carousel_item_img col-md-7">
                                    <img src={healthEcms} alt="dhdf" className="" />
                                </div>
                                <div className="carousel_item_text col-md-5">
                                    <h4 className='mb-5'>Health and beauty</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquid vel, nostrum tenetur voluptas possimus est explicabo omnis harum quia corporis odio aspernatur doloremque repellendus? Magnam corrupti dolores debitis tenetur?
                                    </p>
                                </div>
                            </div>
    
                        </Carousel.Item>
                        <Carousel.Item>
    
                            <div className="carousel_item row">
                                <div className="carousel_item_img col-md-7">
                                    <img src={b2bEcms} alt="dhdf" className="" />
                                </div>
                                <div className="carousel_item_text col-md-5">
                                    <h4 className='mb-5'>B2B and industrial</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquid vel, nostrum tenetur voluptas possimus est explicabo omnis harum quia corporis odio aspernatur doloremque repellendus? Magnam corrupti dolores debitis tenetur?
                                    </p>
                                </div>
                            </div>
    
                        </Carousel.Item>
    
                    </Carousel>
              </motion.div>
             </div>
            </div>
</section>



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
</> 














    // <div className='container'>
    //   <section className='ecommerce row d-flex justify-content-center align-items-center'>
    //     <div className="ecommerce_col col-md-6">
    //       <div className="ecommerce_img ">
    //         <img src={EcommerceImg} />
    //       </div>
    //     </div>
    //     <div className="col-md-6">
    //       <div className='ecommerce_text'>
    //         <h1 className='hero-text'>E-commerce</h1>
    //         <p >
    //           Minute Designs offers custom e-commerce solutions with scalability, security, and seamless shopping experience, using technologies like React and Node.js, ensuring user-friendly design, seamless integration, and reliable performance.
    //         </p>
    //       </div>
    //     </div>
    //   </section>

    //   <section className='mt-5 mb-5'>
    //     <h3 className='serve_header mt-5 mb-5'>What do we serve ?</h3>
    //     <div>
    //       <p className='serve_text'>
    //         We help you transform
    //         <br />
    //         a basic concept into a powerful
    //         <br />
    //         and scalable e-commerce application solution.
    //       </p>
    //     </div>
    //   </section>

    //   <section className='mt-5 mb-5'>
    //     <div className='mt-5 mb-5'>
    //       <h3 className='serve_header'>Tools we use</h3>
    //     </div>

    //     <div className='toolsUsed row '>
    //       <div className="webAppIcons col-md-4">
    //         <img src={reactLogo} alt="" />
    //         <h5>React JS</h5>
    //       </div>
    //       <div className="webAppIcons col-md-4">
    //         <img src={nodeIcons} alt="" />
    //         <h5>Node JS</h5>
    //       </div>
    //       <div className="webAppIcons col-md-4">
    //         <img src={mongodbicons} alt="" />
    //         <h5>Mongo DB</h5>
    //       </div>
    //     </div>

    //     <div className='toolsUsed row '>
    //       <div className="webAppIcons col-md-4">
    //         <img src={Redux} alt="" />
    //         <h5>Redux ToolKit</h5>
    //       </div>
    //       <div className="webAppIcons col-md-4">
    //         <img src={wordpress} alt="" />
    //         <h5>WordPress</h5>
    //       </div>
    //       <div className="webAppIcons col-md-4">
    //         <img src={razorpay} alt="" />
    //         <h5>Razorpay</h5>
    //       </div>
    //     </div>
    //   </section>

    // </div>
  )
}

export default Ecommerce