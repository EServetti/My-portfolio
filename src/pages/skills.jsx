import "../styles/skills.css";
import reactLogo from "../assets/reactjs.png";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import nodeJSLogo from "../assets/node-logo.png";
import mongoLogo from "../assets/mongo-logo.png";
import mysqlLogo from "../assets/mysql.png";
import openAILogo from "../assets/openai.png";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import {LanguageContext} from "../context/languageContext";

function Skills() {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);
  return (
    <div className="main-skills">
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
              {t("skills/tools",{name: "React", yearsOfUse: "+1", proyects: 4})}
            </span>
            <span>
              <img src={reactLogo} />
              {t("skills/tools",{name: "React Native", yearsOfUse: "1/2", proyects: 2})}
            </span>
            <span>
              <img src={htmlLogo} />
              {t("skills/tools",{name: "HTML", yearsOfUse: "+2", proyects: "+5"})}
            </span>
            <span>
              <img src={cssLogo} />
              {t("skills/tools",{name: "CSS", yearsOfUse: "+2", proyects: "+5"})}
            </span>
          </section>
          <section className="tools">
            <h3>Backend</h3>
            <span>
              <img src={nodeJSLogo} />
              {t("skills/tools",{name: "Node.js & Express", yearsOfUse: "+1", proyects: "6"})}
            </span>
            <span>
              <img src={mongoLogo} />
              {t("skills/tools",{name: "MongoDB", yearsOfUse: "+1", proyects: "3"})}
            </span>
            <span>
              <img src={mysqlLogo} />
              {t("skills/tools",{name: "MySQL", yearsOfUse: "1/2", proyects: "1"})}
            </span>
            <span>
              <img src={openAILogo} />
              {t("skills/tools",{name: "Open AI API", yearsOfUse: "1/2", proyects: "3"})}
            </span>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Skills;
