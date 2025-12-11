import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Check, Loader2, Instagram, Linkedin, Dribbble } from 'lucide-react';

export const Footer: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      
      // Reset status after showing success message
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <footer id="contact" className="relative py-24 px-6 bg-background-dark overflow-hidden">
      {/* Abstract BG elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[50vw] h-[50vw] bg-primary blur-[150px] rounded-full"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[40vw] h-[40vw] bg-blue-900 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: CTA & Info */}
          <div className="flex flex-col justify-between h-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-[0.9]">
                LET'S CREATE<br/>TOGETHER
              </h2>
              <p className="text-gray-400 text-lg md:text-xl max-w-md mb-12 font-light leading-relaxed">
                Have a project in mind? Let's bridge the gap between your reality and imagination. Drop me a line.
              </p>
              
              <div className="mt-8">
                <h4 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-6">Contact</h4>
                
                <a 
                  href="mailto:Yashkanttiwary@gmail.com" 
                  className="block text-2xl md:text-3xl text-white hover:text-primary transition-colors mb-4 font-light tracking-tight"
                >
                  Yashkanttiwary@gmail.com
                </a>
                
                <a 
                  href="tel:+918383069094" 
                  className="block text-2xl md:text-3xl text-white hover:text-primary transition-colors font-light tracking-tight"
                >
                  +91 8383069094
                </a>
              </div>
            </motion.div>

            <div className="hidden lg:flex gap-6 mt-20">
              <SocialLink href="#" icon={<Instagram />} label="Instagram" />
              <SocialLink href="#" icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href="#" icon={<BehanceIcon />} label="Behance" />
              <SocialLink href="#" icon={<Dribbble />} label="Dribbble" />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full"
          >
            <div className="bg-white/5 p-8 md:p-10 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                Send a Message
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-black/20 border border-white/10 rounded-lg p-4 text-white placeholder:text-white/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-black/20 border border-white/10 rounded-lg p-4 text-white placeholder:text-white/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full bg-black/20 border border-white/10 rounded-lg p-4 text-white placeholder:text-white/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className={`w-full py-5 rounded-lg font-bold text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-2 ${
                    status === 'success' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-white text-background-dark hover:bg-primary hover:text-white'
                  }`}
                >
                  {status === 'loading' && <Loader2 className="animate-spin" size={18} />}
                  {status === 'success' && <Check className="animate-bounce" size={18} />}
                  {status === 'idle' && <>Send Message <Send size={16} /></>}
                  
                  {status === 'loading' && 'Sending...'}
                  {status === 'success' && 'Message Sent!'}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Mobile Social Links */}
          <div className="lg:hidden flex gap-6 justify-center w-full">
            <SocialLink href="#" icon={<Instagram />} label="Instagram" />
            <SocialLink href="#" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="#" icon={<BehanceIcon />} label="Behance" />
            <SocialLink href="#" icon={<Dribbble />} label="Dribbble" />
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/40 text-xs font-bold tracking-widest uppercase gap-4">
          <span>© 2025 Yash Kant Tiwary</span>
          <span>All Rights Reserved</span>
        </div>
      </div>

      {/* Spacer for floating nav */}
      <div className="h-24"></div>
    </footer>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a 
    href={href} 
    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-background-dark hover:border-white transition-all duration-300 group"
    aria-label={label}
  >
    <div className="transform group-hover:scale-110 transition-transform">
      {icon}
    </div>
  </a>
);

// Custom Behance Icon since it might not be in the default set
const BehanceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M8.22 5.5H2V18.5H8.36C11.83 18.5 13.79 16.3 13.79 13.4C13.79 11.51 12.7 10.14 11.13 9.49C12.18 8.87 13 7.79 13 6.45C13 4.38 11.55 3.5 9.07 3.5H2V5.5H8.22C9.44 5.5 10.19 6.07 10.19 7.21C10.19 8.24 9.38 8.92 7.79 8.92H4.89V10.92H8.38C10.38 10.92 11.12 11.86 11.12 13.22C11.12 14.86 10 15.93 7.84 15.93H4.89V5.5H8.22ZM16 7.5H22V9.5H16V7.5ZM19 10.5C21.21 10.5 22.5 12.03 22.5 14.28V15.17H17.43C17.51 16.03 18.23 16.51 19.06 16.51C19.67 16.51 20.08 16.29 20.35 15.87L22.19 16.97C21.6 18.06 20.52 18.5 19.09 18.5C16.89 18.5 15.35 16.94 15.35 14.5C15.35 12.16 16.94 10.5 19 10.5ZM17.51 13.62H20.44C20.38 12.82 19.86 12.28 19.02 12.28C18.2 12.28 17.61 12.81 17.51 13.62Z" />
  </svg>
);
