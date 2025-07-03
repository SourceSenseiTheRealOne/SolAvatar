/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'solar-gold': '#FFD700',
        'cosmic-blue': '#0C1A2A',
        'radiant-white': '#FEFEFE',
        'dawn-pink': '#FFB6C1',
        'dusk-lavender': '#E6E6FA',
        'mystic-teal': '#20B2AA',
        'deep-space': '#000814',
        'stellar-silver': '#C0C0C0',
        'nebula-purple': '#6A0DAD',
        'aurora-green': '#00FF7F'
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace']
      },
      animation: {
        'solar-flare': 'solar-flare 8s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float-cosmic': 'float-cosmic 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'neural-pulse': 'neural-pulse 4s ease-in-out infinite',
        'particle-drift': 'particle-drift 15s linear infinite',
        'aurora': 'aurora 10s ease-in-out infinite'
      },
      keyframes: {
        'solar-flare': {
          '0%, 100%': { 
            transform: 'scale(1) rotate(0deg)', 
            opacity: '0.8',
            filter: 'brightness(1)'
          },
          '50%': { 
            transform: 'scale(1.1) rotate(180deg)', 
            opacity: '1',
            filter: 'brightness(1.3)'
          }
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' }
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(255, 215, 0, 0.6)',
            transform: 'scale(1.02)'
          }
        },
        'float-cosmic': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(120deg)' },
          '66%': { transform: 'translateY(5px) rotate(240deg)' }
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        'neural-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' }
        },
        'particle-drift': {
          '0%': { transform: 'translateY(100vh) translateX(0px)' },
          '100%': { transform: 'translateY(-100px) translateX(50px)' }
        },
        'aurora': {
          '0%, 100%': { opacity: '0.3', transform: 'translateX(0px)' },
          '50%': { opacity: '0.8', transform: 'translateX(20px)' }
        }
      },
      backgroundImage: {
        'cosmic-gradient': 'radial-gradient(ellipse at center, #0C1A2A 0%, #000814 70%, #000000 100%)',
        'solar-gradient': 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF6347 100%)',
        'aurora-gradient': 'linear-gradient(90deg, #00FF7F 0%, #20B2AA 50%, #6A0DAD 100%)',
        'neural-grid': 'radial-gradient(circle at 1px 1px, rgba(255,215,0,0.15) 1px, transparent 0)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,215,0,0.4), transparent)'
      },
      backgroundSize: {
        'neural': '20px 20px',
        'shimmer': '200% 100%'
      }
    },
  },
  plugins: [],
};