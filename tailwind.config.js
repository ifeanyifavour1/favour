/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}"
  ],
 theme: {
    extend: {
      colors: {
        primary: "#010a5e",
        brandPink: "#ff1493",
        deepgreen: "#006400",
      },
      boxShadow: {
        glow: "0 0 10px rgba(255, 20, 147, 0.7)",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        buda: ["Buda", "serif"],
        roboto: ["Roboto Serif", "serif"],
      },
      // animations
      keyframes: {
        move: {
          "50%": { transform: "translateY(-1rem)" },
        },
      },
      animation: {
        animateY: "move 2s linear infinite",
      },
    },
  },
  plugins: [],
};
