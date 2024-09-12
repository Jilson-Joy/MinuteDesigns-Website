import React from 'react'
import UiUx from '../../assets/images/UI-UX_differences.gif'
import './UiUx.css'
import figma from '../../assets/images/figma.png'
import Photoshop from '../../assets/images/photoshop.png'
import illustrator from '../../assets/images/illustrator.png'

function Uiux() {
  return (
    <div className='container'>
      <section className='uiux row d-flex justify-content-center align-items-center'>
        <div className="uiux_col col-md-6">
          <div className="uiux_img ">
            <img src={UiUx} />
          </div>
        </div>
        <div className="col-md-6">
          <div className='uiux_text'>
            <h1 className='hero-text'>UI/UX</h1>
            <p >
              Minute Designs crafts custom UI/UX solutions, emphasizing intuitive design, user-centric experiences, and scalable interfaces. Leveraging cutting-edge tools and methodologies, they create visually engaging and functional designs that enhance user interaction. By collaborating closely with clients, Minute Designs ensures designs that not only meet user needs but also align with business goals, resulting in impactful and seamless digital experiences.
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
            a basic concept into a compelling
            <br />
            and intuitive UI/UX solution.
          </p>
        </div>
      </section>


      <section className='mt-5 mb-5'>
        <div className='mt-5 mb-5'>
          <h3 className='serve_header'>Tools we use</h3>
        </div>

        {/* <div className='toolsUsed row '>
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
        </div> */}

        <div className='toolsUsed row d-flex'>
          <div className="webAppIcons col-md-4">
            <img src={Photoshop} alt="" />
            <h5>Photoshop</h5>
          </div>
          <div className="webAppIcons col-md-4">
            <img src={illustrator} alt="" />
            <h5>Illustrator</h5>
          </div>
          <div className=" webAppIcons col-md-4">
            <img src={figma} alt="" />
            <h5>Figma</h5>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Uiux