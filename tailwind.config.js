/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '10': '10px',
        '12': '40px',
      },
      colors: {
        'light': '#eee',
        'md': '#121229',
        'sd': '#191732',
        'td': '#211f3e',
        'sb': '#0077B5',
        'sw': '#eee',
      },
    },
  },
  plugins: []
}