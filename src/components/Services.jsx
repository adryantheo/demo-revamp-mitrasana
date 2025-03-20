import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa"; // Icon untuk navigasi

const API_BASE_URL = "http://localhost:5000"; // Sesuaikan dengan backend
import ServiceMockData from '../mock/serviceMockData';

const Services = () => {
  const [services, setServices] = useState([]);

  // useEffect(() => {
  //   axios.get(`${API_BASE_URL}/api/service`)
  //     .then(response => {
  //       const updatedServices = response.data.map(service => ({
  //         ...service,
  //         image: service.image.startsWith("http") ? service.image : `${API_BASE_URL}${service.image}`,
  //       }));
  //       setServices(updatedServices);
  //     })
  //     .catch(error => console.error("Error fetching services:", error));
  // }, []);

  useEffect(()=>{
    const updatedSlides = ServiceMockData.map(slide=> ({
      ...slide,
      image: slide.image
    }));
    setServices(updatedSlides)
  },[])

  return (
    <section className="bg-[#324f35] py-12">
      <div className="container mx-auto px-6 relative">
        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
          className="relative"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
                <img src={service.image} alt={service.name} className="rounded-md w-full h-60 object-cover mb-2" />
                <h3 className="bg-[#324f35] text-normal text-white text-center font-semibold py-2 rounded-md inline-block px-6">
                  {service.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <button className="prev-btn absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-white text-2xl p-2 -ml-12">
          {/* <FaChevronLeft /> */}
          <FaRegArrowAltCircleLeft stroke="white" size={40} className="text-white" />
        </button>
        <button className="next-btn absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-white text-2xl p-2 -mr-12">
          {/* <FaChevronRight /> */}
          <FaRegArrowAltCircleRight size={40} className="text-white" />
        </button>
      </div>
    </section>
  );
};

export default Services;
