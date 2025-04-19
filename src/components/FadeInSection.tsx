import React, { useEffect, useRef, useState } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ 
  children, 
  className = '',
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          setIsVisible(true);
        }, delay);
        if (domRef.current) observer.unobserve(domRef.current);
      }
    });
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, [delay]);

  return (
    <div
      ref={domRef}
      className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;