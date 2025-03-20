import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa"; // Icon untuk navigasi

const API_BASE_URL = "http://localhost:5000/api/mitra";
const IMAGE_BASE_URL = "http://localhost:5000"; // Base URL untuk gambar

import mitraMockData from "../mock/mitraMockData";

const Mitra = () => {
  const [mitraList, setMitraList] = useState([]);
  const [loading, setLoading] = useState(true);
  const carouselRef = useRef(null);

  // useEffect(() => {
  //   axios
  //     .get(API_BASE_URL)
  //     .then((response) => {
  //       // Pastikan setiap gambar memiliki base URL
  //       const updatedMitra = response.data.map((mitra) => ({
  //         ...mitra,
  //         image: mitra.image.startsWith("http") ? mitra.image : `${IMAGE_BASE_URL}${mitra.image}`,
  //       }));
  //       setMitraList(updatedMitra);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching mitra data:", error);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(()=>{
        const updatedMitra = mitraMockData.map((mitra) => ({
          ...mitra,
          image: mitra.image
        }));
        setMitraList(updatedMitra);
        setLoading(false);
  },[])

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 text-left">
        <h2 className="text-5xl text-[#324F35] font-semibold">Mitra Asuransi</h2>
        <p className="text-3xl text-[#3D3D3D] font-normal my-4">
          Mitrasana telah menjalin kerja sama dengan <strong>25+</strong> perusahaan asuransi dan bank terkemuka di Indonesia.
        </p>
      </div>

      {/* Jika data masih loading */}
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <p className="text-gray-500">Memuat data mitra...</p>
        </div>
      ) : (
        // <div className="relative flex justify-center items-center mt-24">
        //   {/* Tombol Navigasi Kiri */}
        //   <button
        //     onClick={scrollLeft}
        //     className="z-10  p-2 "
        //   >
        //     {/* <FaChevronLeft size={20} className="text-green-700" /> */}
        //     <FaRegArrowAltCircleLeft size={40} className="text-[#324F35] " />

        //   </button>

        //   {/* Logo Carousel */}
        //   <div ref={carouselRef} className="flex overflow-x-auto gap-6 scrollbar-hide px-6">
        //     {mitraList.map((mitra) => (
        //       <div key={mitra.id} className="flex flex-col items-center">
        //         <img
        //           src={mitra.image}
        //           alt={mitra.name}
        //           className="h-64 object-contain"
        //         />
        //         {/* <p className="text-xs text-gray-600 mt-2">{mitra.description}</p> */}
        //       </div>
        //     ))}
        //   </div>

        //   {/* Tombol Navigasi Kanan */}
        //   <button
        //     onClick={scrollRight}
        //     className="z-10  p-2 "
        //   >
        //     {/* <FaChevronRight size={20} className="text-green-700" /> */}
        //     <FaRegArrowAltCircleRight size={40} className="text-[#324F35]" />

        //   </button>
        // </div>
        <div className="mt-24 container mx-auto px-6 relative">
        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={1}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
          }}
          navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
          className="relative"
        >
          {mitraList.map((mitra) => (
            <SwiperSlide key={mitra.id}>
                <img src={mitra.image} alt={mitra.name} 
                  className="h-18 w-full object-contain"
                // className="rounded-md w-full h-64 object-cover mb-2" 
                />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <button className="prev-btn absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-white text-2xl p-2 -ml-12">
          {/* <FaChevronLeft /> */}
          <FaRegArrowAltCircleLeft stroke="white" size={40} className="text-[#324F35]" />
        </button>
        <button className="next-btn absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-white text-2xl p-2 -mr-12">
          {/* <FaChevronRight /> */}
          <FaRegArrowAltCircleRight size={40} className="text-[#324F35]" />
        </button>
      </div>
      )}
    </section>
  );
};

export default Mitra;
