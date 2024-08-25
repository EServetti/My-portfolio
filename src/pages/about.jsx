import React from "react";
import "../styles/about.css";
import personalImage from "../assets/personal-image.jpg"; 
import utnDiploma from "../assets/utn-diploma.jpg"
import codehouseDiploma from "../assets/coderhouse-diploma.png"

const About = () => {
  return (
    <div className="about-container">
      <section className="about-description">
        <h1>About Me</h1>
        <div className="about-content">
          <img src={personalImage} alt="Emilio" className="about-image" />
          <div>
            <p>
             I'm Emilio, a programming student from Argentina, 18 years
              old. I'm currently studying Technicature in Programming at UTN
              Villa María and have completed two backend programming courses,
              one from Coderhouse, focusing on Node.js and Express.
            </p>
            <p>
              I also have knowledge of English, estimating my level between B2
              and C1, although I don't have documentation to prove it.
            </p>
          </div>
        </div>
      </section>

      <section className="about-skills">
        <h2>My Skills</h2>
        <ul>
          <li>
            Creation of RESTful backends with Node.js and React using a
            controller-service-persistence structure.
          </li>
          <li>Use of NoSQL databases with MongoDB.</li>
          <li>Proficient in using GitHub.</li>
          <li>Creation of React servers.</li>
        </ul>
      </section>

      <section className="about-diplomas">
        <h2>My Diplomas</h2>
        <div className="diplomas">
          <img
            src={utnDiploma}
            alt="UTN Córdoba Diploma"
            className="diploma"
          />
          <img
            src={codehouseDiploma}
            alt="Coderhouse Diploma"
            className="diploma"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
