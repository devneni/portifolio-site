import { translations } from "../translations/translations";
import type { Language } from "../translations/translations";
import { FiCode } from "react-icons/fi";
import { Link } from "react-router-dom";

import styles from "./style.module.css";

type Props = {
  language: Language;
};

export function Header({ language }: Props) {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <FiCode size={24} className={styles.logoIcon} />
        <span className={styles.logoText}>DEVNENI</span>
      </div>
      <nav className={styles.nav}>
        <Link className={styles.aHeader} to="/langs">
          {translations[language].langs}
        </Link>
        <Link className={styles.aHeader} to="/aboutme">
          {translations[language].about}
        </Link>
        <Link className={styles.aHeader} to="/socialmedia">
          {translations[language].socialmidia}
        </Link>
        <Link className={styles.aHeader} to="/projects">
          {translations[language].projects}
        </Link>
      </nav>
    </header>
  );
}
