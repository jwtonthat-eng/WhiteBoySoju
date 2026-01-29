
import React from 'react';
import { FLAVORS } from '../constants';

const Flavors: React.FC = () => {
  return (
    <section id="flavors" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-serif-vintage text-5xl md:text-7xl text-[#1B2A41] mb-4">THE LINEUP</h2>
          <p className="text-lg text-gray-600 uppercase tracking-widest font-bold">New England Roots. Global Soul.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FLAVORS.map((flavor) => (
            <div 
              key={flavor.id}
              className={`group relative flex flex-col h-full ${flavor.color} border-4 border-[#1B2A41] p-8 transition-transform hover:-translate-y-2 cursor-pointer shadow-[8px_8px_0px_0px_rgba(27,42,65,1)]`}
            >
              {flavor.badge && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#8B0000] text-white text-[10px] font-bold uppercase tracking-widest py-1 px-4 border-2 border-black whitespace-nowrap z-10">
                  {flavor.badge}
                </div>
              )}

              <div className="mb-8 aspect-square overflow-hidden border-2 border-[#1B2A41]">
                <img 
                  src={flavor.image} 
                  alt={flavor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className={`flex flex-col flex-grow ${flavor.textColor}`}>
                <h3 className="font-serif-vintage text-3xl mb-4 leading-tight">
                  {flavor.name}
                </h3>
                <p className="text-sm leading-relaxed mb-8 opacity-90">
                  {flavor.notes}
                </p>
                <div className="mt-auto pt-4 border-t border-black/10">
                  <span className="text-xs font-bold uppercase tracking-widest underline decoration-2">Taste the Spirit</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flavors;
