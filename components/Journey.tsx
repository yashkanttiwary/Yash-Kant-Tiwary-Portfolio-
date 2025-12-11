
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
    <section id="about" className="relative py-32 px-6 bg-background-dark border-b border-white/5">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          
          {/* Left Column: Bio & Image */}
          <div className="flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-10 leading-[1.1]">
                Transforming Ideas <br />
                into <span className="font-serif italic text-primary">Visual Stories</span>.
              </h2>
              
              <p className="text-gray-200 text-lg leading-relaxed mb-10 max-w-xl font-light">
                I'm Yash Kant Tiwary, a Motion Graphics Designer with a passion for rhythm and detail. I don't just move pixels; I craft narratives that resonate. My work bridges the gap between static design and cinematic experience.
              </p>

              <div className="flex gap-4 mb-12">
                <SocialIcon icon={<Linkedin size={20} />} />
                <SocialIcon icon={<Instagram size={20} />} />
                <SocialIcon icon={<Globe size={20} />} />
              </div>

              {/* Updated Image Container */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden group border border-white/10 shadow-2xl bg-gray-900">
                 <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay pointer-events-none"></div>
                 <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_y8tqJ2kL4mN6oP8qR0sT2uV4wX6yZ8aB0cD2eF4gH6iJ8kL0mN2oP4qR6sT8uV0wX2yZ4aB6cD8eF0gH2iJ4kL6mN8oP0qR2sT4uV6wX8yZ0aB2cD4eF6gH8iJ2kL4mN6oP8" 
                    alt="Yash Kant Tiwary" 
                    className="w-full h-full object-cover object-top group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                 />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Journey Timeline */}
          <div className="lg:pt-20">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-400 mb-16 border-b border-white/10 pb-4 inline-block">
                The Journey So Far
              </h3>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative border-l border-white/10 ml-3 md:ml-6 space-y-16 pb-4"
              >
                {timelineEvents.map((event, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    className="relative pl-8 md:pl-12 group"
                  >
                    {/* Timeline Dot/Icon */}
                    <div className="absolute -left-3 md:-left-3 top-0 bg-background-dark p-2 border border-primary rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(55,19,236,0.3)]">
                      <event.icon size={18} />
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className="text-primary font-bold text-sm tracking-widest font-mono mb-1 opacity-80">{event.year}</span>
                      <h4 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">{event.title}</h4>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">{event.subtitle}</span>
                      <p className="text-gray-300 font-light max-w-md leading-relaxed">
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
    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-primary hover:bg-white/5 hover:text-primary transition-all duration-300"
  >
    {icon}
  </a>
);
