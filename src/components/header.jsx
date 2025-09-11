import React from "react";
import "../styles/header.css";
import { Link, useLocation } from "react-router-dom";
import useWindowSize from "../utils/windowsSize";
import { useState, useEffect, useRef } from "react";
import { AlignJustify, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const { size } = useWindowSize();

  // mostrar o no el aside secundario (cuando la pantalla es pequeña)
  const [showAside, setShowAside] = useState(false);
  const asideRef = useRef(null);
  const toggleButtonRef = useRef(null);

  // mostrar una flecha en el Link a la ruta desplegada
  const location = useLocation();
  const isLocatedIn = (loc) => {
    if (location.pathname === loc) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        asideRef.current &&
        !asideRef.current.contains(e.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(e.target)
      ) {
        setShowAside(false);
      }
    };

    const unlistenRoute = () => {
      setShowAside(false);
    };

    unlistenRoute();

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [location]);

  return (
    <>
      <header className="header">
        {size.width < 1000 && (
            <span
              className="aside-button"
              ref={toggleButtonRef}
              onClick={() => setShowAside(!showAside)}
            >
              <AlignJustify />
            </span>
          )}
        <div className="portfolio-title">Emilio Servetti</div>
      </header>
      {/* aside para pantallas pequeñas */}
      {showAside && (
        <aside className="aside aside-absolute" ref={asideRef}>
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
      )}
    </>
  );
};

export default Header;
