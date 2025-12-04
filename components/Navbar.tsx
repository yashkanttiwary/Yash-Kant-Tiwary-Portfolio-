import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Briefcase, User, Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      try {
        setCurrentTime(now.toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          timeZone: 'Asia/Kolkata' 
        }));
      } catch (e) {
        setCurrentTime(now.toLocaleTimeString());
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', icon: Home },
    { name: 'Work', href: '#work', icon: Briefcase },
    { name: 'About', href: '#about', icon: User },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      {/* Dynamic Island Container */}
      <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className={`pointer-events-auto flex items-center justify-between gap-6 px-6 py-3 rounded-full border border-white/10 shadow-2xl backdrop-blur-md transition-all duration-300 ${
            scrolled ? 'bg-black/80 w-auto' : 'bg-black/40 w-[90%] md:w-auto'
          }`}
        >
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="text-xl font-black tracking-tighter text-white hover:text-accent-cyan transition-colors"
          >
            YKT
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative group px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all"
              >
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </div>

          {/* Time Display (Desktop) */}
          <div className="hidden md:block w-px h-4 bg-white/20 mx-2"></div>
          <span className="hidden md:block text-xs font-mono text-accent-cyan whitespace-nowrap">
            {currentTime}
          </span>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="md:hidden text-white p-1 hover:bg-white/10 rounded-full"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-24 right-4 left-4 z-40 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:hidden overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 text-white transition-colors"
                >
                  <div className="p-2 bg-accent-cyan/10 rounded-lg text-accent-cyan">
                    <link.icon size={20} />
                  </div>
                  <span className="text-lg font-medium">{link.name}</span>
                </a>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <span className="text-xs font-mono text-gray-500">
                BENGALURU • {currentTime}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};