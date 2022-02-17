const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    fontFamily: {
      display: ['Lato', 'sans-serif'],
      body: ['Noto sans', 'sans-serif'],
    },
    screens: {
      'xs': '376px',
      ...defaultTheme.screens,
      '2xl': '1920px',
    },
    extend: {
      colors: {
        'gray': {
          lighter: '#F6F6F6',
          light: '#DBDBDB',
          solid: '#B9B9B9',
          dark: '#7F8C8D',
        },
        'dark': {
          solid: '#262626',
        },
        'light': {
          solid: '#FBFBFB',
        },
        'bright-blue': {
          light: '#78B9E4',
          solid: '#0069AD',
          dark: '#245C81',
        },
        'deep-blue': {
          light: '#5E8EBD',
          solid: '#173451',
          dark: '#21303F',
        },
        'red': {
          light: '#B76565',
          solid: '#D94141',
          dark: '#881515',
        },
        'burgundy': {
          light: '#E77A7C',
          solid: '#A24446',
          dark: '#C94447',
        },
        'orange': {
          light: '#F19E7A',
          solid: '#D96F41',
          dark: '#AC5028',
          pending: '#FFA216',
        },
        'yellow': {
          light: '#E6BF81',
          solid: '#F39C12',
          dark: '#B17921',
        },
        'green': {
          light: '#81DEA8',
          solid: '#28AE60',
          dark: '#247E49',
          active: '#0FA10F',
        },
        'purple': {
          light: '#9E81CB',
          solid: '#6D29D5',
          dark: '#40216E',
        },
        'pink': {
          light: '#C197A9',
          solid: '#DC2875',
          dark: '#9E4068',
        },
      },
      backgroundImage: () => ({
        'footer-parliament-image': 'url(../public/landscape.png)',
        'splash-page': 'url(../public/sp-bg-1.jpg)',
      }),
      boxShadow: {
        card: '0px 2px 8px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwind-container-break-out'),
    require('tailwindcss-children'),
  ],
}