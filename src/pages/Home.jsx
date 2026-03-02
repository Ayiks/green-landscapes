import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TreePine, Users, Sprout, ChevronDown, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-green/50 mix-blend-multiply z-10" />
          <img 
            src="https://www.undp.org/sites/g/files/zskgke326/files/2025-05/joanna-unsplash.png" 
            alt="Liberian Forest Landscape" 
            className="w-full h-full object-cover object-center scale-105"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center text-white mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* <span className="inline-block py-1 px-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold tracking-widest uppercase mb-6">
              Est. 2020 • LBR No. 052439868
            </span> */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Socio-Economic Growth in <br /> Harmony with Nature
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-100 font-light leading-relaxed drop-shadow-md">
              Promoting responsible natural resource development across Liberia through evidence-based programming and community empowerment.
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

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* --- TRUST STRIP (Partners) --- */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
            Trusted Partners & Collaborators
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
             <img 
               src="/images/logos/SESDev.jpeg" 
               alt="SESDev Logo" 
               className="h-12 md:h-16 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
               onError={(e) => {
                 e.target.onerror = null; 
                 e.target.src = "https://via.placeholder.com/150x60/f3f4f6/9ca3af?text=SESDev";
               }}
             />
             
             <img 
               src="/images/logos/Simenpuu.jpeg" 
               alt="Siemenpuu Foundation Logo" 
               className="h-12 md:h-16 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
               onError={(e) => {
                 e.target.onerror = null; 
                 e.target.src = "https://via.placeholder.com/180x60/f3f4f6/9ca3af?text=Siemenpuu";
               }}
             />
             
             <img 
               src="/images/logos/Proforest.png" 
               alt="Proforest Logo" 
               className="h-12 md:h-16 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
               onError={(e) => {
                 e.target.onerror = null; 
                 e.target.src = "https://via.placeholder.com/150x60/f3f4f6/9ca3af?text=Proforest";
               }}
             />
             
             <img 
               src="/assets/logos/fda-liberia.png" 
               alt="FDA Liberia Logo" 
               className="h-12 md:h-16 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
               onError={(e) => {
                 e.target.onerror = null; 
                 e.target.src = "https://via.placeholder.com/150x60/f3f4f6/9ca3af?text=FDA+Liberia";
               }}
             />

          </div>
        </div>
      </section>

      {/* --- INTRODUCTION --- */}
      <section className="py-24 bg-brand-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-brand-light font-bold uppercase tracking-widest mb-3 text-sm">Who We Are</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-green mb-8 leading-snug">
              A Liberian not-for-profit driving <span className="text-brand-earth">responsible development.</span>
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Formally incorporated in June 2020, GLI was established in response to the growing degradation of Liberia’s forest landscapes. We bridge the gap between ecological integrity and socio-economic growth, ensuring that when nature succeeds, people flourish.
            </p>
            <Link to="/about" className="text-brand-green font-bold hover:text-brand-earth transition-colors border-b-2 border-brand-green hover:border-brand-earth pb-1 text-lg">
              Read Our Full Profile
            </Link>
          </div>
        </div>
      </section>

      {/* --- STRATEGIC OBJECTIVES --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-green">Our Strategic Focus</h2>
            <p className="text-gray-500 mt-2">How we drive change across 7 counties.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Objective 1 */}
            <motion.div whileHover={{ y: -10 }} className="p-8 rounded-2xl bg-brand-bg border border-gray-100 shadow-sm">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-green shadow-sm mb-6">
                <Users size={28} />
              </div>
              <h4 className="text-xl font-bold text-brand-green mb-3">Community Empowerment</h4>
              <p className="text-gray-600 text-sm">Empowering rural communities with sustainable livelihoods and monitoring capacity to manage their own resources.</p>
            </motion.div>

            {/* Objective 2 */}
            <motion.div whileHover={{ y: -10 }} className="p-8 rounded-2xl bg-brand-bg border border-gray-100 shadow-sm">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-green shadow-sm mb-6">
                <TreePine size={28} />
              </div>
              <h4 className="text-xl font-bold text-brand-green mb-3">Landscape Restoration</h4>
              <p className="text-gray-600 text-sm">Facilitating landscape approaches and integrated wetlands/watershed management for ecological integrity.</p>
            </motion.div>

            {/* Objective 3 */}
            <motion.div whileHover={{ y: -10 }} className="p-8 rounded-2xl bg-brand-bg border border-gray-100 shadow-sm">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-green shadow-sm mb-6">
                <Sprout size={28} />
              </div>
              <h4 className="text-xl font-bold text-brand-green mb-3">Responsible Production</h4>
              <p className="text-gray-600 text-sm">Supporting private sector and smallholders to adopt best management practices and produce responsibly.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PRE-FOOTER CTA --- */}
      <section className="py-24 relative overflow-hidden flex items-center justify-center bg-brand-green">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
         <div className="container relative z-10 px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Join our mission.</h2>
            <p className="text-xl text-brand-bg/90 mb-8 max-w-2xl mx-auto">
              Collaborate with us to align socio-economic development with ecological stewardship.
            </p>
            <Link to="/contact" className="inline-block bg-white text-brand-green font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-brand-earth hover:text-white transition-all transform hover:-translate-y-1">
              Contact Us
            </Link>
         </div>
      </section>

    </div>
  );
};

export default Home;