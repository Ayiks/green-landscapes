import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// HOW TO ADD A NEW UPDATE
// Copy one of the entries below, paste it at the TOP of the array,
// and edit the fields. Newest updates appear first.
//
// Fields:
//   id          — any unique number
//   title       — short headline
//   date        — display date (e.g. "May 24, 2026")
//   category    — short tag shown above the title (e.g. "Field Report")
//   summary     — 1–3 sentences describing the update
//   image       — optional path under /public/images/ (or omit for no image)
//   link        — optional URL for "Read more" (omit if none)
// ─────────────────────────────────────────────────────────────
const updates = [
  {
    id: 1,
    title: 'Welcome to our new Updates page',
    date: 'May 24, 2026',
    category: 'Announcement',
    summary:
      'This is where we will share news from the field, project milestones, partnership announcements and reports as they come. Check back regularly.',
  },
];

const Updates = () => {
  return (
    <div className="flex flex-col w-full pt-20">

      {/* --- HERO --- */}
      <section className="bg-brand-green text-white py-12 sm:py-16 md:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-15 mix-blend-overlay" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
          >
            Updates & News
          </motion.h1>
          <p className="text-base sm:text-lg text-brand-bg/80 max-w-2xl mx-auto">
            News from the field, project milestones, and announcements from
            Green Landscapes Initiative.
          </p>
        </div>
      </section>

      {/* --- UPDATES LIST --- */}
      <section className="py-12 sm:py-16 md:py-20 bg-brand-bg min-h-[60vh]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          {updates.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <Newspaper size={48} className="mx-auto mb-4 opacity-30" />
              <p>No updates yet. Check back soon.</p>
            </div>
          ) : (
            <div className="space-y-6 sm:space-y-8">
              {updates.map((update, i) => (
                <motion.article
                  key={update.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden grid grid-cols-1 md:grid-cols-3"
                >
                  {update.image && (
                    <div className="md:col-span-1 aspect-video md:aspect-auto bg-brand-green/5 overflow-hidden">
                      <img
                        src={update.image}
                        alt={update.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className={`p-6 sm:p-8 ${update.image ? 'md:col-span-2' : 'md:col-span-3'}`}>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      {update.category && (
                        <span className="px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-widest rounded-full">
                          {update.category}
                        </span>
                      )}
                      <span className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Calendar size={12} /> {update.date}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-3 leading-snug">
                      {update.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {update.summary}
                    </p>
                    {update.link && (
                      <a
                        href={update.link}
                        target={/^https?:\/\//.test(update.link) ? '_blank' : undefined}
                        rel={/^https?:\/\//.test(update.link) ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1.5 text-brand-earth font-bold text-sm hover:gap-2.5 transition-all"
                      >
                        Read more <ArrowRight size={14} />
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Updates;
