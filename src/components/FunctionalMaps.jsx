// import React, { useState, useEffect, useRef } from "react";

// const FunctionalMaps = ({ locations }) => {
//   const [hoveredLocation, setHoveredLocation] = useState(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [svgContent, setSvgContent] = useState(null);
//   const svgContainerRef = useRef(null);
//   const lastMouseMoveTime = useRef(Date.now());

//   useEffect(() => {
//     fetch("/peta-indonesia.svg")
//       .then((response) => response.text())
//       .then((data) => {
//         setSvgContent(data);
//       });
//   }, []);

//   useEffect(() => {
//     if (!svgContainerRef.current) return;
//     const svgElement = svgContainerRef.current.querySelector("svg");
//     if (!svgElement) return;
    
//     const handleMouseEnter = (loc, event) => {
//       setHoveredLocation(loc);
//       setMousePosition({ x: event.clientX, y: event.clientY });
//     };

//     const handleMouseMove = (event) => {
//       setMousePosition({ x: event.clientX, y: event.clientY });
//       lastMouseMoveTime.current = Date.now();
//     };

//     const handleMouseLeave = () => {
//       setHoveredLocation(null);
//     };

//     const setupMarkerEventListeners = () => {
//       cleanupMarkerEventListeners();
//       locations.forEach((loc) => {
//         const marker = svgElement.getElementById(loc.id);
//         if (marker) {
//           marker.style.cursor = "pointer";
//           marker.dataset.locationId = loc.id;
//           marker.addEventListener("mouseenter", handleMarkerMouseEnter);
//           marker.addEventListener("mousemove", handleMarkerMouseMove);
//           marker.addEventListener("mouseleave", handleMarkerMouseLeave);
//         }
//       });
//     };

//     const handleMarkerMouseEnter = (event) => {
//       const marker = event.target;
//       const locationId = marker.dataset.locationId;
//       const location = locations.find(loc => loc.id === locationId);
//       if (location) {
//         handleMouseEnter(location, event);
//       }
//     };

//     const handleMarkerMouseMove = (event) => {
//       handleMouseMove(event);
//     };

//     const handleMarkerMouseLeave = () => {
//       handleMouseLeave();
//     };

//     const cleanupMarkerEventListeners = () => {
//       locations.forEach((loc) => {
//         const marker = svgElement.getElementById(loc.id);
//         if (marker) {
//           marker.removeEventListener("mouseenter", handleMarkerMouseEnter);
//           marker.removeEventListener("mousemove", handleMarkerMouseMove);
//           marker.removeEventListener("mouseleave", handleMarkerMouseLeave);
//         }
//       });
//     };

//     const handleGlobalMouseMove = () => {
//       if (hoveredLocation) {
//         const timeSinceLastMove = Date.now() - lastMouseMoveTime.current;
//         if (timeSinceLastMove > 300) {
//           setHoveredLocation(null);
//         }
//       }
//     };

//     const handleScroll = () => {
//       setHoveredLocation(null);
//     };

//     setupMarkerEventListeners();
//     document.addEventListener("mousemove", handleGlobalMouseMove);
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       cleanupMarkerEventListeners();
//       document.removeEventListener("mousemove", handleGlobalMouseMove);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [svgContent, hoveredLocation, locations]);

//   return (
//     <section className="w-400 px-10 py-5 mt-10 bg-white rounded-lg shadow-lg object-cover z-20">
//       <div className="relative flex justify-center mt-8" ref={svgContainerRef}>
//         {svgContent && (
//           <div dangerouslySetInnerHTML={{ __html: svgContent }} />
//         )}

//         {hoveredLocation && (
//           <div
//             className="absolute bg-white text-gray-800 px-5 py-3 text-lg font-bold rounded-xl shadow-lg z-50 border border-gray-300"
//             style={{
//               left: `${mousePosition.x}px`,
//               top: `${mousePosition.y}px`,
//               transform: "translate(-50%, -120%)",
//               pointerEvents: "none",
//               position: "fixed",
//             }}
//           >
//             {hoveredLocation.name}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default FunctionalMaps;

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