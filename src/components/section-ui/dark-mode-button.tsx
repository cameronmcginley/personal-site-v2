import {
  faMoon as faRegularMoon,
  faSun as faRegularSun,
} from "@fortawesome/free-regular-svg-icons";
import {
  faMoon as faSolidMoon,
  faSun as faSolidSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isThemeIconHovered, setIsThemeIconHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleDarkMode}
      onMouseEnter={() => setIsThemeIconHovered(true)}
      onMouseLeave={() => setIsThemeIconHovered(false)}
    >
      {theme === "light" ? (
        <FontAwesomeIcon
          icon={isThemeIconHovered ? faSolidMoon : faRegularMoon}
          className="h-5 w-5"
        />
      ) : (
        <FontAwesomeIcon
          icon={isThemeIconHovered ? faSolidSun : faRegularSun}
          className="h-5 w-5"
        />
      )}
    </button>
  );
};
