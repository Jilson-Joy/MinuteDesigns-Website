import React from 'react'
import webAppImg from '../../assets/images/Website designer.gif'
import reactLogo from '../../assets/images/React.png';
import nodeIcons from '../../assets/images/node.png';
import mongodbicons from '../../assets/images/mongodbIcons.png';
import mysql from '../../assets/images/mysql.png';
import gitIcon from '../../assets/images/Git-Icon.png';
import typeScriptIcon from '../../assets/images/typescript.png'

import './WebApp.css'
function WebApp() {
  return (
    <div className='container'>
      <section className='webApplication row d-flex justify-content-center align-items-center'>
        <div className="web_col col-md-6">
          <div className="webApplication_img ">
            <img src={webAppImg} />
          </div>
        </div>
        <div className="col-md-6">
          <div className='webApplication_text'>
            <h1 className='hero-text'>Web Application</h1>
            <p >
              Minute Designs develops custom web applications, focusing on scalability, security, and responsive design using technologies like React and Node.js. They work closely with clients, ensuring user-centric design and reliable cloud deployment.
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
            and scalable web application solution.
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

        <div className='toolsUsed row d-flex'>
          <div className="webAppIcons col-md-4">
            <img src={mysql} alt="" />
            <h5>MYSQL</h5>
          </div>
          <div className="webAppIcons col-md-4">
            <img src={gitIcon} alt="" />
            <h5>Git</h5>
          </div>
          <div className=" webAppIcons col-md-4">
            <img src={typeScriptIcon} alt="" />
            <h5>TypeScript</h5>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WebApp