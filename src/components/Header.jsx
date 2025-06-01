import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header1 = () => {
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

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center py-2">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="dist/assets/cleandive_logo-DWj-kn9b.png"
            alt="Clean Dive Logo"
            className="h-16 w-16 md:h-20 rounded-full"
          />
          <span className="font-bold text-2xl text-indigo-900 ml-2">Clean Dive</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Pricing", href: "/pricing" },
              { label: "Contact", href: "/contact" },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  to={link.href}
                  className={`font-medium transition-colors ${
                    isScrolled ? 'text-gray-800' : 'text-gray-800'
                  } hover:text-indigo-600`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-indigo-900 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white text-gray-800 shadow-lg">
          <ul className="py-4 space-y-2 px-4">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Pricing", href: "/pricing" },
              { label: "Contact", href: "/contact" },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  to={link.href}
                  className="block px-2 py-2 rounded hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                  onClick={() => setIsOpen(false)} // close menu after click
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header1;
