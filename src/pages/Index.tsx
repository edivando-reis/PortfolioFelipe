
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import AboutSidebar from '../components/AboutSidebar';
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (introComplete) {
      const timer = setTimeout(() => setContentLoaded(true), 300);
      return () => clearTimeout(timer);
    }
  }, [introComplete]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <AnimatePresence>
        {!introComplete && (
          <Intro onComplete={() => setIntroComplete(true)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introComplete ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col"
      >
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="flex-1">
          <Gallery loaded={contentLoaded} />
        </main>
        <Footer />
      </motion.div>

      <AboutSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Index;
