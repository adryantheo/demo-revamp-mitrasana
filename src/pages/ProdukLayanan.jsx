import { useState, useEffect } from 'react';
import GambarPNL from '../assets/pnl.png'

import onlineEnablerMock from '../mock/onlineEnablerMock';
import serviceMockData from '../mock/serviceMockData'

const ProdukLayanan = () => {
  const [services, setServices] = useState([]);
  const [enablers, setEnablers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch services
        // const servicesResponse = await fetch('http://localhost:5000/api/service');
        // const servicesData = await servicesResponse.json();
        
        // Fetch online enablers
        // const enablersResponse = await fetch('http://localhost:5000/api/online-enabler');
        // const enablersData = await enablersResponse.json();
        
        // setServices(servicesData);
        setServices(serviceMockData);
        // setEnablers(enablersData);
        setEnablers(onlineEnablerMock);
        setLoading(false);
      } catch (err) {
        console.error(err)
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="w-full">

      {/* Hero section with image - Responsive adjustments */}
      <section className="relative">
        <div className="relative -h-[20%] sm:h-[65vh] md:h-160 bg-green-800 mb-10 sm:mb-16 md:mb-20 w-[92%] sm:w-[90%] md:w-full mx-auto">
          <div className="pt-4 sm:pt-6 md:pt-10 flex flex-col items-center justify-center p-2 sm:p-4 md:p-6">
            <div className="flex items-center justify-center md:pt-8">
              <img 
                src={GambarPNL}
                alt="Produk & Layanan" 
                className="w-[90%] md:w-350 h-auto md:h-160 rounded-lg shadow-lg object-cover z-20"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-4 sm:h-8 md:h-15 bg-lime-400"></div>
        </div>
      </section>

      {/* Produk & Layanan title section - Responsive text */}
      <section className="container mx-auto px-4 py-8 md:py-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#324F35] font-semibold">Produk & Layanan</h2>
        <p className="mt-4 md:mt-6 text-xl sm:text-2xl md:text-3xl text-[#2E2E2E] font-normal">
          Dapatkan solusi kesehatan lengkap di Mitrasana! Kami menyediakan beragam produk farmasi, alat kesehatan, hingga layanan medis yang dirancang untuk memenuhi kebutuhan kesehatan Anda dan keluarga.
        </p>
      </section>

      {/* Services Grid - Responsive grid */}
      <section className="container mx-auto px-4 py-4 md:py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6">
          {services.map((service) => (
            <div key={service.id} className="relative overflow-hidden rounded-lg shadow-sm">
              <div className="bg-[#324F35] text-white p-2 text-center font-normal text-sm sm:text-base md:text-xl">
                {service.name}
              </div>
              <div className="h-full w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Online Enabler section - Responsive adjustments */}
      <section className="container mx-auto px-4 py-12 md:py-24 mb-6 md:mb-12">
        <div className="bg-[#324F35] p-2 md:p-3 rounded-t-lg">
          <h2 className="text-lg md:text-xl text-[#FFFFFF] font-normal text-center">Online Enabler</h2>
        </div>
        <div className="bg-white p-4 md:p-6 border border-gray-200 shadow-sm">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {enablers.map((enabler) => (
              <div key={enabler.id} className="w-24 sm:w-28 md:w-32">
                <img 
                  src={enabler.image} 
                  alt={enabler.name}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProdukLayanan;