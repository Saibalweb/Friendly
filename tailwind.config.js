/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        "backGradient": "linear-gradient(90deg, rgba(246,132,100,1) 0%, rgba(238,168,73,1) 100%)",
      },
      colors:{
        primary:"#F19955",
        secondary:"#212121",
        backGround:"#A9ADBC",
        accent:"#FFF9E8",
      }
    },
  },
  plugins: [],
}

