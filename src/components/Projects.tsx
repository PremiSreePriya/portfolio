import { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import SectionTitle from './SectionTitle';
import { Github, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<'software' | 'hardware'>('software');

  const filteredProjects = PROJECTS.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Projects" center />

        {/* CATEGORY FILTER */}
        <div className="flex justify-center gap-4 mb-12">
          {['software', 'hardware'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as 'software' | 'hardware')}
              className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                selectedCategory === cat
                  ? 'text-white bg-gradient-to-r from-indigo-600 to-blue-600 shadow-[0_0_20px_rgba(79,70,229,0.4)]'
                  : 'text-slate-400 bg-slate-800/50 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-3 gap-5">
          {filteredProjects.map((project, idx) => {
            const isClickable = !!project.github;
            const CardComponent = isClickable ? motion.a : motion.div;
            const cardProps = isClickable
              ? { href: project.github, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <CardComponent
                key={project.title}
                {...cardProps}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className={`glass-card rounded-2xl overflow-hidden group border border-white/5 transition-all block max-w-sm mx-auto ${
                  isClickable ? 'hover:border-primary/30 cursor-pointer' : ''
                }`}
              >
                {/* IMAGE */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent opacity-60" />
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  {/* TITLE */}
                  <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors flex items-center justify-between">
                    {project.title}
                    {isClickable && (
                      <ArrowUpRight
                        size={24}
                        className="opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-primary"
                      />
                    )}
                  </h3>

                  {/* DESCRIPTION */}
                  {project.description && (
                    <p className="text-slate-400 text-base mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  )}

                  {/* TECH STACK (NEW ADDED SECTION) */}
                  {project.tech && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 text-sm bg-slate-800/40 border border-slate-700/50 text-slate-400 rounded-lg hover:border-slate-600 transition-all"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* GITHUB */}
                  {project.github && (
                    <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-primary transition-colors">
                      <Github size={18} /> GitHub
                    </div>
                  )}

                </div>
              </CardComponent>
            );
          })}
        </div>
      </div>
    </section>
  );
}