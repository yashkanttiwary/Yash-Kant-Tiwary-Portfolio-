import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  // Smooth scroll handler for internal navigation
  const handleScrollToSkills = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('skills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative w-full bg-black py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto max-w-[1440px]">
        <div className="flex flex-col md:flex-row items-stretch">
          
          {/* Left: Image (Bleeds to edge on desktop) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 h-[50vh] md:h-auto min-h-[600px] relative overflow-hidden group"
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
              alt="Yash Kant Tiwary" 
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
            />
            {/* Red Overlay Effect */}
            <div className="absolute inset-0 bg-accent-red/30 mix-blend-multiply"></div>
          </motion.div>

          {/* Right: Content */}
          <div className="w-full md:w-1/2 px-6 py-12 md:p-16 lg:p-24 flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8"
            >
              As a Motion Graphics Designer, I Transform Ideas into <span className="font-serif italic text-white">Visual Stories</span> That Captivate.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-300 leading-relaxed max-w-lg mb-8"
            >
              My name is Yash Kant Tiwary. I'm a seasoned motion graphics designer and graphic designer with 4+ years of industry experience. I specialize in crafting visually stunning content using Adobe After Effects, Premiere Pro, Illustrator, and Photoshop. Every frame is designed to drive results.
            </motion.p>

            <motion.a 
              href="#skills"
              onClick={handleScrollToSkills}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center text-accent-cyan font-medium text-lg hover:text-white transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan rounded-sm px-2 py-1 -ml-2"
              aria-label="Read more about my skills"
            >
              More about me
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};