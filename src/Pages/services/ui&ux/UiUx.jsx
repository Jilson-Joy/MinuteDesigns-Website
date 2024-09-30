import React from 'react'
import UiUx from '../../../assets/images/UI-UX_differences.gif'
import './UiUx.css'
// import figma from '../../assets/images/figma.png'
// import Photoshop from '../../assets/images/photoshop.png'
// import illustrator from '../../assets/images/illustrator.png'
import {  MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

function Uiux() {

  
  return (

<>
<section className='full-container'>
  <div className="container">
   <div className='row text-center'>
    <div className="head-title">
    <h3>
    Shaping engaging digital experiences through innovative UI/UX design
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
  </div>
  <div className="moving-text-container mt-4">
      <div className="moving-text">
        Design - Branding - Development - Support - Design - Branding - Development - Support - Design - Branding - Development - Support - Design - Branding - Development - Support
      </div>
    </div>


</section>

    
<section className='full-container bg-black'>
<div className="container">
<div className="row d-flex">
<div className="col-md-5">
  <div className="fixed-title">
    <h3> <span style={{opacity:.4}}>Why choose</span><br /> Minute Designs <span style={{opacity:.4}}>for your </span> Brand?</h3>
  </div>
</div>

<div className="col-md-7">
  <div className="moving-card-section">
      <div className="moving-card mt-5">
        <h4>Innovative & Modern Solutions</h4>
        <h1>01</h1>
      </div>

      <div className="moving-card">
        <h4>COMPETITIVE EDGE</h4>
        <h1>02</h1>
      </div>

      <div className="moving-card mt-5">
        <h4>Iterative Design Process</h4>
        <h1>03</h1>
      </div>

      <div className="moving-card">
        <h4>Proven Industry Expertise</h4>
        <h1>04</h1>
      </div>


      <div className="moving-card mt-5">
        <h4>Seamless Integration with Your Brand</h4>
        <h1>05</h1>
      </div>

      <div className="moving-card">
        <h4>Enhanced Usability</h4>
        <h1>06</h1>
      </div>
  </div>
</div>
</div>
</div>
</section>



<section className='full-container'>
<div className='row text-center'>
    <div className="benefit-title">
    <h3> <span style={{opacity:.5}}>Benefits of Our</span> UI/UX Services </h3>
  </div>
     </div>

     <div className="row mt-5">
      <div className="col-md-4">
      <div className="benefit-card1 card1">
        <h3>Raising the Bars in Design</h3>
       <p>Minute is renowned for its innovative UI/UX design, delivering user-centric solutions that exceed industry standards, enhancing user experience and engagement. </p>
     </div>
     </div>

     <div className="col-md-4">
      <div className="benefit-card1 card2">
        <h3>Diverse Industry Experience</h3>
        <p>Minute Design, with its extensive industry experience, offers tailored solutions across various sectors, including web and app development, e-commerce, and more.</p>
     </div>
     </div>

     <div className="col-md-4">
      <div className="benefit-card1 card3">
        <h3>Excitable for Achievement</h3>
       <p>Our team is passionate about achievement, pushing boundaries for creativity and innovation. We strive to exceed clients' goals and achieve excellence in every milestone we reach.</p>
     </div>
     </div>
     </div>

</section>

<section className='contact-footer'>
<div className="container mt-5 mb-5 text-center bg-black text-white p-2">
<div className="benefit-title">
    <h3>  Get Started Today ! </h3>
  </div>
  <div className="section-footer-para">
  <p>
            Ready to take your business to the next level with our ui ux service? Contact us to schedule a free consultation.
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
    //   <section className='uiux row d-flex justify-content-center align-items-center'>
    //     <div className="uiux_col col-md-6">
    //       <div className="uiux_img ">
    //         <img src={UiUx} />
    //       </div>
    //     </div>
    //     <div className="col-md-6">
    //       <div className='uiux_text'>
    //         <h1 className='hero-text'>UI/UX</h1>
    //         <p >
    //           Minute Designs crafts custom UI/UX solutions, emphasizing intuitive design, user-centric experiences, and scalable interfaces. Leveraging cutting-edge tools and methodologies, they create visually engaging and functional designs that enhance user interaction. By collaborating closely with clients, Minute Designs ensures designs that not only meet user needs but also align with business goals, resulting in impactful and seamless digital experiences.
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
    //         a basic concept into a compelling
    //         <br />
    //         and intuitive UI/UX solution.
    //       </p>
    //     </div>
    //   </section>


    //   <section className='mt-5 mb-5'>
    //     <div className='mt-5 mb-5'>
    //       <h3 className='serve_header'>Tools we use</h3>
    //     </div>

    //     {/* <div className='toolsUsed row '>
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
    //     </div> */}

    //     <div className='toolsUsed row d-flex'>
    //       <div className="webAppIcons col-md-4">
    //         <img src={Photoshop} alt="" />
    //         <h5>Photoshop</h5>
    //       </div>
    //       <div className="webAppIcons col-md-4">
    //         <img src={illustrator} alt="" />
    //         <h5>Illustrator</h5>
    //       </div>
    //       <div className=" webAppIcons col-md-4">
    //         <img src={figma} alt="" />
    //         <h5>Figma</h5>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  )
}

export default Uiux