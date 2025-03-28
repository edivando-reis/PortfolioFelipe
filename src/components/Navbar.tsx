
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Info, Menu, Wallet, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { GalleryMode } from '../types';

interface NavbarProps {
  toggleSidebar: () => void;
  onGalleryModeChange: (mode: GalleryMode) => void;
  currentGalleryMode: GalleryMode;
}

const Navbar: React.FC<NavbarProps> = ({ 
  toggleSidebar, 
  onGalleryModeChange,
  currentGalleryMode 
}) => {
  return (
    <motion.header
      className="py-4 px-6 md:px-12 flex justify-between items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Logo />
      
      <div className="flex items-center gap-2 md:gap-4">
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "rounded-full",
            currentGalleryMode === 'photos' && "text-primary"
          )}
          onClick={() => onGalleryModeChange('photos')}
        >
          Photos
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "rounded-full flex items-center gap-1",
            currentGalleryMode === 'videos' && "text-primary"
          )}
          onClick={() => onGalleryModeChange('videos')}
        >
          <Youtube className="h-4 w-4" /> Videos
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          aria-label="About"
        >
          <Info className="h-5 w-5" />
        </Button>
      </div>
    </motion.header>
  );
};

export default Navbar;