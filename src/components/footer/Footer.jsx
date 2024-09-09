import React from "react";
import "./Footer.css";
import logo from "../../assets/images/MinuteLogo.png";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_content row pt-5">
          <div className="col-md-4">
            <div className="logo_footer">
              <img src={logo} alt=""  className="footer_logo "/>
              {/* <div className="minute_text">
                <h5 className='Logo-text'>Minute Designs</h5>
                </div> */}
            </div>
            <div className="footer_address mt-4">
              <p>
                3rd Floor, Thakkolkaran Building, Metro Station, near
                Companypady, Thaikkattukara, P.O, Choornikkara, Aluva, Kochi,
                Kerala 683106
              </p>
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <h3>Quick Links</h3>
            </div>
            <div className="footer_link mt-4">
              <p>Home</p>
              <p>About</p>
              <p>Services</p>
              <p>Career</p>
              <p>Reach Us</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <h3>Services</h3>
            </div>
            <div className="footer_link mt-4">
              <p>Home</p>
              <p>Web Development</p>
              <p>Mobile App Development</p>
            </div>
          </div>
          <div className="col-md-3">
            <h3>Contact Info</h3>
            <div className="footer_link mt-4">
              <ul className="footer_number list-unstyled">
                <li className="mb-2">
                  <Phone className="phone_icon me-2" />
                  <p className="mb-0">HR: +91 8593833370</p>
                </li>
                <li className="mb-2">
                  <Phone className="icons" />
                  <p className="mb-0">Office: +91 8943627627</p>
                </li>
                <li className="mb-2">
                  <Phone className="icons" />
                  <p className="mb-0">Landline: 0480 2991234</p>
                </li>
                <li className="mb-2">
                  <Mail className="email_icons me-2" />
                  <p className="mb-0">info@imitpark.com</p>
                </li>
                <li className="mb-2">
                  <Mail className="icons" />
                  <p className="mb-0">connect@imitpark.com</p>
                </li>
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
