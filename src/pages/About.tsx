
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Phone, Instagram } from 'lucide-react';

const About = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col p-6 md:p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="mb-12">
        <Link to="/" className="inline-flex items-center text-sm font-light hover:opacity-70 transition-opacity">
          <ArrowLeft size={16} className="mr-2" />
          Voltar
        </Link>
      </header>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:space-x-12">
            <img 
              src="/lovable-uploads/944981d6-f685-4c1f-8109-517898370168.png" 
              alt="Fernando Ramalho" 
              className="w-full md:w-1/3 object-cover mb-6 md:mb-0"
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-light mb-6">Sobre</h1>
              <p className="text-base md:text-lg font-light leading-relaxed mb-6">
                Bom, me chamo Felipe, mas pode me chamar de Fe. Você pode já ter esbarrado em mim andando de moto, em algum show de rock ou curtindo um café. A paixão pela fotografia se apresentou para mim há quase 20 anos como um hobby que se tornou minha arte aos poucos. Minhas inspirações vêm desde cenários urbanos e mais sombrios até uma cachoeira cheia de vida e banhada pela luz do pôr do sol. Busco autenticidade e verdade tanto nas fotos quanto na vida e me encanto com a simplicidade das coisas e das pessoas. Por que dizer tudo isso? Como umbandista, acredito na potência da ancestralidade e que caminhos se cruzam para somar. Bora seguir essa viagem?
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
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
    </motion.div>
  );
};

export default About;
