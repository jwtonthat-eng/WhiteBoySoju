
import React from 'react';

const Culture: React.FC = () => {
  return (
    <section id="culture" className="py-24 bg-[#FDFBF7] border-y-4 border-[#1B2A41]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-0 border-4 border-[#1B2A41]">
          <div className="p-12 border-b-4 lg:border-b-0 lg:border-r-4 border-[#1B2A41] space-y-6">
            <span className="text-[#8B0000] font-display text-4xl">01</span>
            <h3 className="font-serif-vintage text-3xl">COASTAL GRIT</h3>
            <p className="text-gray-600 leading-relaxed">
              Our base is filtered with sea salt notes inspired by the North Shore. Clean, sharp, and resilient—just like a winter on the Cape.
            </p>
          </div>
          <div className="p-12 border-b-4 lg:border-b-0 lg:border-r-4 border-[#1B2A41] bg-[#FFBF00]/10 space-y-6">
            <span className="text-[#8B0000] font-display text-4xl">02</span>
            <h3 className="font-serif-vintage text-3xl">FALL SPIRIT</h3>
            <p className="text-gray-600 leading-relaxed">
              We lean into the amber palette of the Northeast. Maple, grain, and grape aren't just flavors; they're the memories of home.
            </p>
          </div>
          <div className="p-12 space-y-6">
            <span className="text-[#8B0000] font-display text-4xl">03</span>
            <h3 className="font-serif-vintage text-3xl">STREET SMARTS</h3>
            <p className="text-gray-600 leading-relaxed">
              Branding for the urban New Englander. No corporate fluff, no fake history. Just real flavor for real people in real cities.
            </p>
          </div>
        </div>
        
        <div className="mt-20 relative h-96 overflow-hidden border-4 border-[#1B2A41] group">
          <img 
            src="https://images.unsplash.com/photo-1542460297-750d40e1f748?auto=format&fit=crop&q=80&w=1200" 
            alt="New England Street"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-[#8B0000]/40 mix-blend-multiply group-hover:bg-transparent transition-all duration-700"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white px-8 py-4 border-2 border-black -rotate-2">
              <span className="font-display text-4xl md:text-6xl text-[#1B2A41]">Wicked Smaht.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
