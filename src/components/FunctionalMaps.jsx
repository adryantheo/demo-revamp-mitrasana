import React, { useState, useEffect, useRef } from "react";

const FunctionalMaps = ({ locations }) => {
  const [svgContent, setSvgContent] = useState(null);
  const svgContainerRef = useRef(null);

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
    
    // Make SVG responsive
    svgElement.setAttribute('width', '100%');
    svgElement.setAttribute('height', 'auto');
    
    // Process each location marker
    locations.forEach(loc => {
      const marker = svgElement.getElementById(loc.id);
      if (marker) {
        // Ensure the marker and all its children have pointer events enabled
        enablePointerEvents(marker);
        
        // Add data attributes to the marker
        marker.setAttribute('data-name', loc.name);
        marker.setAttribute('data-location-id', loc.id);
        
        // Add event listeners to handle hover
        marker.addEventListener('mouseenter', handleMarkerHover);
        marker.addEventListener('mouseleave', handleMarkerLeave);
      }
    });
    
    // Recursive function to enable pointer events on an element and all its children
    function enablePointerEvents(element) {
      element.style.pointerEvents = 'auto';
      element.style.cursor = 'pointer';
      Array.from(element.children).forEach(child => enablePointerEvents(child));
    }
    
    // Handle marker hover
    function handleMarkerHover(e) {
      const name = e.currentTarget.getAttribute('data-name');
      
      // Create or update tooltip
      let tooltip = document.getElementById('map-tooltip');
      if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'map-tooltip';
        tooltip.style.position = 'fixed';
        tooltip.style.backgroundColor = 'white';
        tooltip.style.padding = '5px 10px';
        tooltip.style.borderRadius = '4px';
        tooltip.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        tooltip.style.zIndex = '1000';
        tooltip.style.pointerEvents = 'none';
        tooltip.style.fontWeight = 'bold';
        document.body.appendChild(tooltip);
      }
      
      tooltip.textContent = name;
      tooltip.style.display = 'block';
      updateTooltipPosition(e, tooltip);
      
      // Update tooltip on mouse move
      document.addEventListener('mousemove', handleMouseMove);
    }
    
    function handleMarkerLeave() {
      const tooltip = document.getElementById('map-tooltip');
      if (tooltip) {
        tooltip.style.display = 'none';
      }
      document.removeEventListener('mousemove', handleMouseMove);
    }
    
    function handleMouseMove(e) {
      const tooltip = document.getElementById('map-tooltip');
      if (tooltip) {
        updateTooltipPosition(e, tooltip);
      }
    }
    
    function updateTooltipPosition(e, tooltip) {
      tooltip.style.left = `${e.clientX - tooltip.offsetWidth / 2}px`;
      tooltip.style.top = `${e.clientY - tooltip.offsetHeight - 10}px`;
    }
    
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
      const tooltip = document.getElementById('map-tooltip');
      if (tooltip) {
        document.body.removeChild(tooltip);
      }
    };
  }, [svgContent, locations]);

  return (
    <div className="w-full h-full bg-[#dcfbff] rounded-lg shadow-lg object-cover z-20">
      <div className="relative flex justify-center" ref={svgContainerRef}>
        {svgContent && (
          <div 
            className="w-full" 
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        )}
      </div>
    </div>
  );
};

export default FunctionalMaps;