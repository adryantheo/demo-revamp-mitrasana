// import React, { useState, useEffect, useRef } from "react";

// const FunctionalMaps = ({ locations }) => {
//   const [svgContent, setSvgContent] = useState(null);
//   const svgContainerRef = useRef(null);

//   // Fetch the SVG content
//   useEffect(() => {
//     fetch("/peta-indonesia.svg")
//       .then((response) => response.text())
//       .then((data) => {
//         setSvgContent(data);
//       })
//       .catch(error => {
//         console.error("Error loading SVG:", error);
//       });
//   }, []);

//   // Process SVG and add tooltips after the content is loaded
//   useEffect(() => {
//     if (!svgContainerRef.current || !svgContent) return;
    
//     const svgElement = svgContainerRef.current.querySelector("svg");
//     if (!svgElement) return;
    
//     // Make SVG responsive
//     svgElement.setAttribute('width', '100%');
//     svgElement.setAttribute('height', 'auto');
    
//     // Process each location marker
//     locations.forEach(loc => {
//       const marker = svgElement.getElementById(loc.id);
//       if (marker) {
//         // Ensure the marker and all its children have pointer events enabled
//         enablePointerEvents(marker);
        
//         // Add data attributes to the marker
//         marker.setAttribute('data-name', loc.name);
//         marker.setAttribute('data-location-id', loc.id);
        
//         // Add event listeners to handle hover
//         marker.addEventListener('mouseenter', handleMarkerHover);
//         marker.addEventListener('mouseleave', handleMarkerLeave);
//       }
//     });
    
//     // Recursive function to enable pointer events on an element and all its children
//     function enablePointerEvents(element) {
//       element.style.pointerEvents = 'auto';
//       element.style.cursor = 'pointer';
//       Array.from(element.children).forEach(child => enablePointerEvents(child));
//     }
    
//     // Handle marker hover
//     function handleMarkerHover(e) {
//       const name = e.currentTarget.getAttribute('data-name');
      
//       // Create or update tooltip
//       let tooltip = document.getElementById('map-tooltip');
//       if (!tooltip) {
//         tooltip = document.createElement('div');
//         tooltip.id = 'map-tooltip';
//         tooltip.style.position = 'fixed';
//         tooltip.style.backgroundColor = 'white';
//         tooltip.style.padding = '5px 10px';
//         tooltip.style.borderRadius = '4px';
//         tooltip.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
//         tooltip.style.zIndex = '1000';
//         tooltip.style.pointerEvents = 'none';
//         tooltip.style.fontWeight = 'bold';
//         document.body.appendChild(tooltip);
//       }
      
//       tooltip.textContent = name;
//       tooltip.style.display = 'block';
//       updateTooltipPosition(e, tooltip);
      
//       // Update tooltip on mouse move
//       document.addEventListener('mousemove', handleMouseMove);
//     }
    
//     function handleMarkerLeave() {
//       const tooltip = document.getElementById('map-tooltip');
//       if (tooltip) {
//         tooltip.style.display = 'none';
//       }
//       document.removeEventListener('mousemove', handleMouseMove);
//     }
    
//     function handleMouseMove(e) {
//       const tooltip = document.getElementById('map-tooltip');
//       if (tooltip) {
//         updateTooltipPosition(e, tooltip);
//       }
//     }
    
//     function updateTooltipPosition(e, tooltip) {
//       tooltip.style.left = `${e.clientX - tooltip.offsetWidth / 2}px`;
//       tooltip.style.top = `${e.clientY - tooltip.offsetHeight - 10}px`;
//     }
    
//     // Clean up on unmount
//     return () => {
//       locations.forEach(loc => {
//         const marker = svgElement.getElementById(loc.id);
//         if (marker) {
//           marker.removeEventListener('mouseenter', handleMarkerHover);
//           marker.removeEventListener('mouseleave', handleMarkerLeave);
//         }
//       });
      
//       document.removeEventListener('mousemove', handleMouseMove);
//       const tooltip = document.getElementById('map-tooltip');
//       if (tooltip) {
//         document.body.removeChild(tooltip);
//       }
//     };
//   }, [svgContent, locations]);

//   return (
//     <div className="w-full h-full bg-[#dcfbff] rounded-lg shadow-lg object-cover z-20">
//       <div className="relative flex justify-center" ref={svgContainerRef}>
//         {svgContent && (
//           <div 
//             className="w-full" 
//             dangerouslySetInnerHTML={{ __html: svgContent }}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default FunctionalMaps;

import React, { useState, useEffect, useRef } from "react";

