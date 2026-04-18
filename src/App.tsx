import { useState } from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className={`relative ${showIntro ? 'overflow-hidden h-screen' : ''}`}>
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Education />
            <Achievements />
            <Projects />
            <Internships />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
      
      {/* Background blobs */}
      <div className="fixed top-0 left-0 w-full h-full -z-50 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}
