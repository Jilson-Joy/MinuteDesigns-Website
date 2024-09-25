import React, { useRef, useEffect } from 'react';

const CircleCanvas = ({
  bgColor = 'white',
  circleSize = 6,
  circleSpacing = 10,
  highlightColor = 'black',
  otherDotColor = 'transparent',
  letterColor = '#ee964b',
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const circles = [];
    const shapeSize = 400;
    const gridCenterX = canvas.width / 2;
    const gridCenterY = canvas.height / 2;
    const halfSize = shapeSize / 2;

    const letters = ['M', 'I', 'N', 'U', 'T', 'E'];
    const lettersDSG = ['D', 'E', 'S', 'I', 'G', 'N', 'S'];
    
    const isHighlightDot = (x, y) => {
      const leftX = gridCenterX - halfSize;
      const rightX = gridCenterX + halfSize;
      const topY = gridCenterY - halfSize;
      const bottomY = gridCenterY + halfSize * 0.8; // Reduce the height by 30%
    
      // Adjust slope for an exact triangle
      const slope = (bottomY - topY) / halfSize; 
    
      // Coordinates for the last middle bottom dot
      const lastMiddleBottomDotX = gridCenterX;
      const lastMiddleBottomDotY = bottomY;
    
      return (
        // Remove the bottom middle dot condition
        (x >= leftX && x <= leftX + 0.3 * shapeSize && y >= topY && y <= bottomY) ||
        (x >= rightX - 0.3 * shapeSize && x <= rightX && y >= topY && y <= bottomY) ||
        // Left side of the triangle (expanded ranges)
        (x >= leftX + 0.1 * shapeSize && x <= gridCenterX &&
            y >= topY && y <= bottomY &&
            y <= topY + slope * (x - leftX - 0.02 * shapeSize)) || 
        // Right side of the triangle (expanded ranges)
        (x >= gridCenterX && x <= rightX - 0.3 * shapeSize &&
            y >= topY && y <= bottomY &&
            y <= topY + slope * (rightX - x - 0.02 * shapeSize)) 
        // Highlight the last middle bottom dot
      );
    };
    


    const init = () => {
      circles.length = 0;
      const radius = circleSize / 2;
      const spacingX = circleSpacing + circleSize;
      const spacingY = circleSpacing + circleSize;
      const columns = Math.floor(canvas.width / spacingX);
      const rows = Math.floor(canvas.height / spacingY);
      const offsetX = (canvas.width - columns * spacingX + circleSpacing) / 7;
      const offsetY = (canvas.height - rows * spacingY + circleSpacing) / 3;

      const rowsToRemove = 6; // Height of the triangle
      const triangleBase = rowsToRemove * 2; // Base width of the triangle at the top

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
          const cx = offsetX + x * spacingX + radius;
          const cy = offsetY + y * spacingY + radius;

    

          // Keep dots outside the triangle shape from top to middle
          if (y < rowsToRemove) {
            const slope = (triangleBase - y * (triangleBase / rowsToRemove)) / 2;
            const middleX = columns / 2;

            if (x >= middleX - slope - 1 && x <= middleX + slope) {
              continue; // Skip this circle to form a triangle removal
            }
        
          
          }

          circles.push({ x: cx, y: cy, baseX: cx, baseY: cy });
        }
      }
    };

    const draw = () => {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() / 500; // Adjust speed of the elastic effect
      let leftLetterIndex = 0;
      let rightLetterIndex = 0;

      circles.forEach((circle) => {
        // Render squares that are highlighted
        if (isHighlightDot(circle.x, circle.y)) {
          // Check if the dot is at the bottom of the grid
          if (circle.y >= canvas.height - 10) {
            // For left side letters (M, I, N, U, T, E)
            if (circle.x < canvas.width / 1 && leftLetterIndex < letters.length) {
              ctx.fillStyle = letterColor;
              ctx.font = "10px Arial";
              ctx.fillText(letters[leftLetterIndex], circle.x + 8, circle.y + 10);
              leftLetterIndex++;
            }
            // For right side letters (S, G, N, I, E, D)
            else if (circle.x > canvas.width / 2 && rightLetterIndex < lettersDSG.length) {
              ctx.fillStyle = letterColor;
              ctx.font = "10px Arial";
              ctx.fillText(lettersDSG[rightLetterIndex], circle.x + 4, circle.y + 10);
              rightLetterIndex++;
            }
          } else {
            ctx.beginPath();

            // Elastic effect using sine wave
            const scale = 1 + Math.sin(time * 2 + circle.x / 100) * 0.2; // Elastic bounce effect
            const size = (circleSize / 1) * scale; // Calculate size based on scale

            // Draw square instead of circle
            ctx.rect(circle.x - size / 2, circle.y - size / 2, size, size); // Center the square
            ctx.fillStyle = highlightColor;
            ctx.fill();
          }
        }
      });
    };

    const update = () => {
      circles.forEach((circle) => {
        const dx = circle.baseX - circle.x;
        const dy = circle.baseY - circle.y;
        circle.x += dx / 10;
        circle.y += dy / 10;
      });
    };

    const animate = () => {
      update();
      draw();
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      init();
    };

    window.addEventListener('resize', handleResize);
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [bgColor, circleSize, circleSpacing, highlightColor, otherDotColor, letterColor]);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default CircleCanvas;
