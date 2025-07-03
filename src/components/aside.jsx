import { Link, useLocation } from "react-router-dom";
import "../styles/aside.css";
import { AlignJustify, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function Aside() {
  const { t } = useTranslation();
  // mostrar una flecha en el Link a la ruta desplegada
  const location = useLocation();
  const isLocatedIn = (loc) => {
    if (location.pathname === loc) {
      return true;
    }
    return false;
  };

  // mostrar o no el aside segun el tamaño de la pantalla
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // mostrar o no el aside secundario (cuando la pantalla es pequeña)
  const [showAside, setShowAside] = useState(false);
  const asideRef = useRef(null);
  const toggleButtonRef = useRef(null);

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
  return (
    <>
      <span
        className="aside-button"
        ref={toggleButtonRef}
        onClick={() => setShowAside(!showAside)}
      >
        <AlignJustify />
      </span>
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
}

export default Aside;
