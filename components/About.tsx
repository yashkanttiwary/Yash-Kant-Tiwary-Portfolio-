import React from 'react';
import { motion } from 'framer-motion';
import { Layers, MonitorPlay, Palette, Code } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="services" className="relative py-20 px-6 bg-[#0e0c1a]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Services Grid (Left on Desktop) */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-6 rounded-lg border border-white/5 hover:border-primary/50 transition-colors group">
                <Layers className="text-primary text-3xl mb-4 group-hover:scale-110 transition-transform" />
                <h5 className="text-white font-bold mb-2">3D Motion</h5>
                <p className="text-gray-400 text-sm">Cinema 4D, Blender, Redshift</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg border border-white/5 hover:border-primary/50 transition-colors mt-8 group">
                <MonitorPlay className="text-primary text-3xl mb-4 group-hover:scale-110 transition-transform" />
                <h5 className="text-white font-bold mb-2">Compositing</h5>
                <p className="text-gray-400 text-sm">After Effects, Nuke</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg border border-white/5 hover:border-primary/50 transition-colors group">
                <Palette className="text-primary text-3xl mb-4 group-hover:scale-110 transition-transform" />
                <h5 className="text-white font-bold mb-2">Art Direction</h5>
                <p className="text-gray-400 text-sm">Styleframes, Moodboards</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg border border-white/5 hover:border-primary/50 transition-colors mt-8 group">
                <Code className="text-primary text-3xl mb-4 group-hover:scale-110 transition-transform" />
                <h5 className="text-white font-bold mb-2">Creative Coding</h5>
                <p className="text-gray-400 text-sm">Processing, WebGL</p>
              </div>
            </div>
          </div>

          {/* Text Content (Right on Desktop) */}
          <div className="order-1 lg:order-2">
            <h2 className="text-primary font-bold text-sm tracking-[0.2em] mb-2 uppercase">Core Philosophy</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              BRIDGING THE GAP BETWEEN <span className="text-gray-500">REALITY</span> AND <span className="text-primary">IMAGINATION</span>.
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              I am a multidisciplinary visual designer obsessed with kinetic energy and digital textures. My work explores the intersection of brutalist typography and fluid 3D simulations.
            </p>
            
            <div className="flex gap-12 border-t border-white/10 pt-8">
              <div>
                <span className="block text-4xl font-black text-white">5+</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Years Exp</span>
              </div>
              <div>
                <span className="block text-4xl font-black text-white">40+</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Projects</span>
              </div>
              <div>
                <span className="block text-4xl font-black text-white">12</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Awards</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};