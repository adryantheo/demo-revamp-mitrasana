import { useState, useEffect } from 'react';

/**
 * Custom hook to handle viewport scaling
 * This mimics the appearance of a zoomed-out browser at normal zoom levels
 */
const useScaledView = () => {
  const [scaleFactor, setScaleFactor] = useState(1);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to calculate and set the appropriate scale factor
    const calculateScale = () => {
      const width = window.innerWidth;
      setViewportWidth(width);
      
      // For screens wider than 1440px, we keep the design compact
      // to match what would appear at 80% zoom on a 1920px screen
      if (width >= 1440) {
        // Target a layout width of ~1800px 
        const targetWidth = 1800;
        const newScale = width / targetWidth;
        setScaleFactor(newScale > 1 ? 1 : newScale);
      } else if (width >= 1024) {
        // For medium-large screens we slightly reduce the scale
        setScaleFactor(0.9);
      } else {
        // For smaller screens we use normal scaling
        setScaleFactor(1);
      }
    };

    // Calculate on mount and when window resizes
    calculateScale();
    window.addEventListener('resize', calculateScale);
    
    return () => {
      window.removeEventListener('resize', calculateScale);
    };
  }, []);

  return { 
    scaleFactor, 
    viewportWidth,
    // Helper classes based on screen size
    containerClass: viewportWidth >= 1440 ? 'max-w-7xl' : 'container',
    // Utility function to scale pixels
    scalePixels: (px) => Math.round(px * scaleFactor)
  };
};

export default useScaledView;