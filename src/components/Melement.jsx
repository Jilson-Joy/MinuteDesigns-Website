import React, { useRef, useEffect, useState } from 'react';
import "../assets/css/Melement.css";
import CircleCanvas from '../components/CircleCanvas';
import CircleGrid from '../components/CircleGrid';

function Melement() {
  return (
// style
<div>
<style>
{`
  .container-M {
    width: 100%;
    height: 100%;
    position: relative;
  }


  @media (max-width: 768px) {
    .container-M {
      width: 80%;
      height: 25vh;
    }
  }


  @media (min-width: 1200px) {
    .container-M {
      width: 100%;
      height: 45vh;
    }
  }
`}
</style>


 <div className="container-M">
    {/* <CircleGrid/> */}
      <CircleCanvas
        circleColor="black"
      />
    </div>
    </div>
  );
}

export default Melement