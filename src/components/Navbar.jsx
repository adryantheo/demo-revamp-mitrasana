import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DropdownMenu from "./DropdownMenu"; 
import dropdownConfig from "../helpers/configDropdown"; // Import konfigurasi dropdown
import LogoMitrasana from '../assets/static/logo_mitrasana.png'

const Navbar = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  let timeoutId;

  const navItems = [
    { id: 'tentang-kami', label: 'Tentang Kami', path: '/tentang-kami' },
    { id: 'produk-layanan', label: 'Produk & Layanan', path: '/produk-layanan' },
    { id: 'jaringan', label: 'Jaringan', path: '/jaringan' },
    { id: 'toko-online', label: 'Toko Online', path: '/toko-online' },
    { id: 'promo', label: 'Promo', path: '/promo' },
    { id: 'artikel', label: 'Artikel', path: '/artikel' },
    { id: 'karir', label: 'Karir', path: '/karir' }
  ];

  useEffect(() => {
    const path = location.pathname;
    const currentPage = navItems.find(item => path.includes(item.id));
    if (currentPage) {
      setActivePage(currentPage.id);
    } else if (path === '/' || path === '') {
      // Default to Tentang Kami if on homepage
      setActivePage(null);
    }
  }, [location.pathname]);

  const handleMouseEnter = (menu) => {
    clearTimeout(timeoutId); 
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setActiveMenu(null);
    }, 500);
  };

  return (
    <nav className="bg-white fixed top-0 left-0 w-full shadow-md z-50">
      {/* Panggil DropdownMenu Sekali Saja */}
      {activeMenu && (
        <DropdownMenu 
          isOpen={true} 
          onMouseEnter={() => handleMouseEnter(activeMenu)}
          onMouseLeave={handleMouseLeave}
          isTokoOnline={activeMenu === "tokoOnline"}
          items={dropdownConfig[activeMenu] || { categories: [], submenus: [] }} 
        />
      )}

      <div className="container mx-auto flex justify-between items-center ">
        <div className="flex item-center">
          <a href="/">
            <img src={LogoMitrasana} alt="logo_mitrasana" className="h-32" />
          </a>
          {/* <a href="/" className="text-2xl font-bold text-[#324F35]">MITRASANA</a> */}
        </div>
        <ul className="flex space-x-6">
          {/* Tentang Kami */}
          <li 
            className="relative"
            onMouseEnter={() => handleMouseEnter("tentangKami")}
            onMouseLeave={handleMouseLeave}
          >
            <a 
                href="/tentang-kami"
                className={`py-2 ${
                  activePage === "tentang-kami"
                    ? 'text-[#324F35] text-xl border-b-2 border-[#324F35] font-semibold' 
                    : 'text-[#707070] text-xl hover:text-[#324F35] hover:border-b-2 hover:border-[#324F35] hover:font-semibold'
                }`}
              >
              Tentang Kami
            </a>
          </li>

          {/* Produk & Layanan */}
          <li 
            className="relative"
            onMouseEnter={() => handleMouseEnter("produkLayanan")}
            onMouseLeave={handleMouseLeave}
          >
            <a 
                href="/produk-layanan"
                className={`py-2 ${
                  activePage === "produk-layanan"
                    ? 'text-[#324F35] text-xl border-b-2 border-[#324F35] font-semibold' 
                    : 'text-[#707070] text-xl hover:text-[#324F35] hover:border-b-2 hover:border-[#324F35] hover:font-semibold'
                }`}
              >
              Produk & Layanan
            </a>
          </li>

          {/* Menu lainnya */}
          <li>
            <a 
              href="/jaringan"
              className={`py-2 ${
                activePage === "jaringan"
                  ? 'text-[#324F35] text-xl border-b-2 border-[#324F35] font-semibold' 
                  : 'text-[#707070] text-xl hover:text-[#324F35] hover:border-b-2 hover:border-[#324F35] hover:font-semibold '
              }`}
            >
              Jaringan
            </a>
          </li>

          <li 
            className="relative"
            onMouseEnter={() => handleMouseEnter("tokoOnline")}
            onMouseLeave={handleMouseLeave}
          >
            <a 
                href="/toko-online"
                className={`py-2 ${
                  activePage === "toko-online"
                    ? 'text-[#324F35] text-xl border-b-2 border-[#324F35] font-semibold' 
                    : 'text-[#707070] text-xl hover:text-[#324F35] hover:border-b-2 hover:border-[#324F35] hover:font-semibold '
                }`}
            >
              Toko Online
            </a>
          </li>

          <li 
            className="relative"
            onMouseEnter={() => handleMouseEnter("promo")}
            onMouseLeave={handleMouseLeave}
          >
            <a 
                href="/promo"
                className={`py-2 ${
                  activePage === "promo"
                    ? 'text-[#324F35] text-xl border-b-2 border-[#324F35] font-semibold' 
                    : 'text-[#707070] text-xl hover:text-[#324F35] hover:border-b-2 hover:border-[#324F35] hover:font-semibold '
                }`}
            >
              Promo
            </a>
          </li>

          <li 
            className="relative"
            onMouseEnter={() => handleMouseEnter("artikel")}
            onMouseLeave={handleMouseLeave}
          >
            <a 
                href="/artikel"
                className={`py-2 ${
                  activePage === "artikel"
                    ? 'text-[#324F35] text-xl border-b-2 border-[#324F35] font-semibold' 
                    : 'text-[#707070] text-xl hover:text-[#324F35] hover:border-b-2 hover:border-[#324F35] hover:font-semibold '
                }`}
            >
              Artikel
            </a>
          </li>

          <li 
            className="relative"
            onMouseEnter={() => handleMouseEnter("karir")}
            onMouseLeave={handleMouseLeave}
          >
            <a 
                href="/karir"
                className={`py-2 ${
                  activePage === "karir"
                    ? 'text-[#324F35] text-xl border-b-2 border-[#324F35] font-semibold' 
                    : 'text-[#707070] text-xl hover:text-[#324F35] hover:border-b-2 hover:border-[#324F35] hover:font-semibold '
                }`}
            >
              Karir
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

