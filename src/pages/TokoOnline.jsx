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
      <div className="max-w-7xl mx-auto px-4 pt-12">
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
                <div className=" p-3 rounded-md">
                  <img src={shopeeLogo} alt="Shopee" className="h-30 w-30" />
                </div>
                {/* <span className="mt-2 text-orange-500">Shopee</span> */}
              </a>
              
              <a href="#" className="flex flex-col items-center">
                <div className=" p-3 rounded-md">
                  <img src={tokopediaLogo} alt="Tokopedia" className="h-30 w-30" />
                </div>
                {/* <span className="mt-2 text-green-600">Tokopedia</span> */}
              </a>
              
              <a href="#" className="flex flex-col items-center">
                <div className=" p-3 rounded-md">
                  <img src={tiktokLogo} alt="TikTok Shop" className="h-30 w-30" />
                </div>
                {/* <span className="mt-2 text-black">TikTokShop</span> */}
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-end">
            <div className="relative">
              <div className="absolute z-0 left-8 top-9 bg-lime-400 rounded-full w-64 h-64"></div>
              <div className="overflow-hidden relative">
                <img 
                    src={handlePhone} 
                    alt="Woman holding smartphone showing Mitrasana app" 
                    className="h-[50rem] w-auto relative -top-35 -right-10 z-10 transition-transform duration-300 hover:scale-105"
                    style={{ 
                        // marginTop: '-.5rem',  /* Memotong dari atas */
                        marginBottom: '-17rem' /* Memotong dari bawah */
                      }}
                    // style={{ clipPath: 'inset(15% 0 0 0)' }}
                    // className="h-auto w-96 relative -top-30 -right-20 z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokoOnline;