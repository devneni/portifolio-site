import { useState,useEffect } from "react";
import { ButtonLang } from "./components/ButtonLang";
import { Header } from "./components/Header/Header";
import { ButtonTheme } from "./components/ButtonTheme";
import type { Language } from "./components/translations/translations";
import { Langs } from "./components/Langs";
import { AboutMe } from "./pages/AboutMe";
import { SocialMedia } from "./pages/SocialMedia";
import { Routes, Route } from "react-router-dom";



export function App(){
  const savedLanguage = localStorage.getItem("language");



   const [language, setLanguage] = useState<Language>(
  savedLanguage === "en" || savedLanguage === "pt" ? savedLanguage : "pt"
);

  const savedTheme = localStorage.getItem("theme");

   const [theme, setTheme] = useState<"light" | "dark">(
    savedTheme === "light" || savedTheme === "dark" ? savedTheme: "dark"
   );
   

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");

  };
    useEffect(() => {
      localStorage.setItem("language",language);},[language]);
    useEffect(() => {
      document.body.className = theme;},[theme]);
      useEffect(() => {
        localStorage.setItem("theme",theme);},[theme]);
      
      
    

   return (
    <div className="app">
      <Header language={language}/>
      <main className="main-content">
        <div className="controls">
          <ButtonLang
            language={language}
            setLanguage={setLanguage}
          />
          <ButtonTheme toggleTheme={toggleTheme}/>
        </div>
        <Routes>
          <Route path="/" element={<Langs language={language} />} />
          <Route path="/langs" element={<Langs language={language} />} />
          <Route path="/aboutme" element={<AboutMe language={language} />} />
          <Route path="/socialmedia" element={<SocialMedia language={language} />} />
          <Route path="/projects" element={<div className="placeholder">Projects - Em breve</div>} />
        </Routes>
      </main>
    </div>
  );
}