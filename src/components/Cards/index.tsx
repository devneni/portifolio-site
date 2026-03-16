import styles from "./style.module.css";
import { type CardsProps } from "./Cards.types";







export function Card({logo: LogoIcon, title, description, color, url}:CardsProps) {
  const content = (
    <div className={styles.card}>
      <div className={styles.content}>
        <LogoIcon size={50} color={color} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );

  if (url) {
    const isMailto = url.startsWith('mailto:');
    return (
      <a 
        href={url} 
        target={isMailto ? undefined : "_blank"} 
        rel={isMailto ? undefined : "noopener noreferrer"} 
        className={styles.link}
      >
        {content}
      </a>
    );
  }

  return content;
}