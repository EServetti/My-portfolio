import "../styles/education.css";
import EducationInfo from "../components/education-info";
import utnLogo from "../assets/utn-logo.png"
import utnDiploma from "../assets/utn-diploma.jpg"
import coderhouseLogo from "../assets/coderhouse-logo.png"
import coderhouseDiploma from "../assets/coderhouse-diploma.png"
import sqlDiploma from "../assets/73e70169-d190-46af-9a89-409da26ecc89.png"
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Education = () => {
  const {t} = useTranslation()
  return (
    <div className="education-container">
      <section className="index">
        <a href="#college">
          <ChevronRight color="white"/>
          {t("education/t-uni")}
        </a>
        <a href="#courses">
          <ChevronRight color="white"/>
          {t("education/t-courses")}
        </a>
      </section>
      <h3 className="education-title" id="college">
        {t("education/t-uni")}
      </h3>
      <EducationInfo
        title={{
          en: "Higher Technician in Programming at UTN", 
          es: "Técnico superior en Programación en UTN"
        }}
        logo={utnLogo}
        description={{
          en: "It is an undergraduate university program that aims to train individuals with technical knowledge in the area of ​​programming. Programming is considered a fundamental branch of the development of computer systems. Currently, due to technological development and the globalization of knowledge, there is a marked growth in the use of programmable systems in commercial, industrial, and service sectors, offering graduates a rapid career path with a strong integration into the field.",
          es: "Es una carrera universitaria de pregrado que tiene como finalidad capacitar a las personas con conocimiento técnico en área de programación. Considerando a la programación como rama fundamental en el desarrollo de los sistemas informáticos. En la actualidad, en función del desarrollo tecnológico y la globalización del conocimiento se muestra un marcado crecimiento en el uso de los sistemas programables tanto en las áreas comerciales, industriales y de servicios ofreciendo a los egresados una rápida salida laboral con una fuerte inserción en el medio."
        }}
        link="https://www.frvm.utn.edu.ar/oferta-academica/tecnicatura-superior-programacion"
        location="Villa María, Córdoba, Argentina."
        duration={t("education/duration-years",{years: 2})}
        state={t("education/state-inProgress")}
        startedIn="08/2024."
      />
      <h3 className="education-title" id="courses">
        {t("education/t-courses")}
      </h3>
      <EducationInfo 
      title={{
        en: "Introduction to Backend programming course",
        es: "Curso de Introducción a la Programación Backend"
      }}
      logo={utnLogo}
      description={{
        en: "An introductory course to backend programming with Node.js given by the National Technological University (UTN).",
        es: "Curso introductorio a la programación backend con Node.js impartido por la Universidad Tecnológica Nacional (UTN)."
      }}
      location={t("education/remote")}
      duration={t("education/duration-hours", {hours: 30})}
      state={t("education/state-finished")}
      startedIn="01/24"
      finishedIn="03/24"
      diploma={utnDiploma}
      />
      <EducationInfo
      title={{
        en: "Backend Programming at Coderhouse",
        es: "Programación backend en Coderhouse"
      }}
      logo={coderhouseLogo}
      description={{
        en: "In this course, you will learn to develop robust, fast, and scalable backend applications by mastering data management in NoSQL databases and applying advanced techniques for communication and control of large data volumes. You will integrate authentication and authorization systems to securely manage users, using professional architectures and optimizing performance through mocks, normalization, and debugging tools like logs, debugging, and profiling. Additionally, you will explore scalability practices with clusters and Kubernetes, focusing on configuration, security, and API REST documentation.",
        es: "En este curso, aprenderás a desarrollar aplicaciones backend robustas, rápidas y escalables mediante el dominio de la gestión de datos en bases de datos NoSQL y la aplicación de técnicas avanzadas para la comunicación y el control de grandes volúmenes de datos. Integrarás sistemas de autenticación y autorización para gestionar usuarios de forma segura, utilizando arquitecturas profesionales y optimizando el rendimiento mediante simulacros, normalización y herramientas de depuración como registros, depuración y generación de perfiles. Además, explorarás prácticas de escalabilidad con clústeres y Kubernetes, centrándote en la configuración, la seguridad y la documentación REST de API."
      }}
      link={"https://pub.coderhouse.com/legacy-certificates/66c1eefeb45e2e10098434b0?lang=es"}
      location={t("education/remote")}
      duration={t("education/duration-hours",{hours: 94})}
      state={t("education/state-finished")}
      startedIn="03/24"
      finishedIn="08/24"
      diploma={coderhouseDiploma}
      linkDiploma="https://www.coderhouse.com/ar/certificados/66c1eefeb45e2e10098434b0?lang="
      />
      <EducationInfo
      title={{
        en: "SQL at Coderhouse",
        es: "SQL en Coderhouse"
      }}
      logo={coderhouseLogo}
      description={{
        en: "In this course you will learn the core concepts of relational databases, which are implemented by all organizations to make decisions based on the information they generate in their business model. You will create a relational database from scratch, starting with the generation of the structure to the insertion of the information, and implementing automation processes for the maintenance of the database. You will implement advanced SQL queries to generate reports and reports for decision making. At the end of the course you will be ready to analyze databases and information from any business model.",
        es: "En este curso aprenderás los conceptos básicos de las bases de datos relacionales, las cuales son implementadas por todas las organizaciones para tomar decisiones basadas en la información que generan en su modelo de negocio. Crearás una base de datos relacional desde cero, desde la generación de la estructura hasta la inserción de la información, e implementarás procesos de automatización para el mantenimiento de la base de datos. Implementarás consultas SQL avanzadas para generar informes y reportes para la toma de decisiones. Al finalizar el curso, estarás listo para analizar bases de datos e información de cualquier modelo de negocio."
      }}
      link="https://www.coderhouse.com/ar/online/sql"
      location={t("education/remote")}
      duration={t("education/duration-hours",{hours: 24})}
      state={t("education/state-finished")}
      startedIn="10/24"
      finishedIn="01/25"
      diploma={sqlDiploma}
      linkDiploma="https://pub.coderhouse.com/certificates/73e70169-d190-46af-9a89-409da26ecc89?v=1"
      />
    </div>
  );
};

export default Education;
