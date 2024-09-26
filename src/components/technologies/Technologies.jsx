// import React from 'react'
// import figma from '../../assets/images/figma.png';
// import reactLogo from '../../assets/images/React.png';
// import node from '../../assets/images/node.png';
// import mongodbicons from '../../assets/images/mongodbIcons.png';
// import mysql from '../../assets/images/mysql.png';
// import Flutter from '../../assets/images/flutterIcons.png';
// import './Technologies.css';

// function Technologies() {
//     return (
//         <div className='Technologies_container mt-5 mb-2'>
//             <div className='Technologies_slider'>
//                 <div className='Technologies_icons'>
//                     <img src={figma} alt="Figma" />
//                     <h5>Figma</h5>
//                 </div>
//                 <div className='Technologies_icons'>
//                     <img src={reactLogo} alt="React" />
//                     <h5>React</h5>
//                 </div>
//                 <div className='Technologies_icons'>
//                     <img src={node} alt="Node Js" />
//                     <h5>Node Js</h5>
//                 </div>
//                 <div className='Technologies_icons'>
//                     <img src={mongodbicons} alt="Mongo DB" />
//                     <h5>Mongo DB</h5>
//                 </div>
//                 <div className='Technologies_icons'>
//                     <img src={mysql} alt="MySQL" />
//                     <h5>MySQL</h5>
//                 </div>
//                 <div className='Technologies_icons'>
//                     <img src={Flutter} alt="Flutter" />
//                     <h5>Flutter</h5>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Technologies;

// 2

// import React from 'react'
// import figma from '../../assets/images/figma.png';
// import reactLogo from '../../assets/images/React.png';
// import node from '../../assets/images/node.png';
// import mongodbicons from '../../assets/images/mongodbIcons.png';
// import mysql from '../../assets/images/mysql.png';
// import Flutter from '../../assets/images/flutterIcons.png';
// import './Technologies.css';
// function Technologies() {
//     return (
//         <div className=' container'>
//            <div className='technologies_box'>
//                 <div className='Technologies_container row'>
//                     <div className='col-md-6 d-flex flex-column justify-content-center  '>
//                         <h1>Technologies</h1>
//                         <p className='Technologies_text'>
//                             Technologies in a software company encompass a range of tools and frameworks that drive development, including programming languages, development platforms, and cloud services. These technologies enable efficient coding, deployment, and scaling of software solutions. Staying updated with the latest advancements ensures the company remains competitive and innovative.
//                         </p>
//                     </div>
//                     <div className='col-md-6 d-flex flex-column justify-content-center'>
//                         {/* 1 */}
//                         <div className='Technologies_slider'>

//                             <div class="Marquee">
//                                 <div class="Marquee-content">
//                                     <div class="Marquee-tag">
//                                         <div className='Technologies_icons'>
//                                             <img src={figma} alt="Figma" />
//                                             <h5>Figma</h5>
//                                         </div>
//                                     </div>
//                                     <div class="Marquee-tag">
//                                         <div className='Technologies_icons'>
//                                             <img src={reactLogo} alt="React" />
//                                             <h5>React</h5>
//                                         </div>
//                                     </div>
//                                     <div class="Marquee-tag">
//                                         <div className='Technologies_icons'>
//                                             <img src={node} alt="Node Js" />
//                                             <h5>Node Js</h5>                 </div>
//                                     </div>
//                                     <div class="Marquee-tag">
//                                         <div className='Technologies_icons'>
//                                             <img src={mongodbicons} alt="Mongo DB" />
//                                             <h5>Mongo DB</h5>
//                                         </div>
//                                     </div>
//                                     <div class="Marquee-tag">
//                                         <div className='Technologies_icons'>
//                                             <img src={mysql} alt="MySQL" />
//                                             <h5>MySQL</h5>
//                                         </div>
//                                     </div>
//                                     <div class="Marquee-tag">
//                                         <div className='Technologies_icons'>
//                                             <img src={Flutter} alt="Flutter" />
//                                             <h5>Flutter</h5>
//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>
//                             <div class="Marquee">
//                                 <div class="Marquee-content">
//                                     <div class="Marquee-tag">
//                                         <div className='Technologies_icons'>
//                                             <img src={figma} alt="Figma" />
//                                             <h5>Figma</h5>
//                                         </div>
//                                     </div>
//                                     <div class="Marquee-tag">
//                                         <div className='Technologies_icons'>
//                                             <img src={reactLogo} alt="React" />
//                                             <h5>React</h5>
//                                         </div>
//                                     </div>
//                                     <div class="Marquee-tag">
//                                         <div className='Technologies_icons'>
//                                             <img src={node} alt="Node Js" />
//                                             <h5>Node Js</h5>                 </div>
//                                     </div>
//                                     <div class="Marquee-tag">
//                                         <div className='Technologies_icons'>
//                                             <img src={mongodbicons} alt="Mongo DB" />
//                                             <h5>Mongo DB</h5>
//                                         </div>
//                                     </div>
//                                     <div class="Marquee-tag">
//                                         <div className='Technologies_icons'>
//                                             <img src={mysql} alt="MySQL" />
//                                             <h5>MySQL</h5>
//                                         </div>
//                                     </div>
//                                     <div class="Marquee-tag">
//                                         <div className='Technologies_icons'>
//                                             <img src={Flutter} alt="Flutter" />
//                                             <h5>Flutter</h5>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* 2 */}

