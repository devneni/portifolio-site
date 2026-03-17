export const translations = {
  en: {
    langs: "Technologies",
    about: "About me",
    projects: "Projects",
    socialmidia: "Social Media",
    advanced: "Advanced",
    intermediate: "Intermediate",
    beginner: "Beginner",
    aboutText:
      "I am an 18-year-old Full Stack developer, currently studying Information Systems at Uniplac...",
    downloadCV: "Download CV",
    technologies: "technologies",
    socialMedia: "social media",
    nameSite: "Portfolio - Neni",
    projectsName: "Projects",
    GeneratorCV: "CV Generator",
    portfolio: "Portfolio",
  },
  pt: {
    langs: "Tecnologias",
    about: "Sobre mim",
    projects: "Projetos",
    socialmidia: "Redes Sociais",
    advanced: "Avançado",
    intermediate: "Intermediário",
    beginner: "Iniciante",
    aboutText:
      "Sou um desenvolvedor Full Stack de 18 anos, atualmente cursando Sistemas de Informação...",
    downloadCV: "Baixar Currículo",
    technologies: "tecnologias",
    socialMedia: "redes sociais",
    nameSite: "Portfólio - Neni",
    projectsName: "Projetos",
    GeneratorCV: "Gerador de Currículos",
    portfolio: "Portfólio",
  },
} as const;


export type Language = keyof typeof translations;
export type TranslationKeys = keyof typeof translations["en"];


export function t(language: Language, key: TranslationKeys) {
  return translations[language][key];
}