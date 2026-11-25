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
        // HydroLOGICA Design System Color Palette
        navy: {
          DEFAULT: '#000F26',
          900: '#000714',
          800: '#000F26',
          700: '#041B3B',
          600: '#0A2A57',
        },
        brightAgua: {
          DEFAULT: '#00A8EB',
          hover: '#0090CB',
          light: '#33B9EF',
        },
        agua: {
          DEFAULT: '#1D7FA7',
          dark: '#166484',
        },
        pacific: {
          DEFAULT: '#61AFCD',
        },
        lightAgua: {
          DEFAULT: '#A4DEF3',
          soft: '#C4ECF8',
        },
        mist: {
          DEFAULT: '#E2EFF3',
          light: '#F0F7F9',
        },
        lime: {
          DEFAULT: '#AAD651',
          hover: '#98C244',
          dark: '#85AC37',
        },
        black: {
          DEFAULT: '#191919',
          pure: '#000000',
        },
        platinum: '#EBEBEB',
        lightGrey: '#D7D7D7',
        silver: '#A2A2A2',
        darkGrey: '#6D6D6D',

        // Legacy compatibility mappings
        deepNavy: '#000F26',
        classicBlue: '#1D7FA7',
        mutedBlue: '#61AFCD',
        powderBlue: '#A4DEF3',
        offWhite: '#F6FAFC',
        darkText: '#000F26',
      },
      fontFamily: {
        sans: ["'Poppins'", "'Inter'", 'system-ui', '-apple-system', 'sans-serif'],
        heading: ["'Poppins'", 'sans-serif'],
        body: ["'Poppins'", "'Inter'", 'sans-serif'],
        poppins: ["'Poppins'", 'sans-serif'],
        inter: ["'Inter'", 'sans-serif'],
      }
    },
  },
  plugins: [],
}
