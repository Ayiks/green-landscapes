import React from 'react';
import { motion } from 'framer-motion';
import { Download, TrendingUp, Users, Heart, Check, FileText } from 'lucide-react';

const Impact = () => {
  return (
    <div className="flex flex-col w-full pt-20">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-brand-green text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Impact
          </motion.h1>
          <p className="text-lg text-brand-bg/80 max-w-2xl mx-auto">
            Transparency is our core value. See how your contributions translate into real-world change.
          </p>
        </div>
      </section>

      {/* --- KEY METRICS (Animated) --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Survival Rate of Trees", value: "85%", icon: <TrendingUp className="text-brand-green" size={24}/> },
              { label: "Women Empowered", value: "450+", icon: <Users className="text-brand-green" size={24}/> },
              { label: "Community Projects", value: "12", icon: <Check className="text-brand-green" size={24}/> }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-brand-bg border border-brand-green/10 text-center shadow-sm"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-4xl font-bold text-brand-green mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium uppercase text-sm tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINANCIAL TRANSPARENCY (Trust Factor) --- */}
      <section className="py-20 bg-brand-bg">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brand-light font-bold uppercase tracking-widest mb-2 text-sm">Transparency</h2>
            <h3 className="text-3xl font-bold text-brand-green mb-6">Where Your Money Goes</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe in complete openness. Every dollar donated is meticulously allocated to maximize impact on the ground, with minimal administrative overhead.
            </p>
            
            {/* Simple Animated Bar Chart */}
            <div className="space-y-6">
              {[
                { label: "Direct Project Costs", width: "80%" },
                { label: "Community Training", width: "15%" },
                { label: "Administration", width: "5%" }
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm font-bold text-gray-700 mb-1">
                    <span>{item.label}</span>
                    <span>{item.width}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: item.width }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-brand-green rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-earth">
            <h4 className="text-xl font-bold text-brand-green mb-6 flex items-center gap-2">
              <FileText size={20}/> Annual Reports
            </h4>
            <div className="space-y-4">
              {[2023, 2022, 2021].map((year) => (
                <div key={year} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-brand-bg/50 transition-colors group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-green/10 rounded-lg text-brand-green">
                      <Download size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{year} Impact Report</p>
                      <p className="text-xs text-gray-400">PDF • 2.4 MB</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-brand-earth group-hover:underline">Download</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SUCCESS STORY HIGHLIGHT --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
           <h2 className="text-center text-3xl font-bold text-brand-green mb-12">Voices from the Field</h2>
           <div className="bg-brand-green rounded-3xl p-8 md:p-16 text-white text-center relative overflow-hidden">
              <Heart className="absolute top-8 left-8 text-white/10" size={120} />
              <div className="relative z-10 max-w-3xl mx-auto">
                 <p className="text-xl md:text-2xl font-light italic mb-8 leading-relaxed">
                   "Before the GLI water project, our children walked 5km every morning before school. Now, they have clean water right in the schoolyard, and attendance has doubled."
                 </p>
                 <div className="font-bold text-lg">Aretha Mensah</div>
                 <div className="text-brand-earth text-sm uppercase font-bold tracking-wider">Headmistress, Aburi District School</div>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Impact;