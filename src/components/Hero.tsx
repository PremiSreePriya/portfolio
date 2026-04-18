import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { Linkedin, FileText, Mail, Github } from 'lucide-react';
import { STUDENT_INFO } from '../constants';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // ✅ 3D Tilt Effect (ADDED)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>)=> {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const currentRole = STUDENT_INFO.roles[roleIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(100);
        
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(50);
        
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % STUDENT_INFO.roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section className="min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight whitespace-nowrap">
            Hi, I'm <br />
            <span className="gradient-text">{STUDENT_INFO.name}</span>
          </h1>
          
           <div className="h-14 flex items-center text-3xl md:text-4xl font-display font-bold text-slate-300 mb-6">
            <span>{displayText}</span>
            <span className="w-1 h-10 bg-secondary ml-1 animate-pulse" />
          </div>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-lg leading-relaxed">
            {STUDENT_INFO.tagline}
          </p>
          
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap gap-4">
              <motion.a
                href={STUDENT_INFO.socials.resume}
                download="Premisreepriya_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 gradient-bg text-white rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-primary/20"
              >
                <FileText size={20} />
                Download Resume
              </motion.a>
              
              <motion.a
               href="#contact"   
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border-2 border-secondary/50 text-secondary font-bold flex items-center gap-2 hover:bg-secondary/5 transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.1)] hover:shadow-[0_0_25px_rgba(20,184,166,0.3)]"
              >
                <Mail size={20} />
                Contact Me
              </motion.a>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: STUDENT_INFO.socials.linkedin },
                { icon: Github, href: STUDENT_INFO.socials.github }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-slate-900/50 text-secondary rounded-full border border-secondary/30 hover:border-secondary transition-all hover:shadow-[0_0_15px_rgba(20,184,166,0.3)] shadow-lg"
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ✅ UPDATED PROFILE SECTION WITH 3D EFFECT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative flex justify-center cursor-pointer"
        >
          <div 
            style={{ transform: "translateZ(75px)" }}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            {/* Glowing border */}
            <div className="absolute inset-0 gradient-bg rounded-full blur-2xl opacity-20 animate-pulse" />
            <div className="absolute -inset-1 gradient-bg rounded-full animate-spin-slow opacity-50" />
            
            <div className="absolute inset-1 bg-bg-dark rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}