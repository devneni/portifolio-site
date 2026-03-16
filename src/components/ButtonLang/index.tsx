import type { Language } from "../translations/translations";
import { FiGlobe } from "react-icons/fi";
import styles from "./styles.module.css";

type Props = {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export function ButtonLang({ language, setLanguage }: Props) {
  return (
    <div className={styles.container}>
      <FiGlobe size={16} className={styles.icon} />
      <div className={styles.buttonGroup}>
        <button
          className={`${styles.button} ${language === "pt" ? styles.active : ""}`}
          onClick={() => setLanguage("pt")}
        >
          PT
        </button>
        <button
          className={`${styles.button} ${language === "en" ? styles.active : ""}`}
          onClick={() => setLanguage("en")}
        >
          EN
        </button>
      </div>
    </div>
  );
}