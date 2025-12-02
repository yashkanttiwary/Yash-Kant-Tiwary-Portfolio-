import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: "PROJECT_01",
    number: "01",
    title: "Social Media Campaign - Fashion Brand",
    description: "Dynamic Instagram reels and story animations that boosted engagement by 200%. Utilized mixed media techniques.",
    tags: ["Motion Graphics", "Social Media", "Brand Animation"],
    imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-neon-light-39878-large.mp4",
    ctaLink: "#",
    awards: "Featured on Behance"
  },
  {
    id: "PROJECT_02",
    number: "02",
    title: "YouTube Intro & Outro - Tech Channel",
    description: "High-energy intro sequence with kinetic typography and glitched logo reveal for a tech reviewer.",
    tags: ["Video Editing", "Motion Graphics", "YouTube"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-circuit-board-technology-2216-large.mp4",
    ctaLink: "#",
    awards: "1M+ Views"
  },
  {
    id: "PROJECT_03",
    number: "03",
    title: "Product Explainer - SaaS Startup",
    description: "Animated explainer video breaking down complex software features into engaging, simple visuals.",
    tags: ["Motion Graphics", "Explainer", "After Effects"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-scifi-city-12966-large.mp4",
    ctaLink: "#"
  },
  {
    id: "PROJECT_04",
    number: "04",
    title: "Music Video Typography",
    description: "Kinetic typography overlay for an indie artist's latest single release.",
    tags: ["Typography", "Music Video", "VFX"],
    imageUrl: "https://images.unsplash.com/photo-1514525253440-b393452e3383?q=80&w=1974&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-abstract-video-of-ink-in-water-2465-large.mp4",
    ctaLink: "#"
  }
];

export const Portfolio: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section id="work" className="relative bg-black py-32 px-6 overflow-hidden">
      {/* Decorative Parallax Background Element */}
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
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};