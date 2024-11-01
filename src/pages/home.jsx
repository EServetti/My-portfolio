import React from "react";
import "../styles/home.css";
import nodeLogo from "../assets/node-logo.png";
import gitLogo from "../assets/git-hub.png";
import reactLogo from "../assets/react.svg";
import mongoLogo from "../assets/mongo-logo.png";
import personalPhoto from "../assets/personal-image.jpg"

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <span>
          <img src={personalPhoto} alt="me" className="personal-photo" />
          <p>
            Hello, I'm Emilio, I am a programming student with courses in
            backend development using Node.js and Express, and some experience
            in React, I also can manage NoSQL databases like Mongo DB. Explore
            my work and get in touch!
          </p>
        </span>
        <div className="tech-logos">
          <img src={nodeLogo} alt="Node.js" className="tech-logo" />
          <img src={gitLogo} alt="Git Hub" className="tech-logo" />
          <img src={reactLogo} alt="React" className="tech-logo" />
          <img src={mongoLogo} alt="Mongo" className="tech-logo" />
        </div>
      </section>
    </div>
  );
};

export default Home;
