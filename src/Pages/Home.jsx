import React from "react";
import "../assets/css/commonStyle.css";
import "../assets/css/mediaQuery.css";

function Home() {
  return (
    <>
      <section>
        <div class="container hero-container">
          <div class="row">
            <div class="col-md-6">
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
            <div class="col-md-6">
              <div className="hero-image-content">
                <ul class="list">
                  <li class="item"></li>
                  <li class="item"></li>
                  <li class="item"></li>
                  <li class="item"></li>
                  <li class="item"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
