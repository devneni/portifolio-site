import styles from "./style.module.css";
import { Card } from "../../components/Cards";
import { t } from "../../components/translations/translations";
import type { Language, TranslationKeys } from "../../components/translations/translations";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";

import type { IconType } from "react-icons";

type Props = {
  language: Language;
};

// 🔥 Dados desacoplados da tradução
const projectsData: {
  key: TranslationKeys;
  description: string;
  url: string;
  logo: IconType;
  color: string;
}[] = [
  {
    key: "GeneratorCV",
    description: "Html, JavaScript,CSS.",
    url: "https://gerador-curriculo-sandy.vercel.app/",
    logo: IoLogoJavascript,
    color: "#f0db4f",
  },
  {
    key: "portfolio",
    description: "React, CSS, TypeScript.",
    url: "/langs",
    logo: IoLogoReact,
    color: "#61dafb",
  },
];

export function Projects({ language }: Props) {
  const projects = projectsData.map((project) => ({
    ...project,
    title: t(language, project.key),
  }));

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          {t(language, "projectsName")}
        </h1>
      </div>

      <div className={styles.cardsContainer}>
        {projects.map((project, index) => (
          <Card
            key={index}
            logo={project.logo}
            title={project.title}
            description={project.description}
            url={project.url}
            color={project.color}
          />
        ))}
      </div>
    </div>
  );
}