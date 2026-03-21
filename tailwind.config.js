/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        primary: "#FF3300",
        secondary: "#00E5FF",
        text: "#FFFFFF",
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Oswald"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
