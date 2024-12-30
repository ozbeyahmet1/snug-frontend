import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './packages/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: '#DEDDD4',
        smoke: '#111111',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        rotateStep: {
          '0%': { transform: 'rotate(0deg)' },
          '16.67%': { transform: 'rotate(60deg)' },
          '33.33%': { transform: 'rotate(120deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '66.67%': { transform: 'rotate(240deg)' },
          '83.33%': { transform: 'rotate(300deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        'rotate-step': 'rotateStep 1s infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
