import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loader2, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  variant?: 'wide' | 'tall' | 'standard';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal, variant = 'standard' }) => {
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Mouse enter/leave handlers for video preview
  const handleMouseEnter = () => {
    setIsPreviewing(true);
  };

  const handleMouseLeave = () => {
    setIsPreviewing(false);
  };

  useEffect(() => {
    if (isPreviewing && videoRef.current) {
      setIsVideoLoading(true);
      videoRef.current.play().catch(e => console.log("Autoplay prevented", e));
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsVideoLoading(false);
    }
  }, [isPreviewing]);

  const handleVideoPlaying = () => setIsVideoLoading(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative w-full h-full rounded-2xl overflow-hidden cursor-pointer bg-gray-900 border border-white/5 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-500"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenModal(project)}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${project.imageUrl})` }}
      />
      
      {/* Video Overlay */}
      <div className={`absolute inset-0 z-10 transition-opacity duration-300 ${isPreviewing ? 'opacity-100' : 'opacity-0'}`}>
         <video
            ref={videoRef}
            src={project.videoUrl}
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onPlaying={handleVideoPlaying}
         />
      </div>

      {/* Gradient Overlay - Always visible but stronger at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-20" />

      {/* Hover Icon (Top Right) */}
      <div className="absolute top-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
        <div className="bg-white text-black p-3 rounded-full">
          {isPreviewing && isVideoLoading ? (
             <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
             <ArrowUpRight className="w-5 h-5" />
          )}
        </div>
      </div>

      {/* Content Container - Glassmorphism for better separation */}
      <div className="absolute bottom-0 left-0 w-full z-30 p-4 md:p-6">
         <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-6 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <span className="px-2 py-1 bg-primary/20 border border-primary/20 text-[10px] font-bold uppercase tracking-wider text-primary rounded-md">
                {project.tags[0]}
              </span>
              <span className="text-gray-400 text-xs uppercase tracking-wider font-mono">
                {project.year || '2023'}
              </span>
            </div>
            
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
              {project.title}
            </h4>
            
            <div className="h-[1px] w-0 group-hover:w-full bg-primary/50 transition-all duration-500 mt-3"></div>
            
            {variant === 'wide' && (
              <p className="text-gray-300 text-sm mt-3 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                {project.description}
              </p>
            )}
         </div>
      </div>
    </motion.div>
  );
};