/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      colors: {
        WHITE: '#FDFFFF',
        DARK_WHITE: '#FDFFFF',
        GRAY: '#D9D9D9',
        DARK_GRAY: '#646464',
        BLACK: '#222222',
        
        PRINCIPAL_GREEN : '#00C44B',
        
        RED: '#F35757',
        LIGHT_BLUE: '#0FA0E3',
        DARK_BLUE: '#5045E6',
        LIGHT_YELLOW: '#FFCC4D',
        DARK_YELLOW: '#FFAC33'
      }
    },
  },
  plugins: [],
}
