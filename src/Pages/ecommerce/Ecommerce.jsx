import React from 'react'
import './Ecommerce.css'
import EcommerceImg from '../../assets/images/Ecommerce_checkout_laptop.gif'
import reactLogo from '../../assets/images/React.png';
import nodeIcons from '../../assets/images/node.png';
import mongodbicons from '../../assets/images/mongodbIcons.png';
import razorpay from '../../assets/images/razorpay .png';
import wordpress from '../../assets/images/WordPress-removebg-preview.png';
import Redux from '../../assets/images/redux-icon.png';


function Ecommerce() {
  return (
    <div className='container'>
      <section className='ecommerce row d-flex justify-content-center align-items-center'>
        <div className="ecommerce_col col-md-6">
          <div className="ecommerce_img ">
            <img src={EcommerceImg} />
          </div>
        </div>
        <div className="col-md-6">
          <div className='ecommerce_text'>
            <h1 className='hero-text'>E-commerce</h1>
            <p >
              Minute Designs offers custom e-commerce solutions with scalability, security, and seamless shopping experience, using technologies like React and Node.js, ensuring user-friendly design, seamless integration, and reliable performance.
            </p>
          </div>
        </div>
      </section>

      <section className='mt-5 mb-5'>
        <h3 className='serve_header mt-5 mb-5'>What do we serve ?</h3>
        <div>
          <p className='serve_text'>
            We help you transform
            <br />
            a basic concept into a powerful
            <br />
            and scalable e-commerce application solution.
          </p>
        </div>
      </section>

      <section className='mt-5 mb-5'>
        <div className='mt-5 mb-5'>
          <h3 className='serve_header'>Tools we use</h3>
        </div>

        <div className='toolsUsed row '>
          <div className="webAppIcons col-md-4">
            <img src={reactLogo} alt="" />
            <h5>React JS</h5>
          </div>
          <div className="webAppIcons col-md-4">
            <img src={nodeIcons} alt="" />
            <h5>Node JS</h5>
          </div>
          <div className="webAppIcons col-md-4">
            <img src={mongodbicons} alt="" />
            <h5>Mongo DB</h5>
          </div>
        </div>

        <div className='toolsUsed row '>
          <div className="webAppIcons col-md-4">
            <img src={Redux} alt="" />
            <h5>Redux ToolKit</h5>
          </div>
          <div className="webAppIcons col-md-4">
            <img src={wordpress} alt="" />
            <h5>WordPress</h5>
          </div>
          <div className="webAppIcons col-md-4">
            <img src={razorpay} alt="" />
            <h5>Razorpay</h5>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Ecommerce