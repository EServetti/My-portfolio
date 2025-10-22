import {
  Brain,
  ChevronLeft,
  ChevronRight,
  Newspaper,
  User,
} from "lucide-react";
import personalPhoto from "../assets/personal-image.jpg";
import news1 from "../assets/smartchef-2.jpg";
import news2 from "../assets/smartchef-3.jpg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Carousel = () => {
  const { t } = useTranslation();

  // edad dinamica
  const fechaNacimiento = new Date("2006-05-05");
  const hoy = new Date();
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  const mesActual = hoy.getMonth();
  const diaActual = hoy.getDate();
  const mesNacimiento = fechaNacimiento.getMonth();
  const diaNacimiento = fechaNacimiento.getDate();
  if (
    mesActual < mesNacimiento ||
    (mesActual === mesNacimiento && diaActual < diaNacimiento)
  ) {
    edad--;
  }

  // mostrar o no las imagenes segun el tamaño de la pantalla
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

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="10000"
      data-bs-pause="hover"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          {/* item 1 */}
          <>
            <span className="home-info-title">
              <User />
              <h3>{t("home/t-hero")}</h3>
            </span>
            <span className="hero">
              {size.width > 1000 && <img src={personalPhoto} />}
              <p>{t("home/hero")}</p>
            </span>
          </>
        </div>
        <div className="carousel-item">
          {/* item 2 */}
          <>
            <span className="home-info-title">
              <Brain />
              <h3>{t("home/t-about")}</h3>
            </span>
            <div className="about">
              <p>{t("home/about", { age: edad })}</p>
            </div>
          </>
        </div>
        <div className="carousel-item">
          {/* item 3 */}
          <>
            <span className="home-info-title">
              <Newspaper />
              <h3>{t("home/t-news")}</h3>
            </span>
            <section className="news-section">
              <section className="news-body">
                <h1>SmartChef</h1>
                <p>
                  {t("home/news")}
                  {/* <br /> <Link to="/projects#SC">{t("home/seeMore")}</Link> */}
                </p>
              </section>
              {size.width > 1000 && (
                <div className="news-screenshots">
                  <img src={news2} />
                  <img src={news1} />
                </div>
              )}
            </section>
          </>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <ChevronLeft />
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
