import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Updates', path: '/updates' },
    { name: 'Impact', path: '/impact' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 glass ${scrolled ? 'py-2 sm:py-3 shadow-md' : 'py-3 sm:py-4 shadow-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">

        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/images/logos/GLIlogo.jpeg"
            alt="Green Landscapes Initiative Logo"
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain rounded"
          />
          <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl tracking-wide text-brand-green">
            Green Landscapes Initiative
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium text-sm tracking-wide transition-colors hover:text-brand-green
                ${location.pathname === link.path ? 'text-brand-green font-bold border-b-2 border-brand-earth pb-1' : 'text-gray-700'}
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 rounded-md text-brand-green"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 sm:p-6 gap-1 sm:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-base font-medium py-2 border-b border-gray-50 last:border-0 ${location.pathname === link.path ? 'text-brand-green font-bold' : 'text-gray-700 hover:text-brand-green'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
