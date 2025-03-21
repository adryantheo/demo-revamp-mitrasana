import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import useScaledView from '../hooks/useScaledView';

/**
 * Main layout component that applies scaling to mimic the 80% zoom view
 * on a 27-inch monitor for all screen sizes
 */
const Layout = ({ children }) => {
  const { containerClass } = useScaledView();
  
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow pt-20 md:pt-24">
        <div className={`${containerClass} px-4 sm:px-6 lg:px-8 mx-auto`}>
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;