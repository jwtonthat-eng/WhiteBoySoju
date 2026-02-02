
import React from 'react';

const Culture: React.FC = () => {
  return (
    <section id="culture" className="py-24 bg-[#FDFBF7] border-y-4 border-[#1B2A41] scroll-mt-20 relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1B2A41 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="font-serif-vintage text-5xl md:text-7xl text-[#1B2A41] uppercase leading-tight">
            The New <br />
            <span className="text-[#8B0000] italic">England Code</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-0 border-4 border-[#1B2A41] bg-white">
          {/* Pillar 01 */}
          <div className="group p-8 md:p-12 border-b-4 lg:border-b-0 lg:border-r-4 border-[#1B2A41] flex flex-col justify-between transition-colors hover:bg-[#FDFBF7]">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="font-display text-4xl text-[#8B0000]">01</span>
                <div className="h-px bg-[#1B2A41]/20 flex-grow"></div>
              </div>
              <h3 className="font-serif-vintage text-3xl text-[#1B2A41]">COASTAL GRIT</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Our base is filtered with sea salt notes inspired by the North Shore. Clean, sharp, and resilient—built to withstand a winter on the Cape or a night in the Seaport.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-black/5 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#8B0000]">Salt Water Touched</span>
            </div>
          </div>

          {/* Pillar 02 */}
          <div className="group p-8 md:p-12 border-b-4 lg:border-b-0 lg:border-r-4 border-[#1B2A41] bg-[#FFBF00]/5 flex flex-col justify-between transition-colors hover:bg-white">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="font-display text-4xl text-[#8B0000]">02</span>
                <div className="h-px bg-[#1B2A41]/20 flex-grow"></div>
              </div>
              <h3 className="font-serif-vintage text-3xl text-[#1B2A41]">FALL SPIRIT</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                We lean into the amber palette of the Northeast. Maple, grain, and grape aren't just flavors; they're the heritage of the Commonwealth distilled into a glass.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-black/5 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#8B0000]">Seasonal Heritage</span>
            </div>
          </div>

          {/* Pillar 03 */}
          <div className="group p-8 md:p-12 flex flex-col justify-between transition-colors hover:bg-[#FDFBF7]">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="font-display text-4xl text-[#8B0000]">03</span>
                <div className="h-px bg-[#1B2A41]/20 flex-grow"></div>
              </div>
              <h3 className="font-serif-vintage text-3xl text-[#1B2A41]">STREET SMARTS</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Branding for the urban New Englander. No corporate fluff, no fake history. Just real flavor for the people who make this region what it is.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-black/5 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#8B0000]">Hub Authenticity</span>
            </div>
          </div>
        </div>
        
        {/* Large Feature Graphic */}
        <div className="mt-16 grid md:grid-cols-12 gap-8 items-stretch">
          <div className="md:col-span-8 relative h-80 md:h-[500px] overflow-hidden border-4 border-[#1B2A41] group">
            <img 
              src="https://images.unsplash.com/photo-1542460297-750d40e1f748?auto=format&fit=crop&q=80&w=1200" 
              alt="Boston Street"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#8B0000]/30 mix-blend-multiply group-hover:bg-transparent transition-all duration-700"></div>
            
            {/* "Sticker" element */}
            <div className="absolute top-8 right-8 animate-in fade-in zoom-in duration-1000">
               <div className="bg-[#FFBF00] border-2 border-black p-4 rotate-12 shadow-lg">
                  <span className="font-display text-xl text-[#1B2A41] uppercase whitespace-nowrap">Local As It Gets</span>
               </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white px-6 py-3 md:px-12 md:py-6 border-4 border-[#1B2A41] -rotate-2 shadow-[10px_10px_0px_0px_rgba(27,42,65,1)]">
                <span className="font-display text-4xl md:text-7xl text-[#1B2A41] block">Wicked Smaht.</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 bg-[#8B0000] border-4 border-[#1B2A41] p-10 flex flex-col justify-center text-white space-y-6">
            <h4 className="font-serif-vintage text-4xl leading-tight">BORN IN THE <br /> GARAGE.</h4>
            <p className="opacity-90 font-medium">
              We started with a simple idea in a Somerville driveway. No venture capital, no focus groups. Just a thirst for something better.
            </p>
            <div className="pt-4">
               <button className="w-full py-4 bg-white text-[#8B0000] font-black uppercase tracking-tighter border-2 border-black hover:bg-[#FDFBF7] transition-colors">
                  Read Our Story
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
