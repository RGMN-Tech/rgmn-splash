/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./*.{html,md}', './src/*.{html,js}'],
  },
  theme: {
    extend: {
      colors: {
        'redgimin': "#a92231",
      },
      fontFamily: {
        brandFont: ['acumin-variable', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 12s linear infinite',
        marquee2: 'marquee2 12s linear infinite',
        pulsering: 'pulsering 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulsering: {
          '0%': { transform: 'scale(0.33)', opacity: '0.4' },
          '80%, 100%': { transform: 'scale(1)', opacity: '0' },
        },
      },
    },
  },
  plugins: [
    require('taos/plugin')
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
};


