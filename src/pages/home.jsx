import React from "react";
import "../styles/home.css";
import nodeLogo from "../assets/node-logo.png";
import gitLogo from "../assets/git-hub.png";
import reactLogo from "../assets/react.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hello, I'm Emilio, I am a programming student with courses in backend
          development using Node.js and Express, and some experience in React.
          Explore my work and get in touch!
        </p>
        <p>
          To know more about me click <Link to="/about">here</Link>
        </p>
        <div className="tech-logos">
          <img src={nodeLogo} alt="Node.js" className="tech-logo" />
          <img src={gitLogo} alt="Git Hub" className="tech-logo" />
          <img src={reactLogo} alt="React" className="tech-logo" />
        </div>
      </section>
    </div>
  );
};

export default Home;
