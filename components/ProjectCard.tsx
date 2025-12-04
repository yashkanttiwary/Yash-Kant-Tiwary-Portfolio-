import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ArrowRight, Loader2, BookOpen } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Ref to prevent double-click rapid firing
  const isClickProcessing = useRef(false);

  // Robust video playback handling
  useEffect(() => {
    if (isPreviewing && videoRef.current) {
      setIsVideoLoading(true);
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Playback started successfully
            // Loading state will be cleared by onPlaying/onTimeUpdate
          })
          .catch((error) => {
            console.error("Video preview failed:", error);
            setHasError(true);
            setIsPreviewing(false);
            setIsVideoLoading(false);
          });
      }
    } else if (!isPreviewing && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsVideoLoading(false);
    }
  }, [isPreviewing]);

  const togglePreview = () => {
    if (hasError) return; // Prevent toggling if video is broken
    setIsPreviewing(!isPreviewing);
  };

  const handleOpenModalDebounced = (project: Project) => {
    if (isClickProcessing.current) return;
    isClickProcessing.current = true;
    onOpenModal(project);
    // Release lock after 500ms
    setTimeout(() => {
      isClickProcessing.current = false;
    }, 500);
  };

  const handleVideoLoadStart = () => setIsVideoLoading(true);
  const handleVideoPlaying = () => setIsVideoLoading(false);
  const handleVideoError = () => {
    setHasError(true);
    setIsPreviewing(false);
    setIsVideoLoading(false);
  };

  const hasLiveLink = project.ctaLink && project.ctaLink !== '#';

  return (
    <motion.div 
      id={project.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6 }}
      className={`group flex flex-col gap-4 relative transition-all duration-500 ease-out transform-gpu ${
        isPreviewing ? 'scale-[1.02] z-10' : ''
      }`}
    >
      <div className="absolute -left-0 -top-8 md:-left-12 md:top-0 text-mono text-gray-500 text-sm font-bold tracking-widest" aria-hidden="true">
        {project.number}
      </div>

      {/* Media Container */}
      <div className="relative w-full aspect-video bg-gray-900 overflow-hidden shadow-2xl rounded-sm group-hover:shadow-accent-cyan/10 transition-all duration-500">
        
        {/* Toggle Button */}
        {!hasError && (
          <button 
            onClick={togglePreview}
            className={`absolute top-4 right-4 z-30 flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md transition-all duration-300 text-xs font-bold tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan min-h-[32px] ${
              isPreviewing 
                ? 'bg-accent-cyan text-black hover:bg-white' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
            aria-label={isPreviewing ? `Stop video preview for ${project.title}` : `Play video preview for ${project.title}`}
          >
            {isPreviewing ? <Pause size={12} /> : <Play size={12} />}
            {isPreviewing ? 'IMAGE' : 'PREVIEW'}
          </button>
        )}

        {/* Loading Spinner */}
        {isPreviewing && isVideoLoading && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 pointer-events-none backdrop-blur-sm">
            <Loader2 className="w-10 h-10 text-accent-cyan animate-spin" />
          </div>
        )}

        {/* Image Layer */}
        <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 z-10 ${isPreviewing ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <img 
            src={project.imageUrl} 
            alt={`Preview image of project: ${project.title}`}
            loading="lazy"
            width="640"
            height="360"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Video Layer */}
        <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 z-20 bg-black ${isPreviewing ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <video
            ref={videoRef}
            src={project.videoUrl}
            loop
            muted
            playsInline
            preload="none"
            className="w-full h-full object-cover"
            onLoadStart={handleVideoLoadStart}
            onPlaying={handleVideoPlaying}
            onCanPlay={handleVideoPlaying}
            onError={handleVideoError}
            aria-label={`Video preview of ${project.title}`}
          />
        </div>
      </div>

      {/* Content */}
      <div className="mt-2">
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-accent-cyan text-[10px] uppercase tracking-wider font-bold">
              {tag} {i < project.tags.length - 1 && <span className="text-gray-500 mx-1">/</span>}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-medium text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-md">{project.description}</p>
        
        <div className="flex items-center gap-6">
          <button 
            onClick={() => handleOpenModalDebounced(project)}
            className="inline-flex items-center text-sm font-bold text-white hover:text-accent-cyan transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan rounded-sm px-2 py-2 -ml-2 min-h-[44px]"
            aria-label={`Read full case study for ${project.title}`}
          >
            <BookOpen size={16} className="mr-2" />
            Read Case Study
          </button>
          
          {hasLiveLink ? (
            <a 
              href={project.ctaLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan rounded-sm px-2 py-2 min-h-[44px]"
              aria-label={`View live site for ${project.title} (Opens in new tab)`}
            >
              View Live <ArrowRight size={14} className="ml-1" />
            </a>
          ) : (
            <span className="inline-flex items-center text-sm font-bold text-gray-600 cursor-not-allowed opacity-60 px-2 py-2" title="Link coming soon">
              View Live <ArrowRight size={14} className="ml-1" />
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};