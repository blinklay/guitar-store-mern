import { useEffect, useState } from "react";

export default function useTheme(initialTheme, secondaryTheme) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || initialTheme)
  useEffect(() => {
    if (theme === secondaryTheme) {
      document.documentElement.classList.add(secondaryTheme)
    } else {
      document.documentElement.classList.remove(secondaryTheme)
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => setTheme(theme === secondaryTheme ? initialTheme : secondaryTheme)

  return [theme, toggleTheme]
}
