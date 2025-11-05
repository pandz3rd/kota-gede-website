/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#FF7B54",   // Warm Orange
        secondary: "#f0c22e", // Golden Yellow
        accent: "#4FA3F7",    // Sky Blue
        soft: "#A5D6A7",      // Sage
        bg: "#F8F5E4",        // Light Beige
        text: "#333333",      // Charcoal
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        serif: ['"Source Serif 4"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        worksans: ['"Work Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
