import { useState, useEffect } from 'react';
import axios from 'axios';
import FunctionalMaps from '../components/FunctionalMaps';

const dummyLokOnline = [
  {
      "id": "8889ebdf-fb3c-4b86-8260-79755da95ff5",
      "jaringan_type": "Klinik & Apotek",
      "name": "Mitrasana Kelapa Gading",
      "city": "Jakarta Utara",
      "address": "JI. Raya Timur Boulevard Blok NC - I No 42 dan 43 RT001, RW012, Kel Pegangsaan Dua, Kec Kelapa Gading Jakarta Utara - 14250",
      "phone": "0821 1070 6007",
      "createdAt": "2025-03-09T13:52:59.328Z",
      "updatedAt": "2025-03-09T13:52:59.328Z"
  },
  {
      "id": "e79e0634-1344-4960-8c55-27c20eda8264",
      "jaringan_type": "Klinik & Apotek",
      "name": "Mitrasana Green Pramuka City",
      "city": "Jakarta Pusat",
      "address": "Apartemen Green Pramuka City, Tower Orchid, Lt. P1 Daerah perencanaan 2, JI. Ahmad Yani, RT014, RW009 Kel Rawasari, Kec Cempaka Putih, Jakarta Pusat - 10570",
      "phone": "0822 9717 7100",
      "createdAt": "2025-03-09T14:27:28.999Z",
      "updatedAt": "2025-03-09T14:27:28.999Z"
  }
];

const KlinikApotek = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Map location configuration for FunctionalMaps
  const mapLocations = [
    { id: "Component_28_2", name: "1 Palembang" },
    { id: "Component_28_3", name: "1 Medan" },
    { id: "Component_29_2", name: "7 Jabodetabek" },
    { id: "Component_31_2", name: "1 Semarang" },
    { id: "Component_30_2", name: "1 Bandung" },
    { id: "Component_33_2", name: "1 Makasar" },
    { id: "Component_33_4", name: "1 Bali" },
    { id: "Component_32_2", name: "1 Surabaya" },
  ];

  // Location labels for the grid below the map
  const locationLabels = [
    { id: 1, name: "1 Palembang" },
    { id: 2, name: "1 Medan" },
    { id: 3, name: "7 Jabodetabek" },
    { id: 4, name: "1 Semarang" },
    { id: 5, name: "1 Bandung" },
    { id: 6, name: "1 Makasar" },
    { id: 7, name: "1 Bali" },
    { id: 8, name: "1 Surabaya" },
  ];

  // Detect mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setLoading(true);
        // Uncomment for actual API call
        // const response = await axios.get('http://localhost:5000/api/jaringan');
        // setLocations(response.data);
        setLocations(dummyLokOnline);
        setLoading(false);
      } catch (err) {
        setError('Gagal memuat data jaringan. Silakan coba lagi nanti.');
        setLoading(false);
        console.error('Error fetching data:', err);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Header with map and separated location labels */}
      <div className="relative bg-[#324F35] mb-8 md:mb-12 lg:mb-20 py-6 md:py-8">
        <div className="w-full max-w-4xl mx-auto px-4">
          <div className="flex flex-col items-center">
            {/* FunctionalMaps component */}
            <div className="w-full mb-6">
              <FunctionalMaps locations={mapLocations} />
            </div>
            
            {/* Separate location labels grid - Only on mobile */}
            {isMobile && (
              <div className="grid grid-cols-2 gap-2 w-full mx-auto mb-2">
                {locationLabels.map((location) => (
                  <div 
                    key={location.id} 
                    className="bg-[#324F35] text-white py-2 px-3 rounded-md text-center border border-white"
                  >
                    {location.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-3 sm:h-4 md:h-4 bg-[#a7cf46]"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-4 md:my-6 lg:my-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#324F35] font-semibold mb-3 md:mb-4">Jaringan Apotek dan Klinik</h2>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#2E2E2E] font-normal my-3 md:my-6 lg:my-8">
          Dengan jaringan apotek dan klinik yang terus berkembang, Mitrasana hadir lebih dekat untuk memberikan layanan kesehatan yang mudah dijangkau, di mana pun Anda berada.
        </p>

        {/* Table on larger screens, cards on mobile */}
        <div className="hidden md:block">
          {/* Table Header */}
          <div className="bg-[#324F35] text-white grid grid-cols-5 rounded-t-md overflow-hidden">
            <div className="p-3 md:p-4 font-medium">Klinik & Apotek</div>
            <div className="p-3 md:p-4 font-medium">Kota</div>
            <div className="p-3 md:p-4 font-medium col-span-2">Alamat</div>
            <div className="p-3 md:p-4 font-medium">Telephone</div>
          </div>

          {/* Table Content with Loading and Error states */}
          {loading ? (
            <div className="text-center py-8 bg-gray-50 rounded-b-md">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto"></div>
              <p className="mt-4 text-gray-600">Memuat data...</p>
            </div>
          ) : error ? (
            <div className="text-center py-8 bg-gray-50 rounded-b-md">
              <p className="text-red-600">{error}</p>
            </div>
          ) : (
            <div className="bg-white rounded-b-md shadow overflow-hidden">
              {locations.map((location, index) => (
                <div 
                  key={location.id} 
                  className={`grid grid-cols-5 border-b-2 border-[#b5b5b5] ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <div className="p-3 md:p-4">
                    <p><strong>{location.jaringan_type}</strong></p>
                    <p className="font-medium text-base md:text-lg text-[#324F35]">{location.name}</p>
                  </div>
                  <div className="p-3 md:p-4">
                    <p className="font-small text-xs md:text-sm text-[#707070]">Kota</p>
                    <p className="font-normal text-base md:text-xl text-[#3D3D3D]">{location.city}</p>
                  </div>
                  <div className="p-3 md:p-4 col-span-2">
                    <p className="font-small text-xs md:text-sm text-[#707070]">Alamat</p>
                    <p className="font-normal text-base md:text-xl text-[#3D3D3D]">{location.address}</p>
                  </div>
                  <div className="p-3 md:p-4">
                    <p className="font-small text-xs md:text-sm text-[#707070]">Telephone</p>
                    <p className="font-normal text-base md:text-xl text-[#3D3D3D]">{location.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Mobile view with cards */}
        <div className="md:hidden">
          {loading ? (
            <div className="text-center py-6 bg-gray-50 rounded-md">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-700 mx-auto"></div>
              <p className="mt-3 text-gray-600 text-sm">Memuat data...</p>
            </div>
          ) : error ? (
            <div className="text-center py-6 bg-gray-50 rounded-md">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          ) : (
            <div className="space-y-3">
              {locations.map((location) => (
                <div key={location.id} className="bg-white rounded-md shadow-md p-3">
                  <div className="border-b pb-2 mb-2">
                    <p className="text-xs text-[#707070]">{location.jaringan_type}</p>
                    <p className="font-medium text-base text-[#324F35]">{location.name}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-[#707070]">Kota</p>
                      <p className="text-sm text-[#3D3D3D]">{location.city}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#707070]">Telephone</p>
                      <p className="text-sm text-[#3D3D3D]">{location.phone}</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs text-[#707070]">Alamat</p>
                    <p className="text-sm text-[#3D3D3D]">{location.address}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KlinikApotek;