const FunctionalMaps = ({ locations }) => {
  const [svgContent, setSvgContent] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
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
        
        // Add event listeners to handle hover or touch
        marker.addEventListener('mouseenter', handleMarkerHover);
        marker.addEventListener('touchstart', handleMarkerTouch);
        marker.addEventListener('mouseleave', handleMarkerLeave);
        
        // Enhance visibility on mobile devices
        if (isMobile) {
          marker.style.fill = "#324F35";
          marker.style.fillOpacity = "0.9";
          marker.style.stroke = "#ffffff";
          marker.style.strokeWidth = "1";
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
    
    // Handle marker hover
    function handleMarkerHover(e) {
      const name = e.currentTarget.getAttribute('data-name');
      createOrUpdateTooltip(name, e);
    }
    
    // Handle touch events for mobile
    function handleMarkerTouch(e) {
      e.preventDefault();
      const name = e.currentTarget.getAttribute('data-name');
      createOrUpdateTooltip(name, e.touches[0]);
      
      // Auto hide tooltip after 2 seconds on mobile
      setTimeout(() => {
        const tooltip = document.getElementById('map-tooltip');
        if (tooltip) {
          tooltip.style.display = 'none';
        }
      }, 2000);
    }
    
    function createOrUpdateTooltip(name, event) {
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
        
        // Mobile-specific styling
        if (isMobile) {
          tooltip.style.fontSize = '14px';
          tooltip.style.padding = '4px 8px';
        }
        
        document.body.appendChild(tooltip);
      }
      
      tooltip.textContent = name;
      tooltip.style.display = 'block';
      
      // Position tooltip
      if (event) {
        updateTooltipPosition(event, tooltip);
      }
      
      // Update tooltip on mouse move
      document.addEventListener('mousemove', handleMouseMove);
    }
    
    function handleMarkerLeave() {
      if (isMobile) return; // Don't hide on mobile immediately
      
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
      let x, y;
      
      if (e.clientX) {
        // Mouse event
        x = e.clientX;
        y = e.clientY;
      } else if (e.touches && e.touches[0]) {
        // Touch event
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else {
        return;
      }
      
      // Adjust position to ensure tooltip stays in viewport
      const tooltipWidth = tooltip.offsetWidth;
      const tooltipHeight = tooltip.offsetHeight;
      
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Ensure tooltip stays within horizontal bounds
      if (x - tooltipWidth / 2 < 0) {
        x = tooltipWidth / 2;
      } else if (x + tooltipWidth / 2 > viewportWidth) {
        x = viewportWidth - tooltipWidth / 2;
      }
      
      // Ensure tooltip stays in vertical bounds
      y = Math.min(y - tooltipHeight - 10, viewportHeight - tooltipHeight);
      
      tooltip.style.left = `${x - tooltipWidth / 2}px`;
      tooltip.style.top = `${Math.max(y, 10)}px`;
    }
    
    // Add fixed location labels for very small screens (iPhone SE)
    if (window.innerWidth <= 375) {
      const mapLabels = document.createElement('div');
      mapLabels.className = 'map-labels-small-screen';
      mapLabels.style.marginTop = '8px';
      mapLabels.style.display = 'grid';
      mapLabels.style.gridTemplateColumns = 'repeat(2, 1fr)';
      mapLabels.style.gap = '4px';
      
      locations.forEach(loc => {
        const label = document.createElement('div');
        label.className = 'location-label';
        label.textContent = loc.name;
        label.style.backgroundColor = '#324F35';
        label.style.color = 'white';
        label.style.padding = '4px';
        label.style.borderRadius = '4px';
        label.style.fontSize = '10px';
        label.style.textAlign = 'center';
        
        mapLabels.appendChild(label);
      });
      
      svgContainerRef.current.appendChild(mapLabels);
    }
    
    // Clean up on unmount
    return () => {
      locations.forEach(loc => {
        const marker = svgElement.getElementById(loc.id);
        if (marker) {
          marker.removeEventListener('mouseenter', handleMarkerHover);
          marker.removeEventListener('touchstart', handleMarkerTouch);
          marker.removeEventListener('mouseleave', handleMarkerLeave);
        }
      });
      
      document.removeEventListener('mousemove', handleMouseMove);
      const tooltip = document.getElementById('map-tooltip');
      if (tooltip) {
        document.body.removeChild(tooltip);
      }
      
      const mapLabels = svgContainerRef.current.querySelector('.map-labels-small-screen');
      if (mapLabels) {
        svgContainerRef.current.removeChild(mapLabels);
      }
    };
  }, [svgContent, locations, isMobile]);

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
      </div>
    </div>
  );
};

export default FunctionalMaps;