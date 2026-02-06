import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TreePine, Users, Globe, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax-like fix */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-green/40 mix-blend-multiply z-10" />
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?auto=format&fit=crop&q=80" 
            alt="Green Landscape" 
            className="w-full h-full object-cover object-center scale-105"
          />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-20 text-center text-white mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-semibold tracking-wider mb-6">
              EST. 2014
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
              Restoring Nature, <br /> Empowering People.
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-100 font-light leading-relaxed drop-shadow-md">
              We bridge the gap between environmental conservation and community stability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/projects" className="group bg-brand-earth hover:bg-[#7a5e45] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                See Our Impact 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
              </Link>
              <Link to="/contact" className="px-8 py-4 rounded-full text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-brand-green transition-all backdrop-blur-sm">
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* --- QUICK STATS BAR --- */}
      <section className="bg-brand-green text-white py-12 relative z-20 -mt-2">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
          {[
            { label: 'Trees Planted', value: '50k+' },
            { label: 'Communities', value: '12' },
            { label: 'Volunteers', value: '1,200+' },
            { label: 'Years Active', value: '10+' }
          ].map((stat, i) => (
            <div key={i} className="px-2">
              <h3 className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</h3>
              <p className="text-brand-earth text-sm font-bold uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- INTRODUCTION (Trust & Legibility) --- */}
      <section className="py-24 bg-brand-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-brand-light font-bold uppercase tracking-widest mb-3 text-sm">Who We Are</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-green mb-8 leading-snug">
              A dedicated NGO focused on creating <span className="text-brand-earth">sustainable green landscapes</span> for future generations.
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Green Landscapes Initiatives was born from a desire to see our natural world thrive alongside the people who depend on it. Through transparency, integrity, and boots-on-the-ground action, we turn donations into tangible environmental change.
            </p>
            <Link to="/about" className="text-brand-green font-bold hover:text-brand-earth transition-colors border-b-2 border-brand-green hover:border-brand-earth pb-1 text-lg">
              Read Our Full Story
            </Link>
          </div>
        </div>
      </section>

      {/* --- FEATURED AREAS --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-brand-bg border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-green shadow-sm mb-6">
                <Globe size={28} />
              </div>
              <h4 className="text-xl font-bold text-brand-green mb-3">Environmental Restoration</h4>
              <p className="text-gray-600 mb-6">Reclaiming degraded lands and restoring biodiversity through strategic planting.</p>
              <Link to="/projects" className="text-sm font-bold text-brand-earth hover:text-brand-green">LEARN MORE &rarr;</Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-brand-bg border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-green shadow-sm mb-6">
                <Users size={28} />
              </div>
              <h4 className="text-xl font-bold text-brand-green mb-3">Community Empowerment</h4>
              <p className="text-gray-600 mb-6">Training local farmers and youth in sustainable practices to ensure longevity.</p>
              <Link to="/projects" className="text-sm font-bold text-brand-earth hover:text-brand-green">LEARN MORE &rarr;</Link>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-brand-bg border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-green shadow-sm mb-6">
                <TreePine size={28} />
              </div>
              <h4 className="text-xl font-bold text-brand-green mb-3">Climate Action</h4>
              <p className="text-gray-600 mb-6">Advocating for policies and practices that reduce carbon footprints locally.</p>
              <Link to="/projects" className="text-sm font-bold text-brand-earth hover:text-brand-green">LEARN MORE &rarr;</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PRE-FOOTER CTA --- */}
      <section className="py-24 relative overflow-hidden flex items-center justify-center bg-brand-green">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
         <div className="container relative z-10 px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to make a difference?</h2>
            <p className="text-xl text-brand-bg/90 mb-8 max-w-2xl mx-auto">
              Join our list of partners and donors who are actively shaping a greener future.
            </p>
            <Link to="/contact" className="inline-block bg-white text-brand-green font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-brand-earth hover:text-white transition-all transform hover:-translate-y-1">
              Get Involved
            </Link>
         </div>
      </section>

    </div>
  );
};

export default Home;