import { Card } from "../../components/Cards";
import styles from './style.module.css';
import { translations } from "../../components/translations/translations";
import type { Language } from "../../components/translations/translations";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

type Props = {
  language: Language;
};

const socialMedias = [
  {logo: FaGithub ,title: "GitHub", url: "https://github.com/devneni", color: ""},
  {logo: FaLinkedin,title: "LinkedIn", url: "https://www.linkedin.com/in/devjoaovicenteribeiro/", color: ""},
  {logo: FaInstagram,title: "Instagram", url: "https://www.instagram.com/g59neni", color: ""},
  {logo: MdEmail  ,title: "Email", url: "mailto:joaovicente4142@gmail.com?subject=", color: ""}
]


export function SocialMedia ({ language }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{translations[language].socialMedia}</h1>
      </div>
      <div className={styles.cardsContainer}>
        {socialMedias.map((media) => (
          <Card
            key={media.title}
            logo={media.logo}
            title={media.title}
            url={media.url}
            color={media.color}
          />
        ))}
      </div>
    </div>
  )
}