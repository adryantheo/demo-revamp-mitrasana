import React from 'react';
import handlePhone from '../assets/DSC01343@2x.png'
import personShopping from '../assets/Group 684@2x.png'
import tokopediaLogo from '../assets/Layer_1-2.svg'
import shopeeLogo from '../assets/shopee-1.svg'
import tiktokLogo from '../assets/Image 22@2x.png'

const TokoOnline = () => {
  return (
    <div className="w-full">

      {/* Hero Section - Responsive improvements */}
      <section className="relative">
        <div className="relative -h-[20%] sm:h-[65vh] md:h-160 bg-green-800 mb-10 sm:mb-16 md:mb-20 w-[92%] sm:w-[90%] md:w-full mx-auto">
          <div className="pt-4 sm:pt-6 md:pt-10 flex flex-col items-center justify-center p-2 sm:p-4 md:p-6">
            <div className='flex items-center justify-center md:pt-5'>
                <img 
                src={personShopping}
                alt="Person shopping online for health products" 
                className="w-[90%] md:w-350 h-auto pt-2 sm:pt-3 md:pt-5 rounded-lg shadow-lg object-cover z-20"
                />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-4 sm:h-8 md:h-15 bg-lime-400"></div>
        </div>
      </section>

      {/* Main Content - Responsive improvements */}
      <section className="container mx-auto px-4 pb-0">
        {/* Container untuk judul dan teks - dengan padding top */}
        <div className="pt-8 sm:pt-12 md:pt-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#324F35] font-semibold mb-2">Toko Online</h2>
          
          <div className="flex flex-col md:flex-row items-start mt-3 sm:mt-4 md:mt-5 justify-between">
            <div className="md:w-[100%]">
              <p className="text-lg sm:text-xl md:text-2xl text-[#2E2E2E] font-normal pt-2 sm:pt-3 md:pt-4 mb-4 sm:mb-6 md:mb-8">
                Belanja produk kesehatan kini lebih praktis! Kunjungi toko online Mitrasana 
                untuk mendapatkan obat, vitamin, dan kebutuhan kesehatan lainnya dengan 
                mudah dan aman.
              </p>
              
              {/* Marketplace Icons - Responsive spacing and sizing */}
              <div className="flex items-center space-x-6 sm:space-x-8 md:space-x-10 mt-4 md:mt-6">
                <a href="#" className="flex flex-col items-center">
                  <div className="p-2 md:p-3 rounded-md">
                    <img src={shopeeLogo} alt="Shopee" className="h-20 w-20 sm:h-25 sm:w-25 md:h-30 md:w-30" />
                  </div>
                </a>
                
                <a href="#" className="flex flex-col items-center">
                  <div className="p-2 md:p-3 rounded-md">
                    <img src={tokopediaLogo} alt="Tokopedia" className="h-20 w-20 sm:h-25 sm:w-25 md:h-30 md:w-30" />
                  </div>
                </a>
                
                <a href="#" className="flex flex-col items-center">
                  <div className="p-2 md:p-3 rounded-md">
                    <img src={tiktokLogo} alt="TikTok Shop" className="h-20 w-20 sm:h-25 sm:w-25 md:h-30 md:w-30" />
                  </div>
                </a>
              </div>
            </div>
            
            {/* Phone image with green circle - Responsive positioning */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end relative overflow-visible">
              {/* Wrapper for image and circle - maintaining proper relative positioning */}
              <div className="relative" style={{ marginTop: '-1rem', maxWidth: '100%' }}>
                {/* Green circle with responsive sizing and positioning */}
                <div 
                  className="absolute z-0 rounded-full bg-lime-400" 
                  style={{ 
                    width: '180px', 
                    height: '180px', 
                    left: '50%',
                    top: '50%', 
                    transform: 'translate(-70%, -50%)',
                    '@media (min-width: 768px)': {
                      width: '280px',
                      height: '280px',
                      left: '-40px',
                      transform: 'translateY(-50%)'
                    }
                  }}
                ></div>
                
                {/* Phone image with responsive sizing */}
                <img 
                  src={handlePhone} 
                  alt="Woman holding smartphone showing Mitrasana app" 
                  className="phone-image relative z-10 transition-transform duration-300 hover:scale-105 max-w-full md:max-w-none"
                  style={{ 
                    width: 'auto',
                    maxHeight: '400px',
                    height: 'auto',
                    objectFit: 'contain',
                    objectPosition: 'center',
                    '@media (min-width: 768px)': {
                      maxHeight: '560px'
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Spacing adjustment */}
      <div className="h-4 sm:h-6 md:h-8"></div>
    </div>
  );
};

export default TokoOnline;