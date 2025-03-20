import React, { useState, useEffect, useRef } from "react";

const FunctionalMaps = ({ locations }) => {
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [svgContent, setSvgContent] = useState(null);
  const svgContainerRef = useRef(null);
  const lastMouseMoveTime = useRef(Date.now());

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
    
    const handleMouseEnter = (loc, event) => {
      setHoveredLocation(loc);
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseMove = (event) => {
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
  }, [svgContent, hoveredLocation, locations]);

  return (
    <section className="w-400 px-10 py-5 mt-10 bg-white rounded-lg shadow-lg object-cover z-20">
      <div className="relative flex justify-center mt-8" ref={svgContainerRef}>
        {svgContent && (
          <div dangerouslySetInnerHTML={{ __html: svgContent }} />
        )}

        {hoveredLocation && (
          <div
            className="absolute bg-white text-gray-800 px-5 py-3 text-lg font-bold rounded-xl shadow-lg z-50 border border-gray-300"
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

export default FunctionalMaps;
