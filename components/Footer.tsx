import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 pt-24 pb-12 px-6 md:px-12 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-8 mb-24">
        
        {/* Branding */}
        <div className="flex-1">
          <h2 className="text-6xl font-bold tracking-tighter mb-4">YKT® 25</h2>
        </div>

        {/* Contact Info */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div>
            <h4 className="text-sm uppercase text-gray-500 mb-2 tracking-widest">Email</h4>
            <a href="mailto:Yashkanttiwary@gmail.com" className="text-xl hover:text-accent-cyan transition-colors">
              Yashkanttiwary@gmail.com
            </a>
          </div>
          <div>
            <h4 className="text-sm uppercase text-gray-500 mb-2 tracking-widest">Phone</h4>
            <a href="tel:+918383069094" className="text-xl hover:text-accent-cyan transition-colors">
              +91 8383069094
            </a>
          </div>
          
          <div className="sm:col-span-2 mt-8">
            <div className="flex gap-6 flex-wrap">
              {['LinkedIn', 'Instagram', 'Behance', 'Drive'].map((social) => (
                <a 
                  key={social} 
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white uppercase tracking-wider text-sm border-b border-transparent hover:border-white pb-1 transition-all"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto border-t border-gray-800 pt-8 text-center text-sm text-gray-600">
        © 2025 Yash Kant Tiwary. All Rights Reserved.
      </div>
    </footer>
  );
};