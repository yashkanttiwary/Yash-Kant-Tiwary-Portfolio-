import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  const timeline = [
    {
      year: '2025',
      title: 'Senior Motion Designer',
      place: 'Freelance / Agency',
      desc: 'Leading high-impact campaigns for global tech brands and startups.',
      icon: Briefcase
    },
    {
      year: '2023',
      title: 'Best Visual Effects',
      place: 'Digital Design Awards',
      desc: 'Recognized for outstanding kinetic typography in music video production.',
      icon: Award
    },
    {
      year: '2021',
      title: 'Started Career',
      place: 'Design Studio',
      desc: 'Began journey mastering After Effects and visual storytelling fundamentals.',
      icon: GraduationCap
    }
  ];

  return (
    <section id="about" className="relative w-full bg-black py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto max-w-[1440px] px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Bio & Intro */}
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-8"
            >
              Transforming Ideas into <span className="text-accent-cyan font-serif italic">Visual Stories</span>.
            </motion.h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I'm Yash Kant Tiwary, a Motion Graphics Designer with a passion for rhythm and detail. I don't just move pixels; I craft narratives that resonate. My work bridges the gap between static design and cinematic experience.
            </p>
            
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                alt="Portrait of Yash Kant Tiwary" 
                className="object-cover w-full h-full filter grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>
          </div>

          {/* Right: Timeline */}
          <div className="lg:w-1/2 flex flex-col justify-center">
             <h3 className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-12 border-b border-gray-800 pb-4">
               The Journey So Far
             </h3>
             
             <div className="relative border-l border-gray-800 ml-3 md:ml-6 space-y-14 pb-12">
               {timeline.map((item, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.2 }}
                   className="relative pl-8 md:pl-12"
                 >
                   {/* Node */}
                   <span className="absolute -left-[9px] top-0 p-1 bg-black border border-accent-cyan rounded-full text-accent-cyan z-10">
                     <item.icon size={12} />
                   </span>
                   
                   <span className="text-accent-cyan font-mono text-sm mb-2 block font-bold">{item.year}</span>
                   <h4 className="text-2xl font-bold text-white mb-1">{item.title}</h4>
                   <div className="text-sm text-gray-300 mb-3 uppercase tracking-wide font-medium">{item.place}</div>
                   <p className="text-gray-200 text-base leading-relaxed max-w-sm">{item.desc}</p>
                 </motion.div>
               ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};