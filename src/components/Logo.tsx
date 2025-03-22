
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <motion.div 
        className=" text-2xl font-montserrat relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className="font-light">F.R</span>
        <motion.span 
          className="ml-2 text-xs font-light tracking-widest uppercase opacity-70"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          
        </motion.span>
      </motion.div>
    </Link>
  );
};

export default Logo;
