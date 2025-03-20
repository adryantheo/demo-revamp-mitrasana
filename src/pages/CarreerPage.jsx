import { useState } from "react";
// import KarirImage from '../assets/Karir2x.png'

const CareerPage = () => {
    const [search, setSearch] = useState("");
    const [department, setDepartment] = useState("Semua departemen");
    const [location, setLocation] = useState("Semua lokasi");
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 5;

  const jobs = Array(15).fill({ title: "Research Intern", detail: "HR Information Systems", department:"Infomation Technology", location: "Jakarta" });

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[92vh] bg-cover bg-center flex items-end justify-center text-white text-center"
        style={{ backgroundImage: "url('/Karir2x.png')" }}>
        <div className="bg-gradient-to-t from-white via-white/70 to-transparent p-8 text-gray-900 text-center w-full max-w-1xl">
          <h1 className="text-4xl font-bold text-[#324F35]">Bangun karir di Mitrasana dan tumbuh bersama kami.</h1>
          <p className="text-2xl font-normal text-[#324F35] mt-2">Jadilah bagian dari Mitrasana! Kami mencari individu berbakat dan berdedikasi untuk</p>
          <p className="text-2xl font-normal text-[#324F35] ">tumbuh bersama dalam menghadirkan layanan kesehatan terbaik bagi masyarakat.</p>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="pb-[10rem]">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 bg-[#a7cf46] p-6 md:p-12 rounded-lg items-center justify-center">
          <div className="flex bg-white p-4 rounded-full w-1/2 items-center gap-4 shadow-md">
            <span className="text-gray-500 text-xl ml-4">🔍</span>
            <input 
              type="text" 
              placeholder="Cari pekerjaan" 
              className="p-3 flex-1 rounded-full outline-none placeholder-[#2E2E2E] text-center text-lg font-semibold"
              value={search} 
              onChange={(e) => setSearch(e.target.value)} 
            />
          </div>
          <select 
            className="p-4 md:p-7 rounded-full bg-white outline-none shadow-md text-lg px-6 w-full md:w-1/5 font-semibold text-right"
            value={department} 
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option>Semua departemen</option>
            <option>HR Information Systems</option>
          </select>
          <select 
            className="p-4 md:p-7 rounded-full bg-white outline-none shadow-md text-lg px-6 w-full md:w-1/5 font-semibold text-right"
            value={location} 
            onChange={(e) => setLocation(e.target.value)}
          >
            <option>Semua lokasi</option>
            <option>Jakarta</option>
          </select>
        </div>

        {/* Job List */}
        <div className="mt-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-normal pb-12">{filteredJobs.length} Pekerjaan tersedia di semua departemen dan di semua lokasi</h2>
          {currentJobs.map((job, index) => (
            <div key={index} className="p-4 border-b flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="font-semibold text-lg">{job.title}</h3>
                <p className="text-gray-600 text-sm">{job.detail}</p>
              </div>
              <div className="mt-2 md:mt-0">
                <p className="text-gray-600 text-sm">Departemen</p>
                <p className="text-black-600 text-lg">{job.department}</p>
              </div>
              <div className="mt-2 md:mt-0">
                <p className="text-gray-600 text-sm">Lokasi</p>
                <p className="text-black-600 text-lg">{job.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 gap-6">
          {Array.from({ length: totalPages }, (_, i) => (
            <button 
              key={i} 
              className={`w-14 h-14 flex items-center justify-center rounded-full outline-1 border transition-all duration-300 text-3xl font-normal ${currentPage === i + 1 ? 'bg-[#324F35] text-white shadow-md' : 'border-gray-300 text-gray-700 hover:bg-gray-200'}`} 
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CareerPage;

// import { useState } from "react";
// // import KarirImage from '../assets/Karir2x.png'

// const CareerPage = () => {
//     const [search, setSearch] = useState("");
//     const [department, setDepartment] = useState("Semua departemen");
//     const [location, setLocation] = useState("Semua lokasi");
//     const [currentPage, setCurrentPage] = useState(1);
//     const jobsPerPage = 5;

//   const jobs = Array(15).fill({ title: "Research Intern", detail: "HR Information Systems", department:"Infomation Technology", location: "Jakarta" });

//   const filteredJobs = jobs.filter((job) =>
//     job.title.toLowerCase().includes(search.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
//   const indexOfLastJob = currentPage * jobsPerPage;
//   const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//   const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative w-full h-[92vh] bg-cover bg-center flex items-end justify-center text-white text-center"
//         style={{ backgroundImage: "url('/Karir2x.png')" }}>
//         <div className="bg-gradient-to-t from-white via-white/70 to-transparent p-8 text-gray-900 text-center w-full max-w-1xl">
//           <h1 className="text-4xl font-bold text-[#324F35]">Bangun karir di Mitrasana dan tumbuh bersama kami.</h1>
//           <p className="text-2xl font-normal text-[#324F35] mt-2">Jadilah bagian dari Mitrasana! Kami mencari individu berbakat dan berdedikasi untuk</p>
//           <p className="text-2xl font-normal text-[#324F35] ">tumbuh bersama dalam menghadirkan layanan kesehatan terbaik bagi masyarakat.</p>
//         </div>
//       </section>

//       {/* Job Listings Section */}
//       <section className="pb-[10rem]">
//         {/* Filters */}
//         <div className="flex flex-wrap gap-4 bg-[#a7cf46] p-12 rounded-lg items-center justify-center">
//           <div className="flex bg-white p-4 rounded-full w-1/3 items-center gap-4 shadow-md">
//             <span className="text-gray-500 text-xl ml-4">🔍</span>
//             <input 
//               type="text" 
//               placeholder="Cari pekerjaan" 
//               className="p-3 flex-1 rounded-full outline-none placeholder-[#2E2E2E] text-center text-lg font-semibold"
//               value={search} 
//               onChange={(e) => setSearch(e.target.value)} 
//             />
//           </div>
//           <select 
//             className="p-7 rounded-full bg-white outline-none shadow-md text-lg px-8 w-1/5 font-semibold text-right"
//             value={department} 
//             onChange={(e) => setDepartment(e.target.value)}
//           >
//             <option>Semua departemen</option>
//             <option>HR Information Systems</option>
//           </select>
//           <select 
//             className="p-7 rounded-full bg-white outline-none shadow-md text-lg px-8 w-1/5 font-semibold text-right"
//             value={location} 
//             onChange={(e) => setLocation(e.target.value)}
//           >
//             <option>Semua lokasi</option>
//             <option>Jakarta</option>
//           </select>
//         </div>

//         {/* Job List */}
//         <div className="mt-6 px-100 mx-auto">
//           <h2 className="text-2xl font-normal pb-12">{filteredJobs.length} Pekerjaan tersedia di semua departemen dan di semua lokasi</h2>
//           {currentJobs.map((job, index) => (
//             <div key={index} className="p-4 border-b flex justify-between items-center">
//               <div>
//                 <h3 className="font-semibold text-lg">{job.title}</h3>
//                 <p className="text-gray-600 text-sm">{job.detail}</p>
//               </div>
//               <div>
//                 <p className="text-gray-600 text-sm">Departemen</p>
//                 <p className="text-black-600 text-lg">{job.department}</p>
//               </div>
//               <div>
//                 <p className="text-gray-600 text-sm">Lokasi</p>
//                 <p className="text-black-600 text-lg">{job.location}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-center mt-[4rem] gap-6">
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button 
//               key={i} 
//               className={w-20 h-20 flex items-center justify-center rounded-full outline-1 border transition-all duration-300 text-3xl font-normal ${currentPage === i + 1 ? 'bg-[#324F35] text-white shadow-md' : 'border-gray-300 text-gray-700 hover:bg-gray-200'}} 
//               onClick={() => setCurrentPage(i + 1)}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CareerPage;