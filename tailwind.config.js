/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,md}"],
  theme: {
    extend: {
      colors: {
        'redgimin': "#a92231",
      },
      fontFamily: {
        'brandFont': ['acumin-variable', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 12s linear infinite',
        marquee2: 'marquee2 12s linear infinite',
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
      },
    },
  },
  plugins: [],
};
