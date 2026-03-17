
import { translations } from "../../components/translations/translations";
import type { Language } from "../../components/translations/translations";
import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import styles from "./styles.module.css";

type Props = {
  language: Language;
};

export function AboutMe({ language }: Props) {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = 'curriculo-devneni.pdf';
    link.download = 'curriculo-devneni.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
     
      <main className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <h1 className={styles.title}>{translations[language].about}</h1>
          <div className={styles.text}>
            <p>
              {translations[language].aboutText.split(translations[language].technologies)[0]}
              <Link to="/langs" className={styles.link}>
                {translations[language].technologies}
              </Link>
              {translations[language].aboutText.split(translations[language].technologies)[1]?.split(translations[language].socialMedia)[0]}
              <Link to="/socialmedia" className={styles.link}>
                {translations[language].socialMedia}
              </Link>
              {translations[language].aboutText.split(translations[language].socialMedia)[1]}
            </p>
          </div>
          <button className={styles.downloadButton} onClick={handleDownloadCV}>
            <FiDownload size={20} />
            {translations[language].downloadCV}
          </button>
        </div>
      </main>
    </>
  );
}

