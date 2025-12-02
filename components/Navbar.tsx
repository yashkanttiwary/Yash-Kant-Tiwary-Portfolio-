import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  // Handle Scroll transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // Real-time clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Using a try-catch block for resilience against browser locale issues
      try {
        setCurrentTime(now.toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          timeZone: 'Asia/Kolkata' // Bengaluru Time
        }));
      } catch (e) {
        // Fallback if timezone is invalid in older browsers
        setCurrentTime(now.toLocaleTimeString());
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'WORK', href: '#work' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 h-20 px-6 md:px-12 flex justify-between items-center transition-colors duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        {/* Left: Logo & Time */}
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
          <a href="#hero" className="text-2xl font-bold tracking-tight hover:text-accent-cyan transition-colors">
            YKT
          </a>
          {/* Use a min-height or placeholder to prevent layout shift if time loads late */}
          <span className="text-xs font-mono text-gray-500 hidden md:block min-w-[100px]">
            {currentTime ? `BENGALURU ${currentTime}` : ''}
          </span>
        </div>

        {/* Right: Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium tracking-wide hover:text-accent-cyan hover:scale-105 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-white focus:outline-none z-50 relative"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black flex flex-col justify-center items-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-4xl font-bold tracking-tighter hover:text-accent-cyan transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-8 text-sm font-mono text-gray-500">
              {currentTime ? `BENGALURU ${currentTime}` : ''}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};