import React, { useEffect } from 'react'
import './Crm.css'
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";


function Crm() {

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className='full-container'>
        <motion.div className="container"
         variants={fadeIn("down", 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.2 }}>
          <div className='row text-center'>
            <div className="head-title mt-5">
              <h3>
                Empowering businesses with integrated CRM and ERP for seamless operations and customer engagement
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
        </motion.div>
      </section>

      <section className='crm_box container'>
        <div className='crm_section1'  >
          <div className='CRM_text'>
            <h3>Unlocking business potential with synchronized CRM and ERP for smooth operations.</h3>
          </div>
          <motion.div className="row mt-5 mb-5"
           variants={fadeIn("right", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.2 }}
          >
            <div className="crm_section1_img col-md-6">
              <img src="https://i.pinimg.com/564x/d0/38/43/d03843f15d986adb51d862cda2e8376a.jpg" alt="" />
            </div>
            <div className="crm_section1_text col-md-6">
              <div>
                <h5>SALES CRM</h5>
                <h3>Sell faster</h3>
              </div>
              <div>
                <p>
                  Deliver an outstanding sales experience for your potential customers with advanced lead routing, segmentation, and integrations with tools your sales teams already use. Build playbooks and track progress along the entire timeline with advanced automation and artificial intelligence driven insights.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div className="row mt-5 mb-5"
           variants={fadeIn("left", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.2 }}
          >
            <div className="crm_section1_text col-md-6">
              <div>
                <h5>Support Desk</h5>
                <h3>Develop your workflow</h3>
              </div>
              <div>
                <p>
                  Oversee marketing campaigns on all platforms to attract the clients you want to work with. One View unifies sales and marketing around a common understanding of the consumer. Make the most of your lead generation initiatives to maximize return on investment. To effectively engage prospects, make use of powerful social and email marketing platforms.
                </p>
              </div>
            </div>
            <div className="crm_section1_img col-md-6">
              <img src="https://i.pinimg.com/564x/d7/59/7a/d7597a3edee32d207fb45a6b9ce644bd.jpg" alt="" />
            </div>

          </motion.div>
          {/* <div className="row mt-5 mb-5">
            <div className="crm_section1_img col-md-6">
              <img src="https://i.pinimg.com/564x/d0/38/43/d03843f15d986adb51d862cda2e8376a.jpg" alt="" />
            </div>
            <div className="crm_section1_text col-md-6">
              <div>
                <h5>MARKETING</h5>
                <h3>Build your pipeline</h3>
              </div>
              <div>
                <p>
                  Manage marketing activities across all channels to attract ideal customers. With One View you get marketing and sales aligned on a common view of the customer. Maximize ROI on your lead generation campaigns. Leverage powerful social and email marketing capabilities to engage prospects.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>

          {/* section 7 contact us */}
    <section >
        <motion.div className="container mt-5 mb-5 text-center bg-black text-white p-2"
         variants={fadeIn("up", 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.2 }}
        >
          <div className="benefit-title">
            <h3>  Get Started Today ! </h3>
          </div>
          <div className="section-footer-para">
            <p>
              Ready to take your business to the next level with our CRM / ERP service? Contact us to schedule a free consultation.
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

export default Crm