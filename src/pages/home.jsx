import React, { useContext, useState } from "react";
import "../styles/home.css";
import "react-horizontal-scrolling-menu/dist/styles.css";
import {
  Brain,
  ChevronLeft,
  ChevronRight,
  Circle,
  CircleSmall,
  Languages,
  Newspaper,
  User,
} from "lucide-react";
import personalPhoto from "../assets/personal-image.jpg";
import news1 from "../assets/smartchef-2.jpg"
import news2 from "../assets/smartchef-3.jpg"
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/languageContext";
import { useTranslation } from "react-i18next";

const Home = () => {
  const {t} = useTranslation()
  const {language, changeLanguage} = useContext(LanguageContext)
  const handleLanguage = (lan) => {
    if (lan === language) {
      return
    } 
    changeLanguage(lan)
  }

  const [shownScreen, setShownScreen] = useState(1);

  function addOne() {
    if (shownScreen === 3) {
      return;
    }
    setShownScreen((prevValue) => prevValue + 1);
  }

  function subOne() {
    if (shownScreen === 1) {
      return;
    }
    setShownScreen((prevValue) => prevValue - 1);
  }

  return (
    <div className="home-container">
      <section className="home-section">
        <section className="home-top">
          <h1>{t("home/title")}</h1>
          <section className="languages">
            <Languages />
            <span style={{ display: "flex", gap: "10px" }}>
              <button onClick={() => handleLanguage("en")}>EN</button>
              <button onClick={() => handleLanguage("es")}>ES</button>
            </span>
          </section>
        </section>
        <div className="home-content">
          <button className="home-content-left" onClick={subOne}>
            <ChevronLeft />
          </button>
          <button className="home-content-right" onClick={addOne}>
            <ChevronRight />
          </button>
          <span className="scroll-bar">
            {Array.from({ length: 3 }).map((_, index) =>
              shownScreen == index + 1 ? (
                <Circle key={index} />
              ) : (
                <CircleSmall key={index} />
              )
            )}
          </span>
          <section className="home-info">
            {shownScreen === 1 ? (
              <>
                <span className="home-info-title">
                  <User />
                  <h1>{t("home/t-hero")}</h1>
                </span>
                <span className="hero">
                  <img src={personalPhoto} />
                  <p>{t("home/hero")}</p>
                </span>
              </>
            ) : shownScreen === 2 ? (
              <>
                <span className="home-info-title">
                  <Brain />
                  <h1>{t("home/t-about")}</h1>
                </span>
                <p>{t("home/about")}</p>
              </>
            ) : (
              <>
                <span className="home-info-title">
                  <Newspaper />
                  <h1>{t("home/t-news")}</h1>
                </span>
                <section className="news-section">
                  <h1>SmartChef</h1>
                  <section className="news-body">
                    <p>{t("home/news")}<br/> <Link to="/projects#SC">{t("home/seeMore")}</Link></p>
                    <div className="news-screenshots">
                      <img src={news2}/>
                      <img src={news1}/>
                    </div>
                  </section>
                </section>
              </>
            )}
          </section>
        </div>
      </section>
    </div>
  );
};

export default Home;
