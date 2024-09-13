import React, { useState, useEffect, useRef } from "react";
import "../assets/css/Home.css";
import "../assets/css/LandingPage.css";
import "../assets/css/commonStyle.css";
import "../assets/css/mediaQuery.css";
import Button from "react-bootstrap/Button";
import { ArrowUpRight, MousePointer2 } from "lucide-react";
import { Link } from "react-router-dom";
import MobApp from "../assets/images/mobile_application.png";
import Ecommerce from "../assets/images/ecommerce.png";
import UIUX from "../assets/images/uiux.png";
import WebApp from "../assets/images/web-development.png";
import CarouselBox from "../components/carousel/CarouselBox";
import Technologies from "../components/technologies/Technologies";
import LandingImg from "../assets/images/Landing_img.png";
import useMouse from "@react-hook/mouse-position";

function LandingPage() {
  return (
    <>
      <section className="hero-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="hero-text">
                Design
                <br />
                Innovate
                <br />
                Thrive
              </h1>
              <p className="hero-caption">
                "Elevating user experience to its pinnacle."
              </p>
            </div>
            <div className="col-md-6">
            <div class="cont">
		<div class="dots d1"></div>
		<div class="dots d2"></div>
		<div class="dots d3"></div>
		<div class="dots d4"></div>
		<div class="dots d5"></div>
		<div class="dots d6"></div>
		<div class="dots d7"></div>
		<div class="dots d8"></div>
	 </div>
            {/* <div class="loader--animation">
	<div class="loader--animation--ball"></div>
	<div class="loader--animation--ball"></div>
	<div class="loader--animation--ball"></div>
	<div class="loader--animation--ball"></div>
	<div class="loader--animation--ball"></div>
	<div class="loader--animation--ball"></div>
	<div class="loader--animation--ball"></div>
	<div class="loader--animation--ball"></div>
	<div class="loader--animation--ball"></div>
    
</div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      {/* Add services or other content here */}
    </>
  );
}

export default LandingPage;
