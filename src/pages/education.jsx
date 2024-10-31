import React from "react";
import "../styles/education.css";
import whiteArrow from "../assets/white-arrow.png";
import EducationInfo from "../components/education-info";
import utnLogo from "../assets/utn-logo.png"
import utnDiploma from "../assets/utn-diploma.jpg"
import coderhouseLogo from "../assets/coderhouse-logo.png"
import coderhouseDiploma from "../assets/coderhouse-diploma.png"

const Education = () => {
  return (
    <div className="education-container">
      <section className="index">
        <a href="#college">
          <img src={whiteArrow} alt="arrow" />
          University education
        </a>
        <a href="#courses">
          <img src={whiteArrow} alt="arrow" />
          Courses
        </a>
      </section>
      <h3 className="education-title" id="college">
        University education
      </h3>
      <EducationInfo
        title="Higher Technician in Programming at UTN"
        logo={utnLogo}
        description="It is an undergraduate university course that aims to train people
            with technical knowledge in the area of ​​programming. Considering
            programming as a fundamental branch in the development of computer
            systems. Currently, based on technological development and the
            globalization of knowledge, there is a marked growth in the use of
            programmable systems in commercial, industrial and service areas,
            offering graduates a quick job opportunity with a strong insertion
            in the environment."
        link="https://www.frvm.utn.edu.ar/oferta-academica/tecnicatura-superior-programacion"
        location="Villa María, Córdoba, Argentina."
        duration="four quarters"
        state="In progress."
        startedIn="August 2024."
      />
      <h3 className="education-title" id="courses">
        Courses
      </h3>
      <EducationInfo 
      title="Introduction to Backend programming course"
      logo={utnLogo}
      description="An introductory course to backend programming with Node.js given by
            the National Technological University (UTN)."
      location="Remote."
      duration="30 hours."
      state="Finished"
      startedIn="January 2024."
      finishedIn="March 2024."
      diploma={utnDiploma}
      />
      <EducationInfo
      title="Backend Programming at Coderhouse"
      logo={coderhouseLogo}
      description="In this course, you will learn to develop robust, fast, and scalable backend applications by mastering data management in NoSQL databases and applying advanced techniques for communication and control of large data volumes. You will integrate authentication and authorization systems to securely manage users, using professional architectures and optimizing performance through mocks, normalization, and debugging tools like logs, debugging, and profiling. Additionally, you will explore scalability practices with clusters and Kubernetes, focusing on configuration, security, and API REST documentation."
      link={"https://www.coderhouse.com/"}
      location="Remote."
      duration="94 hours."
      state="Finished"
      startedIn="03/2024"
      finishedIn="08/2024"
      diploma={coderhouseDiploma}
      linkDiploma="https://www.coderhouse.com/ar/certificados/66c1eefeb45e2e10098434b0?lang="
      />
    </div>
  );
};

export default Education;