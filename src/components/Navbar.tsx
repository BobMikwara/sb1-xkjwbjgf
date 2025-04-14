import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Compass } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Compass className={`h-8 w-8 ${isScrolled ? 'text-amber-600' : 'text-white'}`} />
              <span className={`ml-2 text-xl font-semibold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                Olkinyei
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-amber-500`}>Home</Link>
            <Link to="/about" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-amber-500`}>About Us</Link>
            <Link to="/services" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-amber-500`}>Services</Link>
            <Link to="/tours" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-amber-500`}>Tours</Link>
            <Link to="/gallery" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-amber-500`}>Gallery</Link>
            <Link to="/contact" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-amber-500`}>Contact</Link>
            <Link 
              to="/book-now"
              className="bg-amber-500 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-colors duration-300"
            >
              Book Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-amber-500">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-amber-500">About Us</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-amber-500">Services</Link>
            <Link to="/tours" className="block px-3 py-2 text-gray-700 hover:text-amber-500">Tours</Link>
            <Link to="/gallery" className="block px-3 py-2 text-gray-700 hover:text-amber-500">Gallery</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-amber-500">Contact</Link>
            <Link 
              to="/book-now"
              className="block px-3 py-2 bg-amber-500 text-white text-center rounded-full hover:bg-amber-600"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;