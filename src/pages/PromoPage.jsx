import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa"; // Icon untuk navigasi
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import promoMockData from "../mock/promoMockData";
import bannerData from '../mock/promoBannerMock';

// const bannerData = [
//   { id: 1, image: 'http://localhost:5000/uploads/1741438295192.jpg', alt: 'Promo 1' },
//   { id: 2, image: 'http://localhost:5000/uploads/1741446485129.jpg', alt: 'Promo 2' },
//   { id: 3, image: 'http://localhost:5000/uploads/1741518267907.jpg', alt: 'Promo 3' }
// ];

const promoCategories = [
  { id: 1, title: 'Personal Care', discount: '30%', image: 'https://via.placeholder.com/300x300' },
  { id: 2, title: 'Susu Nutrisi', discount: '11%', image: 'https://via.placeholder.com/300x300' },
  { id: 3, title: 'Multivitamin', discount: '25%', image: 'https://via.placeholder.com/300x300' },
  { id: 4, title: 'Beauty', discount: '30%', image: 'https://via.placeholder.com/300x300' },
  { id: 5, title: 'Alat Kesehatan', discount: '15%', image: 'https://via.placeholder.com/300x300' }
];

const PromoPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + bannerData.length) % bannerData.length);
  };

  return (
    <section>
          <div className="container mx-auto px-4 py-8">
      {/* Carousel */}
      <div className="relative w-3/4 mx-auto overflow-hidden rounded-lg">
        <img
          src={bannerData[currentIndex].image}
          alt={bannerData[currentIndex].alt}
          className="w-full max-h-96 object-contain"
        />
        <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2  p-2 rounded-full shadow">
          <FaRegArrowAltCircleLeft size={30} className='text-[#324F35]' />
        </button>
        <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2  p-2 rounded-full shadow">
          <FaRegArrowAltCircleRight size={30} className='text-[#324F35]' />
        </button>
      </div>

      {/* Promo Categories */}
      <h2 className="text-4xl font-semibold text-left my-8 text-[#324F35]">Penuhi Kebutuhan Sehatmu</h2>
      <p className="text-2xl text-left mb-8">Mitra menyediakan yang terbaik dan terpercaya untuk Anda dengan harga terbaik dan pelayanan maksimal.</p>

      {/* <div className="grid md:grid-cols-5 gap-4 bg-[#a6c84a] p-6 rounded-lg">
        {promoCategories.map((promo) => (
          <div key={promo.id} className="text-center bg-white p-4 rounded-lg shadow-md">
            <img src={promo.image} alt={promo.title} className="w-full h-40 object-cover mb-2 rounded" />
            <h3 className="text-xl font-semibold">{promo.title}</h3>
            <p className="text-lg font-bold text-green-700">Discount {promo.discount}</p>
            <button className="mt-2 px-4 py-2 bg-green-700 text-white rounded-lg">Belanja Sekarang</button>
          </div>
        ))}
      </div> */}     
    </div>
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
              {promoMockData.map((promo) => (
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
              <FaRegArrowAltCircleLeft size={30} className="text-white" />
            </button>
            <button className="next-btn2 absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-white text-2xl p-2 -mr-12">
              {/* <FaChevronRight /> */}
              <FaRegArrowAltCircleRight size={30} className="text-white" />
            </button>
          </div>
        </div> 
    </section>
  );
};

export default PromoPage;
