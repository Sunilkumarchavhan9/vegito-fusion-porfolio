import React from 'react';
import FadeInSection from './FadeInSection';
import { Mail, Github, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-20 px-4 md:px-10 relative">
      <FadeInSection>
        <h2 className="font-pixel text-white text-xl md:text-2xl mb-8 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-12 after:bg-electric">
          CONTACT
        </h2>
        
        <div className="max-w-lg">
          <p className="font-terminal text-white text-lg mb-8">
            Interested in collaborating on Web3 or DevOps projects? Let's connect and create something awesome together.
          </p>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/Sunilkumarchavhan9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-electric transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://x.com/FrostbytHitsuG" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-electric transition-colors duration-300"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </FadeInSection>
      
      <footer className="absolute bottom-6 left-0 w-full text-center">
        <p className="font-terminal text-gray-500 text-sm">
          © {new Date().getFullYear()} Vegito the god of Fusion. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;