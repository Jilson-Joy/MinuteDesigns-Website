import React from 'react'
import webAppImg from '../../assets/images/Website designer.gif'
import './WebApp.css'
function WebApp() {
  return (
      <div className='container'>
        <div className='webApplication row d-flex justify-content-center align-items-center'>
          <div className="web_col col-md-6">
            <div className="webApplication_img ">
              <img src={webAppImg} />
            </div>
          </div>
          <div className="col-md-6">
            <div className='webApplication_text'>
              <h1>Web Application</h1>
              <p >
                Minute Designs specializes in web application development, offering custom solutions for businesses of all sizes. Their team uses cutting-edge technologies to ensure scalability, security, and efficiency. They design responsive applications for mobile devices, integrate with third-party services, and provide cloud deployment and maintenance. They also create custom e-commerce platforms. Their team stays ahead of the curve, using technologies like React, Node.js, and Laravel. They work closely with clients from concept to deployment, ensuring their vision is fully realized. They prioritize user-centric design and scalability, ensuring data safety and application protection. Contact Minute Designs to discuss your project and elevate your business with a custom web application.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default WebApp