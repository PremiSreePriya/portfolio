import { motion } from 'motion/react';
import { EDUCATION } from '../constants';
import SectionTitle from './SectionTitle';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Education" center />
        
        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-secondary before:to-transparent">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-bg-dark text-secondary shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110 group-hover:border-secondary/50">
                <GraduationCap size={24} />
              </div>
              
              {/* Content */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="w-[calc(100%-4rem)] md:w-[48%] bg-[#0f172a]/80 backdrop-blur-xl border border-slate-800 p-8 rounded-2xl transition-all duration-300 ease-in-out hover:border-secondary/40 hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-secondary font-display font-bold tracking-wide text-sm uppercase">{edu.period}</span>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white leading-tight group-hover:text-secondary transition-colors">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-slate-300 font-medium text-base md:text-lg">
                    {edu.institution}
                  </p>
                  
                  <div className="pt-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-bold tracking-wide">
                      {edu.score}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
