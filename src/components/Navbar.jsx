import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, TreePine } from 'lucide-react';
// import logo from '../assets/gli-logo.jpg'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for Glassmorphism
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when location changes
  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    closeMenu();
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Impact', path: '/impact' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-brand-green text-white rounded-lg group-hover:bg-brand-light transition-colors">
            <TreePine size={24} /> 
          </div>
          <span className={`font-bold text-xl tracking-wide ${scrolled ? 'text-brand-green' : 'text-brand-green md:text-white'}`}>
            Green Landscapes
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`font-medium text-sm tracking-wide transition-colors hover:text-brand-light
                ${location.pathname === link.path ? 'text-brand-green font-bold' : scrolled ? 'text-gray-700' : 'text-gray-500'}
              `}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="px-6 py-2.5 bg-brand-earth text-white rounded-full font-medium text-sm hover:bg-[#7a5e45] transition-transform hover:-translate-y-0.5 shadow-lg">
            Donate
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className={`md:hidden p-2 rounded-md ${scrolled ? 'text-gray-800' : 'text-gray-500'}`}
        >
          {isOpen ? <X size={28} className="text-gray-800" /> : <Menu size={28} />}
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
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-lg font-medium text-gray-700 hover:text-brand-green py-2 border-b border-gray-50 last:border-0"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="mt-2 w-full text-center py-3 bg-brand-green text-white rounded-lg font-bold">
                Donate Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;