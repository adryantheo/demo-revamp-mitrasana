import React from 'react';
import TentangKamiImage from '../assets/static/tentang_kami.jpg'
import TentangKami2Image from '../assets/static/tentang_kami2.jpg'

const TentangKami = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      {/* <section className="relative">
        <div className="w-full relative">
          <div className="absolute top-0 bottom-0 left-0 w-4 md:w-32 bg-[#324F35] z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-4 md:w-32 bg-[#324F35] z-10"></div>
          
          <div className="relative mx-4 md:mx-32">
            <img 
              src={TentangKamiImage} 
              alt="Mitrasana Pharmacy Staff" 
              className="w-full h-96 object-cover rounded-md"
            />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#A3D165] z-20"></div>
        </div>
      </section> */}
      <section className="relative h-160 bg-green-800 mb-20">
        <div className="pt-10 flex flex-col items-center justify-center p-6">
              <div className='flex items-center justify-center'>
                  <img 
                  src={TentangKamiImage}
                  alt="tentang_kami" 
                  className="w-350 h-160 rounded-lg shadow-lg object-cover z-20"
                  />
              </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-15 bg-lime-400"></div>
      </section>

      {/* Tentang Kami Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-5xl text-[#324F35] font-medium mb-6">Tentang Kami</h2>
        
        <div className="space-y-6 max-w">
          {/* <p className="text-2xl font-normal text-[#2E2E2E]"> */}
          <p className="text-2xl font-normal text-[#2E2E2E]">
            PT Millenia Dharma Insani didirikan pada tahun 2003, dikembangkan dari bisnis apotek menjadi klinik dengan nama Mitrasana.
          </p>
          
          <p className="text-2xl font-normal text-[#2E2E2E]">
            Mitrasana hadir untuk memberikan layanan kesehatan yang mudah diakses, terpercaya, dan berkualitas bagi masyarakat. Dengan jaringan apotek dan klinik yang luas, kami berkomitmen untuk menjadi mitra kesehatan Anda dalam setiap tahap kehidupan.
          </p>
        </div>
      </section>

      {/* Visi dan Misi Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-5xl text-[#324F35] font-medium mb-6">Visi dan Misi</h2>
        
        {/* Image */}
        <div className="mb-12">
          <img 
            src={TentangKami2Image} 
            alt="Mitrasana Team" 
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        
        {/* Two columns for Visi & Misi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Visi */}
          <div>
            <h3 className="text-5xl text-[#324F35] font-medium mb-4">Visi</h3>
            <p className="text-2xl font-normal text-[#2E2E2E]">
              Menjadi jaringan penyedia layanan kesehatan dan produk yang utama dan terpecaya bagi pelanggan
            </p>
          </div>
          
          {/* Misi */}
          <div className='pb-50'>
            <h3 className="text-5xl text-[#324F35] font-medium mb-4">Misi</h3>
            <p className="text-2xl font-normal text-[#2E2E2E]">
              Meningkatkan kesehatan masyarakat dengan menyediakan layanan kesehatan dan produk yang berkualitas
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TentangKami;