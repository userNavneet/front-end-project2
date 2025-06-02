/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
        pureRed: '#FF0000',    // Pure red
      },
        height:{
            "800px":"800px"
        }
    },
  },
  plugins: [],
};
