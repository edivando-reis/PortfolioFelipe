import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from './Logo';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-4 flex justify-between items-center bg-white bg-opacity-90 backdrop-blur-sm"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Logo />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <button 
          onClick={toggleSidebar} 
          className="text-sm uppercase tracking-widest font-light hover:opacity-70 transition-opacity duration-300"
        >
          Sobre
        </button>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;