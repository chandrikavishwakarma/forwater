/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        // Option 1: Elegant & Premium Plum + Navy Palette
        deepNavy: '#002D55',
        plum: {
          DEFAULT: '#6E2C6B',
          soft: '#854B82',
          mauve: '#A875A5',
          lavender: '#D5BBD3',
          white: '#E8DFE9',
        },
        softPlum: '#854B82',
        mutedMauve: '#A875A5',
        lightLavender: '#D5BBD3',
        classicBlue: '#16466F',
        mutedBlue: '#477397',
        powderBlue: '#C5D6E4',
        softLavenderWhite: '#E8DFE9',
        offWhite: '#F8F7F9',
        darkText: '#172638',

        // Theme semantic tokens mapping
        ink: '#002D55',
        spruce: '#16466F',
        spruce2: '#16466F',
        mist: '#E8DFE9',
        amber: {
          DEFAULT: '#6E2C6B',
          ink: '#FFFFFF',
        },
        stone: '#477397',
        line: '#D5BBD3',
        text: '#172638',
        bg: '#F8F7F9',
        card: '#FFFFFF',

        forwater: {
          ink: '#002D55',
          spruce: '#16466F',
          spruce2: '#16466F',
          mist: '#E8DFE9',
          amber: '#6E2C6B',
          amberink: '#FFFFFF',
          stone: '#477397',
          line: '#D5BBD3',
          text: '#172638',
          bg: '#F8F7F9',
          card: '#FFFFFF',
          navy: '#002D55',
          deepblue: '#16466F',
          sky: '#6E2C6B',
          aqua: '#E8DFE9',
          purple: '#6E2C6B',
          magenta: '#6E2C6B',
          white: '#FFFFFF',
          pale: '#F8F7F9',
          textdark: '#172638',
        }
      },
      fontFamily: {
        serif: ["'Fraunces'", 'Georgia', 'serif'],
        sans: ["'Fraunces'", 'Georgia', 'serif'],
        heading: ["'Fraunces'", 'Georgia', 'serif'],
        body: ["'Fraunces'", 'Georgia', 'serif'],
        fraunces: ["'Fraunces'", 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
