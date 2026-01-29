
import React from 'react';
import { NAV_LINKS, BRAND_NAME } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#FDFBF7]/90 backdrop-blur-sm border-b-2 border-[#1B2A41]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="font-display text-2xl text-[#8B0000] hidden sm:block">WB SOJU</span>
          <span className="font-display text-2xl text-[#8B0000] sm:hidden">WBS</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-12">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest text-[#1B2A41] hover:text-[#8B0000] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button className="bg-[#1B2A41] text-white px-6 py-2 font-bold text-sm uppercase tracking-tighter hover:bg-[#2C3E50] transition-colors border-2 border-black">
          Coming Soon
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
