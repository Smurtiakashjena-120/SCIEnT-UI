/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      filter: {
        'custom-grayscale': 'grayscale(80%)', // Example custom grayscale level
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}

