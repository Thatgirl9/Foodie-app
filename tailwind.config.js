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
        spinnerBg: "#89664C",
        // spinnerBg1: "#664E27",
        secondPageBg: "rgba(255, 251, 245, 1)",
        secondPageBtn: "#794900",
        inputBtn: "#F3F3F3",
        placeholder: "#0000008C",
        forgotEmail: '#7949001A',
        forgotPhone: "#6B6B6B",
        verificationInput: "#BCA27B38",
      },

      fontFamily: {
        header: "Martel Sans, sans-serif",
        body: "Montserrat, sans-serif",
      }
    },
  },
  plugins: [],
}

