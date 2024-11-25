/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background: {
          DEFAULT: '#F7F8FA', 
          dark: '#2E2E2E' 
        },
        text: {
          DEFAULT: '#333333', 
          dark: '#D6D8DC' 
        },
        headings: {
          DEFAULT: '#1A2E49',
          dark: '#F5F5F5'
        },
        borders: {
          DEFAULT: '#D1D5DB', 
          dark: '#3A3B45' 
        },
        keys: {
          correct: {
            DEFAULT: '#6AAA64',
            dark: '#4C8C40' 
          },
          present: {
            DEFAULT: '#C9B458', 
            dark: '#B68E3D' 
          },
          absent: {
            DEFAULT: '#787C7E', 
            dark: '#5C6163' 
          },
          none: {
            DEFAULT: '#D1D5DB', 
            dark: '#4B5563' 
          }
        },
        successAlerts: {
          DEFAULT: '#38C172',
          dark: '#4CAF50' 
        },
        highlitings: {
          DEFAULT: '#FFD700', 
          dark: '#FFB700' 
        },
        links: {
          DEFAULT: '#3B82F6',
          dark: '#80CFFF' 
        },
        button: {
          DEFAULT: '#4DA8DA', 
          hover: '#3A89B2', 
          disabled: '#D1D5DB', 
          dark: '#1E3A5F', 
          hoverDark: '#3C577D' 
        },
        settings: {
          DEFAULT: '#eaedf1',
          dark: '#3B3B3B' 
        }
      }
    },
  },
  plugins: [],
}

