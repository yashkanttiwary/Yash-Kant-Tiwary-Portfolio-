
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Asterisk } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: "PROJECT_01",
    number: "01",
    title: "Cyberpunk Visions",
    description: "A cinematic exploration of neon-lit dystopias using Unreal Engine 5.",
    tags: ["Motion", "3D Rendering"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9BAG8x0qgwldFdeT497YKJ2aOT6cPFZqXlvZ5tOCSSXKJUwJhd8XTiWaP5znP3NDAJg-JNhjYJGxmhCw-caaGU1GDdRrSKSaeZwHTIIyjdjIyPOh5iGBbG2zSZWVOs_BiA4MhyjvJtXv3G8Oojf9j6XRqx32RL4R_bAIj5O4U-fggGRZ49to3ll9Y2r7mxDIRSCUw8fr1-AxGrIN6ltRyvf67cV6cUgZBtgXZNR-EW03LVbFwmffgyo5_CCwUKYfwyTbLNQj_VOU",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-neon-light-39878-large.mp4",
    ctaLink: "#",
    year: "2023",
    role: "Lead Animator",
    challenge: "The brand needed to shift from static imagery to video content without losing their minimalist identity.",
    solution: "I developed a 'micro-motion' language where only specific elements moved—fabric textures, light leaks, and typography.",
    outcome: "Engagement rates tripled in the first month."
  },
  {
    id: "PROJECT_02",
    number: "02",
    title: "Prismatic Flux",
    description: "Experimental light simulation and refraction studies.",
    tags: ["Abstract", "VFX"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7XK6ACpTolgAXuT7FUYbBOeje3Mf2b_vSy7J4KUrUwxTryO9W7GwYHtfeUTnk3SoryI70wKSt0_6EllTRBZ16FsaVuWxWmdbhA8HkmCtWpm0l_7pccU9TsSAT9qj6ihMgtCK5k6mmAVplE3H4e7vazjmlNk41MXj9wcKZsnEqmDr8EGPvOhA9jw0oK2pwJLEGmwVg39NxXQG152O4HIihWLXv-FA0QsXhYE3AbyEx9-GkSHYIoUFCzZ5bKgllU9Q4KF6FkQAtVLk",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-circuit-board-technology-2216-large.mp4",
    ctaLink: "#",
    year: "2023",
    role: "Motion Designer",
    challenge: "Create a visual representation of light physics in a stylized manner.",
    solution: "Used custom shaders and caustic light simulations.",
    outcome: "Showcased at digital art exhibition."
  },
  {
    id: "PROJECT_03",
    number: "03",
    title: "Synthwave Loop",
    description: "Retro-futuristic landscape loop for music streaming service.",
    tags: ["Loop", "Cinema 4D"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWoIx7h_2BRm5ony-ZaU5dz6U9-HVmiSbLNyHH7q2UWl0N3N9nF5UgqXZK73iLWVKdmn97i-bimtlcXLJ3YLvk8c7LWJz3nscuKhlUJUXWC8T9niQt1q1GI6R8sqx09FkmzLoeCfuW_0cleJHZn5nIWS6ZWkm7eSJpfeq_JM-9-jPjfP8qn7hH3w0x31Wy3azA-Oricrx__ZdnpVKw2SUtZLOUrzt_Dq71mG1nWfq9ZGxZx83D4WozgPWHdySPTaelpQzZEclgZcc",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-scifi-city-12966-large.mp4",
    ctaLink: "#",
    year: "2023",
    role: "3D Artist",
  },
  {
    id: "PROJECT_04",
    number: "04",
    title: "Geometric Brand",
    description: "Modern branding mockup with satisfying physics animations.",
    tags: ["Branding", "Simulation"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrE0VgMrRLUDEVvPZPA5Oyyxdc5r1yNfaVZl-03N5aSgcVB98DjEagdROSDfGkLeuO4sA9z3XWVlRSP9HaLgE_0P2IgqVhj1RPsYCMS8Y1SmUZyyS9veVdbXgSlnjlmgQZkQjfC1dMk1iiZFTSS_tJ6fY-jK_O17CEPxrFIhT4LYUEFI6l0SQixJgbUP-trv0NW1TALYYLH6D6X5FrLDfk9aImeBZxJ7vMfWc-c6Yc1CXo4IB2_Sw4uRZ0CnthZcXy8D1KrCzgW6c",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-abstract-video-of-ink-in-water-2465-large.mp4",
    ctaLink: "#",
    year: "2022",
    role: "Art Director",
  }
];

const MarqueeItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-12 shrink-0">
    <span className="text-xl md:text-2xl font-bold tracking-widest uppercase">{text}</span>
    <Asterisk size={24} className="animate-spin-slow" />
  </div>
);

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const marqueeTexts = ["Motion Design", "3D Rendering", "Art Direction", "Brand Identity"];
  const marqueeItems = [
    ...marqueeTexts, ...marqueeTexts, ...marqueeTexts, ...marqueeTexts,
    ...marqueeTexts, ...marqueeTexts // Added more duplications for smoother infinite scroll on wide screens
  ];

  return (
    <>
      {/* Marquee Strip */}
      <div className="w-full bg-primary text-white py-4 overflow-hidden whitespace-nowrap border-y border-white/10 -rotate-1 scale-105 origin-left shadow-[0_0_30px_rgba(55,19,236,0.4)] relative z-20">
        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex gap-12 items-center"
        >
          {marqueeItems.map((text, i) => (
            <MarqueeItem key={i} text={text} />
          ))}
        </motion.div>
      </div>

      <section id="work" className="relative py-32 md:py-40 px-6 bg-background-dark z-10">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-primary font-bold text-sm tracking-[0.2em] mb-4 uppercase">Selected Works</h2>
              <h3 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">RECENT<br/>PROJECTS</h3>
            </div>
            <button className="text-white hover:text-primary transition-colors flex items-center gap-3 border-b border-white/20 pb-2 hover:border-primary group text-lg">
                See Full Archive
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Asymmetric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 auto-rows-min">
            {projects.map((project, index) => {
              // Custom Grid Logic based on index
              let gridClass = "aspect-square"; // Default
              if (index === 0) gridClass = "md:col-span-2 aspect-[16/9] md:aspect-[2/1]"; 
              else if (index === 1) gridClass = "md:row-span-2 aspect-[4/5] md:aspect-auto";
              
              return (
                <div key={project.id} className={`${gridClass}`}>
                  <ProjectCard 
                    project={project} 
                    onOpenModal={openModal} 
                    variant={index === 0 ? 'wide' : index === 1 ? 'tall' : 'standard'}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <ProjectModal 
          project={selectedProject} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      </section>
    </>
  );
};
