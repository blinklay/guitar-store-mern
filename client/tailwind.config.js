/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        textMain: "var(--color-main-text)",
        header: "var(--color-header)"
      }
    },
  },
  plugins: [],
}

