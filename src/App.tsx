import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Animated background */}
      <AnimatedBackground />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;