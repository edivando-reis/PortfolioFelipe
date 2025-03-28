
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from "@/hooks/use-mobile";
import MobileGallery from './MobileGallery';
import DesktopGallery from './DesktopGallery';
import VideoGallery from './VideoGallery';
import { GalleryProps, GalleryMode } from '../types';

interface EnhancedGalleryProps extends GalleryProps {
  mode: GalleryMode;
}

const Gallery: React.FC<EnhancedGalleryProps> = ({ loaded, mode }) => {
  const isMobile = useIsMobile();
  
  // Animation variants for the gallery
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.section
      className="flex-1 flex items-center justify-center overflow-hidden"
      initial="hidden"
      animate={loaded ? "show" : "hidden"}
      variants={containerVariants}
    >
      <div className="w-full h-full max-w-screen-2xl mx-auto flex items-center justify-center">
        <AnimatePresence mode="wait">
          {mode === 'photos' ? (
            <motion.div 
              key="photos"
              className="w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {isMobile ? (
                <MobileGallery />
              ) : (
                <DesktopGallery />
              )}
            </motion.div>
          ) : (
            <motion.div
              key="videos"
              className="w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <VideoGallery loaded={loaded} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Gallery;