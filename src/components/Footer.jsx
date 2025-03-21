// import React from "react";
// import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
// import { FaLinkedin, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer>
//       {/* Section utama Footer */}
//       <div className="bg-[#324f35] text-white py-10">
//         <div className="container mx-auto px-16 flex justify-between gap-8">
          
//           {/* Informasi Kontak (Kolom Kiri) */}
//           <div className="w-1/3">
//             <h3 className="test-poppins text-3xl font-light">PT Millenia Dharma Insani</h3>
//             <p className="text-lg font-light flex items-start mt-4">
//               <FaMapMarkerAlt size={32} className="mr-4 mt-1" />
//               Kantor Pusat<br />
//               Jalan Pulo Lentut No 12, Kawasan Industri Pulo Gadung<br />
//               Jakarta Timur 13920, Indonesia
//             </p>
//             <p className="text-lg font-light flex items-center mt-2">
//               <FaPhoneAlt size={32} className="mr-4" /> 021 8062 5506 (Customer Line)
//             </p>
//             <p className="text-lg font-light flex items-center mt-2">
//               <FaWhatsapp size={32} className="mr-4" /> Apakah ada no WA?
//             </p>
//             <p className="text-lg font-light flex items-center mt-2">
//               <FaEnvelope size={32} className="mr-4" /> apakah ada alamat email?
//             </p>
//           </div>

//           {/* Navigasi & Sosial Media (Kolom Kanan) */}
//           <div className="w-1/3">
//             <div className="grid grid-cols-2 gap-8">
              
//               {/* Navigasi (Kolom Kecil 1) */}
//               <div className="text-left">
//                 {/* <h3 className="text-lg font-semibold">Navigasi</h3> */}
//                 <ul className="mt-2 space-y-4">
//                   <li><a href="#" className="text-lg font-light hover:underline">Tentang Kami</a></li>
//                   <li><a href="#" className="text-lg font-light hover:underline">Layanan Kami</a></li>
//                   <li><a href="#" className="text-lg font-light hover:underline">Jaringan Outlet</a></li>
//                   <li><a href="#" className="text-lg font-light hover:underline">Online Store</a></li>
//                   <li><a href="#" className="text-lg font-light hover:underline">Hubungi Kami</a></li>
//                 </ul>
//               </div>

//               {/* Social Media & Legal (Kolom Kecil 2) */}
//               <div className="text-right">
//                 <h3 className="text-lg font-normal">Follow us on Social Media</h3>
//                 <div className="grid grid-cols-4 w-full mt-2">
//                   <a href="#" className="text-white flex justify-end hover:text-gray-400"><FaLinkedin size={38} /></a>
//                   <a href="#" className="text-white flex justify-end hover:text-gray-400"><FaInstagram size={38} /></a>
//                   <a href="#" className="text-white flex justify-end hover:text-gray-400"><FaFacebook size={38} /></a>
//                   <a href="#" className="text-white flex justify-end hover:text-gray-400"><FaTiktok size={38} /></a>
//                 </div>

//                 {/* Legal Section */}
//                 <br />
//                 {/* <h3 className="text-lg font-semibold mt-6">Legal</h3> */}
//                 <ul className="mt-2 space-y-2">
//                   <li><a href="#" className="text-lg font-light hover:underline">Terms and Conditions</a></li>
//                   <li><a href="#" className="text-lg font-light hover:underline">Privacy Policy</a></li>
//                 </ul>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Copyright dengan background putih dan teks hitam */}
//       <div className="text-center text-xl bg-white text-black py-4">
//         PT Millenia Dharma Insani, Copyrights © 2025 All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      {/* Main Footer Section */}
      <div className="bg-[#324f35] text-white py-8 md:py-10">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between gap-8">
          
          {/* Contact Information (Left Column) */}
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h3 className="test-poppins text-xl md:text-2xl lg:text-3xl font-light">PT Millenia Dharma Insani</h3>
            <p className="text-base md:text-lg font-light flex items-start mt-4">
              <FaMapMarkerAlt size={20} className="mr-2 md:mr-4 mt-1 flex-shrink-0" />
              <span>
                Kantor Pusat<br />
                Jalan Pulo Lentut No 12, Kawasan Industri Pulo Gadung<br />
                Jakarta Timur 13920, Indonesia
              </span>
            </p>
            <p className="text-base md:text-lg font-light flex items-center mt-2">
              <FaPhoneAlt size={20} className="mr-2 md:mr-4 flex-shrink-0" /> 021 8062 5506 (Customer Line)
            </p>
            <p className="text-base md:text-lg font-light flex items-center mt-2">
              <FaWhatsapp size={20} className="mr-2 md:mr-4 flex-shrink-0" /> Apakah ada no WA?
            </p>
            <p className="text-base md:text-lg font-light flex items-center mt-2">
              <FaEnvelope size={20} className="mr-2 md:mr-4 flex-shrink-0" /> apakah ada alamat email?
            </p>
          </div>

          {/* Navigation & Social Media (Right Columns) */}
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              
              {/* Navigation Links */}
              <div className="text-left">
                <ul className="mt-2 space-y-2 md:space-y-4">
                  <li><a href="#" className="text-base md:text-lg font-light hover:underline">Tentang Kami</a></li>
                  <li><a href="#" className="text-base md:text-lg font-light hover:underline">Layanan Kami</a></li>
                  <li><a href="#" className="text-base md:text-lg font-light hover:underline">Jaringan Outlet</a></li>
                  <li><a href="#" className="text-base md:text-lg font-light hover:underline">Online Store</a></li>
                  <li><a href="#" className="text-base md:text-lg font-light hover:underline">Hubungi Kami</a></li>
                </ul>
              </div>

              {/* Social Media & Legal Links */}
              <div className="text-right">
                <h3 className="text-base md:text-lg font-normal">Follow us on Social Media</h3>
                <div className="grid grid-cols-4 w-full mt-2">
                  <a href="#" className="text-white flex justify-end hover:text-gray-400"><FaLinkedin size={24} className="md:w-8 md:h-8" /></a>
                  <a href="#" className="text-white flex justify-end hover:text-gray-400"><FaInstagram size={24} className="md:w-8 md:h-8" /></a>
                  <a href="#" className="text-white flex justify-end hover:text-gray-400"><FaFacebook size={24} className="md:w-8 md:h-8" /></a>
                  <a href="#" className="text-white flex justify-end hover:text-gray-400"><FaTiktok size={24} className="md:w-8 md:h-8" /></a>
                </div>

                {/* Legal Links */}
                <div className="mt-4">
                  <ul className="mt-2 space-y-2">
                    <li><a href="#" className="text-base md:text-lg font-light hover:underline">Terms and Conditions</a></li>
                    <li><a href="#" className="text-base md:text-lg font-light hover:underline">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright with background white and black text */}
      <div className="text-center text-base md:text-xl bg-white text-black py-3 md:py-4">
        PT Millenia Dharma Insani, Copyrights © 2025 All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;