/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        brand: {
          50: '#ffffff', 
          100: '#fffbe9', 
          500: '#2563EB',
        },
        muted: '#bfa76f',
        surface: '#fffefb',
        background: {
          DEFAULT: '#fffefb', 
          light: '#fffbe9', 
          white: '#ffffff',
          cream: '#ffffff',
        },
        text: {
          DEFAULT: '#3a3a2c',
          muted: '#bfa76f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        md: '8px',
      },
      boxShadow: {
        sm: '0 6px 18px rgba(191,167,111,0.06)'
      }
    },
  },
  plugins: [],
}
