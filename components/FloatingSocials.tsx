import React from 'react';

const FloatingSocials: React.FC = () => {
  return (
    <div className="fixed right-4 bottom-6 z-40 flex flex-col space-y-3">
      <a
        href="https://lin.ee/nnMxgNh"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110 drop-shadow-lg"
        aria-label="LINE公式アカウント"
      >
        <img src="/line-icon.png" alt="LINE" className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover" />
      </a>
    </div>
  );
};

export default FloatingSocials;