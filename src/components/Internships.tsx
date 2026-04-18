import { motion } from 'motion/react';
import { INTERNSHIPS } from '../constants';
import SectionTitle from './SectionTitle';
import { Briefcase } from 'lucide-react';

export default function Internships() {
  return (
    <section id="internships" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Internships" center />
        
      <div className="grid md:grid-cols-2 gap-8">
          {INTERNSHIPS.map((intern, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl overflow-hidden group hover:border-primary/30 transition-all"
            >
              <div className="relative h-65 overflow-hidden">
                <img 
                  src={intern.image} 
                  alt={intern.company} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                    {intern.period}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">{intern.role}</h3>
                    <h4 className="text-secondary font-medium text-sm">{intern.company}</h4>
                  </div>
                </div>
               <p className="text-slate-400 leading-relaxed text-base">
                  {intern.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}