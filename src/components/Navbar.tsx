import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-80 backdrop-blur-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="font-pixel text-white text-xs md:text-sm">
          VEGITO<span className="text-electric">.</span>GOD
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map(item => (
            <li key={item.name}>
              <a 
                href={item.href}
                className="font-terminal text-gray-300 hover:text-electric transition-colors duration-300 text-sm"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute w-full bg-black transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <ul className="flex flex-col items-center">
          {menuItems.map(item => (
            <li key={item.name} className="py-2">
              <a 
                href={item.href}
                className="font-terminal text-gray-300 hover:text-electric transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;