/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
          colors: {
            WHITE: '#FDFFFF',
            DARK_WHITE: '#FDFFFF',
            LIGHT_GRAY: '#F6F6F6',
            MEDIUM_GRAY: '#D9D9D9',
            GRAY: '#888888',
            DARK_GRAY: '#646464',
            BLACK: '#222222',

            GREEN : '#00C44B',

            RED: '#F35757',
            LIGHT_BLUE: '#0FA0E3',
            DARK_BLUE: '#5045E6',
            LIGHT_YELLOW: '#FFCC4D',
            DARK_YELLOW: '#FFAC33'
          }
        },
    },
    plugins: [],
};
