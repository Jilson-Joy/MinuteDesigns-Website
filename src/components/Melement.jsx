import React, { useRef, useEffect, useState } from 'react';
import "../assets/css/Melement.css";
import CircleCanvas from '../components/CircleCanvas';
import CircleGrid from '../components/CircleGrid';

function Melement() {
  return (
 <div className="container">
    {/* <CircleGrid/> */}
     <div className="container" style={{ width: '100%', height: '45vh', position: 'relative' }}>
      <CircleCanvas
        circleColor="black"
      />
    </div>
    </div>
  );
}

export default Melement