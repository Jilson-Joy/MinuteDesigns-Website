import React, { useState } from "react";
import "../assets/css/commonStyle.css";
import "../assets/css/mediaQuery.css";

function Home() {
  // const [isPaused, setIsPaused] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsPaused(true); // Pause the rotation when hovering over an item
  // };

  // const handleMouseLeave = () => {
  //   setIsPaused(false); // Resume the rotation when mouse leaves the item
  // };
  return (
    <>
      <section className="hero-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 ">
              <h1 className="hero-text">
                Design
                <br />
                Innovate
                <br />
                Thrive
              </h1>
              <p className="hero-caption">
                "Elevating user experience to its pinnacle."
              </p>
            </div>
            <div className="col-md-6">
              {/* <div className="hero-image-content">
              
      <ul className={`list ${isPaused ? 'paused' : ''}`}>
        <li className="item" style={{ '--i': 0 }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></li>
        <li className="item" style={{ '--i': 1 }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></li>
        <li className="item" style={{ '--i': 2 }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></li>
        <li className="item" style={{ '--i': 3 }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></li>
        <li className="item" style={{ '--i': 4 }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></li>
      </ul>
    </div> */}
              <div className="wrapper">
                <div className="img_container">
                  <input type="radio" name="slide" id="c1" checked />
                  <label for="c1" class="card">
                    <div className="card_row">
                      <div className="icon">1</div>
                      <div className="description">
                        <h4>Winter</h4>
                        <p>Winter has so much to offer -
                          creative activities</p>
                      </div>
                    </div>
                  </label>
                  <input type="radio" name="slide" id="c2" />
                  <label for="c2" className="card">
                    <div className="card_row">
                      <div className="icon">2</div>
                      <div className="description">
                        <h4>Digital Technology</h4>
                        <p>Gets better every day -
                          stay tuned</p>
                      </div>
                    </div>
                  </label>
                  <input type="radio" name="slide" id="c3" />
                  <label for="c3" className="card">
                    <div className="card_row">
                      <div className="icon">3</div>
                      <div className="description">
                        <h4>Globalization</h4>
                        <p>Help people all over the world</p>
                      </div>
                    </div>
                  </label>
                  <input type="radio" name="slide" id="c4" />
                  <label for="c4" class="card">
                    <div className="card_row">
                      <div className="icon">4</div>
                      <div className="description">
                        <h4>New technologies</h4>
                        <p>Space engineering becomes
                          more and more advanced</p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/*  */}
      <section>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 text-center text-md-left">

              <p className="hero-caption">
                "Elevating user experience to its pinnacle."
              </p>
            </div>
            <div className="col-md-6">

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home