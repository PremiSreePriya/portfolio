import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ACHIEVEMENTS } from '../constants';
import SectionTitle from './SectionTitle';

export default function Achievements() {
  const [selectedCategory, setSelectedCategory] = useState<'achievement' | 'activity'>('achievement');

  const filteredItems = ACHIEVEMENTS.filter(item => item.category === selectedCategory);

  return (
    <section id="achievements" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Achievements & Activities" center />
        
        <div className="flex justify-center gap-4 mb-12">
          {['achievement', 'activity'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as 'achievement' | 'activity')}
              className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                selectedCategory === cat
                  ? 'text-white bg-gradient-to-r from-indigo-600 to-blue-600 shadow-[0_0_20px_rgba(79,70,229,0.4)]'
                  : 'text-slate-400 bg-slate-800/50 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              {cat === 'achievement' ? 'Achievements' : 'Activities'}
            </button>
          ))}
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((achievement, idx) => (
              <motion.div
                key={achievement.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="glass-card rounded-2xl overflow-hidden group hover:border-primary/30 transition-all"
              >
              <div className="relative h-64 overflow-hidden">
               <img 
  src={achievement.image} 
  alt={achievement.title} 
  className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${
    achievement.imageFit === "contain"
      ? "object-contain bg-black"
      : "object-cover"
  }`}
  referrerPolicy="no-referrer"
/>
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 to-transparent" />
               
              </div>
              
              <div className="p-6">
               <h3 className="text-xl font-display font-bold text-white mb-2">
  {achievement.title}
</h3>

{achievement.organization && (
  <p className="text-cyan-400 text-base font-semibold mb-2">
    {achievement.organization}
  </p>
)}

{achievement.description && (
  <p className="text-slate-400 text-base leading-relaxed">
    {achievement.description}
  </p>
)}
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
