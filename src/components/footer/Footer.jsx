import React from "react";
import "./Footer.css";
import logo from "../../assets/images/MinuteLogo.png";
import { Facebook, Phone } from "lucide-react";
import { Instagram } from 'lucide-react';
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_content row pt-5 d-flex justify-space-between">
          <div className="col-md-4">
            <div className="logo_footer">
              <img src={logo} alt="" className="footer_logo " />
              {/* <div className="minute_text">
                <h5 className='Logo-text'>Minute Designs</h5>
                </div> */}
            </div>
            <div className="footer_address mt-4">
              <p>
                2nd Floor, Thakkolkaran Building, Metro Station, near
                Companypady, Thaikkattukara, P.O, Choornikkara, Aluva, Kochi,
                Kerala 683106
              </p>
            </div>
            <div className="footer-icons  ">
              <div className="linked">
                <a
                  href="https://www.linkedin.com/company/minutedesigns/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none",}}
                >
                  <FaLinkedin className="linkedin-icon" style={{ fontSize: "24px" }} />
                </a>
              </div>
              <div className="Instagram">
                <a
                  href="https://www.instagram.com/minute.designs?igsh=MXF5YzhkcXhibm9nMg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "white" }}
                >
                <FaInstagram  className="Instagram-icon" style={{ fontSize: "24px" }}/>
                </a>
              </div>
              <div className="Facebook">
                <a
                  href="https://www.facebook.com/minute.designs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <FaFacebook className="Facebook-icon" style={{ fontSize: "24px" }}/>
                </a>
              </div>

            </div>
          </div>
          <div className="col-md-2">
            <div>
              <h5>Quick Links</h5>
            </div>
            <div className="footer_link mt-4">
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                <p>Home</p>
              </Link>
              <Link
                to={"/about"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <p>About</p>
              </Link>
              <Link
                to={"portfolio"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <p>Portfolio</p>
              </Link>
              <Link
                to={"/blog"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <p>Blog</p>
              </Link>
              <Link
                to={"gallery"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <p>Gallery</p>
              </Link>
              {/* <p>Reach Us</p> */}
              {/* <p>Terms & Conditions</p> */}
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <h5>Services</h5>
            </div>
            <div className="footer_link mt-4">
              <Link
                to={"/webapp"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <p>Web Application</p>
              </Link>
              <Link
                to={"/mobileApp"}
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                <p>Mobile Application</p>
              </Link>
              <Link
                to={"/e-commerce"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <p>E-Commerce</p>
              </Link>
              <Link
                to={"/uiux"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <p>UI/UX</p>
              </Link>
              <Link
                to={"/Architecture3D"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <p>Architectural 3D Rendering</p>
              </Link>
              <Link
                to={"/CRM&ERp"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <p>CRM /ERP</p>
              </Link>
              <Link
                to={"/VR360"}
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                <p>3D Rendering Service</p>
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <h5>Contact Info</h5>
            <div className="footer_link mt-4">
              <ul className="footer_number list-unstyled">
                <li className="mb-2">
                  <Phone className="phone_icon me-2" />
                  <p className="mb-0">+91 8848499282</p>
                </li>
                <li className="mb-2">
                  <Phone className="icons" />
                  <p className="mb-0">+91 9947250800</p>
                </li>
                {/* <li className="mb-2">
                  <Phone className="icons" />
                  <p className="mb-0">Landline: 0480 2991234</p>
                </li> */}
                <li className="mb-2">
                  <Mail className="email_icons me-2" />
                  <p className="mb-0">hr@minutedesigns.in</p>
                </li>
                {/* <li className="mb-2">
                  <Mail className="icons" />
                  <p className="mb-0">connect@imitpark.com</p>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright p-2 ">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Minute Designs. All rights
            reserved.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
