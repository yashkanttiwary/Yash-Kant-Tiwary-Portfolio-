
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background-dark">
      {/* Background Image - Red/Black Abstract */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
          alt="Abstract Red Background" 
          className="w-full h-full object-cover opacity-80"
        />
        {/* Red/Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-red-900/20 to-black/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background-dark"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center max-w-5xl pt-10">
        
        {/* Freelance Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center gap-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-300 uppercase">Available for Freelance</span>
        </motion.div>

        {/* Main Typography */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-7xl md:text-9xl lg:text-[10rem] tracking-tighter leading-[0.85] text-white mb-8 select-none drop-shadow-2xl"
        >
          VISUAL<br/>
          ALCHEMIST
        </motion.h1>
        
        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl font-light mb-12 tracking-wide leading-relaxed"
        >
          Crafting digital experiences that merge art, motion, and code into a singular aesthetic reality.
        </motion.p>
        
        {/* Buttons - Pill Shape */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          {/* Primary Pill Button */}
          <button 
            onClick={scrollToWork}
            className="px-10 py-4 bg-white text-black rounded-full font-bold text-sm tracking-widest uppercase hover:bg-gray-200 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            View Projects
          </button>
          
          {/* Secondary Pill Button */}
          <button 
            onClick={scrollToWork}
            className="px-10 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white/10 hover:border-white/40 transition-all"
          >
            Showreel 2024
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2 pointer-events-none"
      >
        <ArrowDown size={14} />
      </motion.div>
    </section>
  );
};
