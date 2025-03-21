// import React, { useEffect, useState } from "react";
// import BackgroundPnL from '../assets/static/background_produk_dan_layanan.jpg'

// const AboutUs = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const aboutSection = document.getElementById("about");
//       if (aboutSection) {
//         const rect = aboutSection.getBoundingClientRect();
//         if (rect.top < window.innerHeight * 0.8) {
//           setIsVisible(true);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section
//       id="about"
//       className={`container mx-auto py-16 px-6 transition-opacity duration-1000 ${
//         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//       }`}
//     >
//       <div className="grid md:grid-cols-2 gap-8 items-center">
//         {/* Konten Teks */}
//         <div>
//           <h2 className="text-5xl text-[#324F35] font-semibold mb-6">Produk & Layanan</h2>
//           <p className="text-3xl text-[#324F35] font-semibold mb-6 mt-4">
//             Solusi kesehatan lengkap mulai dari beragam produk farmasi, alat kesehatan, hingga layanan medis
//             untuk memenuhi kebutuhan kesehatan Anda dan keluarga.
//           </p>
//         </div>

//         {/* Gambar */}
//         <div>
//           <img
//             src={BackgroundPnL} // Gantilah dengan URL gambar dari backend atau lokal
//             alt="Produk & Layanan"
//             className="rounded-lg shadow-md w-full"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

import React, { useEffect, useState } from "react";
import BackgroundPnL from '../assets/static/background_produk_dan_layanan.jpg';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Run once on initial load
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center w-full bg-white pt-8 md:pt-16 overflow-hidden">
      <section
        id="about"
        className={`container mx-auto px-4 md:px-6 transition-opacity duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}      
      >
        <div className="relative overflow-hidden rounded-lg">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 hidden md:block">
            <img
              src={BackgroundPnL}
              alt="Background"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-5 bg-gradient-to-r from-white via-white/70 to-transparent hidden md:block"></div>
          
          {/* Mobile background (simplified version) */}
          <div className="absolute inset-0 z-0 bg-gray-50 md:hidden"></div>
          
          {/* Content */}
          <div className="relative z-10 py-8 px-4 md:py-16 md:px-8 lg:px-12">
            <div className="max-w-md">
             <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#324F35] font-semibold mb-4 md:mb-6">Produk & Layanan</h2>
             <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#324F35] font-semibold mb-4 md:mb-6 mt-2 md:mt-4">
               Solusi kesehatan lengkap mulai dari beragam produk farmasi, alat kesehatan, hingga layanan medis
               untuk memenuhi kebutuhan kesehatan Anda dan keluarga.
             </p>
             {/* <a 
               href="/produk-layanan" 
               className="inline-block mt-2 bg-[#a7cf46] hover:bg-[#90b53a] text-[#324F35] px-4 py-2 rounded-md font-medium transition-colors"
             >
               Lebih detail
             </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;