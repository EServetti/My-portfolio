import "../styles/projects.css";

import efyh1 from "../assets/efyh1.jpg";
import efyh2 from "../assets/efyh2.jpg";
import efyh3 from "../assets/efyh3.jpg";
import efyh4 from "../assets/efyh4.jpg";

import fyb1 from "../assets/fyb1.jpg";
import fyb2 from "../assets/fyb2.jpg";
import fyb3 from "../assets/fyb3.jpg";
import fyb4 from "../assets/fyb4.jpg";

import ait1 from "../assets/ait1.jpg";
import ait2 from "../assets/ait2.jpg";

import mf1 from "../assets/mf1.png";
import mf2 from "../assets/mf2.png";
import mf3 from "../assets/mf3.png";

import sc1 from "../assets/smartchef-1.jpg";
import sc2 from "../assets/smartchef-2.jpg";
import sc3 from "../assets/smartchef-3.jpg";

import gw1 from "../assets/gw1.jpg";
import gw2 from "../assets/gw2.png";

import Project from "../components/project";
import { ChevronRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Projects = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  }, [hash]);

  const projects = [
    {
      id: "efyh",
      title: "Everithing for your home",
      description: {
        en: "This is my first project, created during the Coderhouse course on Backend Development. I used Node.js along with other tools (specified below) for the server, and React for the front-end.",
        es: "Este es mi primer proyecto, creado durante el curso de Coderhouse sobre Desarrollo Backend. Utilicé Node.js junto con otras herramientas (especificadas a continuación) para el servidor y React para el frontend.",
      },
      screenshot1: efyh1,
      screenshot2: efyh2,
      screenshot3: efyh3,
      screenshot4: efyh4,
      linkFront: "https://github.com/EServetti/server-front",
      linkBack: "https://github.com/EServetti/server",
      toolsUsed: [
        "Node.js & Express",
        "MongoDB",
        "JWT & Cookie Parser",
        "Nodemailer",
        "Winston, bcrypt, Swagger, etc.",
        "React",
      ],
    },
    {
      id: "fyb",
      title: "Find your books",
      description: {
        en: "My second project: Have you ever wanted to read about something but didn't know which book fit the bill? This is Find Your Books a page where you enter a book description and it gives you a list of books that match it.",
        es: "Mi segundo proyecto: ¿Alguna vez has querido leer sobre algo pero no sabías qué libro se ajustaba a esas características? Esto es Find your books, una página donde introduces la descripción de un libro y te da una lista de libros que coinciden con ella.",
      },
      screenshot1: fyb1,
      screenshot2: fyb2,
      screenshot3: fyb3,
      screenshot4: fyb4,
      linkFront: "https://github.com/EServetti/Find-my-books-front",
      linkBack: "https://github.com/EServetti/Find-my-books",
      toolsUsed: [
        "Node.js & Express",
        "MongoDB",
        "Open AI API",
        "Google books API",
        "JWT & Cookie Parser",
        "Nodemailer",
        "React",
      ],
    },
    {
      id: "AIT",
      title: "AITrainer",
      description: {
        en: "My first project with TypeScript both in front and back end. AITrainer is a virtual trainer that will give you a personalized training plan, in this project I have used artificial intelligence with the Open AI API.",
        es: "Mi primer proyecto con TypeScript, tanto en front-end como en back-end. AITrainer es un entrenador virtual que te ofrece un plan de entrenamiento personalizado. En este proyecto, he utilizado inteligencia artificial con la API Open AI.",
      },
      screenshot1: ait1,
      screenshot2: ait2,
      linkFront: "https://github.com/EServetti/AITrainer_front",
      linkBack: "https://github.com/EServetti/AITrainer",
      toolsUsed: ["TypeScript", "Node.js & Express", "React", "Open AI API"],
    },
    {
      id: "MF",
      title: "My Flicks",
      description: {
        en: "My first React Native project, in wich I created a movies streaming app with filtering of movies and a user sistem.",
        es: "Mi primer proyecto React Native, en el que creé una aplicación de streaming de películas con filtrado de películas y un sistema de usuario.",
      },
      screenshot1: mf1,
      screenshot2: mf2,
      screenshot3: mf3,
      linkFront: "https://github.com/EServetti/My_flicks",
      toolsUsed: ["TypeScript", "React Native", "Firebase"],
      verticalImgs: true,
    },
    {
      id: "SC",
      title: "SmartChef",
      description: {
        en: "Don't know what to cook with what you have at home? Want to organize your favorite recipes in one place? SmartChef is the perfect app for you.",
        es: "¿No sabes qué cocinar con lo que tienes en casa? ¿Quieres organizar tus recetas favoritas en un solo lugar? SmartChef es la app perfecta para ti.",
      },
      screenshot1: sc3,
      screenshot2: sc1,
      screenshot3: sc2,
      toolsUsed: [
        "TypeScript",
        "React Native",
        "Expo",
        "Node.js & Express",
        "MongoDB",
        "Open AI API",
      ],
      verticalImgs: true,
    },
    {
      id: "GW",
      title: "GatherWell",
      description: {
        en: "A platform to create and organize parties, invite your friends, and vote on drinks, food, conversation topics, and whatever else comes to mind!",
        es: "¡Una plataforma para crear y organizar fiestas, invitar a tus amigos y votar sobre bebidas, comida, temas de conversación y lo que se te ocurra!",
      },
      screenshot1: gw1,
      screenshot2: gw2,
      linkLive: "https://gatherwell-adq1u.kinsta.app/",
      toolsUsed: ["TypeScript", "React", "n8n", "Node.js & Express", "MongoDB"],
      verticalImgs: false
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <section className="index">
        {projects.map((project) => (
          <a href={`#${project.id}`}>
            <ChevronRight color="white" />
            {project.title}
          </a>
        ))}
      </section>
      <div className="projects-container">
        {projects.map((project) => (
          <Project
            id={project.id}
            title={project.title}
            description={project.description}
            screenshot1={project.screenshot1}
            screenshot2={project.screenshot2}
            screenshot3={project.screenshot3}
            screenshot4={project.screenshot4}
            linkBack={project.linkBack}
            linkFront={project.linkFront}
            linkGooglePlay={project.linkGooglePlay}
            linkLive={project.linkLive}
            toolsUsed={project.toolsUsed}
            verticalImgs={project.verticalImgs}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
