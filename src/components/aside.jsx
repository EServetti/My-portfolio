import { Link, useLocation } from "react-router-dom";
import "../styles/aside.css";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import useWindowSize from "../utils/windowsSize";

function Aside() {
  const { t } = useTranslation();
  const {size} = useWindowSize()
  // mostrar una flecha en el Link a la ruta desplegada
  const location = useLocation();
  const isLocatedIn = (loc) => {
    if (location.pathname === loc) {
      return true;
    }
    return false;
  };

  if (size.width > 1000)
    return (
      <aside className="aside">
        <ul>
          <li>
            {isLocatedIn("/") && <ChevronRight color="white" />}
            <Link to="/">{t("aside/home")}</Link>
          </li>
          <li>
            {isLocatedIn("/education") && <ChevronRight color="white" />}
            <Link to="/education">{t("aside/education")}</Link>
          </li>
          <li>
            {isLocatedIn("/skills") && <ChevronRight color="white" />}
            <Link to="/skills">{t("aside/skills")}</Link>
          </li>
          <li>
            {isLocatedIn("/projects") && <ChevronRight color="white" />}
            <Link to="/projects">{t("aside/projects")}</Link>
          </li>
          <li>
            {isLocatedIn("/contact") && <ChevronRight color="white" />}
            <Link to="/contact">{t("aside/contact")}</Link>
          </li>
        </ul>
      </aside>
    );
}

export default Aside;
