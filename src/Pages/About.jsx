import React, { useEffect} from 'react'
import landImg from '../assets/images/social-media.gif'
import organization from '../assets/images/organization.gif'
import implementation from '../assets/images/implementation.gif'
import mission from '../assets/images/mission.gif'

function About() {
  useEffect(() => {
    const aboutText = document.querySelector('.about-text');

    const handleScroll = () => {
      const elementPosition = aboutText.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      
      if (elementPosition < viewportHeight) {
        aboutText.style.opacity = 1;
        aboutText.style.animationPlayState = 'running';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    
    <div className="container page-container">
    <div className="row">
    <div className="col-md-12 text-center">
              <h5>
               About
              </h5>
              <p className="about-text">
               At Minute Designs, we craft digital experiences that leave a lasting impression. Your vision, our expertise—together, we innovate
              </p>
              <div className="row-icons d-flex justify-content-around align-items-center">
                <img
                          src={organization}
                          style={{ width: '8%', height: 'auto',mixBlendMode: 'color-burn' }}
                        />
                         <img
                          src={implementation}
                          style={{ width: '8%', height: 'auto', mixBlendMode: 'color-burn'}}
                        />
                         <img
                          src={mission}
                          style={{ width: '8%', height: 'auto', mixBlendMode: 'color-burn' }}
                        />
              </div>
      </div>
      </div>
      </div>
    
    
    
    </>
  )
}

export default About