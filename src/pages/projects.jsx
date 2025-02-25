import React from "react";
import "../styles/projects.css";
import whiteArrow from "../assets/white-arrow.png";
import screenshot1 from "../assets/project-screenshot1.jpg";
import screenshot2 from "../assets/project-screenshot2.jpg";
import screenshot3 from "../assets/project-screenshot3.jpg";
import screenshot4 from "../assets/project-screenshot4.jpg";
import screenshot5 from "../assets/screenshot5.jpg";
import screenshot6 from "../assets/screenshot6.jpg";
import screenshot7 from "../assets/screenshot7.jpg";
import screenshot8 from "../assets/screenshot8.jpg";
import screenshot9 from "../assets/home_new.jpg"
import screenshot10 from "../assets/plan.jpg"
import screenshot11 from "../assets/screenshot11.png"
import screenshot12 from "../assets/screenshot12.png"
import screenshot13 from "../assets/screenshot13.png"
import Project from "../components/project";

const Projects = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <section className="index">
        <a href="#efyh">
          <img src={whiteArrow} alt="arrow" />
          Everithing for your home
        </a>
        <a href="#fyb">
          <img src={whiteArrow} alt="arrow" />
          Find your books
        </a>
        <a href="#AIT">
          <img src={whiteArrow} alt="arrow" />
          AITrainer
        </a>
        <a href="#MF">
          <img src={whiteArrow} alt="arrow" />
          My Flicks
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
        <Project
          id="AIT"
          title="AITrainer"
          description="My first project with TypeScript both in front and back end. AITrainer is a virtual trainer that will give you a personalized training plan, in this project I have used artificial intelligence with the Open AI API."
          screenshot1={screenshot9}
          screenshot2={screenshot10}
          linkFront="https://github.com/EServetti/AITrainer_front"
          linkBack="https://github.com/EServetti/AITrainer"
          toolsUsed={[
            "TypeScript","Node.js & Express","React","Open AI API"
          ]}
        />
        <Project
        id="MF"
        title="My Flicks"
        description="My first React Native project, in wich I created a movies streaming app with filtering of movies and a user sistem."
        screenshot1={screenshot11}
        screenshot2={screenshot12}
        screenshot3={screenshot13}
        linkFront="https://github.com/EServetti/My_flicks"
        toolsUsed={["TypeScript","React Native","Firebase"]}
        verticalImgs={true}
        />
      </div>
    </div>
  );
};

export default Projects;
