
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white border-b border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-1 cursor-pointer">
              <span className="text-2xl font-semibold tracking-tight">
                <span className="text-blue-600">Factory</span>
                <span className="text-gray-600">Stack</span>
              </span>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <a href="#soluciones" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Soluciones</a>
              <a href="#herramientas" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Herramientas</a>
              <a href="#precios" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Precios</a>
              <a href="#recursos" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Recursos</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden sm:block text-blue-600 font-medium px-4 py-2 hover:bg-blue-50 rounded-md transition-colors text-sm">
              Agendar una reunión
            </button>
            <button className="bg-google-blue text-white px-5 py-2.5 rounded-md font-medium text-sm hover:bg-blue-700 transition-shadow shadow-sm hover:shadow-md">
              Auditoría gratuita
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
