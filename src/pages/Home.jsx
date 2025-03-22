import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Promo from "../components/Promo";
import Jaringan from "../components/Jaringan";
import Mitra from '../components/Mitra';
import CustomerCareImg from '../assets/static/customer_care.png'

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const floatingButtonRef = useRef(null);
  const [position, setPosition] = useState({ x: null, y: null });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [showDragLabel, setShowDragLabel] = useState(false);

  // Load saved position from localStorage on component mount
  useEffect(() => {
    const savedPosition = localStorage.getItem('floatingButtonPosition');
    if (savedPosition) {
      setPosition(JSON.parse(savedPosition));
    }
  }, []);

  const handleContactClick = () => {
    if (!isDragging) {
      navigate('/contactus');
    }
  };

  // Handle mouse down for desktop
  const handleMouseDown = (e) => {
    e.preventDefault(); // Prevent default behavior
    e.stopPropagation(); // Prevent event from propagating
    
    // Calculate the offset from the click point to the button's top-left corner
    const buttonRect = floatingButtonRef.current.getBoundingClientRect();
    const offsetX = e.clientX - buttonRect.left;
    const offsetY = e.clientY - buttonRect.top;
    
    setDragOffset({ x: offsetX, y: offsetY });
    setIsDragging(true);
    setShowDragLabel(true);
  };

  // Handle touch start for mobile
  const handleTouchStart = (e) => {
    e.stopPropagation();
    
    const touch = e.touches[0];
    const buttonRect = floatingButtonRef.current.getBoundingClientRect();
    const offsetX = touch.clientX - buttonRect.left;
    const offsetY = touch.clientY - buttonRect.top;
    
    setDragOffset({ x: offsetX, y: offsetY });
    setIsDragging(true);
    setShowDragLabel(true);
  };

  // Handle mouse move for desktop
  const handleMouseMove = (e) => {
    if (isDragging) {
      // Calculate new position considering the initial click offset
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;
      
      // Set limits to keep button visible within viewport
      const buttonWidth = floatingButtonRef.current.offsetWidth;
      const buttonHeight = floatingButtonRef.current.offsetHeight;
      const maxX = window.innerWidth - buttonWidth/2;
      const maxY = window.innerHeight - buttonHeight/2;
      
      // Set new position with boundaries
      setPosition({
        x: Math.max(buttonWidth/2, Math.min(newX, maxX)),
        y: Math.max(buttonHeight/2, Math.min(newY, maxY))
      });
    }
  };

  // Handle touch move for mobile
  const handleTouchMove = (e) => {
    if (isDragging) {
      e.preventDefault(); // Prevent scrolling while dragging
      const touch = e.touches[0];
      
      // Calculate new position considering the initial touch offset
      const newX = touch.clientX - dragOffset.x;
      const newY = touch.clientY - dragOffset.y;
      
      // Set limits to keep button visible within viewport
      const buttonWidth = floatingButtonRef.current.offsetWidth;
      const buttonHeight = floatingButtonRef.current.offsetHeight;
      const maxX = window.innerWidth - buttonWidth/2;
      const maxY = window.innerHeight - buttonHeight/2;
      
      // Set new position with boundaries
      setPosition({
        x: Math.max(buttonWidth/2, Math.min(newX, maxX)),
        y: Math.max(buttonHeight/2, Math.min(newY, maxY))
      });
    }
  };

  // Handle mouse up for desktop
  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      
      // Hide drag label after a delay
      setTimeout(() => {
        setShowDragLabel(false);
      }, 1500);
      
      // Save position to localStorage
      localStorage.setItem('floatingButtonPosition', JSON.stringify(position));
    }
  };

  // Handle touch end for mobile
  const handleTouchEnd = () => {
    if (isDragging) {
      setIsDragging(false);
      
      // Hide drag label after a delay
      setTimeout(() => {
        setShowDragLabel(false);
      }, 1500);
      
      // Save position to localStorage
      localStorage.setItem('floatingButtonPosition', JSON.stringify(position));
    }
  };

  // Add and remove event listeners for drag operations
  useEffect(() => {
    if (isDragging) {
      // Desktop events
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      
      // Mobile events
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleTouchEnd);
      
      // Change cursor style during drag on desktop
      document.body.style.cursor = 'grabbing';
    } else {
      // Desktop events
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      
      // Mobile events
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      
      // Reset cursor style
      document.body.style.cursor = 'auto';
    }
    
    return () => {
      // Cleanup all event listeners
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      document.body.style.cursor = 'auto';
    };
  }, [isDragging]);

  return (
    <div className="relative scale-container">
      {/* Main content wrapping */}
      <div className="max-w-full mx-auto">
        <Hero />
        <About />
        <Services />
        <Promo />
        <Jaringan />
        <Mitra />
      </div>
      
      {/* Floating Button - Now Draggable */}
      <div 
        ref={floatingButtonRef}
        className={`fixed z-50 cursor-${isDragging ? 'grabbing' : 'grab'} touch-none`}
        style={{
          bottom: position.y !== null ? 'auto' : '6rem',
          right: position.x !== null ? 'auto' : '1.5rem',
          top: position.y !== null ? `${position.y}px` : 'auto',
          left: position.x !== null ? `${position.x}px` : 'auto',
        }}
        onMouseEnter={() => !isDragging && setIsHovered(true)}
        onMouseLeave={() => !isDragging && setIsHovered(false)}
        onClick={handleContactClick}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Container for positioning */}
        <div className="relative">
          {/* Draggable indicator - visible on hover or when dragging */}
          <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-200 bg-opacity-80 rounded-t-lg text-center text-xs font-medium transition-opacity duration-200 ${(isHovered || showDragLabel) ? 'opacity-100' : 'opacity-0'}`}>
            Drag to move
          </div>
          
          {/* Image with hover effect */}
          <div className={`transition-transform duration-300 ${isHovered && !isDragging ? 'transform scale-110' : ''}`}>
            <img 
              src={CustomerCareImg}
              alt="Contact" 
              className="w-24 h-24 md:w-32 md:h-32"
              draggable="false" // Prevent default drag behavior
            />
          </div>
          
          {/* Text positioned absolute at the bottom */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded-lg shadow-md whitespace-nowrap">
            <span className="text-gray-700 text-sm">Hubungi Kami</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;