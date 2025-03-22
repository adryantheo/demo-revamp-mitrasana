const DropdownMenu = ({ isOpen, onMouseEnter, onMouseLeave, isTokoOnline, items }) => {
  if (!isOpen) return null; // Early return if not open
  
  // Add null checks for items to prevent errors
  const mainTitle = items?.mainTitle || '';
  const mainDescription = items?.mainDescription || '';
  const categories = items?.categories || [];
  const submenus = items?.submenus || [];
  
  return (
    <div 
      className="absolute top-full left-0 w-full bg-white bg-opacity-80 shadow-lg p-4 md:p-6 z-50 backdrop-blur-md"
      onMouseEnter={onMouseEnter} 
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto flex flex-col md:flex-row gap-4 md:gap-8">
        {/* Left Column (Main Content) */}
        <div className="md:border-r md:border-gray-200 md:pr-8 w-full md:w-1/2">
          {/* <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#324F35] mb-2 md:mb-3">{mainTitle}</h2> */}
          {/* <p className="text-[#707070] mb-4 md:mb-6 text-sm md:text-base">{mainDescription}</p> */}
          
          {categories.map((category, index) => (
            <div key={index}>
              <h1 className="text-[#324F35] text-lg md:text-xl">{category.title}</h1>
              <p className="pt-2 md:pt-4 text-base md:text-lg lg:text-xl font-normal">{category.descriptions}</p>
              <div className="my-3 md:my-4">
                <a href={category.cta_link} className="inline-block border border-gray-300 rounded px-4 py-1 md:px-6 md:py-2 text-sm md:text-base text-[#707070] hover:bg-[#a7cf46]">
                  {category.cta_text || "Lebih detail"}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column (Links) */}
        {isTokoOnline ? (
          <div className="w-full md:w-1/2 flex flex-wrap justify-center md:justify-start">
            {submenus.map((submenu, index) => (
              <img key={index} src={submenu.icon_path} alt={submenu.label || 'Toko icon'} className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 my-3 mx-3" />
            ))}
          </div>
        ) : (
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            {submenus.map((submenu, index) => (
              <a key={index} href={submenu.href} className="block text-base md:text-lg px-2 md:px-4 py-2 md:py-3 dropdown">
                {submenu.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;