import React, { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import './Gallery.css';

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
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>Gallery</h1>
        </div>
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
        <div className="gallery-grid">
          <div className="element-item image">
            <img src="https://via.placeholder.com/300x200" alt="Placeholder" />
          </div>
          <div className="element-item video">
            <video controls width="300">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="element-item video">
            <video controls width="300">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
          </div>
          {/* 3D videos */}
          <div className="element-item videos3d">
            <video controls width="300">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
