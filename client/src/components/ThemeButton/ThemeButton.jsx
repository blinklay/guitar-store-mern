import useTheme from "../../hooks/useTheme";
import MoonIcon from "../Icons/MoonIcon";
import SunIcon from "../Icons/SunIcon";

export default function ThemeButton() {
  const [theme, toggleTheme] = useTheme("light", "dark");

  const themeChange = () => {
    toggleTheme();
  };

  return (
    <button onClick={themeChange} className="ml-3">
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
