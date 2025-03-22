import { useState, useEffect } from 'react';

/**
 * Custom hook to handle responsive scaling for different screen sizes and resolutions
 * Adjusted with more conservative scaling factors for better text proportions
 */
function useScaledView() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [pixelRatio, setPixelRatio] = useState(window.devicePixelRatio || 1);
  const [isHighResolution, setIsHighResolution] = useState(false);
  const [isVeryHighResolution, setIsVeryHighResolution] = useState(false);
  const [containerClass, setContainerClass] = useState('');

  useEffect(() => {
    // Function to update dimensions
    const updateDimensions = () => {
      const width = window.innerWidth;
      const ratio = window.devicePixelRatio || 1;
      
      setScreenWidth(width);
      setPixelRatio(ratio);
      
      // Define high-resolution breakpoints
      const isHigh = 
        (width >= 1920) || 
        (width >= 1440 && ratio >= 1.5);
      
      const isVeryHigh = 
        (width >= 2560) || 
        (width >= 1920 && ratio >= 2);
      
      setIsHighResolution(isHigh);
      setIsVeryHighResolution(isVeryHigh);
      
      // Set container width class based on resolution
      if (isVeryHigh) {
        setContainerClass('max-w-7xl'); // Larger container for very high-res
      } else if (isHigh) {
        setContainerClass('max-w-6xl'); // Large container for high-res
      } else if (width >= 1280) {
        setContainerClass('max-w-5xl'); // Default container for desktop
      } else if (width >= 768) {
        setContainerClass('max-w-4xl'); // Medium container for tablets
      } else {
        setContainerClass('w-full px-4'); // Full width with padding for mobile
      }
    };
    
    // Initial update
    updateDimensions();
    
    // Add event listener
    window.addEventListener('resize', updateDimensions);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return {
    containerClass,
    isHighResolution,
    isVeryHighResolution,
    screenWidth,
    pixelRatio
  };
}

export default useScaledView;