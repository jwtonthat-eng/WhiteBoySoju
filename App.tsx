
import React from 'react';
import AgeGate from './components/AgeGate';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Flavors from './components/Flavors';
import Culture from './components/Culture';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-grain">
      <AgeGate />
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Visual Separator */}
        <div className="bg-[#8B0000] py-4 overflow-hidden border-y-4 border-black">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="text-white font-display text-2xl mx-8 uppercase">
                Boston Crafted • Small Batch • 21+ Only • Boston Crafted •
              </span>
            ))}
          </div>
        </div>

        <About />
        <Flavors />
        
        {/* Testimonial/Callout */}
        <section className="py-24 bg-[#FFBF00] text-[#1B2A41] text-center border-y-4 border-black">
          <div className="max-w-4xl mx-auto px-6">
            <blockquote className="font-serif-vintage text-4xl md:text-6xl leading-tight">
              "The only thing more authentic than this soju is a Southie accent after three of 'em."
            </blockquote>
            <p className="mt-8 font-bold uppercase tracking-widest">— Local Legend</p>
          </div>
        </section>

        <Culture />

        {/* Newsletter / CTA Section */}
        <section id="find" className="py-32 bg-[#FDFBF7] text-center">
          <div className="max-w-xl mx-auto px-6 space-y-12">
            <div className="w-24 h-24 bg-[#8B0000] rounded-full mx-auto flex items-center justify-center text-white border-4 border-black rotate-12">
              <span className="font-display text-3xl">WBS</span>
            </div>
            <h2 className="font-serif-vintage text-5xl text-[#1B2A41]">WANT A TASTE?</h2>
            <p className="text-lg text-gray-600 font-medium italic">
              Join the list to be the first to know when we drop in your neighborhood packie.
            </p>
            <div className="flex flex-col sm:flex-row gap-0 border-4 border-black">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS"
                className="flex-grow p-4 text-sm font-bold bg-white focus:outline-none placeholder:text-gray-300"
              />
              <button className="bg-[#1B2A41] text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-[#8B0000] transition-colors">
                SEND IT
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
