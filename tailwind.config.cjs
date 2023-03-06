/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "blue-300": "#4299e1",
        "blue-dark": "#0b134f",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        facebook: '0 0 0 10px #1877f2',
        github: '0 0 0 10px #c32aa3',
        linkedin: '0 0 0 10px #1da1f2',
      },
      dropShadow: { 
        facebook: [
          '0 0 20px #1877f2',
          '0 0 40px #1877f2',
          '0 0 60px #1877f2'
        ],
        github: [
          '0 0 20px #c32aa3',
          '0 0 40px #c32aa3',
          '0 0 60px #c32aa3'
        ],  
        linkedin: [
          '0 0 20px #1da1f2',
          '0 0 40px #1da1f2',
          '0 0 60px #1da1f2'
        ]    
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero-3.jpg')",
      },
    },
  },
  plugins: [],
};