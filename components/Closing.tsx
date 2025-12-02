import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const Closing: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-gradient-closing overflow-hidden">
      <div className="text-center z-10 px-4">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-6"
        >
          Yash Kant Tiwary
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white/80 uppercase tracking-[0.2em] text-sm md:text-base"
        >
          Motion Graphics Designer / Working Worldwide
        </motion.p>
      </div>

      <a 
        href="#hero" 
        onClick={scrollToTop}
        className="absolute bottom-12 right-6 md:right-12 text-white/80 hover:text-white flex items-center gap-2 group transition-colors"
      >
        <span className="text-sm tracking-widest uppercase">Back to top</span>
        <ArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" size={20} />
      </a>
    </section>
  );
};