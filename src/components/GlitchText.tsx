import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative inline-block animate-flicker">
        {text}
      </span>
      <span 
        className="absolute top-0 left-0 w-full h-full opacity-30"
        style={{
          backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)',
          backgroundSize: '100% 4px',
          animation: 'scanline 8s linear infinite',
          pointerEvents: 'none',
        }}
      ></span>
    </div>
  );
};

export default GlitchText;