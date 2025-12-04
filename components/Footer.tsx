import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 pt-24 pb-12 px-6 md:px-12 text-white overflow-hidden">
      <div className="container mx-auto">
        
        {/* Large CTA */}
        <div className="mb-24 border-b border-gray-800 pb-24">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
            LET'S CREATE <br />
            <span className="text-gray-600">SOMETHING</span> <br />
            TOGETHER.
          </h2>
          <a 
            href="mailto:Yashkanttiwary@gmail.com"
            className="inline-flex items-center gap-4 px-8 py-4 bg-accent-cyan text-black font-bold text-lg rounded-full hover:bg-white transition-colors"
          >
            Get In Touch <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-8 mb-24">
          <div className="flex-1">
            <h2 className="text-2xl font-bold tracking-tighter mb-4">YKT® 25</h2>
            <p className="text-gray-500 max-w-xs">Based in Bengaluru, working with brands worldwide.</p>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <h4 className="text-sm uppercase text-gray-500 mb-2 tracking-widest">Connect</h4>
              <ul className="space-y-2">
                {[
                  { name: 'LinkedIn', url: 'https://www.linkedin.com' },
                  { name: 'Instagram', url: 'https://www.instagram.com' },
                  { name: 'Behance', url: 'https://www.behance.net' }
                ].map((social) => (
                  <li key={social.name}>
                    <a href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors">
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm uppercase text-gray-500 mb-2 tracking-widest">Contact</h4>
              <a href="mailto:Yashkanttiwary@gmail.com" className="block hover:text-accent-cyan transition-colors mb-2">
                Yashkanttiwary@gmail.com
              </a>
              <a href="tel:+918383069094" className="block hover:text-accent-cyan transition-colors">
                +91 8383069094
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
        <span>© 2025 Yash Kant Tiwary. All Rights Reserved.</span>
        <span>Designed & Built with React</span>
      </div>
    </footer>
  );
};