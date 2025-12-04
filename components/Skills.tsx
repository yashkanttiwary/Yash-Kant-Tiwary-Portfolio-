import React from 'react';
import { motion } from 'framer-motion';

export const Skills: React.FC = () => {
  const skillCols = [
    {
      title: "Capabilities",
      items: ["Motion Graphics", "Video Editing", "Typography Animation", "Logo Animation", "Social Media Content", "2D & 3D Animation", "Color Grading"]
    },
    {
      title: "Expertise",
      items: ["Adobe After Effects", "Adobe Premiere Pro", "Adobe Illustrator", "Adobe Photoshop", "Cinema 4D (Basic)", "DaVinci Resolve", "Figma"]
    },
    {
      title: "Inspiration",
      items: ["Kinetic Typography", "Minimalist Design", "Experimental Animation", "Music Videos", "Tech & Startup Culture", "Contemporary Art"]
    }
  ];

  return (
    <section id="skills" className="relative w-full py-32 px-6 bg-gradient-skills overflow-hidden">
      {/* Darkened overlay for WCAG compliance */}
      <div className="absolute inset-0 bg-black/90 z-[1]"></div>
      
      {/* Collage Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
         <img 
            src="https://images.unsplash.com/photo-1626785774573-4b799314348d?q=80&w=2070&auto=format&fit=crop"
            alt=""
            loading="lazy"
            className="w-full h-full object-cover grayscale mix-blend-overlay"
         />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-16"
        >
          <span className="text-white/60 text-sm uppercase tracking-widest block mb-4">(My Areas of Focus)</span>
          <h2 className="text-5xl md:text-7xl font-black text-accent-cyan tracking-tighter drop-shadow-[0_0_20px_rgba(0,217,255,0.5)]">
            Key Skills & <br />Creative Arsenal
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCols.map((col, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-medium text-white mb-6 border-b border-white/20 pb-2">{col.title}</h3>
              <ul className="space-y-3">
                {col.items.map((item, i) => (
                  <li key={i} className="text-gray-300 text-base md:text-lg leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};