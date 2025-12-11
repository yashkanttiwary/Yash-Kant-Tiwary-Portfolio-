import React from 'react';
import { motion } from 'framer-motion';
import { Layers, MonitorPlay, Palette, Code, Star, FolderOpen, Trophy } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="services" className="relative py-32 lg:py-40 px-6 bg-[#0e0c1a]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Services Grid (Left on Desktop) */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <ServiceCard icon={Layers} title="3D Motion" description="Cinema 4D, Blender, Redshift" delay={0} />
              <ServiceCard icon={MonitorPlay} title="Compositing" description="After Effects, Nuke" delay={0.1} marginTop />
              <ServiceCard icon={Palette} title="Art Direction" description="Styleframes, Moodboards" delay={0.2} />
              <ServiceCard icon={Code} title="Creative Coding" description="Processing, WebGL" delay={0.3} marginTop />
            </div>
          </div>

          {/* Text Content (Right on Desktop) */}
          <div className="order-1 lg:order-2">
            <h2 className="text-primary font-bold text-sm tracking-[0.2em] mb-4 uppercase">Core Philosophy</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-8 leading-tight">
              BRIDGING THE GAP BETWEEN <span className="text-gray-500">REALITY</span> AND <span className="text-primary">IMAGINATION</span>.
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-12 font-light">
              I am a multidisciplinary visual designer obsessed with kinetic energy and digital textures. My work explores the intersection of brutalist typography and fluid 3D simulations.
            </p>
            
            {/* Stats HUD */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 border-t border-white/10 pt-10">
              <StatCard number="5+" label="Years Exp" icon={Star} />
              <StatCard number="40+" label="Projects" icon={FolderOpen} />
              <StatCard number="12" label="Awards" icon={Trophy} />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ icon: any, title: string, description: string, delay: number, marginTop?: boolean }> = ({ icon: Icon, title, description, delay, marginTop }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className={`bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-primary/50 hover:bg-white/[0.07] transition-all group ${marginTop ? 'mt-0 md:mt-8' : ''}`}
  >
    <Icon className="text-primary text-3xl mb-4 group-hover:scale-110 transition-transform duration-300" />
    <h5 className="text-white font-bold mb-2 text-lg">{title}</h5>
    <p className="text-gray-400 text-sm">{description}</p>
  </motion.div>
);

const StatCard: React.FC<{ number: string, label: string, icon: any }> = ({ number, label, icon: Icon }) => (
  <div className="relative group cursor-default">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
    <div className="relative bg-[#131022] border border-white/10 p-4 md:p-6 rounded-xl text-center group-hover:border-primary/50 transition-colors">
      <div className="flex justify-center mb-2 text-primary opacity-50 group-hover:opacity-100 transition-opacity">
        <Icon size={16} />
      </div>
      <span className="block text-3xl md:text-4xl font-black text-white mb-1">{number}</span>
      <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold group-hover:text-gray-300 transition-colors">{label}</span>
    </div>
  </div>
);