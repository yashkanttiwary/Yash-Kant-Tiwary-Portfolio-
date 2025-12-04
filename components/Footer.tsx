import React, { useState } from 'react';
import { Check, Copy, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('Yashkanttiwary@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
      console.error('Failed to copy email:', err);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate network request
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
      // Reset success message after 5 seconds
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  const handleSocialClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Social link placeholder clicked");
  };

  return (
    <footer id="contact" className="bg-gray-900 pt-24 pb-12 px-6 md:px-12 text-white overflow-hidden relative">
      <div className="container mx-auto max-w-7xl">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24">
          
          {/* Left: Heading & Info */}
          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
              LET'S CREATE <br />
              <span className="text-gray-600">SOMETHING</span> <br />
              TOGETHER.
            </h2>
            
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Have a project in mind? Looking for a motion partner? 
              Drop a message or connect via social.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-12">
              <div>
                <h4 className="text-sm uppercase text-gray-500 mb-4 tracking-widest font-bold">Connect</h4>
                <ul className="space-y-3">
                  {[
                    { name: 'LinkedIn', url: '#' },
                    { name: 'Instagram', url: '#' },
                    { name: 'Behance', url: '#' }
                  ].map((social) => (
                    <li key={social.name}>
                      <a 
                        href={social.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleSocialClick}
                        className="text-white hover:text-accent-cyan transition-colors text-lg font-medium cursor-not-allowed opacity-70"
                        title={`${social.name} (Coming Soon)`}
                      >
                        {social.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm uppercase text-gray-500 mb-4 tracking-widest font-bold">Contact</h4>
                <div className="space-y-3">
                  <button 
                    onClick={handleCopyEmail} 
                    className="flex items-center gap-2 text-white hover:text-accent-cyan transition-colors text-left text-lg font-medium group"
                  >
                    Yashkanttiwary@gmail.com
                    <Copy size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  <a 
                    href="tel:+918383069094" 
                    className="block text-white hover:text-accent-cyan transition-colors text-lg font-medium"
                  >
                    +91 8383069094
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:w-1/2 bg-black/40 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm flex flex-col">
             {formState !== 'success' && <h3 className="text-2xl font-bold mb-6">Send a Message</h3>}
             
             {formState === 'success' ? (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="w-full flex-1 flex flex-col items-center justify-center text-center p-8 bg-accent-cyan/10 rounded-xl border border-accent-cyan/20 min-h-[250px]"
               >
                 <div className="w-16 h-16 bg-accent-cyan text-black rounded-full flex items-center justify-center mb-4 shrink-0">
                   <Check size={32} />
                 </div>
                 <h4 className="text-xl font-bold text-white mb-2 break-words w-full">Message Sent!</h4>
                 <p className="text-gray-400 break-words w-full">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                 <button 
                   onClick={() => setFormState('idle')}
                   className="mt-6 text-sm text-accent-cyan hover:underline underline-offset-4"
                 >
                   Send another message
                 </button>
               </motion.div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6 w-full">
                 <div>
                   <label htmlFor="name" className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Name</label>
                   <input 
                     type="text" 
                     id="name"
                     required
                     value={formData.name}
                     onChange={(e) => setFormData({...formData, name: e.target.value})}
                     className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all placeholder-gray-600"
                     placeholder="John Doe"
                   />
                 </div>
                 <div>
                   <label htmlFor="email" className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Email</label>
                   <input 
                     type="email" 
                     id="email"
                     required
                     value={formData.email}
                     onChange={(e) => setFormData({...formData, email: e.target.value})}
                     className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all placeholder-gray-600"
                     placeholder="john@example.com"
                   />
                 </div>
                 <div>
                   <label htmlFor="message" className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Message</label>
                   <textarea 
                     id="message"
                     required
                     rows={4}
                     value={formData.message}
                     onChange={(e) => setFormData({...formData, message: e.target.value})}
                     className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all placeholder-gray-600 resize-none"
                     placeholder="Tell me about your project..."
                   />
                 </div>
                 <button 
                   type="submit"
                   disabled={formState === 'submitting'}
                   className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-accent-cyan transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                 >
                   {formState === 'submitting' ? (
                     <>Sending <Loader2 className="animate-spin" size={20} /></>
                   ) : (
                     <>Send Message <Send size={20} /></>
                   )}
                 </button>
               </form>
             )}
          </div>
        </div>
      </div>

      <div className="container mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
        <span>© 2025 Yash Kant Tiwary. All Rights Reserved.</span>
        <span>Designed & Built with React</span>
      </div>
    </footer>
  );
};