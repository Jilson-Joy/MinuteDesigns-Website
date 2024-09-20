import React from "react";
import "./AboutNew.css";
import { ChevronDown } from "lucide-react";
import minuteLogo from "../../assets/images/minute.jpg";
import Delivered from "../../components/delivered/Delivered";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Mlogo from "../../assets/images/M.png";

function AboutNew() {
  return (
    <div className="aboutNew">
      <div className="about_header container">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <p className="about_header_text">
            " Your vision and our experience,
            <br />
            we innovate."
          </p>
        </motion.div>

        <span className="chevron_icon">
          <p>Scroll Down</p>
          <ChevronDown className="animate_icon" />
        </span>
      </div>
      <div className="section2">
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="container  mt-5"
        >
          <h3>About Minute Designs</h3>
          <div className="row">
            <div className="about_vision_text col-md-6">
              <p>
                In March 2024, a group of visionary technology enthusiasts
                founded Minute Designs, driven by the ambition to transform
                digital experiences for businesses across the globe. From the
                heart of Kerala, in our office at the 3rd Floor of the
                Thakkolkaran Building in Aluva, Kochi, we embarked on a journey
                to deliver cutting-edge software solutions and IT services with
                unparalleled precision. At Minute Designs, we believe that
                attention to every minute detail can create exceptional
                outcomes. Our dream is big—to make Aluva a recognized name on
                the global IT map. With "Local is the new International" as our
                mantra, we are committed to building an innovative, sustainable
                digital future, ensuring that each project, no matter how small,
                creates a ripple in the global tech space.
              </p>
            </div>
            <div className="about_vision_img col-md-6">
              <img src={minuteLogo} alt="image" />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="container mt-5"
        >
          <h3>vision</h3>
          <div className="row">
            <div className="about_vision_img col-md-6">
              <img src={minuteLogo} alt="image" />
            </div>
            <div className="about_vision_text col-md-6">
              <p>
                Key values including creativity, agility, and user-centered
                design could serve as the foundation of Minute Designs' software
                development mission. Here could be a statement of vision for
                your business: "To become a global leader in creating creative,
                adaptable, and effective digital solutions, enabling businesses
                to prosper in a technologically advanced, fast-paced world." is
                the vision statement. At Minute Designs, we see a day when all
                technological interactions are smooth, effective, and
                user-centered, providing exceptional value in every little
                aspect. This vision emphasizes the value of user experience and
                accuracy in your work while showcasing your company's dedication
                to excellence in digital solutions. Do you want to adjust this
                even more?
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Our Culture */}
      <div className="container">
        <div className="culture mt-5 mb-5">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="text-center"
          >
            <h5>OUR CULTURE</h5>
            <h3 className="culture_text">
              Our culture is what keeps us together. We believe in
              <br />
              collectively solving problems while keeping our
              <br />
              company values intact.
            </h3>
          </motion.div>

          <div className="row mt-5">
            <div className="our_culture_textBox_down col-md-6 col-lg-4 mb-4">
              <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
              >
                <h5>RESULT ORIENTED</h5>
                <p>
                  At Yellow, we ensure all our endeavours are result-oriented,
                  focused on solving a problem. We brainstorm ideas collectively
                  and then implement them in reality.
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
              >
                <h5>HELPING</h5>
                <p>
                  We promote a healthy knowledge-sharing environment amongst our
                  team. Refusing to help someone is highly looked down upon.
                </p>
              </motion.div>
            </div>
            <div className="our_culture_img col-md-6 col-lg-4 mb-4">
              <img
                src={Mlogo}
                alt="Culture Image"
              />
            </div>
            <div className="our_culture_textBox_down col-md-6 col-lg-4 mb-4">
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
              >
                <h5>TRANSPARENT</h5>
                <p>
                  Transparency is what helps us deliver the best of experiences.
                  A practice that we strictly follow includes maximum data
                  sharing across all levels of functioning.
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
              >
                <h5>FREEDOM</h5>
                <p>
                  Design is all about freely expressing one’s ideas. At Yellow,
                  we encourage feedback and inputs from everyone in the team.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Delivered  */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Delivered />
      </motion.div>
    </div>
  );
}

export default AboutNew;