//                         </div>
//                     </div>
//                 </div>
//            </div>
//         </div>
//     )
// }

// export default Technologies

import React, { useEffect, useState } from "react";
import { MoveRight } from "lucide-react";
import "./Technologies.css";

import figma from "../../assets/images/figma.png";
import reactLogo from "../../assets/images/React.png";
import node from "../../assets/images/node.png";
import mongodbicons from "../../assets/images/mongodbIcons.png";
import mysql from "../../assets/images/mysql.png";
import Flutter from "../../assets/images/flutterIcons.png";
import php from "../../assets/images/php.png";
import laravel from "../../assets/images/laravel.png";


function Technologies() {
  // const handlePause = () => {
  //   const marqueeDiv = document.querySelector(".marguee_img_div");
  //   marqueeDiv.classList.add("paused");
  // };

  // const handleStart = () => {
  //   const marqueeDiv = document.querySelector(".marguee_img_div");
  //   marqueeDiv.classList.remove("paused");
  // };



  return (
    <div className="container hero-container ">
      <div className="technologies_box row">
        <div className="technologies_box_col1 col-md-6">
          <div className="tech_des ">
            <div>
              <h1>
                We Are
                <br />
                Experts At
              </h1>
            </div>
            <div>
              <p>
                Our 75+ in-house tech team are skilled in <br /> 20+ top
                technologies that help us deliver digital <br /> solutions to
                your needs.
              </p>
            </div>
            <div>
              <p>
                Explore Expertise <MoveRight />
              </p>
            </div>
          </div>
        </div>
        <div className="technologies_box_col2 col-md-6">
          <div className="technologies_box_marguee">
            <div className="marquee">
              <div className="marguee_img_div">
                <img
                  src={node}
                  alt=""
                  width="45%"
                  className="black-white-img"
                />
                <img
                  src={mongodbicons}
                  alt=""
                  width="45%"
                  className="black-white-img"
                />
                <img
                  src={laravel}
                  alt=""
                  width="45%"
                  className="black-white-img"
                />
                <img
                  src={mysql}
                  alt=""
                  width="45%"
                  className="black-white-img"
                />
                <img
                  src={Flutter}
                  alt=""
                  width="45%"
                  className="black-white-img"
                />
                <img src={php} alt="" width="45%" className="black-white-img" />
              </div>
            </div>
            <div className="marquee down">
              <div className="marguee_img_div">
                <img
                  src={laravel}
                  alt=""
                  width="45%"
                  className="black-white-img"
                />
                <img
                  src={figma}
                  alt=""
                  width="45%"
                  className="black-white-img"
                />
                <img
                  src={mysql}
                  alt=""
                  width="45%"
                  className="black-white-img"
                />
                <img
                  src={Flutter}
                  alt=""
                  width="45%"
                  className="black-white-img"
                />
                <img
                  src={figma}
                  alt=""
                  width="45%"
                  className="black-white-img"
                />
                <img
                  src={reactLogo}
                  alt=""
                  width="45%"
                  className="black-white-img"
                />
                <img
                  src={node}
                  alt=""
                  width="45%"
                  className="black-white-img"
                />
                <img
                  src={mongodbicons}
                  alt=""
                  width="45%"
                  className="black-white-img"
                />
                <img src={php} alt="" width="45%" className="black-white-img" />
              </div>
            </div>
            <div className="marquee">
              <div className="marguee_img_div">
                <img
                  src={figma}
                  alt=""
                  width="45%"
                  className="black-white-img"
                />
                <img src={php} alt="" width="45%" className="black-white-img" />
                <img
                  src={reactLogo}
                  alt=""
                  width="45%"
                  className="black-white-img"
                />
                <img
                  src={node}
                  alt=""
                  width="45%"
                  className="black-white-img"
                />
                <img
                  src={laravel}
                  alt=""
                  width="45%"
                  className="black-white-img"
                />
                <img
                  src={mongodbicons}
                  alt=""
                  width="45%"
                  className="black-white-img"
                />
                <img
                  src={mysql}
                  alt=""
                  width="45%"
                  className="black-white-img"
                />
                <img
                  src={Flutter}
                  alt=""
                  width="45%"
                  className="black-white-img"
                />
              </div>
            </div>
          </div>
          {/* <div class="Marquee">
            <div class="Marquee-content">
              <div class="Marquee-tag">
                <div className="Technologies_icons">
                  <img src={figma} alt="Figma" />
                </div>
              </div>
              <div class="Marquee-tag">
                <div className="Technologies_icons">
                  <img src={reactLogo} alt="React" />
                </div>
              </div>
              <div class="Marquee-tag">
                <div className="Technologies_icons">
                  <img src={node} alt="Node Js" />
                </div>
              </div>
              <div class="Marquee-tag">
                <div className="Technologies_icons">
                  <img src={mongodbicons} alt="Mongo DB" />
                </div>
              </div>
              <div class="Marquee-tag">
                <div className="Technologies_icons">
                  <img src={mysql} alt="MySQL" />
                </div>
              </div>
              <div class="Marquee-tag">
                <div className="Technologies_icons">
                  <img src={Flutter} alt="Flutter" />
                </div>
              </div>
            </div>
          </div>
          <div class="Marquee">
            <div class="Marquee-content">
              <div class="Marquee-tag">
                <div className="Technologies_icons">
                  <img src={figma} alt="Figma" />
                  <h5>Figma</h5>
                </div>
              </div>
              <div class="Marquee-tag">
                <div className="Technologies_icons">
                  <img src={reactLogo} alt="React" />
                  <h5>React</h5>
                </div>
              </div>
              <div class="Marquee-tag">
                <div className="Technologies_icons">
                  <img src={node} alt="Node Js" />
                  <h5>Node Js</h5>{" "}
                </div>
              </div>
              <div class="Marquee-tag">
                <div className="Technologies_icons">
                  <img src={mongodbicons} alt="Mongo DB" />
                  <h5>Mongo DB</h5>
                </div>
              </div>
              <div class="Marquee-tag">
                <div className="Technologies_icons">
                  <img src={mysql} alt="MySQL" />
                  <h5>MySQL</h5>
                </div>
              </div>
              <div class="Marquee-tag">
                <div className="Technologies_icons">
                  <img src={Flutter} alt="Flutter" />
                  <h5>Flutter</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="Marquee">
            <div class="Marquee-content">
              <div class="Marquee-tag">
                <div className="Technologies_icons">
                  <img src={figma} alt="Figma" />
                  <h5>Figma</h5>
                </div>
              </div>
              <div class="Marquee-tag">
                <div className="Technologies_icons">
                  <img src={reactLogo} alt="React" />
                  <h5>React</h5>
                </div>
              </div>
              <div class="Marquee-tag">
                <div className="Technologies_icons">
                  <img src={node} alt="Node Js" />
                  <h5>Node Js</h5>{" "}
                </div>
              </div>
              <div class="Marquee-tag">
                <div className="Technologies_icons">
                  <img src={mongodbicons} alt="Mongo DB" />
                  <h5>Mongo DB</h5>
                </div>
              </div>
              <div class="Marquee-tag">
                <div className="Technologies_icons">
                  <img src={mysql} alt="MySQL" />
                  <h5>MySQL</h5>
                </div>
              </div>
              <div class="Marquee-tag">
                <div className="Technologies_icons">
                  <img src={Flutter} alt="Flutter" />
                  <h5>Flutter</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="Marquee">
            <div class="Marquee-content">
              <div class="Marquee-tag">
                <div className="Technologies_icons">
                  <img src={figma} alt="Figma" />
                  <h5>Figma</h5>
                </div>
              </div>
              <div class="Marquee-tag">
                <div className="Technologies_icons">
                  <img src={reactLogo} alt="React" />
                  <h5>React</h5>
                </div>
              </div>
              <div class="Marquee-tag">
                <div className="Technologies_icons">
                  <img src={node} alt="Node Js" />
                  <h5>Node Js</h5>{" "}
                </div>
              </div>
              <div class="Marquee-tag">
                <div className="Technologies_icons">
                  <img src={mongodbicons} alt="Mongo DB" />
                  <h5>Mongo DB</h5>
                </div>
              </div>
              <div class="Marquee-tag">
                <div className="Technologies_icons">
                  <img src={mysql} alt="MySQL" />
                  <h5>MySQL</h5>
                </div>
              </div>
              <div class="Marquee-tag">
                <div className="Technologies_icons">
                  <img src={Flutter} alt="Flutter" />
                  <h5>Flutter</h5>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
