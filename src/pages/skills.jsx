import "../styles/skills.css";
import reactLogo from "../assets/reactjs.png";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import nodeJSLogo from "../assets/node-logo.png";
import mongoLogo from "../assets/mongo-logo.png";
import mysqlLogo from "../assets/mysql.png";
import openAILogo from "../assets/openai.png";
import vueLogo from "../assets/vue.webp"
import supabaseLogo from "../assets/supabase.avif"
import tailwindLogo from "../assets/tailwind.png"
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";
import useWindowsSize from "../utils/windowsSize";

function Skills() {
  const { t } = useTranslation();
  const { size } = useWindowsSize();
  const { language } = useContext(LanguageContext);

  function calcYears(date) {
    const today = new Date();
    const dateOfStart = new Date(date);
    const diff = today - dateOfStart;
    const diffYears = diff / (1000 * 60 * 60 * 24 * 365);

    // si es menos de un año, devolver los meses
    if (diffYears < 1) {
      const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 31));
      return `${months} ${
        months === 1 ? t("skills/month") : t("skills/months")
      }`;
    }

    const decimals = diffYears % 1; // parte decimal

    if (decimals === 0) {
      const years = Math.floor(diffYears)
      return `${years} ${years === 1 ? t("skills/year") : t("skills/years")}`
    } else if (decimals > 0 && decimals < 0.5) {
      const years = Math.floor(diffYears)
      return `+${years} ${years === 1 ? t("skills/year") : t("skills/years")}`;
    } else if (decimals >= 0.5) {
      return `+${Math.floor(diffYears)}.5 ${t("skills/years")}`;
    }
  }

  function returnProjects (numOfProjects) {
    if (numOfProjects === 1) {
      return `${numOfProjects} ${t("skills/project")}`
    } else {
      return `${numOfProjects} ${t("skills/projects")}`
    }
  }
  
  return (
    <div
      className={`${size.width < 480 ? "main-skills-small" : "main-skills"}`}
    >
      <section className="skills-tools-section skills-section">
        <h1>{t("skills/t-skills")}</h1>
        <div className="skills-tools">
          <ul>
            <li>
              {language === "en"
                ? "Advanced level of English between B2-C1."
                : "Nivel avanzado de inglés entre B2-C1."}
            </li>
            <li>{language === "en" ? "Teamwork." : "Trabajo en equipo."}</li>
            <li>
              {language === "en" ? "Good comunication." : "Buena comunicación."}
            </li>
            <li>{language === "en" ? "Leadership." : "Liderazgo."}</li>
            <li>{language === "en" ? "Autodidact." : "Autodidacta."}</li>
            <li>
              {language === "en" ? "Self-motivation." : "Auto-motivación."}
            </li>
            <li>{language === "en" ? "Adaptability." : "Adaptabilidad."}</li>
            <li>
              {language === "en"
                ? "Emotional intelligence."
                : "Inteligencia emocional."}
            </li>
            <li>
              {language === "en" ? "Stress management." : "Manejo del estrés."}
            </li>
          </ul>
        </div>
      </section>
      <section className="skills-tools-section tools-section">
        <h1>{t("skills/t-tools")}</h1>
        <div className="skills-tools">
          <section className="tools">
            <h3>Frontend</h3>
            <span>
              <img src={reactLogo} />
              {t("skills/tools", {
                name: "React",
                yearsOfUse: calcYears("05-01-2024"),
                proyects: returnProjects(4),
              })}
            </span>
            <span>
              <img src={reactLogo} />
              {t("skills/tools", {
                name: "React Native",
                yearsOfUse: calcYears("02-01-2025"),
                proyects: returnProjects(2),
              })}
            </span>
            <span>
              <img src={htmlLogo} />
              {t("skills/tools", {
                name: "HTML",
                yearsOfUse: calcYears("03-01-2023"),
                proyects: returnProjects("+5"),
              })}
            </span>
            <span>
              <img src={cssLogo} />
              {t("skills/tools", {
                name: "CSS",
                yearsOfUse: calcYears("03-01-2023"),
                proyects: returnProjects("+5"),
              })}
            </span>
            <span>
              <img src={vueLogo} />
              {t("skills/tools", {
                name: "Vue",
                yearsOfUse: calcYears("07-01-2025"),
                proyects: returnProjects(3),
              })}
            </span>
            <span>
              <img src={tailwindLogo} />
              {t("skills/tools", {
                name: "Tailwind",
                yearsOfUse: calcYears("07-01-2025"),
                proyects: returnProjects(3),
              })}
            </span>
          </section>
          <section className="tools">
            <h3>Backend</h3>
            <span>
              <img src={nodeJSLogo} />
              {t("skills/tools", {
                name: "Node.js & Express",
                yearsOfUse: calcYears("03-01-2024"),
                proyects: returnProjects(6),
              })}
            </span>
            <span>
              <img src={mongoLogo} />
              {t("skills/tools", {
                name: "MongoDB",
                yearsOfUse: calcYears("05-01-2024"),
                proyects: returnProjects(3),
              })}
            </span>
            <span>
              <img src={mysqlLogo} />
              {t("skills/tools", {
                name: "MySQL",
                yearsOfUse: calcYears("12-01-2024"),
                proyects: returnProjects(1),
              })}
            </span>
            <span>
              <img src={openAILogo} />
              {t("skills/tools", {
                name: "Open AI API",
                yearsOfUse: calcYears("10-01-2024"),
                proyects: returnProjects(3),
              })}
            </span>
            <span>
              <img src={supabaseLogo} />
              {t("skills/tools", {
                name: "Supabase",
                yearsOfUse: calcYears("07-01-2025"),
                proyects: returnProjects(3),
              })}
            </span>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Skills;
