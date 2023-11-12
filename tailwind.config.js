// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto Slab', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
};
