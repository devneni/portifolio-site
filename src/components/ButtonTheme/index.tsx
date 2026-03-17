

import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import styles from "./styles.module.css";

type Props = {
  toggleTheme: () => void;
}

export function ButtonTheme({ toggleTheme }: Props) {
  const [isDark, setIsDark] = useState(() => {
    return document.body.classList.contains("dark");
  });

  const handleClick = () => {
    const nextIsDark = !isDark;

    document.body.style.transition = 'background 0.5s ease, color 0.5s ease';

    setIsDark(nextIsDark);
    toggleTheme();

    setTimeout(() => {
      document.body.style.transition = '';
    }, 500);
  };

  return (
    <button
      className={styles.button}
      onClick={handleClick}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
}