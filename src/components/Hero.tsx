import React from 'react';
import TypewriterEffect from './TypewriterEffect';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative">
      <div className="text-center">
        <h1 className="font-pixel text-white text-2xl md:text-4xl mb-8">
          Hi, I'm Vegito the god of Fusion
        </h1>
        <div className="font-terminal text-electric text-xl md:text-2xl mt-4">
          <TypewriterEffect 
            text="Building @ai_recreator // Learning Machine" 
            delay={80} 
          />
        </div>
        <p className="font-terminal text-gray-400 mt-4">
          Creating chaos in Web2, Web3 & DevOps ✦ Anime Lo∞p
        </p>
        <div className="mt-12">
          <button className="font-pixel text-xs border border-electric text-electric px-4 py-2 hover:bg-electric hover:bg-opacity-10 transition-colors duration-300">
            EXPLORE
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white opacity-60"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </section>
  );
};

export default Hero;