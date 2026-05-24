import React from 'react';
import { Link } from 'react-router-dom';
import { TreePine, MapPin, Mail, Phone, Facebook, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-green text-white pt-12 sm:pt-16 pb-8 border-t border-brand-light/20">
      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12">
        
        {/* Brand Column */}
        <div className="sm:col-span-2 md:col-span-1 space-y-4">
          <div className="flex items-center gap-2 font-bold text-2xl tracking-wide">
            <TreePine className="text-brand-earth" size={28} />
            <span>Green Landscapes</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Sustainable landscapes where socio-economic growth thrives in harmony with nature.
          </p>
          {/* Trust Signal: Registration Info */}
          <div className="text-xs text-brand-light/80 font-mono pt-2 border-t border-white/10">
            <p>Reg No: 052439868</p>
            <p>TIN: 501132570</p>
          </div>
          <div className="flex gap-4 pt-2">
            {/* WhatsApp is explicitly mentioned in docs */}
            <a href="https://wa.me/231888431534" className="p-2 bg-white/10 rounded-full hover:bg-brand-earth transition-colors" aria-label="WhatsApp"><MessageCircle size={18}/></a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-earth transition-colors" aria-label="Facebook"><Facebook size={18}/></a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-earth transition-colors" aria-label="LinkedIn"><Linkedin size={18}/></a>
          </div>
        </div>

        {/* Essential Pages */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-brand-earth">Essential Pages</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link to="/about" className="hover:text-white hover:translate-x-1 inline-block transition-all">Our Profile</Link></li>
            <li><Link to="/projects" className="hover:text-white hover:translate-x-1 inline-block transition-all">Projects & Impact</Link></li>
            <li><Link to="/impact" className="hover:text-white hover:translate-x-1 inline-block transition-all">Reports</Link></li>
            <li><Link to="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-all">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info (Trust Indicators) */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-brand-earth">Get in Touch</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <MapPin className="text-brand-earth shrink-0" size={18} />
              <span>72nd SKD Boulevard,<br/>Paynesville City, Montserrado<br/>Liberia</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-brand-earth shrink-0" size={18} />
              <span>+231 77 042 9791</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-brand-earth shrink-0" size={18} />
              <span>+231 88 843 1534 (WhatsApp)</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-brand-earth shrink-0" size={18} />
              <span className="break-all">greenlanscapes.ini@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-brand-earth">Stay Updated</h4>
          <p className="text-sm text-gray-300 mb-4">Subscribe to receive our annual reports and news from the field.</p>
          <form className="flex flex-col gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/10 border border-white/20 rounded px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-brand-earth"
            />
            <button className="bg-brand-earth text-white py-2 rounded text-sm font-semibold hover:bg-[#7a5e45] transition-colors cursor-pointer">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 pt-8 text-center">
        <p className="text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} Green Landscapes Initiatives. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;