import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import useScaledView from '../hooks/useScaledView';

/**
 * Main layout component that handles responsive scaling across all device sizes
 */
const Layout = ({ children }) => {
  const { 
    containerClass, 
    isHighResolution, 
    isVeryHighResolution, 
    screenWidth, 
    pixelRatio 
  } = useScaledView();
  
  // Apply scaling classes to HTML element on component mount
  useEffect(() => {
    const htmlElement = document.documentElement;
    
    if (isVeryHighResolution) {
      htmlElement.classList.add('very-high-res');
      htmlElement.classList.remove('high-res');
    } else if (isHighResolution) {
      htmlElement.classList.add('high-res');
      htmlElement.classList.remove('very-high-res');
    } else {
      htmlElement.classList.remove('high-res', 'very-high-res');
    }
    
    // Log screen details for debugging
    console.log(`Screen: ${screenWidth}px, Ratio: ${pixelRatio}`);
    
    return () => {
      // Cleanup on unmount
      htmlElement.classList.remove('high-res', 'very-high-res');
    };
  }, [isHighResolution, isVeryHighResolution, screenWidth, pixelRatio]);
  
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow pt-20 md:pt-24">
        <div className={`${containerClass} px-4 sm:px-6 lg:px-8 mx-auto scale-container`}>
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;