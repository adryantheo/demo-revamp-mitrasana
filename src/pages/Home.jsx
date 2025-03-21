// import CustomerCareImg from '../assets/static/customer_care.png'

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Hero from "../components/Hero";
// import About from "../components/About";
// import Services from "../components/Services";
// import Promo from "../components/Promo";
// import Jaringan from "../components/Jaringan";
// import Mitra from '../components/Mitra';

// const Home = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();
  
//   const handleContactClick = () => {
//     navigate('/contactus');
//   };

//   return (
//     <div className="relative">
//       <Hero />
//       <About />
//       <Services />
//       <Promo />
//       <Jaringan />
//       <Mitra />
      
//       {/* Floating Button */}
//       <div 
//         className="fixed bottom-6 right-6 z-50 cursor-pointer"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onClick={handleContactClick}
//       >
//         {/* Container for positioning */}
//         <div className="relative bottom-15 right-15">
//           {/* Image with hover effect */}
//           <div className={`transition-transform duration-300 ${isHovered ? 'transform scale-110' : ''}`}>
//             <img 
//               src={CustomerCareImg}
//               alt="Contact" 
//               className="w-48 h-48"
//             />
//           </div>
          
//           {/* Text positioned absolute at the bottom */}
//           <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white px-3 py-1 rounded-lg shadow-md whitespace-nowrap">
//             <span className="text-gray-700 text-xl font-medium">Hubungi Kami</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Promo from "../components/Promo";
import Jaringan from "../components/Jaringan";
import Mitra from '../components/Mitra';
import CustomerCareImg from '../assets/static/customer_care.png'

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  
  const handleContactClick = () => {
    navigate('/contactus');
  };

  return (
    <div className="relative scale-container">
      {/* Main content wrapping */}
      <div className="max-w-full mx-auto">
        <Hero />
        <About />
        <Services />
        <Promo />
        <Jaringan />
        <Mitra />
      </div>
      
      {/* Floating Button */}
      <div 
        className="fixed bottom-6 right-6 z-50 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleContactClick}
      >
        {/* Container for positioning */}
        <div className="relative bottom-15 right-15">
          {/* Image with hover effect */}
          <div className={`transition-transform duration-300 ${isHovered ? 'transform scale-110' : ''}`}>
            <img 
              src={CustomerCareImg}
              alt="Contact" 
              className="w-32 h-32 md:w-40 md:h-40"
            />
          </div>
          
          {/* Text positioned absolute at the bottom */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white px-3 py-1 rounded-lg shadow-md whitespace-nowrap">
            <span className="text-gray-700 text-lg font-medium">Hubungi Kami</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;