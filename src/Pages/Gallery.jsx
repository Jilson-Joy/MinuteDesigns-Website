import React, { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import './Gallery.css';
import GalleryImage from './services/gallery/GalleryImage';
import GalleryVideo from './services/gallery/GalleryVideo';
import GalleryMinute3D from './services/gallery/GalleryMinute3D';

function Gallery() {
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState('image'); // Set 'image' as default

  useEffect(() => {
    isotope.current = new Isotope('.gallery-grid', {
      itemSelector: '.element-item',
      layoutMode: 'fitRows',
    });

    imagesLoaded('.gallery-grid', () => {
      isotope.current.layout();
    });

    return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
    filterKey === '*'
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
<>
   <section className='' >
        <div className="container page-container">
        <div className="row d-flex justify-content-around align-items-center">
          <div className="col-md-12 text-center">
            <h5>Gallery</h5>
            <p className="about-text">
             Explore Our Craft: A Journey Through Innovation and Design Excellence
            </p>
            </div>
          <div className="col-md-12 text-center">
            <div className="filters">
              {/* <button
                className={filterKey === '*' ? 'active' : ''}
                onClick={handleFilterKeyChange('*')}
              >
                All
              </button> */}
              <button
                className={filterKey === 'image' ? 'active' : ''}
                onClick={handleFilterKeyChange('image')}
              >
                Events
              </button>
              <button
                className={filterKey === 'video' ? 'active' : ''}
                onClick={handleFilterKeyChange('video')}
              >
                Videos
              </button>
              <button
                className={filterKey === 'videos3d' ? 'active' : ''}
                onClick={handleFilterKeyChange('videos3d')}
              >
                Minute 3D
              </button>
            </div>
          
          </div>
        </div>
        </div>
  
  
  
        
   </section>
   <div className="container">
        <div className="gallery-grid">
              <div className="element-item image p-2">
                <GalleryImage/>
              </div>
              <div className="element-item video p-2">
              <GalleryVideo />
              </div>
              {/* <div className="element-item image p-2">
                <img src="https://via.placeholder.com/300x200" alt="Placeholder" />
              </div> */}
              {/* <div className="element-item video p-2">
                <video controls width="300">
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                </video>
              </div> */}
              {/* 3D videos */}
              <div className="element-item videos3d">
                <GalleryMinute3D/>
              </div>
            </div>
        </div>
</>
  );
}

export default Gallery;
