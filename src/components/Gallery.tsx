import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from "@/hooks/use-mobile";
import MobileGallery from './MobileGallery.tsx';
import DesktopGallery from './DesktopGallery.tsx';
import { GalleryProps } from '../types';

const Gallery: React.FC<GalleryProps> = ({ loaded }) => {
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
        {isMobile ? (
          <MobileGallery />
        ) : (
          <DesktopGallery />
        )}
      </div>
    </motion.section>
  );
};

export default Gallery;