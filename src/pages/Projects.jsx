import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Filter, ExternalLink, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// To add a real link for a project, replace its `link` value (currently "#")
// with the full URL (e.g. "https://example.com/report.pdf"). External links
// open in a new tab automatically.
const projectsData = [
  {
    id: 1,
    title: "Strengthening Sustainability Practices in Community Forests - Phase II",
    client: "Siemenpuu Foundation via SESDev",
    location: "Lofa (Salayea) & Nimba (Saniquelleh Mah)",
    category: "Community",
    image: "/images/projects/phase2-training.jpg",
    description: "A 34-month initiative (2022-2025) focused on sustainable management and bio-monitoring. Key achievements include planting 5,500 indigenous seedlings with an 89% survival rate and training 133 farmers in agroforestry.",
    link: "#"
  },
  {
    id: 2,
    title: "Environmental & Socio-economic Baseline Assessment (Southeast)",
    client: "Proforest",
    location: "Sinoe, Grand Gedeh & River Gee Counties",
    category: "Research",
    image: "https://images.unsplash.com/photo-1448375240586-dfd8f3793371?auto=format&fit=crop&q=80",
    description: "Documented prevailing ecological and socio-economic conditions to design tools for the Participatory Land Use Planning (PLUP) process. Enabled stakeholders to analyze land use activities effectively.",
    link: "#"
  },
  {
    id: 3,
    title: "Stakeholder Mapping and Awareness Creation (Northwest)",
    client: "Proforest",
    location: "Cape Mount, Gbarpolu & Lofa Counties",
    category: "Governance",
    image: "/images/projects/nw-stakeholder.jpg",
    description: "Undertook stakeholder analysis to identify main actors and marginalized groups for the LFSP-PLUP. Facilitated awareness raising and organized validation meetings at district and national levels.",
    link: "#"
  },
  {
    id: 4,
    title: "Strengthening Sustainability Practices in Community Forests - Phase I",
    client: "SESDev",
    location: "Lofa & Nimba Counties",
    category: "Governance",
    image: "/images/projects/phase2-planting.jpg",
    description: "Conducted natural resource governance assessments in 2 CFMAs. Verified legal and customary requirements and identified non-extractive income-generating practices for local communities.",
    link: "#"
  },
  {
    id: 5,
    title: "Mapping of Palm Oil Industry Actors in Liberia",
    client: "SESDev",
    location: "National (Liberia)",
    category: "Research",
    image: "https://images.unsplash.com/photo-1619665567528-98442845c48b?auto=format&fit=crop&q=80",
    description: "Identified key plantation groups, midstream actors (communities), and upstream financiers. Delivered a comprehensive mapping report to support industry transparency.",
    link: "#"
  },
  {
    id: 6,
    title: "Environmental & Socio-economic Baseline Assessment (Northwest)",
    client: "Proforest",
    location: "Cape Mount, Gbarpolu & Lofa Counties",
    category: "Research",
    image: "/images/projects/phase2-nursery.jpg",
    description: "Reviewed data and finalized tools for collecting environmental baselines. Supported the PLUP process by verifying field conditions and engaging national stakeholders.",
    link: "#"
  },
  {
    id: 7,
    title: "Stakeholder Mapping and Awareness Creation (Southeast)",
    client: "Proforest",
    location: "Sinoe, Grand Gedeh & River Gee",
    category: "Governance",
    image: "/images/projects/phase2-pitsawing.jpg",
    description: "Identified actors with direct interest in the PLUP process. Prepared awareness materials and ensured marginalized stakeholders were reached during the planning phase.",
    link: "#"
  }
];

const categories = ["All", "Governance", "Research", "Community"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  const renderLink = (project) => {
    const hasRealLink = project.link && project.link !== "#";
    const isExternal = hasRealLink && /^https?:\/\//.test(project.link);

    if (!hasRealLink) {
      return (
        <span className="w-full py-3 bg-gray-50 text-gray-400 font-bold rounded-xl flex items-center justify-center gap-2 text-sm cursor-not-allowed">
          Link coming soon
        </span>
      );
    }

    return (
      <a
        href={project.link}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="w-full py-3 bg-gray-50 text-brand-green font-bold rounded-xl hover:bg-brand-green hover:text-white transition-all flex items-center justify-center gap-2 text-sm group-hover:shadow-md"
      >
        <ExternalLink size={16} /> View Project Details
      </a>
    );
  };

  return (
    <div className="flex flex-col w-full pt-20">

      {/* --- HERO SECTION --- */}
      <section className="bg-brand-green text-white py-12 sm:py-16 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
         <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Our Projects</h1>
            <p className="text-base sm:text-lg text-brand-bg/80 max-w-2xl mx-auto">
              From baseline assessments to community forest management, explore our technical interventions across Liberia.
            </p>
         </div>
      </section>

      {/* --- FILTER BAR --- */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-3 sm:py-4 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-2 sm:gap-3">
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
      <section className="py-12 sm:py-16 bg-brand-bg min-h-screen">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
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
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group border border-gray-100"
                >
                  {/* Image Area */}
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-3">
                       <div className="text-xs font-bold text-brand-earth uppercase tracking-wider flex items-center gap-1">
                          <MapPin size={12} /> {project.location}
                       </div>
                    </div>

                    <h3 className="text-lg font-bold text-brand-green mb-3 leading-tight group-hover:text-brand-light transition-colors">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                       <CheckCircle size={12}/> Client: {project.client}
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow border-t border-gray-50 pt-3">
                      {project.description}
                    </p>

                    {renderLink(project)}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

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
          <h2 className="text-2xl font-bold mb-4">Interested in our research?</h2>
          <p className="mb-8 opacity-90">Contact us to request full technical reports for any of the projects above.</p>
          <Link to="/contact" className="px-8 py-3 bg-white text-brand-earth rounded-full font-bold hover:bg-gray-100 transition-colors inline-block">
            Request Access
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Projects;
