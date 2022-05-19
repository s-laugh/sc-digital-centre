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
          lighter: '#F3F3F3',
          light: '#DBDBDB',
          solid: '#B9B9B9',
          dark: '#7F8C8D',
          darker: '#333333',
          inactive: '#7E7777',
          pending: '#8C9095',
        },
        'dark': {
          solid: '#262626',
        },
        'light': {
          solid: '#FBFBFB',
        },
        'bright-blue': {
          light: '#78B9E4',
          lighthover: '#93D0FF',
          solid: '#0069AD',
          dark: '#245C81',
        },
        'deep-blue': {
          light: '#5E8EBD',
          solid: '#173451',
          dark: '#21303F',
        },
        'link-blue': {
          default: '#2b4380',
          hover: '#0535d2',
          button: '#335075',
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
          pending: '#FFAE1B',
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
          active: '#259F46',
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
        'status': {
          inPayment: '#96D77F',
          benefitUpdate: '#FFB84D',
          applicationReceived: '#84D2DC',
          inactive: '#C4C4C4',
        },
      },
      backgroundImage: () => ({
        'footer-parliament-image': 'url(../public/landscape.png)',
        'splash-page': 'url(../public/sp-bg-1.jpg)',
      }),
      boxShadow: {
        card: '0px 2px 8px rgba(0, 0, 0, 0.25)',
        tile: '0px 0px 25px 5px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-children'),
  ],
}