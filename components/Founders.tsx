
import React from 'react';

const Founders: React.FC = () => {
  return (
    <section id="founders" className="py-32 bg-[#FDFBF7] scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="md:w-1/2 relative">
            {/* Layered Polaroid Aesthetic */}
            <div className="relative z-20 translate-x-4 -rotate-3 border-8 border-white shadow-xl max-w-sm mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=600" 
                alt="Friends eating grilled meat"
                className="w-full aspect-[4/5] object-cover grayscale"
              />
              <div className="bg-white p-4 text-center">
                <span className="font-display text-[#1B2A41] text-lg">Class of '08</span>
              </div>
            </div>
            
            <div className="absolute top-10 left-10 z-10 -rotate-12 border-8 border-white shadow-xl opacity-50 hidden md:block max-w-sm">
               <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=600" 
                alt="Grilling meat"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2 space-y-8">
            <div className="space-y-2">
              <span className="text-[#8B0000] font-black uppercase tracking-[0.3em] text-xs">The Masterminds</span>
              <h2 className="font-serif-vintage text-5xl md:text-7xl text-[#1B2A41] leading-none">
                ADAM & <br />
                <span className="text-[#8B0000]">JOHNATHAN</span>
              </h2>
            </div>

            <p className="text-2xl text-[#1B2A41] font-serif-vintage italic leading-relaxed">
              "Soju and meat and friends truly do go together."
            </p>

            <div className="space-y-6 text-gray-700 leading-relaxed font-medium">
              <p>
                Friends since high school, Adam Gaudreau and Johnathan Tonthat didn't set out to disrupt the spirits industry. They just wanted something better to wash down the copious amounts of grilled meat they were consuming on weekend nights.
              </p>
              <p>
                Between the long winters and the late-night grill sessions, the duo realized that the clean, crisp profile of soju was the ultimate companion to New England hospitality. One was the dreamer, one was the technician; both were obsessed with getting the flavor exactly right.
              </p>
              <p>
                Today, White Boy Soju is a tribute to that brotherhood—a craft spirit born from years of friendship and a shared belief that the best nights happen around a fire with the people you trust.
              </p>
            </div>

            <div className="pt-6">
              <div className="inline-grid grid-cols-2 gap-x-12 border-l-4 border-[#8B0000] pl-8">
                <div>
                  <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-400 mb-2">Creative Direction</h4>
                  <p className="font-display text-xl text-[#1B2A41]">Adam G.</p>
                </div>
                <div>
                  <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-400 mb-2">Operations</h4>
                  <p className="font-display text-xl text-[#1B2A41]">Johnathan T.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founders;
