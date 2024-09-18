import React, { useEffect } from "react";
import organization from "../assets/images/organization.gif";
import implementation from "../assets/images/implementation.gif";
import mission from "../assets/images/mission.gif";
import AboutImg from "../assets/images/about-img.png";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "../assets/css/commonStyle.css";
import '../assets/css/mediaQuery.css'
function About() {
  useEffect(() => {
    const aboutText = document.querySelector(".about-text");

    const handleScroll = () => {
      const elementPosition = aboutText.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (elementPosition < viewportHeight) {
        aboutText.style.opacity = 1;
        aboutText.style.animationPlayState = "running";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="container page-container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h5>About</h5>
            <p className="about-text">
              At Minute Designs, we craft digital experiences that leave a
              lasting impression. Your vision, our expertise—together, we
              innovate
            </p>
            <div className="about-icons ">
              <img src={organization} style={{ width: "8%", height: "auto" }} />
              <img
                src={implementation}
                style={{ width: "8%", height: "auto" }}
              />
              <img src={mission} style={{ width: "8%", height: "auto" }} />
            </div>
            <div className="progress-bar">
              <div className="circle-container">
                <div className="progress-circle"></div>
                <div className="progress-circle"></div>
                <div className="progress-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second container */}
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center mb-5">
          <div className="col-md-5">
            <p className="about-text-bold">
              We Strive - To Improve Your Company & Help Your Business Growth
            </p>
            <Link to={"/reachUs"} style={{ textDecoration: "none" }}>
              <div className="button-with-text py-4">
                <button className="readMore">
                  <ArrowUpRight className="icon" />
                  <span className="readMore-text">Connect with us</span>
                </button>
              </div>
            </Link>
          </div>
          <div className=" about_img col-md-6">
            <img src={AboutImg} style={{ width: "80%", height: "auto" ,borderRadius:"20px " }} />
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
