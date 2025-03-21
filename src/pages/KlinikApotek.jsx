// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import FunctionalMaps from '../components/FunctionalMaps';


// const dummyLokOnline = [
//   {
//       "id": "8889ebdf-fb3c-4b86-8260-79755da95ff5",
//       "jaringan_type": "Klinik & Apotek",
//       "name": "Mitrasana Kelapa Gading",
//       "city": "Jakarta Utara",
//       "address": "JI. Raya Timur Boulevard Blok NC - I No 42 dan 43 RT001, RW012, Kel Pegangsaan Dua, Kec Kelapa Gading Jakarta Utara - 14250",
//       "phone": "0821 1070 6007",
//       "createdAt": "2025-03-09T13:52:59.328Z",
//       "updatedAt": "2025-03-09T13:52:59.328Z"
//   },
//   {
//       "id": "e79e0634-1344-4960-8c55-27c20eda8264",
//       "jaringan_type": "Klinik & Apotek",
//       "name": "Mitrasana Green Pramuka City",
//       "city": "Jakarta Pusat",
//       "address": "Apartemen Green Pramuka City, Tower Orchid, Lt. P1 Daerah perencanaan 2, JI. Ahmad Yani, RT014, RW009 Kel Rawasari, Kec Cempaka Putih, Jakarta Pusat - 10570",
//       "phone": "0822 9717 7100",
//       "createdAt": "2025-03-09T14:27:28.999Z",
//       "updatedAt": "2025-03-09T14:27:28.999Z"
//   }
// ]


// const KlinikApotek = () => {
//   const [locations, setLocations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   // const [selectedCity, setSelectedCity] = useState('');
//   // const [searchTerm, setSearchTerm] = useState('');

//   const locs = [
//     { id: "Component_28_2", name: "1 Palembang" },
//     { id: "Component_28_3", name: "1 Medan" },
//     { id: "Component_29_2", name: "7 Jabodetabek" },
//     { id: "Component_31_2", name: "1 Semarang" },
//     { id: "Component_30_2", name: "1 Bandung" },
//     { id: "Component_33_2", name: "1 Makasar" },
//     { id: "Component_33_4", name: "1 Bali" },
//     { id: "Component_32_2", name: "1 Surabaya" },
//   ];

//   useEffect(() => {
//     const fetchLocations = async () => {
//       try {
//         setLoading(true);
//         // const response = await axios.get('http://localhost:5000/api/jaringan');
//         // setLocations(response.data);
//         setLocations(dummyLokOnline)
//         setLoading(false);
//       } catch (err) {
//         setError('Gagal memuat data jaringan. Silakan coba lagi nanti.');
//         setLoading(false);
//         console.error('Error fetching data:', err);
//       }
//     };

//     fetchLocations();
//   }, []);

//   // Get unique cities for filter dropdown
//   // const cities = [...new Set(locations.map(location => location.city))].sort();

//   // // Filter locations based on selected city and search term
//   // const filteredLocations = locations.filter(location => {
//   //   const matchesCity = selectedCity ? location.city === selectedCity : true;
//   //   const matchesSearch = searchTerm 
//   //     ? location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//   //       location.address.toLowerCase().includes(searchTerm.toLowerCase())
//   //     : true;
//   //   return matchesCity && matchesSearch;
//   // });

//   return (
//     <div className="bg-white min-h-screen">
//       {/* Header with map image */}
//       <div className="relative h-160 bg-green-800 mb-20">
//         <div className="flex flex-col items-center justify-center p-6">
//             <div className='flex items-center justify-center'>
//                 <FunctionalMaps locations={locs} />
//                 {/* <img 
//                 src="/peta-indonesia.svg"
//                 alt="Person shopping online for health products" 
//                 className="w-400 px-10 py-10 mt-10 bg-white rounded-lg shadow-lg object-cover z-20"
//                 /> */}
//             </div>
//         </div>
//         <div className="absolute bottom-0 left-0 w-full h-15 bg-lime-400"></div>
//       </div>


