import React from 'react';
import handlePhone from '../assets/DSC01343@2x.png'
import personShopping from '../assets/Group 684@2x.png'
import tokopediaLogo from '../assets/Layer_1-2.svg'
import shopeeLogo from '../assets/shopee-1.svg'
import tiktokLogo from '../assets/Image 22@2x.png'

const TokoOnline = () => {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <div className="relative h-160 bg-green-800 mb-20">
        <div className="flex flex-col items-center justify-center p-6">
            <div className='flex items-center justify-center'>
                <img 
                src={personShopping}
                alt="Person shopping online for health products" 
                className="w-350 pt-5 rounded-lg shadow-lg object-cover z-20"
                />
            </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-15 bg-lime-400"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-0">
        {/* Container untuk judul dan teks - dengan padding top */}
        <div className="pt-20">
          <h2 className="text-5xl text-[#324F35] font-semibold mb-2">Toko Online</h2>
          
          <div className="flex flex-col md:flex-row items-start mt-5 justify-between">
            <div className="md:w-[100%]">
              <p className="text-[#2E2E2E] font-normal text-2xl pt-4 mb-8">
                Belanja produk kesehatan kini lebih praktis! Kunjungi toko online Mitrasana 
                untuk mendapatkan obat, vitamin, dan kebutuhan kesehatan lainnya dengan 
                mudah dan aman.
              </p>
              
              {/* Marketplace Icons */}
              <div className="flex items-center space-x-10 mt-6">
                <a href="#" className="flex flex-col items-center">
                  <div className="p-3 rounded-md">
                    <img src={shopeeLogo} alt="Shopee" className="h-30 w-30" />
                  </div>
                </a>
                
                <a href="#" className="flex flex-col items-center">
                  <div className="p-3 rounded-md">
                    <img src={tokopediaLogo} alt="Tokopedia" className="h-30 w-30" />
                  </div>
                </a>
                
                <a href="#" className="flex flex-col items-center">
                  <div className="p-3 rounded-md">
                    <img src={tiktokLogo} alt="TikTok Shop" className="h-30 w-30" />
                  </div>
                </a>
              </div>
            </div>
            
            {/* Penempatan gambar yang diperbaiki dengan struktur baru */}
            <div className="md:w-1/2 mt-0 md:mt-0 flex justify-end relative overflow-visible">
              {/* Wrapper untuk gambar dan lingkaran - mempertahankan posisi relatif yang tepat */}
              <div className="relative" style={{ marginTop: '-2rem' }}>
                {/* Lingkaran hijau diposisikan relatif terhadap wrapper, bukan terhadap div parent */}
                <div 
                  className="absolute z-0 rounded-full bg-lime-400" 
                  style={{ 
                    width: '280px', 
                    height: '280px', 
                    left: '-40px',  /* Posisi digeser ke kiri */
                    top: '50%', 
                    transform: 'translateY(-50%)'
                  }}
                ></div>
                
                {/* Gambar ponsel */}
                <img 
                  src={handlePhone} 
                  alt="Woman holding smartphone showing Mitrasana app" 
                  className="phone-image relative z-10 transition-transform duration-300 hover:scale-105"
                  style={{ 
                    width: 'auto',
                    maxHeight: '560px',
                    height: 'auto',
                    objectFit: 'contain',
                    objectPosition: 'center'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Jarak dari gambar ke footer */}
      <div className="h-8"></div>
    </div>
  );
};

export default TokoOnline;