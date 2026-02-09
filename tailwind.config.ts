import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          black: '#000000',
          white: '#f5f5f7',
          gray: '#a1a1a6',
          blue: '#0071e3',
          'gray-dark': '#1d1d1f',
          'gray-light': '#86868b',
        },
      },
      fontFamily: {
        'sf-pro': [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 8vw, 5rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'section-title': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.2', fontWeight: '600' }],
      },
      spacing: {
        'section': 'clamp(5rem, 10vw, 10rem)',
      },
      maxWidth: {
        'content': '1200px',
      },
      backdropBlur: {
        'apple': '20px',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      screens: {
        'mobile': '640px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
