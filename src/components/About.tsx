import React from 'react';
import GlitchText from './GlitchText';
import FadeInSection from './FadeInSection';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-20 px-4 md:px-10 relative">
      <FadeInSection>
        <h2 className="font-pixel text-white text-xl md:text-2xl mb-8 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-12 after:bg-electric">
          ABOUT
        </h2>
        
        <div className="max-w-3xl">
          <GlitchText 
            text="20-year-old developer passionate about creating and learning new technologies." 
            className="font-terminal text-white text-lg md:text-xl mb-6 block"
          />
          
          <p className="font-terminal text-white text-lg md:text-xl opacity-80 mb-6">
            Proficient in HTML, CSS, JavaScript, Node.js, Express, React, Tailwind CSS, and TypeScript. Currently exploring the realms of Web3 and DevOps.
          </p>
          
          <p className="font-terminal text-white text-lg md:text-xl opacity-80">
            With a strong foundation in C++ and DSA, I combine algorithmic thinking with modern web technologies to build efficient and scalable solutions.
            When I'm not coding, you'll find me watching anime or diving deeper into machine learning concepts.
          </p>
        </div>
      </FadeInSection>
    </section>
  );
};

export default About;