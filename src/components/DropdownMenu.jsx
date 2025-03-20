 const DropdownMenu = ({ isOpen, onMouseEnter, onMouseLeave, isTokoOnline, items }) => {
    return (
      isOpen && (
        <div 
          className="absolute top-full left-0 w-full bg-white bg-opacity-80 shadow-lg p-6 z-50 backdrop-blur-md"
          onMouseEnter={onMouseEnter} 
          onMouseLeave={onMouseLeave}
        >
          <div className="container mx-auto flex gap-8">
            {/* Kolom Kiri (Main Content) */}
            <div className="border-r border-gray-200 pr-8 w-1/2">
              <h2 className="text-3xl font-medium text-[#324F35] mb-3">{items.mainTitle}</h2>
              <p className="text-[#707070] mb-6">{items.mainDescription}</p>
              
             {items.categories.map((category) => (
                 <div>
                     <h1 className="text-[#324F35]">{category.title}</h1>
                     <p className="pt-4 text-xl font-normal" >{category.descriptions}</p>
                     <br /> 
                     <a href={category.cta_link} className="inline-block border border-gray-300 rounded px-6 py-2 text-[#707070] hover:bg-[#a7cf46]">
                        {category.cta_text || "Lebih detail"}
                    </a>
                 </div>
               ))}
              
            </div>
    
            {/* Kolom Kanan (Links) */}

            {isTokoOnline ?
            <div className="w-1/2 flex justify-start">
               {items.submenus.map((submenu, index) => (
                  <img key={index} src={submenu.icon_path} alt="Tokopedia" className="h-24 w-24 my-5 mx-5" />
               ))}
            </div>
            :
            <div className="w-1/2 flex flex-col justify-start">
               {items.submenus.map((submenu, index) => (
                 <a key={index} href={submenu.href} className="block text-lg px-4 py-3 dropdown">
                   {submenu.label}
                 </a>
               ))}
            </div>
            }
            
          </div>
        </div>
      )
    );
  };
  
  export default DropdownMenu;