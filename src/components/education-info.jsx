import { MapPinned } from "lucide-react";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import {LanguageContext} from "../context/languageContext"

function EducationInfo({
  title,
  logo,
  description,
  link,
  location,
  duration,
  state,
  startedIn,
  finishedIn,
  diploma,
  linkDiploma
}) {
  const {t} = useTranslation()
  const {language} = useContext(LanguageContext)

  return (
    <section className="college-course">
      <img className="logo" src={logo} alt="logo" />
      <section className="college-course-info">
        <h3>{title[language]}</h3>
        <p>{description[language]}</p>
        {link && <a href={link}>{t("education/readMore")}</a>}
        <ul>
          <li>
            <MapPinned />
            {location}
          </li>
          <li>{t("education/t-duration")} {duration}</li>
          <li>{t("education/t-state")} {state}</li>
          {startedIn && <li>{t("education/t-startedIn")} {startedIn}</li>}
          {finishedIn && <li>{t("education/t-finishedIn")} {finishedIn}</li>}
        </ul>
        {diploma && (
          <>
            <h4>Diploma:</h4>
            <a href={linkDiploma}>
              <img className="diploma" src={diploma} />
            </a>
          </>
        )}
      </section>
    </section>
  );
}

export default EducationInfo;
