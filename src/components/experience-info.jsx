import { useContext } from "react";
import { useTranslation } from "react-i18next";
import defaultLogo from "../assets/portfolio.png";
import { LanguageContext } from "../context/languageContext";
import { MapPinned } from "lucide-react";

function ExperienceInfo({
  title,
  logo,
  description,
  link,
  location,
  startedIn,
  finishedIn,
}) {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);

  return (
    <section className="college-course">
      {logo ? (
        <img className="logo" src={logo} alt="logo" />
      ) : (
        <img className="logo" src={defaultLogo} alt="logo" />
      )}
      <section className="college-course-info">
        <h3>{title[language]}</h3>
        <p>{description[language]}</p>
        {link && <a href={link}>{t("education/readMore")}</a>}
        <span>
          <MapPinned />
          {location}
        </span>
        {startedIn && (
          <span>
            {t("education/t-startedIn")} {startedIn}
          </span>
        )}
        {finishedIn && (
          <span>
            {t("education/t-finishedIn")} {finishedIn}
          </span>
        )}
      </section>
    </section>
  );
}

export default ExperienceInfo;
