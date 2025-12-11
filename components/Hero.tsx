import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowDown, Volume2, VolumeX } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background-dark">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-50"
          poster="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-black-and-white-abstract-technology-lines-background-3140-large.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-background-dark/60 bg-gradient-to-t from-background-dark via-transparent to-background-dark/30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center max-w-5xl">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.85] text-white mb-8 mix-blend-overlay opacity-90 select-none"
        >
          VISUAL<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">ALCHEMY</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl font-light mb-12 tracking-wide"
        >
          Crafting digital chaos through motion graphics, 3D conceptual art, and immersive visual storytelling.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button 
            onClick={scrollToWork}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md font-bold text-sm tracking-widest uppercase transition-transform hover:scale-105 flex items-center gap-2 shadow-[0_0_20px_rgba(55,19,236,0.5)]"
          >
            <Play size={18} fill="currentColor" />
            View Showreel
          </button>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}
            className="bg-transparent border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-md font-bold text-sm tracking-widest uppercase transition-colors"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Sound Toggle */}
      <button 
        onClick={toggleMute}
        className="absolute bottom-10 right-10 z-20 text-white/50 hover:text-white transition-colors"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll</span>
        <ArrowDown size={14} />
      </motion.div>
    </section>
  );
};