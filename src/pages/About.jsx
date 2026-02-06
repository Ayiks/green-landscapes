import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, CheckCircle, Users, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  // Animation variants for staggered reveals
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex flex-col w-full pt-20">
      
      {/* --- HERO BANNER --- */}
      <section className="bg-brand-green text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Our Story
          </motion.h1>
          <p className="text-xl text-brand-bg/90 max-w-2xl mx-auto">
            From humble beginnings to a movement for sustainable change.
          </p>
        </div>
      </section>

      {/* --- THE NARRATIVE (Legibility & Trust) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1584972686776-3c252e07802b?auto=format&fit=crop&q=80" 
                alt="Community Meeting" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Trust Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border-l-4 border-brand-earth max-w-xs">
              <p className="text-brand-green font-bold text-lg mb-1">"Boots on the Ground"</p>
              <p className="text-sm text-gray-500">We work directly with locals, ensuring every donation reaches the field.</p>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-brand-light font-bold uppercase tracking-widest mb-2 text-sm">Our History</h2>
            <h3 className="text-3xl font-bold text-brand-green mb-6">Bridging the Gap Between Nature & People</h3>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Green Landscapes Initiatives was founded with a singular purpose: to restore the bond between communities and their environment. We realized that true conservation isn't just about planting trees—it's about empowering the people who live among them.
              </p>
              <p>
                Over the years, we have grown from a small volunteer group into a trusted NGO, partnering with international organizations to deliver scalable, high-impact projects.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- MISSION & VISION --- */}
      <section className="py-24 bg-brand-bg">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Mission Card */}
            <motion.div variants={itemVariants} className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-brand-green hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-green mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To increase public awareness and visibility for environmental health through impactful, community-led projects that restore natural landscapes.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div variants={itemVariants} className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-brand-earth hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-earth/10 rounded-full flex items-center justify-center text-brand-earth mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-green mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                We envision a world where natural landscapes are fully restored and protected, providing a sustainable foundation for future generations to thrive.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="py-24 bg-brand-green text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-brand-bg/80">The principles that guide every decision we make.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white/10 rounded-full mb-6">
                <CheckCircle size={32} className="text-brand-earth" />
              </div>
              <h4 className="text-xl font-bold mb-3">Integrity</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                We operate with complete honesty. We provide clear, accessible reports to ensure our partners see exactly where their contributions go.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="p-4 bg-white/10 rounded-full mb-6">
                <Users size={32} className="text-brand-earth" />
              </div>
              <h4 className="text-xl font-bold mb-3">Collaboration</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                We believe in the power of partnership. We work alongside local leaders and global sponsors to scale our reach.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="p-4 bg-white/10 rounded-full mb-6">
                <Sprout size={32} className="text-brand-earth" />
              </div>
              <h4 className="text-xl font-bold mb-3">Sustainability</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                We don't just fix problems for today; we build systems that will keep our landscapes green for decades to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- JOIN US CTA --- */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-green mb-6">Be Part of Our Journey</h2>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="px-8 py-3 bg-brand-green text-white rounded-full font-bold hover:bg-brand-light transition-colors">
              Contact Us
            </Link>
            <Link to="/projects" className="px-8 py-3 border border-brand-green text-brand-green rounded-full font-bold hover:bg-brand-bg transition-colors">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;