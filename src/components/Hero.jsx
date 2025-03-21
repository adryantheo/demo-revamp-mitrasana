// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const API_BASE_URL = "http://localhost:5000"; // Sesuaikan dengan backend

// import heroCarouselDummy from "../mock/heroCarouselDummy";

// const Hero = () => {
//   const [slides, setSlides] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // useEffect(() => {
//   //   axios.get(`${API_BASE_URL}/api/hero-carousel`)
//   //     .then(response => {
//   //       const updatedSlides = response.data.map(slide => ({
//   //         ...slide,
//   //         image: slide.image.startsWith("http") ? slide.image : `${API_BASE_URL}${slide.image}`,
//   //       }));
//   //       setSlides(updatedSlides);
//   //     })
//   //     .catch(error => console.error("Error fetching hero carousel:", error));
//   // }, []);

//   useEffect(()=>{
//     const updatedSlides = heroCarouselDummy.map(slide=> ({
//       ...slide,
//       image: slide.image
//     }));
//     setSlides(updatedSlides)
//   },[])

//   // Fungsi untuk mengganti slide otomatis setiap 5 detik
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   // Fungsi untuk slide berikutnya
//   const nextSlide = () => {
//     setCurrentSlide(prev => (prev + 1) % slides.length);
//   };

//   if (slides.length === 0) return null;

//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 w-full h-auto transition-all duration-1000"
//         style={{
//           backgroundImage: `url(${slides[currentSlide].image})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           zIndex: -1, // ✅ Pastikan gambar tetap berada di bawah elemen lain
//         }}
//       ></div>

//       {/* Overlay */}
//       <div className="absolute inset-0" style={{ zIndex: 1 }}></div>

//       {/* Carousel Dots */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-6 z-20">
//         {slides.map((_, index) => (
//           <span
//             key={index}
//             className={`w-8 h-8 rounded-full cursor-pointer transition-all duration-300 ${
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
import axios from "axios";
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
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with fixed height */}
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

      {/* Overlay for better visibility of content if needed */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-10" style={{ zIndex: 0 }}></div> */}

      {/* Carousel Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 sm:space-x-4 md:space-x-6 z-20">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentSlide ? "bg-[#324F35] scale-110" : "bg-[#a7cf46]"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;