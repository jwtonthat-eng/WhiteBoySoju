
import React from 'react';
import { BRAND_NAME, LOCATION } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1B2A41] text-[#FDFBF7] py-20 border-t-8 border-[#8B0000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 space-y-8">
            <h2 className="font-display text-5xl text-[#FFBF00]">{BRAND_NAME}</h2>
            <p className="text-xl max-w-sm opacity-80 italic font-serif-vintage">
              "Bringing the spirit of the Hub to every corner of the Commonwealth."
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-[#FFBF00] transition-colors font-bold uppercase tracking-tighter">TikTok</a>
              <a href="#" className="hover:text-[#FFBF00] transition-colors font-bold uppercase tracking-tighter">Instagram</a>
              <a href="#" className="hover:text-[#FFBF00] transition-colors font-bold uppercase tracking-tighter">Spotify</a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-[#FFBF00] text-sm">Location</h4>
            <p className="opacity-80">{LOCATION}</p>
            <p className="opacity-80">Brewed in the heart of Boston.</p>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-[#FFBF00] text-sm">Support</h4>
            <a href="#" className="block opacity-80 hover:text-white">Contact Us</a>
            <a href="#" className="block opacity-80 hover:text-white">Stockists</a>
            <a href="#" className="block opacity-80 hover:text-white">Wholesale</a>
          </div>
        </div>

        <div className="pt-12 border-t border-[#FDFBF7]/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-50">
            © {new Date().getFullYear()} {BRAND_NAME}. All Rights Reserved.
          </p>
          <div className="text-center md:text-right">
            <p className="text-sm font-bold text-[#8B0000] bg-[#FDFBF7] px-4 py-1 border-2 border-black inline-block">
              21+ ONLY. DRINK RESPONSIBLY.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
