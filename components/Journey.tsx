import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, GraduationCap, Linkedin, Instagram, Globe } from 'lucide-react';

export const Journey: React.FC = () => {
  const timelineEvents = [
    {
      year: "2025",
      title: "Senior Motion Designer",
      subtitle: "FREELANCE / AGENCY",
      description: "Leading high-impact campaigns for global tech brands and startups.",
      icon: Briefcase,
    },
    {
      year: "2023",
      title: "Best Visual Effects",
      subtitle: "DIGITAL DESIGN AWARDS",
      description: "Recognized for outstanding kinetic typography in music video production.",
      icon: Award,
    },
    {
      year: "2021",
      title: "Started Career",
      subtitle: "DESIGN STUDIO",
      description: "Began journey mastering After Effects and visual storytelling fundamentals.",
      icon: GraduationCap,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="about" className="relative py-24 px-6 bg-background-dark border-b border-white/5">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Bio & Image */}
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                Transforming Ideas <br />
                into <span className="font-serif italic text-primary">Visual Stories</span>.
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl font-light">
                I'm Yash Kant Tiwary, a Motion Graphics Designer with a passion for rhythm and detail. I don't just move pixels; I craft narratives that resonate. My work bridges the gap between static design and cinematic experience.
              </p>

              <div className="flex gap-4 mb-10">
                <SocialIcon icon={<Linkedin size={20} />} />
                <SocialIcon icon={<Instagram size={20} />} />
                <SocialIcon icon={<Globe size={20} />} />
              </div>

              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden group border border-white/5">
                 <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay"></div>
                 <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" 
                    alt="Yash Kant Tiwary" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                 />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Journey Timeline */}
          <div className="lg:pt-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-12 border-b border-white/10 pb-4 inline-block">
                The Journey So Far
              </h3>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12 pb-4"
              >
                {timelineEvents.map((event, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    className="relative pl-8 md:pl-12 group"
                  >
                    {/* Timeline Dot/Icon */}
                    <div className="absolute -left-3 md:-left-3 top-0 bg-background-dark p-1 border border-primary rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <event.icon size={16} />
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-primary font-bold text-sm tracking-widest font-mono mb-1">{event.year}</span>
                      <h4 className="text-2xl font-bold text-white">{event.title}</h4>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">{event.subtitle}</span>
                      <p className="text-gray-400 font-light max-w-md leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <a 
    href="#" 
    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-all"
  >
    {icon}
  </a>
);