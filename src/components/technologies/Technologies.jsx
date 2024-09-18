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
import React from 'react'
import figma from '../../assets/images/figma.png';
import reactLogo from '../../assets/images/React.png';
import node from '../../assets/images/node.png';
import mongodbicons from '../../assets/images/mongodbIcons.png';
import mysql from '../../assets/images/mysql.png';
import Flutter from '../../assets/images/flutterIcons.png';
import './Technologies.css';
function Technologies() {
    return (
        <div className=' container'>
           <div className='technologies_box'>
                <div className='Technologies_container row'>
                    <div className='col-md-6 d-flex flex-column justify-content-center  '>
                        <h1>Technologies</h1>
                        <p className='Technologies_text'>
                            Technologies in a software company encompass a range of tools and frameworks that drive development, including programming languages, development platforms, and cloud services. These technologies enable efficient coding, deployment, and scaling of software solutions. Staying updated with the latest advancements ensures the company remains competitive and innovative.
                        </p>
                    </div>
                    <div className='col-md-6 d-flex flex-column justify-content-center'>
                        {/* 1 */}
                        <div className='Technologies_slider'>
    
                            <div class="Marquee">
                                <div class="Marquee-content">
                                    <div class="Marquee-tag">
                                        <div className='Technologies_icons'>
                                            <img src={figma} alt="Figma" />
                                            <h5>Figma</h5>
                                        </div>
                                    </div>
                                    <div class="Marquee-tag">
                                        <div className='Technologies_icons'>
                                            <img src={reactLogo} alt="React" />
                                            <h5>React</h5>
                                        </div>
                                    </div>
                                    <div class="Marquee-tag">
                                        <div className='Technologies_icons'>
                                            <img src={node} alt="Node Js" />
                                            <h5>Node Js</h5>                 </div>
                                    </div>
                                    <div class="Marquee-tag">
                                        <div className='Technologies_icons'>
                                            <img src={mongodbicons} alt="Mongo DB" />
                                            <h5>Mongo DB</h5>
                                        </div>
                                    </div>
                                    <div class="Marquee-tag">
                                        <div className='Technologies_icons'>
                                            <img src={mysql} alt="MySQL" />
                                            <h5>MySQL</h5>
                                        </div>
                                    </div>
                                    <div class="Marquee-tag">
                                        <div className='Technologies_icons'>
                                            <img src={Flutter} alt="Flutter" />
                                            <h5>Flutter</h5>
                                        </div>
                                    </div>
    
                                </div>
                            </div>
                            <div class="Marquee">
                                <div class="Marquee-content">
                                    <div class="Marquee-tag">
                                        <div className='Technologies_icons'>
                                            <img src={figma} alt="Figma" />
                                            <h5>Figma</h5>
                                        </div>
                                    </div>
                                    <div class="Marquee-tag">
                                        <div className='Technologies_icons'>
                                            <img src={reactLogo} alt="React" />
                                            <h5>React</h5>
                                        </div>
                                    </div>
                                    <div class="Marquee-tag">
                                        <div className='Technologies_icons'>
                                            <img src={node} alt="Node Js" />
                                            <h5>Node Js</h5>                 </div>
                                    </div>
                                    <div class="Marquee-tag">
                                        <div className='Technologies_icons'>
                                            <img src={mongodbicons} alt="Mongo DB" />
                                            <h5>Mongo DB</h5>
                                        </div>
                                    </div>
                                    <div class="Marquee-tag">
                                        <div className='Technologies_icons'>
                                            <img src={mysql} alt="MySQL" />
                                            <h5>MySQL</h5>
                                        </div>
                                    </div>
                                    <div class="Marquee-tag">
                                        <div className='Technologies_icons'>
                                            <img src={Flutter} alt="Flutter" />
                                            <h5>Flutter</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            {/* 2 */}
    
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Technologies