
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="py-8 px-6 md:px-12 text-center text-sm font-light"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <p>Design & Developed by Edivando Reis</p>
    </motion.footer>
  );
};

export default Footer;
