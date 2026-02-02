
import React from 'react';

const Hero: React.FC = () => {
  const scrollToFlavors = () => {
    const element = document.getElementById('flavors');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToStory = () => {
    const element = document.getElementById('story');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-block px-4 py-1 mb-6 border-2 border-[#8B0000] text-[#8B0000] font-bold text-xs uppercase tracking-widest bg-white">
          Hand-Crafted in Boston, MA
        </div>
        
        <h1 className="font-serif-vintage text-6xl md:text-9xl text-[#1B2A41] leading-none mb-8">
          WHITE BOY <br />
          <span className="text-[#8B0000] italic">SOJU</span>
        </h1>

        <div className="max-w-2xl mx-auto space-y-6">
          <p className="text-xl md:text-2xl text-[#1B2A41] font-medium leading-relaxed">
            Eastern Tradition. Wicked Smaht Flavor. The first American-made soju that actually tastes like New England.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button 
              onClick={scrollToFlavors}
              className="px-10 py-5 bg-[#8B0000] text-white font-black text-xl uppercase tracking-tighter border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              Find Our Soju
            </button>
            <button 
              onClick={scrollToStory}
              className="px-10 py-5 bg-white text-[#1B2A41] font-black text-xl uppercase tracking-tighter border-4 border-[#1B2A41] shadow-[8px_8px_0px_0px_rgba(27,42,65,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              The Vibe
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-x-1/4 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block">
        <h2 className="font-display text-[30rem] text-[#8B0000] leading-none select-none">BOS</h2>
      </div>
      <div className="absolute bottom-0 right-0 p-12 opacity-20 hidden md:block">
        <img 
          src="https://images.unsplash.com/photo-1541415175653-847e0964724b?auto=format&fit=crop&q=80&w=300" 
          alt="Fall leaves"
          className="w-48 h-48 rounded-full border-4 border-[#8B0000] grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>
    </section>
  );
};

export default Hero;
