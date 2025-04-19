/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
        'terminal': ['"VT323"', 'monospace'],
      },
      colors: {
        'electric': '#00f0ff',
      },
      animation: {
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'flicker': 'flicker 5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'glow-pulse': {
          '0%, 100%': { textShadow: '0 0 5px #fff, 0 0 10px #00f0ff, 0 0 15px #00f0ff' },
          '50%': { textShadow: '0 0 2px #fff, 0 0 5px #00f0ff, 0 0 10px #00f0ff' },
        },
        'scanline': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100%' },
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '10%': { opacity: '0.9' },
          '20%': { opacity: '1' },
          '22%': { opacity: '0.8' },
          '24%': { opacity: '1' },
          '50%': { opacity: '0.9' },
          '52%': { opacity: '1' },
          '70%': { opacity: '0.7' },
          '72%': { opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};