//       {/* Main Content */}
//       <div className="max-w-7xl pt-10 mx-auto px-4 sm:px-6 lg:px-8 my-8">
//         <h2 className="text-5xl text-[#324F35] font-semibold mb-4">Jaringan Apotek dan Klinik</h2>
        
//         <p className="text-2xl text-[#2E2E2E] font-normal my-8">
//           Dengan jaringan apotek dan klinik yang terus berkembang, Mitrasana hadir lebih dekat untuk memberikan layanan kesehatan yang mudah dijangkau, di mana pun Anda berada.
//         </p>


//         {/* Table Header */}
//         <div className="bg-[#324F35] text-white grid grid-cols-5 rounded-t-md overflow-hidden">
//           <div className="p-4 font-medium">Klinik & Apotek</div>
//           <div className="p-4 font-medium">Kota</div>
//           <div className="p-4 font-medium col-span-2">Alamat</div>
//           <div className="p-4 font-medium">Telephone</div>
//         </div>

//         {/* Table Content with Loading and Error states */}
//         {loading ? (
//           <div className="text-center py-8 bg-gray-50 rounded-b-md">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto"></div>
//             <p className="mt-4 text-gray-600">Memuat data...</p>
//           </div>
//         ) : error ? (
//           <div className="text-center py-8 bg-gray-50 rounded-b-md">
//             <p className="text-red-600">{error}</p>
//           </div>
//         ) : (
//           <div className="bg-white rounded-b-md shadow overflow-hidden">
//             {locations.map((location, index) => (
//               <div 
//                 key={location.id} 
//                 className={`grid grid-cols-5 border-b-2 border-[#b5b5b5] ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
//               >
//                 <div className="p-4">
//                   <p><strong>{location.jaringan_type}</strong></p>
//                   <p className="font-medium text-lg text-[#324F35]">{location.name}</p>
//                 </div>
//                 <div className="p-4">
//                   <p className="font-small text-sm text-[#707070]">Kota</p>
//                   <p className="font-normal text-xl text-[#3D3D3D]">{location.city}</p>
//                 </div>
//                 <div className="p-4 col-span-2">
//                 <p className="font-small text-sm text-[#707070]">Alamat</p>
//                 <p className="font-normal text-xl text-[#3D3D3D]">{location.address}</p>
//                 </div>
//                 <div className="p-4">
//                   <p className="font-small text-sm text-[#707070]">Telephone</p>
//                   <p className="font-normal text-xl text-[#3D3D3D]">{location.phone}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default KlinikApotek;

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

  const locs = [
    { id: "Component_28_2", name: "1 Palembang" },
    { id: "Component_28_3", name: "1 Medan" },
    { id: "Component_29_2", name: "7 Jabodetabek" },
    { id: "Component_31_2", name: "1 Semarang" },
    { id: "Component_30_2", name: "1 Bandung" },
    { id: "Component_33_2", name: "1 Makasar" },
    { id: "Component_33_4", name: "1 Bali" },
    { id: "Component_32_2", name: "1 Surabaya" },
  ];

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
      {/* Header with map image */}
      <div className="relative bg-[#324F35] mb-12 md:mb-20">
        <div className="w-full mx-auto max-w-6xl px-4 py-8">
          <div className='w-full mx-auto max-w-4xl'>
            <FunctionalMaps locations={locs} />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-4 bg-[#a7cf46]"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6 md:my-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#324F35] font-semibold mb-4">Jaringan Apotek dan Klinik</h2>
        
        <p className="text-lg md:text-xl lg:text-2xl text-[#2E2E2E] font-normal my-4 md:my-8">
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
            <div className="text-center py-8 bg-gray-50 rounded-md">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-700 mx-auto"></div>
              <p className="mt-4 text-gray-600">Memuat data...</p>
            </div>
          ) : error ? (
            <div className="text-center py-8 bg-gray-50 rounded-md">
              <p className="text-red-600">{error}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {locations.map((location) => (
                <div key={location.id} className="bg-white rounded-md shadow-md p-4">
                  <div className="border-b pb-2 mb-2">
                    <p><strong>{location.jaringan_type}</strong></p>
                    <p className="font-medium text-lg text-[#324F35]">{location.name}</p>
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