import React, { useState, useEffect } from 'react';

const ScrollComponent = () => {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollX(window.scrollX);
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

  }, []); 
  return (
    <div style={{ height: '2000px', padding: '20px' }}>
      <div style={{
        position: 'fixed',
        top: '10px',
        left: '10px',
        background: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '5px',
        borderRadius: '3px'
      }}>
        Scroll X: {scrollX}, Scroll Y: {scrollY}
      </div>
    </div>
  );
};

export default ScrollComponent;
