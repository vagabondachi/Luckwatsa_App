/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        primary:  ['Bantayog', 'sans'],
        secondary: ['Baloo', 'sans'],
        secondaryRegular: ['Baloo2-Regular', 'sans'],
        secondarySemiBold: ['Baloo2-SemiBold', 'sans']
      },
      fontSize: {
        sm: '18px', 
      },
      colors: {
        textMain: '#777777',
        textLight: '#AFAFAF',
        textwhite: '#F7F7F7',
        primary: '#56CD02',
        secondary: '#89E219',
        accentYellow: '#FFC800',
        accentBlue: '#2B70C9',
        accentLightBlue: '#1CB0F6',
        accentPurple: '#CE82FF',
        accentRed: '#FF4B4B',
        accentWhiteGray: '#E5E5E5',
        accentGray: '#AFAFAF'
      },

    },
  },
  
  plugins: [
    require('flowbite/plugin')
  ]
}

