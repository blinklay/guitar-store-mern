/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        textMain: "var(--color-main-text)",
        header: "var(--color-header)",
        accent: "#f4a60a",
        action: "#0e9ef1"
      }
    },
  },
  plugins: [],
}

