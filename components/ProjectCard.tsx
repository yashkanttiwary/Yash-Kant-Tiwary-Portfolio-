import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isPreviewing, setIsPreviewing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePreview = () => {
    if (isPreviewing) {
      videoRef.current?.pause();
      setIsPreviewing(false);
    } else {
      setIsPreviewing(true);
      // Small timeout to allow state to update and display video element if we were hiding it via CSS
      setTimeout(() => {
        videoRef.current?.play().catch(e => console.error("Auto-play failed:", e));
      }, 0);
    }
  };

  return (
    <motion.div 
      id={project.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6 }}
      className="group flex flex-col gap-4 relative"
    >
      {/* Project Index */}
      <div className="absolute -left-0 -top-8 md:-left-12 md:top-0 text-mono text-gray-700 text-sm font-bold tracking-widest">
        {project.number}
      </div>

      {/* Media Container */}
      <div className="relative w-full aspect-video bg-gray-900 overflow-hidden shadow-2xl">
        {/* Toggle Button */}
        <button 
          onClick={togglePreview}
          className={`absolute top-4 right-4 z-30 flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md transition-all duration-300 text-xs font-bold tracking-wider ${
            isPreviewing 
              ? 'bg-accent-cyan text-black hover:bg-white' 
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
          aria-label={isPreviewing ? "Pause Preview" : "Play Preview"}
        >
          {isPreviewing ? <Pause size={12} /> : <Play size={12} />}
          {isPreviewing ? 'IMAGE' : 'PREVIEW'}
        </button>

        {/* Image Layer */}
        <div 
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 z-10 ${
            isPreviewing ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Video Layer */}
        <div 
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 z-20 bg-black ${
            isPreviewing ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <video
            ref={videoRef}
            src={project.videoUrl}
            loop
            muted
            playsInline
            preload="none" // Critical optimization: prevents loading video data until requested
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="mt-2">
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-accent-cyan text-[10px] uppercase tracking-wider font-bold">
              {tag} {i < project.tags.length - 1 && <span className="text-gray-700 mx-1">/</span>}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-medium text-white mb-2">{project.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-md">{project.description}</p>
        
        <a 
          href={project.ctaLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-bold text-white border-b border-transparent hover:border-accent-cyan hover:text-accent-cyan transition-all pb-1"
        >
          View Project <ArrowRight size={14} className="ml-1" />
        </a>

        {project.awards && (
          <div className="mt-2 text-xs italic text-gray-600">{project.awards}</div>
        )}
      </div>
    </motion.div>
  );
};