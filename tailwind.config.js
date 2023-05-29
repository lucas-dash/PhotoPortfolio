/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Playfair Display', 'serif'],
        secondary: ['Lato', 'sans-serif'],
      },
      colors: {
        primary: '#FDEFDA',
        secondary: '#FDE7EA',
        accent: '#EEDA78',
        detail: '#F7F8F8',
        textPrimary: '#060D0D',
        textSecondary: '#625D5D',
      },
    },
  },
  plugins: [],
};
