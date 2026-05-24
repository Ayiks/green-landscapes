import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Award, Briefcase, Heart, BookOpen, Anchor, Map, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col w-full pt-20">
      
      {/* --- HERO BANNER --- */}
      <section className="bg-brand-green text-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621961458348-e53b89b68233?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4"
          >
            Organizational Profile
          </motion.h1>
          <p className="text-base sm:text-lg md:text-xl text-brand-bg/90 max-w-2xl mx-auto">
            Operational since October 2020 • Tax-Exempt • Mission Driven
          </p>
        </div>
      </section>

      {/* --- LEGAL STATUS & OVERVIEW (Trust Anchors) --- */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div>
            <h2 className="text-brand-light font-bold uppercase tracking-widest mb-2 text-sm">About GLI</h2>
            <h3 className="text-3xl font-bold text-brand-green mb-6">A Response to Landscape Degradation</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Green Landscapes Initiatives (GLI) is a Liberian not-for-profit organization, formally incorporated in June 2020 under the Liberian Associations Law of 1976.
              </p>
              <p>
                GLI was established in response to the growing degradation of Liberia’s forest landscapes. Our mission is to promote responsible natural resource development that harmonizes ecological integrity and sustainability with socio-economic growth.
              </p>
            </div>
            
            {/* Compliance Box */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-brand-bg border-l-4 border-brand-earth rounded-r-xl">
               <h4 className="font-bold text-brand-green mb-2 flex items-center gap-2 text-sm sm:text-base"><ShieldCheck size={18}/> Legal Standing</h4>
               <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
                 <li><strong>Registration No:</strong> 052439868</li>
                 <li><strong>Tax Identification No (TIN):</strong> 501132570</li>
                 <li><strong>Status:</strong> Tax-exempt, Perpetual Duration</li>
               </ul>
            </div>
          </div>

          <div className="relative mt-8 sm:mt-0">
             <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
                <img src="https://flegtvpafacility.org/wp-content/uploads/2019/01/ghana-liberia-forest-visit-story-710x375.jpg" alt="Liberian Forestry" className="w-full h-full object-cover"/>
             </div>
             <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-brand-green text-white p-4 sm:p-6 rounded-xl shadow-lg">
                <p className="font-bold text-lg sm:text-2xl">7 Counties</p>
                <p className="text-xs uppercase tracking-wide opacity-80">Operational Reach</p>
             </div>
          </div>
        </div>
      </section>

      {/* --- VISION & MISSION --- */}
      <section className="py-12 sm:py-16 md:py-20 bg-brand-bg">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-brand-green"
            >
              <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-green mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed italic">
                "Create sustainable landscapes where socio-economic growth thrives in harmony with nature."
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-brand-earth"
            >
              <div className="w-16 h-16 bg-brand-earth/10 rounded-full flex items-center justify-center text-brand-earth mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-green mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To drive responsible natural resources development across African landscapes, enhancing livelihoods and addressing environmental and socio-economic challenges through collaborative, evidence-based partnerships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- OUR JOURNEY --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-green mb-4">Our Journey</h2>
            <p className="text-gray-600">From humble beginnings to a trusted partner in landscape restoration.</p>
          </div>
          
          <div className="relative border-l-2 border-brand-green/20 pl-8 ml-4 md:ml-auto md:mr-auto md:max-w-2xl space-y-12">
             {/* Timeline Item 1 */}
             <div className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 bg-brand-green rounded-full border-4 border-white"></span>
                <h4 className="text-xl font-bold text-brand-green mb-2">The Beginning</h4>
                <p className="text-gray-600">
                  With modest resources and a clear vision, we began by partnering with local consultants and community leaders to pilot regenerative efforts, including support to participatory land use planning in REDD+ priority landscapes.
                </p>
             </div>
             {/* Timeline Item 2 */}
             <div className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 bg-brand-earth rounded-full border-4 border-white"></span>
                <h4 className="text-xl font-bold text-brand-green mb-2">Building Capacity</h4>
                <p className="text-gray-600">
                  Early support from Proforest Initiative Africa and SESDev helped shape our pilots into structured programs. We blended practical restoration with inclusive governance.
                </p>
             </div>
             {/* Timeline Item 3 */}
             <div className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 bg-brand-green rounded-full border-4 border-white"></span>
                <h4 className="text-xl font-bold text-brand-green mb-2">Transformation</h4>
                <p className="text-gray-600">
                  Over five years, we have transformed degraded terrain and empowered people. Communities now lead forest governance, enforcement structures are active, and livelihoods are diversifying.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="py-20 bg-brand-green text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <motion.div 
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { title: "Evidence-Based", icon: <BookOpen size={24}/> },
              { title: "Mission Driven", icon: <Target size={24}/> },
              { title: "Trusted Partner", icon: <ShieldCheck size={24}/> },
              { title: "Transparency", icon: <Eye size={24}/> },
              { title: "Efficiency", icon: <Activity size={24}/> },
              { title: "Innovation", icon: <Award size={24}/> },
              { title: "Responsiveness", icon: <Heart size={24}/> },
              { title: "Independent Voice", icon: <Anchor size={24}/> },
            ].map((value, i) => (
              <motion.div variants={itemVariants} key={i} className="flex flex-col items-center text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                 <div className="mb-3 text-brand-earth">{value.icon}</div>
                 <h4 className="font-semibold text-sm">{value.title}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- GOVERNANCE STRUCTURE --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-3xl font-bold text-brand-green mb-4">Governance & Leadership</h2>
           <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
             Though young, GLI is led by professionals with decades of experience in natural resource governance.
           </p>

           <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: "Board of Trustees", desc: "Strategic direction & fundraising oversight" },
                { title: "Management Team", desc: "Day-to-day operations & oversight" },
                { title: "Technical Team", desc: "Program design, implementation & evaluation" },
                { title: "Administrative Team", desc: "Internal operations & logistics" }
              ].map((team, i) => (
                <div key={i} className="p-6 border border-gray-100 rounded-xl shadow-sm bg-brand-bg hover:shadow-md transition-shadow">
                   <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-green mx-auto mb-4 shadow-sm">
                      <Briefcase size={20}/>
                   </div>
                   <h4 className="font-bold text-brand-green mb-2">{team.title}</h4>
                   <p className="text-sm text-gray-500">{team.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-brand-green mb-6">Partner With Us</h2>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="px-8 py-3 bg-brand-green text-white rounded-full font-bold hover:bg-brand-light transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;