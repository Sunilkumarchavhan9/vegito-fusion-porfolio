import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  delay?: number;
  className?: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ 
  text, 
  delay = 100,
  className = '' 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, delay, text]);

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
      {!isComplete && <span className="animate-cursor-blink">|</span>}
      {isComplete && <span className="animate-cursor-blink ml-1">_</span>}
    </span>
  );
};

export default TypewriterEffect;