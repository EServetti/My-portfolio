import React, { useContext, useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/languageContext";
import { useTranslation } from "react-i18next";
import Carousel from "../components/carousel";

const Home = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useContext(LanguageContext);
  const handleLanguage = (lan) => {
    if (lan === language) {
      return;
    }
    changeLanguage(lan);
  };

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
        <div className="carousel-wrapper">
          <Carousel/>
        </div>
      </section>
    </div>
  );
};

export default Home;
