
import React, { useState, useEffect } from 'react';

const AgeGate: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const verified = localStorage.getItem('age-verified');
    if (verified === 'true') {
      setIsOpen(false);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem('age-verified', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#1B2A41] flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-8 bg-[#FDFBF7] p-10 border-4 border-[#8B0000] shadow-[12px_12px_0px_0px_rgba(139,0,0,1)]">
        <h1 className="font-display text-4xl text-[#8B0000] leading-tight">
          HOLD UP, CHIEF.
        </h1>
        <p className="text-lg text-[#1B2A41] font-medium italic">
          Are you at least 21 years old? We do things by the book here in the Commonwealth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleVerify}
            className="px-8 py-3 bg-[#8B0000] text-white font-bold hover:bg-[#660000] transition-colors border-2 border-black"
          >
            YEAH, I'M 21+
          </button>
          <button
            onClick={() => window.location.href = 'https://www.google.com'}
            className="px-8 py-3 border-2 border-[#1B2A41] text-[#1B2A41] font-bold hover:bg-gray-100 transition-colors"
          >
            NOT YET
          </button>
        </div>
        <p className="text-xs text-gray-500 uppercase tracking-widest">
          Always Drink Responsibly. No Jabronis Allowed.
        </p>
      </div>
    </div>
  );
};

export default AgeGate;
