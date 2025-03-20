import { useState, useEffect } from 'react';
import GambarPNL from '../assets/pnl.png'

import onlineEnablerMock from '../mock/onlineEnablerMock';

const ProdukLayanan = () => {
  const [services, setServices] = useState([]);
  const [enablers, setEnablers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch services
        const servicesResponse = await fetch('http://localhost:5000/api/service');
        const servicesData = await servicesResponse.json();
        
        // Fetch online enablers
        // const enablersResponse = await fetch('http://localhost:5000/api/online-enabler');
        // const enablersData = await enablersResponse.json();
        
        setServices(servicesData);
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

      {/* Hero section with image */}
      <div className="relative h-160 bg-green-800 mb-20">
        <div className="pt-10 flex flex-col items-center justify-center p-6">
            <div className='flex items-center justify-center'>
                <img 
                src={GambarPNL}
                alt="Produk & Layanan" 
                className="w-350 h-160 rounded-lg shadow-lg object-cover z-20"
                />
            </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-15 bg-lime-400"></div>
      </div>
      {/* <div className="w-full">
        <img 
          src="/api/placeholder/1200/400" 
          alt="Produk & Layanan" 
          className="w-full h-96 object-cover"
        />
      </div> */}

      {/* Produk & Layanan title section */}
      <div className="container mx-auto py-20">
        <h2 className="text-5xl text-[#324F35] font-semibold">Produk & Layanan</h2>
        <p className="mt-6 text-3xl text-[#2E2E2E] font-normal max-w">
          Dapatkan solusi kesehatan lengkap di Mitrasana! Kami menyediakan beragam produk farmasi, alat kesehatan, hingga layanan medis yang dirancang untuk memenuhi kebutuhan kesehatan Anda dan keluarga.
        </p>
      </div>

      {/* Services Grid */}
      {/* <div className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="relative overflow-hidden rounded-lg shadow-sm w-full aspect-square">
              <div className="bg-green-600 text-white p-3 text-center font-medium">
                {service.name}
              </div>
              <div className="absolute top-12 bottom-0 left-0 right-0">
                <img 
                  src={"http://localhost:5000"+service.image || "/api/placeholder/400/400"} 
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <div className="container mx-auto py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {services.map((service) => (
            <div key={service.id} className="relative overflow-hidden rounded-lg shadow-sm">
              <div className="bg-[#324F35] text-white p-2 text-center font-medium text-sm">
                {service.name}
              </div>
              <div className="h-32 w-full overflow-hidden">
                <img 
                  src={"http://localhost:5000"+service.image || "/api/placeholder/200/200"} 
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Online Enabler section */}
      <div className="container mx-auto py-24 mb-12">
        <div className="bg-[#324F35] p-3 rounded-t-lg">
          <h2 className="text-xl text-[#FFFFFF] font-normal text-center">Online Enabler</h2>
        </div>
        <div className="bg-white p-6 border border-gray-200 shadow-sm">
          <div className="flex flex-wrap justify-center items-center gap-10">
            {enablers.map((enabler) => (
              <div key={enabler.id} className="w-32">
                <img 
                  // src={"http://localhost:5000"+enabler.image || "/api/placeholder/120/80"} 
                  src={enabler.image} 
                  alt={enabler.name}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdukLayanan;