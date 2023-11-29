/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        firstPageBg: "rgba(121, 73, 0, 1)",
      }
    },
  },
  plugins: [],
}

