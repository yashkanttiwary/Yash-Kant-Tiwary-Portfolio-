import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
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
      className="group relative w-full h-full rounded-lg overflow-hidden cursor-pointer bg-gray-900 border border-white/5"
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity z-20" />

      {/* Loading Indicator */}
      {isPreviewing && isVideoLoading && (
        <div className="absolute top-4 right-4 z-30">
           <Loader2 className="w-5 h-5 text-primary animate-spin" />
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-30 flex flex-col justify-end h-full">
         <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              <span className="px-2 py-1 bg-primary text-[10px] font-bold uppercase tracking-wider text-white rounded-sm">
                {project.tags[0]}
              </span>
              <span className="text-gray-300 text-xs uppercase tracking-wider font-mono">
                {project.year || '2023'}
              </span>
            </div>
            
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-1 leading-tight">
              {project.title.toUpperCase()}
            </h4>
            
            <div className="h-[1px] w-12 group-hover:w-full bg-white/50 transition-all duration-500 mt-4 mb-2"></div>
            
            {variant === 'wide' && (
              <p className="text-gray-400 text-sm max-w-md hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                {project.description}
              </p>
            )}
         </div>
      </div>
    </motion.div>
  );
};