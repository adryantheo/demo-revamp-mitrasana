import { useState, useEffect } from 'react';

/**
 * A custom hook that provides responsive scaling classes based on screen size
 * Works for both small screens and large high-resolution displays
 */
const useScaledView = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    pixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio : 1
  });
  
  // Determine if we're on a high-res display that needs special scaling
  const isHighResolution = screenSize.width > 1920 || (screenSize.width > 1440 && screenSize.pixelRatio > 1);
  const isVeryHighResolution = screenSize.width > 2560 || (screenSize.width > 1920 && screenSize.pixelRatio > 1.5);
  
  // Update screen dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
        pixelRatio: window.devicePixelRatio
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Determine appropriate container class based on screen size
  let containerClass = 'max-w-7xl'; // Default container width
  
  if (isVeryHighResolution) {
    containerClass = 'max-w-screen-2xl scale-container-large'; // Extra large screens (4K, etc)
  } else if (isHighResolution) {
    containerClass = 'max-w-screen-xl scale-container-medium'; // Large high-res screens
  }
  
  // Text scaling classes
  const getTextClass = (baseClass) => {
    if (isVeryHighResolution) {
      // Scale up text for very high resolution displays
      switch (baseClass) {
        case 'text-xs': return 'text-sm';
        case 'text-sm': return 'text-base';
        case 'text-base': return 'text-lg';
        case 'text-lg': return 'text-xl';
        case 'text-xl': return 'text-2xl';
        case 'text-2xl': return 'text-3xl';
        case 'text-3xl': return 'text-4xl';
        case 'text-4xl': return 'text-5xl';
        case 'text-5xl': return 'text-6xl';
        default: return baseClass;
      }
    } else if (isHighResolution) {
      // Mild scale up for high resolution displays
      switch (baseClass) {
        case 'text-xs': return 'text-sm';
        case 'text-sm': return 'text-base';
        case 'text-base': return 'text-lg';
        case 'text-lg': return 'text-xl';
        case 'text-xl': return 'text-2xl';
        case 'text-2xl': return 'text-3xl';
        case 'text-3xl': return 'text-4xl';
        default: return baseClass;
      }
    }
    return baseClass; // Default - no scaling
  };
  
  return {
    containerClass,
    getTextClass,
    isHighResolution,
    isVeryHighResolution,
    screenWidth: screenSize.width,
    screenHeight: screenSize.height,
    pixelRatio: screenSize.pixelRatio
  };
};

export default useScaledView;