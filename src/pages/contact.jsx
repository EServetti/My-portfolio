import React from "react";
import "../styles/contact.css";
import githubLogo from "../assets/git-hub.png";
import gmailLogo from "../assets/gmail-logo.png";
import linkedinLogo from "../assets/linkedin.png"
import { useTranslation } from "react-i18next";

const Contact = () => {
  const {t} = useTranslation()
  return (
    <div className="contact-container">
      <section className="contact-info">
        <h1>{t("contact/title")}</h1>
        <p>{t("contact/invitation")}</p>
        <ul>
          <li>
            <a
              href="https://github.com/EServetti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubLogo} alt="GitHub" className="contact-logo" />
            </a>
          </li>
          <li>
            <a href="mailto:servettiemilio1@gmail.com?subject=Contact%20from%20Portfolio">
              <img src={gmailLogo} alt="Gmail" className="contact-logo" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/emilio-servetti-programming/">
              <img src={linkedinLogo} alt="Gmail" className="contact-logo" />
            </a>
          </li>
        </ul>
        <p>{t("contact/gmail")}</p>
      </section>
    </div>
  );
};

export default Contact;
