
import React, { useEffect } from 'react';
import { X, Mail, Phone, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AboutSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutSidebar: React.FC<AboutSidebarProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={onClose}
            />
            
            <motion.div
              className="fixed top-0 right-0 w-full md:w-1/2 lg:w-1/3 h-full bg-white z-50 shadow-lg"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="sidebar-content p-8 md:p-12">
                <div className="flex justify-end mb-8">
                  <button
                    onClick={onClose}
                    className="p-2 text-right text-sm uppercase tracking-widest font-light hover:opacity-70 transition-opacity duration-300 flex items-center"
                  >
                    Fechar <X className="ml-2" size={16} />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <div className="flex items-start space-x-6">
                      <img 
                        src="src/assets/carousel/felipe.png" 
                        alt="Fernando Ramalho" 
                        className="w-80 object-cover"
                      />
                      <div className="flex-1">
                        <p className="mt-4 te t-base md:text-[16px] font-light leading-relaxed">
                          Bom, me chamo Felipe, mas pode me chamar de Fe. Você pode já ter esbarrado em mim andando de moto, em algum show de rock ou curtindo um café. A paixão pela fotografia se apresentou para mim há quase 20 anos como um hobby que se tornou minha arte aos poucos. Minhas inspirações vêm desde cenários urbanos e mais sombrios até uma cachoeira cheia de vida e banhada pela luz do pôr do sol. Busco autenticidade e verdade tanto nas fotos quanto na vida e me encanto com a simplicidade das coisas e das pessoas. Por que dizer tudo isso? Como umbandista, acredito na potência da ancestralidade e que caminhos se cruzam para somar. Bora seguir essa viagem?
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mt-12"
                  >
                    <h2 className="text-2xl font-light mb-6">Contato</h2>
                    <div className="space-y-4">
                      <p className="flex items-center">
                        <Mail size={18} className="mr-3 opacity-70" />
                        <span>contatoferamalho@gmail.com</span>
                      </p>
                      <p className="flex items-center">
                        <Phone size={18} className="mr-3 opacity-70" />
                        <span>(11)-95961-7887</span>
                      </p>
                      <p className="flex items-center">
                        <Instagram size={18} className="mr-3 opacity-70" />
                        <span>fe.ramalhofotografia</span>
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AboutSidebar;
