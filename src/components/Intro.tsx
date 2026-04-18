import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface IntroProps {
  onComplete: () => void;
}

export default function Intro({ onComplete }: IntroProps) {
  const text = "> Hello World ";
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [shouldFadeOut, setShouldFadeOut] = useState(false);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    if (isTypingComplete) {
      const timer = setTimeout(() => {
        setShouldFadeOut(true);
      }, 2000); // Pause for 2 seconds

      return () => clearTimeout(timer);
    }
  }, [isTypingComplete]);

  useEffect(() => {
    if (shouldFadeOut) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1000); // Fade out duration

      return () => clearTimeout(timer);
    }
  }, [shouldFadeOut, onComplete]);

  return (
    <AnimatePresence>
      {!shouldFadeOut && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[9999] bg-[#020617] flex items-center justify-center font-mono"
        >
          <div className="text-2xl md:text-4xl text-secondary flex items-center">
            <span>{displayText}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="w-3 h-8 md:h-10 bg-secondary ml-1"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
