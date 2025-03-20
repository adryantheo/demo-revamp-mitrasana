import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Icon untuk navigasi


const API_BASE_URL = "http://localhost:5000"; // Sesuaikan dengan backend
import promoMockData from "../mock/promoMockData";

const Promo = () => {
  const [promos, setPromos] = useState([]);

  // useEffect(() => {
  //   axios.get(`${API_BASE_URL}/api/promo`)
  //     .then(response => {
  //       const updatedPromos = response.data.map(promo => ({
  //         ...promo,
  //         image: promo.image.startsWith("http") ? promo.image : `${API_BASE_URL}${promo.image}`,
  //       }));
  //       setPromos(updatedPromos);
  //     })
  //     .catch(error => console.error("Error fetching promos:", error));
  // }, []);

  useEffect(()=>{
        const updatedPromos = promoMockData.map(promo => ({
          ...promo,
          image: promo.image
        }));
        setPromos(updatedPromos);
  },[])

  return (
    <section className="py-12">
      {/* Section Teks */}
      <div className="container mx-auto px-6 mb-8">
        <h2 className="text-5xl text-[#324F35] font-semibold text-left">Penuhi Kebutuhan Sehatmu</h2>
        <p className="text-[#3D3D3D] text-3xl mt-8 text-left">
          Mitrasana menyediakan yang terbaik dan terpercaya untuk anda, produk berkualitas, harga, dan pelayanan terbaik.
        </p>
      </div>

      {/* Section Carousel */}
      <div className="py-8 px-4 rounded-lg" style={{ backgroundColor: "#a6c84a" }}>
        <div className="container mx-auto">
          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            navigation={{ nextEl: ".next-btn2", prevEl: ".prev-btn2" }}
            className="relative"
          >
            {promos.map((promo) => (
              <SwiperSlide key={promo.id}>
                <div className="rounded-lg shadow-lg p-4 relative">
                  {/* Gambar Produk */}
                  <img src={promo.image} alt={promo.name} className="rounded-md w-full h-full object-cover mb-4" />

                  {/* Label Diskon */}
                  {/* <div className="absolute top-2 left-2 bg-green-600 text-white px-3 py-1 text-sm font-bold rounded-md">
                    Diskon {promo.discount}%
                  </div> */}

                  {/* Nama Produk */}
                  {/* <h3 className="bg-green-700 text-white text-center font-semibold py-2 rounded-md">
                    {promo.name}
                  </h3> */}

                  {/* Tombol Beli */}
                  <div className="mt-4 text-center">
                    {/* <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
                      Beli Sekarang
                    </button> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button className="prev-btn2 absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-white text-2xl p-2 -ml-12">
            {/* <FaChevronLeft /> */}
            <FaArrowLeft size={20} className="text-white" />
          </button>
          <button className="next-btn2 absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-white text-2xl p-2 -mr-12">
            {/* <FaChevronRight /> */}
            <FaArrowRight size={20} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Promo;
