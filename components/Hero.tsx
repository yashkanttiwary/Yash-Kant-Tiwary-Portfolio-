import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Dribbble, HardDrive } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
          className="w-full h-full object-cover opacity-60"
          // Using a placeholder video that fits the "Monochrome motion graphics" description
          poster="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-black-and-white-abstract-technology-lines-background-3140-large.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
      </div>

      {/* Social Sidebar */}
      <div className="fixed left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-6">
        {[
          { Icon: Linkedin, href: 'https://www.linkedin.com', label: 'LinkedIn' },
          { Icon: Instagram, href: 'https://www.instagram.com', label: 'Instagram' },
          { Icon: Dribbble, href: 'https://dribbble.com', label: 'Dribbble' }, 
          { Icon: HardDrive, href: '#', label: 'My Drive' },
        ].map((item, idx) => (
          <a 
            key={idx} 
            href={item.href} 
            className="text-white/70 hover:text-accent-cyan hover:scale-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan rounded-sm p-1"
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={item.label}
            title={item.label}
          >
            <item.Icon size={20} />
          </a>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-6"
        >
          A Creative Partner for Brands That <span className="font-serif italic font-normal text-white">Move Forward</span>
        </motion.h1>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 text-sm font-mono animate-bounce"
      >
        SCROLL
      </motion.div>
    </section>
  );
};