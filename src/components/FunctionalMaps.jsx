import React, { useState, useEffect, useRef } from "react";

const FunctionalMaps = ({ locations }) => {
  const [svgContent, setSvgContent] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const svgContainerRef = useRef(null);

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

  // Process SVG after content is loaded
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
    
    // Prevent any transformations
    svgElement.style.transform = 'none';
    svgElement.style.transition = 'none';
    
    // Add click handler to the background to close any selected location
    svgElement.onclick = (e) => {
      // Only close if clicking directly on the SVG, not on markers
      if (e.target === svgElement) {
        setSelectedLocation(null);
      }
    };
    
    // Process each location marker - now for both mobile and desktop
    locations.forEach(loc => {
      const marker = svgElement.getElementById(loc.id);
      if (marker) {
        // Always show pins, even on mobile
        marker.style.display = "block";
        
        // Apply styles to the marker
        marker.style.fill = "#324F35";
        marker.style.fillOpacity = "0.9";
        marker.style.stroke = "#ffffff";
        marker.style.strokeWidth = "1";
        marker.style.cursor = "pointer";
        
        // Make markers more visible on mobile without removing them
        if (isMobile) {
          marker.style.transform = "scale(1.5)"; // Larger scale for better visibility on mobile
          marker.style.transformOrigin = "center";
          marker.style.strokeWidth = "1.5"; // Thicker stroke for better visibility
        }
        
        // Add click event listener for both mobile and desktop
        marker.onclick = (e) => {
          e.stopPropagation();
          
          // Calculate marker position relative to the container
          const markerRect = marker.getBoundingClientRect();
          const containerRect = svgContainerRef.current.getBoundingClientRect();
          
          // Get center point of marker
          const markerCenterX = markerRect.left + (markerRect.width / 2);
          const markerCenterY = markerRect.top + (markerRect.height / 2);
          
          // Calculate position relative to container
          const relativeX = markerCenterX - containerRect.left;
          const relativeY = markerCenterY - containerRect.top;
          
          if (selectedLocation && selectedLocation.id === loc.id) {
            // Toggle off if already selected
            setSelectedLocation(null);
          } else {
            // Select this location and set tooltip position
            setSelectedLocation(loc);
            setTooltipPosition({ x: relativeX, y: relativeY });
          }
        };
        
        // Apply a hover effect without disturbing the tooltip
        marker.onmouseenter = () => {
          marker.style.fillOpacity = "1";
        };
        
        marker.onmouseleave = () => {
          marker.style.fillOpacity = "0.9";
        };
        
        // Add touch-specific handling for mobile
        if (isMobile) {
          marker.ontouchstart = (e) => {
            e.stopPropagation();
            marker.style.fillOpacity = "1";
          };
          
          marker.ontouchend = (e) => {
            e.stopPropagation();
            marker.style.fillOpacity = "0.9";
            
            // Trigger click event on touch end
            const touchEndEvent = new Event('click', { bubbles: true });
            marker.dispatchEvent(touchEndEvent);
          };
        }
      }
    });
    
    // Handle clicks outside the map to close tooltip
    const handleDocumentClick = (e) => {
      if (!svgContainerRef.current.contains(e.target)) {
        setSelectedLocation(null);
      }
    };
    
    document.addEventListener('click', handleDocumentClick);
    
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [svgContent, locations, isMobile, selectedLocation]);

  return (
    <div className="w-full bg-[#dcfbff] rounded-lg shadow-lg object-cover z-20">
      <div className="relative flex justify-center" ref={svgContainerRef}>
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
        
        {/* Selected Location Info - Styled like Jaringan.jsx */}
        {selectedLocation && (
          <div 
            className="absolute bg-white text-gray-800 rounded-xl shadow-lg z-50 border border-gray-300"
            style={{
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y - 40}px`, // Position above the marker
              transform: 'translate(-50%, -100%)', // Center horizontally and position above
              padding: '0.5rem 0.75rem',
            }}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm md:text-lg font-bold">{selectedLocation.name}</span>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedLocation(null);
                }}
                className="ml-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            {/* Arrow pointing to the marker */}
            <div
              className="absolute w-3 h-3 bg-white transform rotate-45 border-r border-b border-gray-300"
              style={{
                bottom: '-6px',
                left: '50%',
                marginLeft: '-6px',
              }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FunctionalMaps;