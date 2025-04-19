import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Lightning/electric trail effects
    const particles: {
      x: number;
      y: number;
      dirX: number;
      dirY: number;
      size: number;
      speed: number;
      life: number;
      maxLife: number;
    }[] = [];

    const createParticle = () => {
      if (particles.length > 30) return;
      
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      
      particles.push({
        x,
        y,
        dirX: (Math.random() - 0.5) * 0.5,
        dirY: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 1 + 0.5,
        speed: Math.random() * 0.5 + 0.2,
        life: 0,
        maxLife: Math.random() * 200 + 100
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create new particles randomly
      if (Math.random() > 0.95) {
        createParticle();
      }
      
      // Draw and update particles
      particles.forEach((p, index) => {
        p.life++;
        if (p.life >= p.maxLife) {
          particles.splice(index, 1);
          return;
        }
        
        p.x += p.dirX * p.speed;
        p.y += p.dirY * p.speed;
        
        // Change direction slightly
        if (Math.random() > 0.95) {
          p.dirX += (Math.random() - 0.5) * 0.2;
          p.dirY += (Math.random() - 0.5) * 0.2;
        }
        
        // Boundary check
        if (p.x < 0 || p.x > canvas.width) p.dirX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dirY *= -1;
        
        // Draw particle
        const opacity = 1 - p.life / p.maxLife;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${opacity * 0.5})`;
        ctx.fill();
        
        // Connect nearby particles with electric lines
        particles.forEach(p2 => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${opacity * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      
      // Create occasional lightning flash
      if (Math.random() > 0.995) {
        ctx.fillStyle = 'rgba(0, 240, 255, 0.03)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    };

    // Initial particles
    for (let i = 0; i < 20; i++) {
      createParticle();
    }

    const animate = () => {
      drawParticles();
      requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default AnimatedBackground;