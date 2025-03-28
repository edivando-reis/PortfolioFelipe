import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import AboutSidebar from '../components/AboutSidebar';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryMode } from '../types';

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [galleryMode, setGalleryMode] = useState<GalleryMode>('photos');

  useEffect(() => {
    if (introComplete) {
      const timer = setTimeout(() => setContentLoaded(true), 300);
      return () => clearTimeout(timer);
    }
  }, [introComplete]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleGalleryModeChange = (mode: GalleryMode) => {
    setGalleryMode(mode);
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
        className="h-screen flex flex-col overflow-hidden"
      >
        <Navbar 
          toggleSidebar={toggleSidebar} 
          onGalleryModeChange={handleGalleryModeChange}
          currentGalleryMode={galleryMode}
        />
        <main className="flex-1 flex items-center justify-center overflow-hidden">
          <Gallery loaded={contentLoaded} mode={galleryMode} />
        </main>
        <Footer />
      </motion.div>

      <AboutSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Index;