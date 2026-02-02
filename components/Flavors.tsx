
import React, { useState } from 'react';
import { FLAVORS } from '../constants';

const Flavors: React.FC = () => {
  const [activeTab, setActiveTab] = useState(FLAVORS[0].id);
  const activeFlavor = FLAVORS.find(f => f.id === activeTab) || FLAVORS[0];

  return (
    <section id="flavors" className="py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif-vintage text-5xl md:text-7xl text-[#1B2A41] mb-4 uppercase">
            Pick Your <span className="text-[#8B0000] italic">Poison</span>
          </h2>
          <p className="text-lg text-gray-600 uppercase tracking-[0.3em] font-bold">New England Roots. Global Soul.</p>
        </div>

        {/* Tab Triggers */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {FLAVORS.map((flavor) => (
            <button
              key={flavor.id}
              onClick={() => setActiveTab(flavor.id)}
              className={`px-8 py-4 border-4 border-[#1B2A41] font-serif-vintage text-xl md:text-2xl transition-all relative
                ${activeTab === flavor.id 
                  ? `${flavor.color} ${flavor.textColor} shadow-[6px_6px_0px_0px_rgba(27,42,65,1)] translate-x-[-2px] translate-y-[-2px]` 
                  : 'bg-white text-[#1B2A41] hover:bg-gray-50'
                }
              `}
            >
              {flavor.name.split(' ')[0]}
              {flavor.badge && activeTab === flavor.id && (
                <span className="absolute -top-3 -right-3 bg-[#8B0000] text-white text-[8px] font-bold uppercase py-1 px-2 border-2 border-black rotate-12">
                  Top Pick
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content Panel */}
        <div className="relative min-h-[500px] border-4 border-[#1B2A41] bg-white shadow-[16px_16px_0px_0px_rgba(139,0,0,0.1)] overflow-hidden">
          <div className="grid md:grid-cols-2 h-full">
            {/* Image side */}
            <div className={`relative overflow-hidden border-b-4 md:border-b-0 md:border-r-4 border-[#1B2A41] h-64 md:h-auto`}>
              <img 
                key={`${activeFlavor.id}-img`}
                src={activeFlavor.image} 
                alt={activeFlavor.name}
                className="w-full h-full object-cover transition-all duration-700 animate-in fade-in zoom-in-95"
              />
              <div className={`absolute inset-0 opacity-20 mix-blend-multiply ${activeFlavor.color}`}></div>
            </div>

            {/* Info side */}
            <div className="p-12 flex flex-col justify-center space-y-8 animate-in slide-in-from-right-8 duration-500">
              <div className="space-y-2">
                <span className="text-[#8B0000] font-bold uppercase tracking-widest text-xs">Flavor Profile</span>
                <h3 className="font-serif-vintage text-5xl md:text-6xl text-[#1B2A41] leading-none">
                  {activeFlavor.name}
                </h3>
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed italic border-l-4 border-[#8B0000] pl-6 py-2">
                "{activeFlavor.notes}"
              </p>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest text-[#1B2A41] mb-2">ABV</h4>
                  <p className="font-display text-2xl text-[#8B0000]">18.5%</p>
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest text-[#1B2A41] mb-2">Serving</h4>
                  <p className="font-display text-2xl text-[#8B0000]">Chilled</p>
                </div>
              </div>

              <button className={`mt-8 px-10 py-5 bg-[#1B2A41] text-white font-black text-xl uppercase border-4 border-black shadow-[6px_6px_0px_0px_rgba(139,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all`}>
                Notify Me on Drop
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flavors;
