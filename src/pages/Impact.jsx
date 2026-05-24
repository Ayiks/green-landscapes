import React from 'react';
import { motion } from 'framer-motion';
import { Download, TrendingUp, Users, Sprout, Map, CheckCircle } from 'lucide-react';

const Impact = () => {
  return (
    <div className="flex flex-col w-full pt-20">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-brand-green text-white py-12 sm:py-16 md:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
          >
            Real Impact, Real Data
          </motion.h1>
          <p className="text-base sm:text-lg text-brand-bg/80 max-w-2xl mx-auto">
            From Lofa to Sinoe, we monitor every seedling and support every farmer. 
            Transparency is the root of our success.
          </p>
        </div>
      </section>

      {/* --- KEY METRICS (Live Data from Profile) --- */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: "Seedling Survival Rate", value: "89%", icon: <TrendingUp className="text-brand-green" size={24}/>, desc: "4,897 of 5,500 indigenous trees survived" },
              { label: "Farmers Supported", value: "133", icon: <Users className="text-brand-green" size={24}/>, desc: "72 men and 61 women trained" },
              { label: "Seedlings Planted", value: "57k+", icon: <Sprout className="text-brand-green" size={24}/>, desc: "Including Cocoa, Cashew & Avocado" },
              { label: "Counties Reached", value: "7", icon: <Map className="text-brand-green" size={24}/>, desc: "Across Liberia's key landscapes" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-brand-bg border border-brand-green/10 text-center shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-brand-green mb-1">{stat.value}</h3>
                <p className="text-gray-800 font-bold uppercase text-xs tracking-wider mb-2">{stat.label}</p>
                <p className="text-gray-500 text-xs leading-tight">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRANSPARENCY & PARTNERS --- */}
      <section className="py-12 sm:py-16 md:py-20 bg-brand-bg">
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-brand-light font-bold uppercase tracking-widest mb-2 text-sm">Our Partners</h2>
            <h3 className="text-3xl font-bold text-brand-green mb-6">Trusted by Leaders in Conservation</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We work with major national and international organizations to deliver evidence-based programming. 
              Our funding models include project contracts and co-finance grants, ensuring every dollar is accounted for.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {["SESDev", "Proforest", "Siemenpuu Foundation", "FDA (Liberia)"].map((partner) => (
                 <span key={partner} className="px-4 py-2 bg-white rounded-full text-brand-green font-bold text-sm shadow-sm flex items-center gap-2">
                    <CheckCircle size={14}/> {partner}
                 </span>
              ))}
            </div>
          </div>

          {/* Downloadable Reports */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-t-4 border-brand-earth">
            <h4 className="text-xl font-bold text-brand-green mb-6 flex items-center gap-2">
              <Download size={20}/> Technical Reports
            </h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-brand-bg/50 transition-colors group cursor-pointer">
                 <div>
                   <p className="font-bold text-gray-800">Resource Governance Assessment</p>
                   <p className="text-xs text-gray-400">Lofa & Nimba County • PDF</p>
                 </div>
                 <span className="text-sm font-bold text-brand-earth group-hover:underline">View</span>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-brand-bg/50 transition-colors group cursor-pointer">
                 <div>
                   <p className="font-bold text-gray-800">Socio-Economic Baseline Report</p>
                   <p className="text-xs text-gray-400">Sinoe & Grand Gedeh • PDF</p>
                 </div>
                 <span className="text-sm font-bold text-brand-earth group-hover:underline">View</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;