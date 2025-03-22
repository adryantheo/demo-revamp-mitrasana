// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import heroCarouselDummy from "../mock/heroCarouselDummy";

// const Hero = () => {
//   const [slides, setSlides] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const updatedSlides = heroCarouselDummy.map(slide => ({
//       ...slide,
//       image: slide.image
//     }));
//     setSlides(updatedSlides);
//   }, []);

//   // Function to automatically change slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   // Function for next slide
//   const nextSlide = () => {
//     if (slides.length === 0) return;
//     setCurrentSlide(prev => (prev + 1) % slides.length);
//   };

//   if (slides.length === 0) return null;

//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       {/* Background Image with fixed height */}
//       <div
//         className="absolute inset-0 w-full h-full transition-all duration-1000"
//         style={{
//           backgroundImage: `url(${slides[currentSlide].image})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           zIndex: -1,
//         }}
//       ></div>

//       {/* Overlay for better visibility of content if needed */}
//       {/* <div className="absolute inset-0 bg-black bg-opacity-10" style={{ zIndex: 0 }}></div> */}

//       {/* Carousel Dots */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 sm:space-x-4 md:space-x-6 z-20">
//         {slides.map((_, index) => (
//           <span
//             key={index}
//             className={`w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full cursor-pointer transition-all duration-300 ${
//               index === currentSlide ? "bg-[#324F35] scale-110" : "bg-[#a7cf46]"
//             }`}
//             onClick={() => setCurrentSlide(index)}
//           ></span>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from "react";
import heroCarouselDummy from "../mock/heroCarouselDummy";

const Hero = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const updatedSlides = heroCarouselDummy.map(slide => ({
      ...slide,
      image: slide.image
    }));
    setSlides(updatedSlides);
  }, []);

  // Function to automatically change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Function for next slide
  const nextSlide = () => {
    if (slides.length === 0) return;
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  if (slides.length === 0) return null;

  return (
    <section className="relative w-full overflow-hidden">
      {/* Dynamic height based on screen size */}
      <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-screen">
        {/* Background Image with responsive scaling */}
        <div
          className="absolute inset-0 w-full h-full transition-all duration-1000"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: -1,
          }}
        ></div>

        {/* Optional subtle overlay for better visibility on small screens */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-10 sm:bg-opacity-5 md:bg-opacity-0" style={{ zIndex: 0 }}></div> */}

        {/* Carousel Dots - Adjusted size for mobile */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 md:space-x-4 z-20">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8 rounded-full cursor-pointer transition-all duration-300 ${
                index === currentSlide ? "bg-[#324F35] scale-110" : "bg-[#a7cf46]"
              }`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;