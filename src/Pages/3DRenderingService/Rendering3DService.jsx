import React from 'react'
import './Rendering3DService.css'

import modeling from '../../assets/images/3d modeling.gif'
import gitIcon from '../../assets/images/Git-Icon.png';
import firebase from '../../assets/images/firebase.png';
import Flutter from '../../assets/images/flutterIcons.png';

function Rendering3DService() {
  return (
<div className='container'>
            <section className='mobileApplication row d-flex justify-content-center align-items-center'>
                <div className="mobileApplication_col col-md-6">
                    <div className="mobileApplication_img ">
                        <img src={modeling} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='mobileApplication_text'>
                        <h1 className='hero-text'>3D Rendering Service</h1>
                        <p >
                            Minute Designs creates custom mobile applications using Flutter for performance, scalability, and user experience, ensuring intuitive UI/UX, secure architecture, and reliable app deployment.
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
                        and scalable mobile application solution.
                    </p>
                </div>
            </section>

            <section className='mt-5 mb-5'>
                <div className='mt-5 mb-5'>
                    <h3 className='serve_header'>Tools we use</h3>
                </div>

                <div className='toolsUsed row '>
                    <div className="webAppIcons col-md-4">
                        <img src={firebase} alt="" />
                        <h5>Firebase</h5>
                    </div>
                    <div className="webAppIcons col-md-4">
                        <img src={Flutter} alt="" />
                        <h5>Flutter</h5>
                    </div>
                    <div className="webAppIcons col-md-4">
                        <img src={gitIcon} alt="" />
                        <h5>Git</h5>
                    </div>
                </div>
            </section>
        </div>  )
}

export default Rendering3DService