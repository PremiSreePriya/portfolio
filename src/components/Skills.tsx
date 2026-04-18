import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS } from '../constants';
import SectionTitle from './SectionTitle';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'tech' | 'soft'>('tech');

  const filteredSkills = SKILLS.filter(category => 
    activeTab === 'tech' ? category.category !== 'Soft Skills' : category.category === 'Soft Skills'
  );

  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle title="Skills" center />
        
        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveTab('tech')}
            className={`relative px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 ${
              activeTab === 'tech' 
                ? 'text-white bg-gradient-to-r from-indigo-600 to-blue-600 shadow-[0_0_20px_rgba(79,70,229,0.4)]' 
                : 'text-slate-400 bg-slate-800/50 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            Tech Stack
          </button>
          <button
            onClick={() => setActiveTab('soft')}
            className={`relative px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 ${
              activeTab === 'soft' 
                ? 'text-white bg-gradient-to-r from-indigo-600 to-blue-600 shadow-[0_0_20px_rgba(79,70,229,0.4)]' 
                : 'text-slate-400 bg-slate-800/50 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            Soft Skills
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredSkills.map((category, idx) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative"
              >
                {/* Card Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                
                {/* Main Card */}
                <div className="relative h-full bg-[#0f172a] border border-slate-800 rounded-2xl p-8 shadow-2xl transition-all duration-300 ease-in-out group-hover:border-teal-500/40 group-hover:shadow-[0_0_40px_rgba(20,184,166,0.1)]">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-xl flex items-center justify-center text-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.1)]">
                      <category.icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {category.category}
                      </h3>
                      <div className="h-[2px] w-12 bg-gradient-to-r from-blue-500 to-teal-500 mt-1.5 rounded-full transition-all duration-500 group-hover:w-full" />
                    </div>
                  </div>

                  {/* Mini Cards Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {category.items.map((skill, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.03 }}
                        className="flex flex-col items-center justify-center p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:bg-white/[0.12] hover:border-teal-500/20 hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] transition-all duration-300 group/skill"
                      >
                        <div className="w-10 h-10 mb-3 flex items-center justify-center">
                          <img 
                            src={skill.logo} 
                            alt={skill.name} 
                            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover/skill:drop-shadow-[0_0_12px_rgba(20,184,166,0.3)] transition-all duration-300"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <span className="text-xs font-medium text-slate-300 group-hover/skill:text-white text-center leading-tight">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
