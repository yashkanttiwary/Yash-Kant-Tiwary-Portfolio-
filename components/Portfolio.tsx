import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: "PROJECT_01",
    number: "01",
    title: "Social Media Campaign - Fashion Brand",
    description: "Dynamic Instagram reels and story animations that boosted engagement by 200%.",
    tags: ["Motion Graphics", "Social Media"],
    imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-neon-light-39878-large.mp4",
    ctaLink: "#",
    year: "2024",
    role: "Lead Animator",
    challenge: "The brand needed to shift from static imagery to video content without losing their minimalist identity. The challenge was to add motion that felt 'quiet' yet capturing.",
    solution: "I developed a 'micro-motion' language where only specific elements moved—fabric textures, light leaks, and typography. This maintained elegance while increasing dwell time.",
    outcome: "Engagement rates tripled in the first month, and the visual style became the new standard for their seasonal campaigns."
  },
  {
    id: "PROJECT_02",
    number: "02",
    title: "YouTube Intro & Outro - Tech Channel",
    description: "High-energy intro sequence with kinetic typography and glitched logo reveal.",
    tags: ["Video Editing", "Typography"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-circuit-board-technology-2216-large.mp4",
    ctaLink: "#",
    year: "2023",
    role: "Motion Designer",
    challenge: "Create a 5-second intro that communicates 'Cutting Edge Technology' without looking like a generic template.",
    solution: "Used custom glitch shaders and fast-paced kinetic typography synced to a custom sound design beat.",
    outcome: "The channel reported higher retention rates in the first 30 seconds of their videos."
  },
  {
    id: "PROJECT_03",
    number: "03",
    title: "Product Explainer - SaaS Startup",
    description: "Animated explainer video breaking down complex software features.",
    tags: ["Explainer", "After Effects"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-scifi-city-12966-large.mp4",
    ctaLink: "#",
    year: "2023",
    role: "2D Animator",
    challenge: "Explain a complex backend architecture to non-technical investors in under 60 seconds.",
    solution: "Used an abstract isometric style to represent data flows, making the invisible visible and easy to digest.",
    outcome: "Used successfully in their Series A pitch deck."
  },
  {
    id: "PROJECT_04",
    number: "04",
    title: "Music Video Typography",
    description: "Kinetic typography overlay for an indie artist's latest single release.",
    tags: ["Typography", "VFX"],
    imageUrl: "https://images.unsplash.com/photo-1514525253440-b393452e3383?q=80&w=1974&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-abstract-video-of-ink-in-water-2465-large.mp4",
    ctaLink: "#",
    year: "2022",
    role: "VFX Artist",
    challenge: "The artist wanted the lyrics to feel like they were physically interacting with the environment.",
    solution: "Used 3D camera tracking to place text within the scene, masking it behind foreground objects for depth.",
    outcome: "The video went viral on TikTok, largely due to the unique lyric presentation."
  }
];

export const Portfolio: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="work" className="relative bg-black py-32 px-6 overflow-hidden">
      <motion.div 
        style={{ x, opacity: 0.1 }}
        className="absolute top-40 left-0 text-[10rem] md:text-[15rem] font-sans font-thin leading-none text-white whitespace-nowrap pointer-events-none select-none z-0"
      >
        WORK 2023 — 2025
      </motion.div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 md:gap-y-32">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`${index % 2 === 1 ? 'md:mt-32' : ''}`}
            >
              <ProjectCard project={project} onOpenModal={openModal} />
            </div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </section>
  );
};