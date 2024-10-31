import React from "react";
import "../styles/projects.css";
import whiteArrow from "../assets/white-arrow.png"
import screenshot1 from "../assets/project-screenshot1.jpg";
import screenshot2 from "../assets/project-screenshot2.jpg";
import screenshot3 from "../assets/project-screenshot3.jpg";
import screenshot4 from "../assets/project-screenshot4.jpg";
import screenshot5 from "../assets/screenshot5.jpg";
import screenshot6 from "../assets/screenshot6.jpg";
import screenshot7 from "../assets/screenshot7.jpg";
import screenshot8 from "../assets/screenshot8.jpg";
import Project from "../components/project";

const Projects = () => {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
    <section className="index">
        <a href="#efyh">
          <img src={whiteArrow} alt="arrow" />
          Everithing for your home
        </a>
        <a href="#fyb">
          <img src={whiteArrow} alt="arrow" />
          Find your books
        </a>
      </section>
    <div className="projects-container">
      <Project
        id="efyh"
        title="Everithing for your home"
        description="This is my first project, created during the Coderhouse course on
          Backend Development. I used Node.js along with other tools (specified
          below) for the server, and React for the front-end."
        screenshot1={screenshot1}
        screenshot2={screenshot2}
        screenshot3={screenshot3}
        screenshot4={screenshot4}
        linkFront="https://github.com/EServetti/server-front"
        linkBack="https://github.com/EServetti/server"
        toolsUsed={[
          "Node.js with Express",
          "Database Management with MongoDB (NoSQL)",
          "JWT and the Cookie Parser",
          "Nodemailer",
          "Other Middlewares like Winston, Hashing with bcrypt, Documentation with Swagger, etc.",
          "React for the Frontend",
        ]}
      />
      <Project
        id="fyb"
        title="Find your books"
        description="My second project: Have you ever wanted to read about something but
          didn’t know which book could fit those characteristics? This is Find
          Your Books, a page where you enter a description of a book, and it
          gives you a list of books that match the description."
        screenshot1={screenshot5}
        screenshot2={screenshot6}
        screenshot3={screenshot7}
        screenshot4={screenshot8}
        linkFront="https://github.com/EServetti/Find-my-books-front"
        linkBack="https://github.com/EServetti/Find-my-books"
        linkLive="https://find-your-books.vercel.app"
        toolsUsed={[
          "Node.js with Express",
          "Database Management with MongoDB (NoSQL)",
          "Open AI API",
          "Google books API",
          "JWT and the Cookie Parser",
          "Nodemailer",
          "React for the Frontend",
        ]}
      />
    </div>
  </div>
  );
};

export default Projects;
