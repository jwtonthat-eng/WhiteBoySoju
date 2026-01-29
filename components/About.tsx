
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-[#1B2A41] text-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] border-8 border-[#8B0000] overflow-hidden rotate-2 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1521508855941-df4045bfcfe7?auto=format&fit=crop&q=80&w=800" 
              alt="Boston Harbor"
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#FFBF00] p-6 -rotate-6 hidden md:flex flex-col justify-center items-center text-[#1B2A41] border-4 border-black">
            <span className="font-display text-4xl">100%</span>
            <span className="font-bold uppercase tracking-widest text-xs">Small Batch</span>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="font-serif-vintage text-5xl md:text-6xl leading-tight">
            NOT YOUR ANCESTORS' <br />
            <span className="text-[#FFBF00]">SPIRIT.</span>
          </h2>
          <p className="text-xl opacity-90 leading-relaxed font-light">
            We love soju. We also love New England. One night in a Southie garage, we asked: why can't we have both? 
          </p>
          <p className="text-xl opacity-90 leading-relaxed font-light">
            White Boy Soju is our answer. We took the crisp, clean profile of Korean tradition and infused it with the grit of Boston, the sweetness of Vermont, and the colors of a Massachusetts October. It's bold, it's playful, and it's wicked smaht.
          </p>
          <div className="pt-4 flex items-center space-x-6">
            <div className="h-px bg-[#FFBF00] flex-grow"></div>
            <span className="font-display text-2xl text-[#FFBF00]">The Hub's Finest</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
