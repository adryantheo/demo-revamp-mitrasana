// import React, { useState, useEffect, useRef } from "react";

// const locations = [
//   { id: "Component_28_2", name: "1 Palembang" },
//   { id: "Component_28_3", name: "1 Medan" },
//   { id: "Component_29_2", name: "7 Jabodetabek" },
//   { id: "Component_31_2", name: "1 Semarang" },
//   { id: "Component_30_2", name: "1 Bandung" },
//   { id: "Component_33_2", name: "1 Makasar" },
//   { id: "Component_33_4", name: "1 Bali" },
//   { id: "Component_32_2", name: "1 Surabaya" },
// ];

// const Jaringan = () => {
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
//   }, [svgContent, hoveredLocation]);

//   return (
//     <section className="py-12">
//       <div className="container mx-auto px-6 py-6 text-left">
//         <h2 className="text-5xl text-[#324F35] font-semibold">Jaringan Mitrasana</h2>
//         <p className="text-3xl text-[#3D3D3D] font-normal mt-6">
//           Jaringan apotek dan klinik luas, Mitrasana hadir lebih dekat untuk Anda.
//         </p>
//       </div>

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

// export default Jaringan;

import React, { useState, useEffect, useRef } from "react";

const locations = [
  { id: "Component_28_2", name: "1 Palembang" },
  { id: "Component_28_3", name: "1 Medan" },
  { id: "Component_29_2", name: "7 Jabodetabek" },
  { id: "Component_31_2", name: "1 Semarang" },
  { id: "Component_30_2", name: "1 Bandung" },
  { id: "Component_33_2", name: "1 Makasar" },
  { id: "Component_33_4", name: "1 Bali" },
  { id: "Component_32_2", name: "1 Surabaya" },
];

const Jaringan = () => {
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [svgContent, setSvgContent] = useState(null);
  const svgContainerRef = useRef(null);
  const lastMouseMoveTime = useRef(Date.now());
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    fetch("/peta-indonesia.svg")
      .then((response) => response.text())
      .then((data) => {
        setSvgContent(data);
      });
  }, []);

  useEffect(() => {
    if (!svgContainerRef.current) return;
    const svgElement = svgContainerRef.current.querySelector("svg");
    if (!svgElement) return;
    
    // Add viewBox attribute if it doesn't exist to ensure proper scaling
    if (!svgElement.getAttribute('viewBox') && svgElement.getAttribute('width') && svgElement.getAttribute('height')) {
      const width = svgElement.getAttribute('width');
      const height = svgElement.getAttribute('height');
      svgElement.setAttribute('viewBox', `0 0 ${width} ${height}`);
    }
    
    // Set the SVG to be responsive
    svgElement.setAttribute('width', '100%');
    svgElement.setAttribute('height', 'auto');
    svgElement.style.maxWidth = '100%';
    
    const handleMouseEnter = (loc, event) => {
      if (isMobile) return; // Disable tooltips on mobile
      setHoveredLocation(loc);
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseMove = (event) => {
      if (isMobile) return;
      setMousePosition({ x: event.clientX, y: event.clientY });
      lastMouseMoveTime.current = Date.now();
    };

    const handleMouseLeave = () => {
      setHoveredLocation(null);
    };

    const setupMarkerEventListeners = () => {
      cleanupMarkerEventListeners();
      locations.forEach((loc) => {
        const marker = svgElement.getElementById(loc.id);
        if (marker) {
          marker.style.cursor = "pointer";
          marker.dataset.locationId = loc.id;
          marker.addEventListener("mouseenter", handleMarkerMouseEnter);
          marker.addEventListener("mousemove", handleMarkerMouseMove);
          marker.addEventListener("mouseleave", handleMarkerMouseLeave);
          
          // Make sure all marker elements are visible
          marker.style.display = "block";
          
          // Highlight the marker for better visibility on small screens
          if (isMobile) {
            marker.style.fill = "#324F35";
            marker.style.fillOpacity = "0.9";
            marker.style.stroke = "#ffffff";
            marker.style.strokeWidth = "1";
          }
        }
      });
    };

    const handleMarkerMouseEnter = (event) => {
      const marker = event.target;
      const locationId = marker.dataset.locationId;
      const location = locations.find(loc => loc.id === locationId);
      if (location) {
        handleMouseEnter(location, event);
      }
    };

    const handleMarkerMouseMove = (event) => {
      handleMouseMove(event);
    };

    const handleMarkerMouseLeave = () => {
      handleMouseLeave();
    };

    const cleanupMarkerEventListeners = () => {
      locations.forEach((loc) => {
        const marker = svgElement.getElementById(loc.id);
        if (marker) {
          marker.removeEventListener("mouseenter", handleMarkerMouseEnter);
          marker.removeEventListener("mousemove", handleMarkerMouseMove);
          marker.removeEventListener("mouseleave", handleMarkerMouseLeave);
        }
      });
    };

    const handleGlobalMouseMove = () => {
      if (hoveredLocation) {
        const timeSinceLastMove = Date.now() - lastMouseMoveTime.current;
        if (timeSinceLastMove > 300) {
          setHoveredLocation(null);
        }
      }
    };

    const handleScroll = () => {
      setHoveredLocation(null);
    };

    setupMarkerEventListeners();
    document.addEventListener("mousemove", handleGlobalMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      cleanupMarkerEventListeners();
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [svgContent, hoveredLocation, isMobile]);

  return (
    <section className="py-6 md:py-12">
      <div className="container mx-auto px-4 md:px-6 py-4 md:py-6 text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#324F35] font-semibold">Jaringan Mitrasana</h2>
        <p className="text-xl md:text-2xl lg:text-3xl text-[#3D3D3D] font-normal mt-3 md:mt-6">
          Jaringan apotek dan klinik luas, Mitrasana hadir lebih dekat untuk Anda.
        </p>
      </div>

      {/* Map container with scaling for different screen sizes */}
      <div className="relative flex justify-center mt-4 md:mt-8">
        <div className="w-full max-w-screen-lg mx-auto px-2 sm:px-4 md:px-6" ref={svgContainerRef}>
          {svgContent ? (
            <div 
              className="w-full overflow-hidden"
              dangerouslySetInnerHTML={{ __html: svgContent }} 
            />
          ) : (
            <div className="w-full h-48 md:h-64 lg:h-80 flex items-center justify-center bg-gray-100 rounded-lg">
              <span className="text-gray-400">Loading map...</span>
            </div>
          )}
          
          {/* Mobile location list - Alternative for small screens */}
          {isMobile && (
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {locations.map((loc) => (
                <div key={loc.id} className="bg-[#324F35] text-white p-2 rounded-md text-center">
                  {loc.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {hoveredLocation && !isMobile && (
          <div
            className="absolute bg-white text-gray-800 px-3 py-2 text-sm md:text-lg font-bold rounded-xl shadow-lg z-50 border border-gray-300"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              transform: "translate(-50%, -120%)",
              pointerEvents: "none",
              position: "fixed",
            }}
          >
            {hoveredLocation.name}
          </div>
        )}
      </div>
    </section>
  );
};

export default Jaringan;