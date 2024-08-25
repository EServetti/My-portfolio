import React from "react";
import "../styles/projects.css";
import screenshot1 from "../assets/project-screenshot1.jpg";
import screenshot2 from "../assets/project-screenshot2.jpg";
import screenshot3 from "../assets/project-screenshot3.jpg";
import screenshot4 from "../assets/project-screenshot4.jpg";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>

      <div className="project1">
        <h2>Everithing for your home</h2>
        <p>
          This is my first project, created during the Coderhouse course on
          Backend Development. I used Node.js along with other tools (specified
          below) for the server, and React for the front-end.
        </p>
        <div className="screenshots">
          <img src={screenshot1} alt="Screenshot 1" />
          <img src={screenshot2} alt="Screenshot 2" />
          <img src={screenshot3} alt="Screenshot 3" />
          <img src={screenshot4} alt="Screenshot 4" />
        </div>
        <div className="links">
          <a
            href="https://github.com/EServetti/server-front"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub (Front-end)
          </a>
          <a
            href="https://github.com/EServetti/server"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub (Back-end)
          </a>
          <a
            href="https://everithingforyourhome.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live Project
          </a>
        </div>
        <div className="tools-used">
          <h3>Tools Used:</h3>
          <ul>
            <li>Node.js with Express</li>
            <li>Database Management with MongoDB (NoSQL)</li>
            <li>JWT and the Cookie Parser</li>
            <li>Nodemailer</li>
            <li>
              Other Middlewares like Winston, Hashing with bcrypt, Documentation
              with Swagger, etc.
            </li>
            <li>React for the Frontend</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Projects;
