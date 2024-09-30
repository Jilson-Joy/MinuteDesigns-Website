import React from 'react'
import './Crm.css'
import {  MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
function Crm() {
  return (
    <>
    <section className='full-container'>
  <div className="container">
   <div className='row text-center'>
    <div className="head-title mt-5">
    <h3>
    Empowering businesses with integrated CRM and ERP for seamless operations and customer engagement
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
</section>
    </>
  )
}

export default Crm