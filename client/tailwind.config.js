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
        action: "#0e9ef1",
        danger: "#eb0d0d",
        "danger-darker": "rgb(85, 1, 1)",
        success: "#00ff00",
        "success-darker": "#009933"
      }
    },
  },
  plugins: [],
}

