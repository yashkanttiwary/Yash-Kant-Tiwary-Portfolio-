import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Grid, User, Mail, MessageSquare } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'work', 'about', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Left Identity (Fixed) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 w-full z-40 p-6 pointer-events-none mix-blend-difference"
      >
        <div className="flex items-center gap-3">
          <div className="size-10 bg-white text-black flex items-center justify-center font-black rounded-md text-xl">
            Y
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-xl tracking-wider leading-none">YKT</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Bottom Dock */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto">
        <motion.nav 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
          className="glass-panel rounded-full p-2 px-3 shadow-2xl flex items-center gap-1 sm:gap-2"
        >
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all ${activeSection === 'hero' ? 'text-white bg-white/10' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
            title="Home"
          >
            <Home size={20} />
          </a>
          
          <a 
            href="#work" 
            onClick={(e) => handleNavClick(e, '#work')}
            className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all ${activeSection === 'work' ? 'text-white bg-white/10' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
            title="Work"
          >
            <Grid size={20} />
          </a>

          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, '#about')}
            className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all ${activeSection === 'about' ? 'text-white bg-white/10' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
            title="About"
          >
            <User size={20} />
          </a>

          <div className="w-px h-6 bg-white/10 mx-1"></div>

          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:flex items-center justify-center px-6 h-10 sm:h-12 rounded-full text-white font-bold text-sm tracking-wide bg-primary shadow-lg hover:bg-primary/90 transition-all mx-1"
          >
            Let's Talk
          </a>
          
          {/* Mobile Contact Icon */}
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex sm:hidden items-center justify-center w-10 h-10 rounded-full text-white bg-primary shadow-lg hover:bg-primary/90 transition-all mx-1"
          >
            <MessageSquare size={18} />
          </a>
        </motion.nav>
      </div>
    </>
  );
};