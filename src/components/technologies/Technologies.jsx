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
        <div className='Technologies_container'>
            <div className='Technologies_slider'>
                <div className='Technologies_icons'>
                    <img src={figma} alt="Figma" />
                    <h5>Figma</h5>
                </div>
                <div className='Technologies_icons'>
                    <img src={reactLogo} alt="React" />
                    <h5>React</h5>
                </div>
                <div className='Technologies_icons'>
                    <img src={node} alt="Node Js" />
                    <h5>Node Js</h5>
                </div>
                <div className='Technologies_icons'>
                    <img src={mongodbicons} alt="Mongo DB" />
                    <h5>Mongo DB</h5>
                </div>
                <div className='Technologies_icons'>
                    <img src={mysql} alt="MySQL" />
                    <h5>MySQL</h5>
                </div>
                <div className='Technologies_icons'>
                    <img src={Flutter} alt="Flutter" />
                    <h5>Flutter</h5>
                </div>
            </div>
        </div>
    );
}

export default Technologies;
