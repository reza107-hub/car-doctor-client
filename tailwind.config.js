/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#FF3811",

          "secondary": "#FFFFFF",
        },
      },
    ],

  },
  plugins: [require("daisyui")],
}

