/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dawngold': '#FFD700',
        'voidsilver': '#E1E1E1',
        'deep-eclipse': '#111111',
        'solar-flare': '#FF8800',
        'ritual-sand': '#D4A574',
        'deep-ember': '#8B4513',
        'dawn-sky': '#87CEEB',
        'cosmic-purple': '#4B0082',
        'mystic-teal': '#008B8B'
      },
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'solar-pulse': 'solar-pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'solar-rotate': 'solar-rotate 20s linear infinite',
      },
      keyframes: {
        'solar-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          'from': { textShadow: '0 0 20px #FFD700, 0 0 30px #FFD700, 0 0 40px #FFD700' },
          'to': { textShadow: '0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700' },
        },
        'solar-rotate': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        'solar-gradient': 'radial-gradient(circle at center, #FFD700 0%, #FF8800 50%, #111111 100%)',
        'dawn-gradient': 'linear-gradient(135deg, #FFD700 0%, #FF8800 50%, #87CEEB 100%)',
        'night-gradient': 'linear-gradient(135deg, #111111 0%, #4B0082 50%, #111111 100%)',
      }
    },
  },
  plugins: [],
};