import React, { useState, useEffect, useRef } from "react";

const FunctionalMaps = ({ locations }) => {
  const [svgContent, setSvgContent] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const svgContainerRef = useRef(null);
  const lastMouseMoveTime = useRef(Date.now());

  // Detect mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fetch the SVG content
  useEffect(() => {
    fetch("/peta-indonesia.svg")
      .then((response) => response.text())
      .then((data) => {
        setSvgContent(data);
      })
      .catch(error => {
        console.error("Error loading SVG:", error);
      });
  }, []);

  // Process SVG and add tooltips after the content is loaded
  useEffect(() => {
    if (!svgContainerRef.current || !svgContent) return;
    
    const svgElement = svgContainerRef.current.querySelector("svg");
    if (!svgElement) return;
    
    // Ensure SVG has viewBox for proper scaling
    if (!svgElement.getAttribute('viewBox') && svgElement.getAttribute('width') && svgElement.getAttribute('height')) {
      const width = svgElement.getAttribute('width');
      const height = svgElement.getAttribute('height');
      svgElement.setAttribute('viewBox', `0 0 ${width} ${height}`);
    }
    
    // Make SVG responsive
    svgElement.setAttribute('width', '100%');
    svgElement.setAttribute('height', 'auto');
    svgElement.style.maxWidth = '100%';
    svgElement.style.maxHeight = isMobile ? '50vh' : '70vh';
    
    // Process each location marker
    locations.forEach(loc => {
      const marker = svgElement.getElementById(loc.id);
      if (marker) {
        // Ensure the marker and all its children have pointer events enabled
        enablePointerEvents(marker);
        
        // Add data attributes to the marker
        marker.setAttribute('data-name', loc.name);
        marker.setAttribute('data-location-id', loc.id);
        
        // Only add event listeners on desktop
        if (!isMobile) {
          marker.addEventListener('mouseenter', handleMarkerHover);
          marker.addEventListener('mouseleave', handleMarkerLeave);
        }
        
        // Enhance visibility on all devices
        marker.style.fill = "#324F35";
        marker.style.fillOpacity = "0.9";
        marker.style.stroke = "#ffffff";
        marker.style.strokeWidth = "1";
        
        // Make markers slightly larger on mobile for better touch targets
        if (isMobile) {
          marker.style.transform = "scale(1.2)";
          marker.style.transformOrigin = "center";
        }
      }
    });
    
    // Recursive function to enable pointer events on an element and all its children
    function enablePointerEvents(element) {
      element.style.pointerEvents = 'auto';
      element.style.cursor = 'pointer';
      Array.from(element.children).forEach(child => enablePointerEvents(child));
    }
    
    // Handle marker hover (desktop only)
    function handleMarkerHover(e) {
      if (isMobile) return;
      
      const name = e.currentTarget.getAttribute('data-name');
      setHoveredLocation(name);
      setMousePosition({ x: e.clientX, y: e.clientY });
      lastMouseMoveTime.current = Date.now();
      
      // Update tooltip on mouse move
      document.addEventListener('mousemove', handleMouseMove);
    }
    
    function handleMarkerLeave() {
      if (isMobile) return;
      
      setHoveredLocation(null);
      document.removeEventListener('mousemove', handleMouseMove);
    }
    
    function handleMouseMove(e) {
      if (isMobile) return;
      
      setMousePosition({ x: e.clientX, y: e.clientY });
      lastMouseMoveTime.current = Date.now();
    }
    
    const handleGlobalMouseMove = () => {
      if (hoveredLocation && !isMobile) {
        const timeSinceLastMove = Date.now() - lastMouseMoveTime.current;
        if (timeSinceLastMove > 300) {
          setHoveredLocation(null);
        }
      }
    };

    const handleScroll = () => {
      setHoveredLocation(null);
    };
    
    // Add global event listeners
    document.addEventListener("mousemove", handleGlobalMouseMove);
    window.addEventListener("scroll", handleScroll);
    
    // Clean up on unmount
    return () => {
      locations.forEach(loc => {
        const marker = svgElement.getElementById(loc.id);
        if (marker) {
          marker.removeEventListener('mouseenter', handleMarkerHover);
          marker.removeEventListener('mouseleave', handleMarkerLeave);
        }
      });
      
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      window.addEventListener("scroll", handleScroll);
    };
  }, [svgContent, locations, isMobile, hoveredLocation]);

  return (
    <div className="w-full bg-[#dcfbff] rounded-lg shadow-lg object-cover z-20 svg-map-container">
      <div className="relative flex justify-center map-container" ref={svgContainerRef}>
        {svgContent ? (
          <div 
            className="w-full" 
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        ) : (
          <div className="w-full h-48 md:h-64 lg:h-80 flex items-center justify-center">
            <span className="text-gray-400">Loading map...</span>
          </div>
        )}
        
        {/* Tooltip - Only show on desktop */}
        {hoveredLocation && !isMobile && (
          <div
            className="absolute bg-white text-gray-800 px-3 py-2 text-sm md:text-base font-medium rounded-md shadow-lg z-50 border border-gray-300"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y - 40}px`,
              transform: "translate(-50%, -100%)",
              pointerEvents: "none",
              position: "fixed",
            }}
          >
            {hoveredLocation}
          </div>
        )}
      </div>
    </div>
  );
};

export default FunctionalMaps;