import { motion } from 'motion/react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({ title, subtitle, center = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`flex items-center gap-3 mb-2 ${center ? 'justify-center' : 'justify-start'}`}
        >
          <div className="h-[2px] w-8 gradient-bg" />
          <span className="text-secondary font-display font-medium tracking-widest uppercase text-sm">
            {subtitle}
          </span>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-display font-bold text-white group cursor-default"
      >
        {title}
        <motion.div
          className={`h-1 w-12 bg-gradient-to-r from-primary to-secondary mt-2 rounded-full transition-all duration-500 group-hover:w-20 group-hover:shadow-[0_0_15px_rgba(20,184,166,0.6)] ${center ? 'mx-auto' : ''}`}
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 48, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.h2>
    </div>
  );
}
