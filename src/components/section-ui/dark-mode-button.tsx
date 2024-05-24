import {
  faMoon as faRegularMoon,
  faSun as faRegularSun,
} from "@fortawesome/free-regular-svg-icons";
import {
  faMoon as faSolidMoon,
  faSun as faSolidSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDarkModeHovered, setIsDarkModeHovered] = useState(false);

  const toggleDarkMode = () => {
    const elements = document.querySelectorAll(".transition-all, .transition");
    elements.forEach((el) => {
      el.classList.add("transition-none");
    });

    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);

    setTimeout(() => {
      elements.forEach((el) => {
        el.classList.remove("transition-none");
      });
    }, 0);
  };
  return (
    <button
      onClick={toggleDarkMode}
      onMouseEnter={() => setIsDarkModeHovered(true)}
      onMouseLeave={() => setIsDarkModeHovered(false)}
    >
      {isDarkMode ? (
        <FontAwesomeIcon
          icon={isDarkModeHovered ? faSolidMoon : faRegularMoon}
          className="h-5 w-5"
        />
      ) : (
        <FontAwesomeIcon
          icon={isDarkModeHovered ? faSolidSun : faRegularSun}
          className="h-5 w-5"
        />
      )}
    </button>
  );
};
