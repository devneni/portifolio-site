import { SiTypescript, SiReact, SiGit, SiCplusplus,SiCss } from "react-icons/si";

import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

import { Card } from "../Cards";
import { translations } from "../translations/translations";
import type { Language } from "../translations/translations";
import styles from "./style.module.css";

type Props = {
  language: Language;
};

type ProficiencyLevel = "advanced" | "intermediate" | "beginner";

const langs = [
  { title: "TypeScript", level: "advanced" as ProficiencyLevel, logo: SiTypescript, color: "#3178C6" },
  { title: "JavaScript", level: "advanced" as ProficiencyLevel, logo: IoLogoJavascript, color: "#F7DF1E" },
  { title: "React", level: "advanced" as ProficiencyLevel, logo: SiReact, color: "#61DAFB" },
  { title: "Tailwind CSS", level: "intermediate" as ProficiencyLevel, logo: RiTailwindCssFill, color: "#38B2AC" },
  { title: "Python", level: "intermediate" as ProficiencyLevel, logo: FaPython, color: "#3776AB" },
  { title: "HTML", level: "advanced" as ProficiencyLevel, logo: FaHtml5, color: "#E34F26" },
  { title: "CSS", level: "advanced" as ProficiencyLevel, logo: SiCss, color: "#1572B6" },
  { title: "C++", level: "intermediate" as ProficiencyLevel, logo: SiCplusplus, color: "#015A9C" },
  { title: "Git", level: "intermediate" as ProficiencyLevel, logo: SiGit, color: "#F05032" }
];


export function Langs({ language }: Props) {
  return (
    <div className={styles.grid}>
      {langs.map((lang) => (
        <Card
          key={lang.title}
          title={lang.title}
          description={translations[language][lang.level]}
          logo={lang.logo}
          color={lang.color}

        />
      ))}




    </div>
  );
}