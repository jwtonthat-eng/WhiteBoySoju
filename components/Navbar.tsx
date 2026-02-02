
import React, { useState, useEffect } from 'react';
import { NAV_LINKS, BRAND_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust detection range to be more forgiving
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) {
        setActiveSection(`#${current}`);
      } else if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update active section immediately for better UX
      setActiveSection(href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#FDFBF7]/90 backdrop-blur-sm border-b-2 border-[#1B2A41]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display text-2xl text-[#8B0000] hover:scale-105 transition-transform cursor-pointer"
          >
            WB SOJU
          </button>
        </div>
        
        <div className="hidden md:flex items-center space-x-12">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 relative py-2
                ${activeSection === link.href ? 'text-[#8B0000]' : 'text-[#1B2A41] hover:text-[#8B0000]'}
              `}
            >
              {link.label}
              {activeSection === link.href && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8B0000] animate-in fade-in slide-in-from-left-2" />
              )}
            </a>
          ))}
        </div>

        <button className="bg-[#1B2A41] text-white px-6 py-2 font-bold text-sm uppercase tracking-tighter hover:bg-[#8B0000] transition-all border-2 border-black active:translate-y-1">
          Coming Soon
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
