import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Dribbble, Volume2, VolumeX, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSocialClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // In a real app, this would be a toast notification
    console.log("Social links are placeholders for this demo");
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-60"
          poster="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-black-and-white-abstract-technology-lines-background-3140-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
      </div>

      {/* Sound Toggle */}
      <button 
        onClick={toggleMute}
        className="absolute bottom-12 right-6 md:right-12 z-20 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all border border-white/10 group"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/50 px-2 py-1 rounded">
          {isMuted ? "UNMUTE" : "MUTE"}
        </span>
      </button>

      {/* Social Sidebar */}
      <div className="fixed left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-6">
        {[
          { Icon: Linkedin, href: '#', label: 'LinkedIn' },
          { Icon: Instagram, href: '#', label: 'Instagram' },
          { Icon: Dribbble, href: '#', label: 'Dribbble' }, 
        ].map((item, idx) => (
          <a 
            key={idx} 
            href={item.href}
            onClick={handleSocialClick} 
            className="text-white/70 hover:text-accent-cyan hover:scale-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan rounded-sm p-1 cursor-not-allowed"
            aria-label={item.label}
            title={`${item.label} (Coming Soon)`}
          >
            <item.Icon size={20} />
          </a>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="inline-block mb-4 px-4 py-1 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm"
        >
          <span className="text-xs md:text-sm font-mono tracking-widest text-accent-cyan uppercase">
            Motion Graphics • Visual Storytelling
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[1] mb-6 drop-shadow-2xl"
        >
          BRANDS THAT <br />
          <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">MOVE FORWARD</span>
        </motion.h1>
      </div>

      {/* Dynamic Scroll Indicator */}
      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer z-30"
        aria-label="Scroll to next section"
      >
        <span className="text-[10px] font-mono tracking-widest text-gray-400 group-hover:text-white transition-colors">SCROLL</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="p-2 border border-white/10 rounded-full group-hover:border-accent-cyan/50 transition-colors"
        >
          <ArrowDown size={16} className="text-accent-cyan" />
        </motion.div>
      </motion.button>
    </section>
  );
};