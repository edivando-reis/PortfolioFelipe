
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 500); // First animation complete
    const timer2 = setTimeout(() => setStage(2), 3000); // Show welcome text
    const timer3 = setTimeout(() => {
      setStage(3); // Start exit animation
      setTimeout(() => onComplete(), 1000); // Complete intro
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: stage === 3 ? 0 : 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="relative overflow-hidden">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: stage >= 1 ? 1 : 0,
          }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: 0.3
          }}
          className="text-center"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-montserrat font-light tracking-wide"
            initial={{ letterSpacing: "0.5em" }}
            animate={{ letterSpacing: "0.05em" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            FELIPE RAMALHO
          </motion.h1>
        </motion.div>

        <motion.div 
          className="absolute inset-0 bg-white z-10"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          style={{ transformOrigin: "left" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: stage >= 2 ? 1 : 0,
          y: stage >= 2 ? 0 : 20
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-6 text-center"
      >
        <p className="text-lg md:text-xl font-montserrat font-light tracking-wider">
          fotografia de arquitetura
        </p>
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.1, 0] }}
        transition={{ 
          duration: 3, 
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: 1
        }}
      >
        <div className="w-32 h-32 md:w-64 md:h-64 rounded-full border-8 border-black opacity-10 animate-pulse" />
      </motion.div>
    </motion.div>
  );
};

export default Intro;
