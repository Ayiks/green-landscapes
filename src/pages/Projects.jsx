import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, Filter, TreePine, Droplets, BookOpen, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Mock Data (Replace with real data later) ---
const projectsData = [
  {
    id: 1,
    title: "Northern Green Belt Restoration",
    category: "Reforestation",
    location: "Tamale, Northern Region",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?auto=format&fit=crop&q=80",
    impact: "5,000 Trees Planted",
    description: "Restoring degraded savannas to combat desertification and provide shade for local farming communities.",
    icon: <TreePine size={18} />
  },
  {
    id: 2,
    title: "Clean Water for Aburi Schools",
    category: "Community",
    location: "Aburi, Eastern Region",
    image: "https://images.unsplash.com/photo-1584972686776-3c252e07802b?auto=format&fit=crop&q=80",
    impact: "3 Schools Served",
    description: "Installing mechanized boreholes to ensure students have access to clean, safe drinking water.",
    icon: <Droplets size={18} />
  },
  {
    id: 3,
    title: "Eco-Farming Workshop",
    category: "Education",
    location: "Volta Region",
    image: "https://images.unsplash.com/photo-1621961458348-e53b89b68233?auto=format&fit=crop&q=80",
    impact: "200 Farmers Trained",
    description: "Teaching sustainable farming techniques that prevent soil erosion and increase crop yield.",
    icon: <BookOpen size={18} />
  },
  {
    id: 4,
    title: "Solar Lighting Initiative",
    category: "Community",
    location: "Upper West Region",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80",
    impact: "50 Homes Lit",
    description: "Providing solar lamps to off-grid communities to support evening studies and safety.",
    icon: <Sun size={18} />
  },
  {
    id: 5,
    title: "Mangrove Protection Project",
    category: "Reforestation",
    location: "Coastal Belt",
    image: "https://images.unsplash.com/photo-1619665567528-98442845c48b?auto=format&fit=crop&q=80",
    impact: "10 Hectares Protected",
    description: "Protecting vital mangrove ecosystems to support fish breeding and prevent coastal erosion.",
    icon: <TreePine size={18} />
  }
];

// Categories for the filter buttons
const categories = ["All", "Reforestation", "Community", "Education"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter logic
  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <div className="flex flex-col w-full pt-20">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-brand-green text-white py-16 text-center relative overflow-hidden">
         {/* Background pattern opacity */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h1>
            <p className="text-lg text-brand-bg/80 max-w-2xl mx-auto">
              See how we are transforming landscapes and lives across the region.
            </p>
         </div>
      </section>

      {/* --- FILTER BAR --- */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4 shadow-sm">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300
                ${activeCategory === cat 
                  ? 'bg-brand-green text-white shadow-md transform scale-105' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* --- PROJECTS GRID --- */}
      <section className="py-16 bg-brand-bg min-h-screen">
        <div className="container mx-auto px-6">
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group"
                >
                  {/* Image Area */}
                  <div className="h-56 overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-brand-green flex items-center gap-1 shadow-sm">
                      {project.icon} {project.category}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">
                      <MapPin size={14} /> {project.location}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-brand-green transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    {/* Impact Metric (Important for Donors) */}
                    <div className="bg-brand-bg p-3 rounded-lg border border-brand-green/10 mb-6">
                      <p className="text-xs text-gray-500 uppercase font-bold">Key Impact</p>
                      <p className="text-brand-earth font-bold text-lg">{project.impact}</p>
                    </div>

                    <button className="w-full py-3 border border-brand-green text-brand-green font-bold rounded-xl hover:bg-brand-green hover:text-white transition-all flex items-center justify-center gap-2">
                      View Details <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Fallback if no projects found */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <Filter size={48} className="mx-auto mb-4 opacity-20"/>
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="bg-brand-earth text-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4">Want to support a specific project?</h2>
          <p className="mb-8 opacity-90">Contact us to learn how you can sponsor a site.</p>
          <Link to="/contact" className="px-8 py-3 bg-white text-brand-earth rounded-full font-bold hover:bg-gray-100 transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Projects;