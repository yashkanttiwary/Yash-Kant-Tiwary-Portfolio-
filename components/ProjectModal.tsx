import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, User, Target, Lightbulb, TrendingUp, Loader2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset loading state when new project opens
      setIsVideoLoaded(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, project]);

  if (!project) return null;

  const hasLiveLink = project.ctaLink && project.ctaLink !== '#';

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl h-[90vh] bg-gray-900 rounded-xl overflow-hidden shadow-2xl flex flex-col border border-white/10"
          >
            {/* Header / Media */}
            <div className="relative h-[40%] md:h-[50%] shrink-0 bg-black">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black rounded-full text-white transition-colors border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              
              <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                {!isVideoLoaded && (
                   <Loader2 className="w-12 h-12 text-accent-cyan animate-spin absolute z-10" />
                )}
                <video 
                  src={project.videoUrl} 
                  autoPlay 
                  loop 
                  muted 
                  className={`w-full h-full object-cover transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoadedData={() => setIsVideoLoaded(true)}
                  onCanPlay={() => setIsVideoLoaded(true)}
                  aria-label={`Project video for ${project.title}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-black/30 pointer-events-none" />
              </div>

              <div className="absolute bottom-6 left-6 md:left-10 right-6 z-20">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-accent-cyan/20 text-accent-cyan text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-sm border border-accent-cyan/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 id="modal-title" className="text-3xl md:text-5xl font-bold text-white mb-2">{project.title}</h2>
              </div>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan/50" tabIndex={0}>
              <div className="flex flex-col md:flex-row gap-12">
                
                {/* Sidebar Info */}
                <div className="w-full md:w-1/3 space-y-8">
                  <div>
                    <h4 className="flex items-center gap-2 text-gray-400 text-sm font-mono uppercase tracking-widest mb-2">
                      <Calendar size={14} aria-hidden="true" /> Year
                    </h4>
                    <p className="text-white font-medium">{project.year || '2024'}</p>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 text-gray-400 text-sm font-mono uppercase tracking-widest mb-2">
                      <User size={14} aria-hidden="true" /> Role
                    </h4>
                    <p className="text-white font-medium">{project.role || 'Motion Designer'}</p>
                  </div>
                  
                  {hasLiveLink ? (
                    <a 
                      href={project.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-accent-cyan transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                      aria-label="View live project in new tab"
                    >
                      View Live <ExternalLink size={16} />
                    </a>
                  ) : (
                    <button 
                      disabled
                      className="flex items-center justify-center gap-2 w-full py-4 bg-gray-800 text-gray-500 font-bold uppercase tracking-widest cursor-not-allowed rounded-sm border border-gray-700"
                      aria-disabled="true"
                    >
                      Coming Soon <ExternalLink size={16} />
                    </button>
                  )}
                </div>

                {/* Narrative Content */}
                <div className="w-full md:w-2/3 space-y-10">
                  <section>
                    <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
                      <Target className="text-accent-red" aria-hidden="true" /> The Challenge
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {project.challenge || "Every project begins with a unique hurdle. For this piece, the main objective was to break through the noise of a saturated market and deliver a visual identity that felt both timeless and futuristic."}
                    </p>
                  </section>

                  <section>
                    <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
                      <Lightbulb className="text-accent-cyan" aria-hidden="true" /> The Solution
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {project.solution || "I approached this by combining kinetic typography with abstract 3D elements. The pacing was carefully synced to the audio track to create a hypnotic rhythm that keeps the viewer engaged from the first frame."}
                    </p>
                  </section>

                  <section>
                    <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
                      <TrendingUp className="text-accent-purple" aria-hidden="true" /> The Impact
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {project.outcome || "The final deliverable resulted in a 40% increase in social engagement and was featured in several industry design showcases. It stands as a testament to the power of motion in storytelling."}
                    </p>
                  </section>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};