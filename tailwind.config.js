/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: '#e3ba9c',
        homeBackgroundColor: '#fef9f0',
      },
      screens: {
        xxs: "490px",
        xs: "640px",
        sm: "768px",
        md: "975px",
      },
    },
  },
  plugins: [],
}

