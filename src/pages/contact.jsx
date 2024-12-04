import React from "react";
import "../styles/contact.css";
import githubLogo from "../assets/git-hub.png";
import gmailLogo from "../assets/gmail-logo.png";
import linkedinLogo from "../assets/linkedin.png"

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="contact-info">
        <h1>Contact Me</h1>
        <p>
          If you would like to get in touch, you can reach me through the
          following channels:
        </p>
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
        <p>If you're not able to use these links, mail me to servettiemilio1@gmail.com</p>
      </section>
    </div>
  );
};

export default Contact;
