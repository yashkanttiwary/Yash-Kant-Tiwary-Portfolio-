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
    <section id="skills" className="relative w-full py-32 px-6 bg-background-dark overflow-hidden border-t border-white/5">
      
      {/* Collage Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
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
          className="mb-20"
        >
          <span className="text-primary text-sm uppercase tracking-widest block mb-4 font-bold">(My Areas of Focus)</span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
            Key Skills & <br />Creative Arsenal
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {skillCols.map((col, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-8 border-b border-primary/30 pb-4 inline-block">{col.title}</h3>
              <ul className="space-y-4">
                {col.items.map((item, i) => (
                  <li 
                    key={i} 
                    className="group flex items-center gap-2 text-gray-300 text-base md:text-lg leading-relaxed font-light transition-all cursor-default"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="group-hover:text-white group-hover:translate-x-1 transition-all duration-300">{item}</span>
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