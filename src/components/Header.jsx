import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Header component with sticky navigation and mobile responsiveness
// Features smooth scrolling and dynamic background on scroll
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 bg-white }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="src\photos\cleandive_logo.png" 
            alt="Clean Dive Logo" 
            className="h-20 w-20 md:h-24  rounded-full"
          />
          <span className="font-bold text-2xl text-indigo-900 ml-2">Clean Dive</span>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['services', 'about', 'why-us', 'contact'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => scrollToSection(item)}
                  className={`font-medium hover:text-indigo-600 transition-colors ${
                    isScrolled ? 'text-gray-800' : 'text-gray-800'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <button 
          className="md:hidden text-indigo-900 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24}  /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-gray-800 shadow-lg">
          <ul className="py-4">
            {['services', 'about', 'why-us', 'contact'].map((item) => (
              <li key={item} className="py-2">
                <button 
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;