import "../styles/skills.css";
import whiteArrow from "../assets/white-arrow.png";

function Skills() {
  return (
    <div className="main-skills">
      <section className="skills-tools">
        <h3>Skills</h3>
        <span>Languages:</span>
        <ul>
          <li>Spanish: native</li>
          <li>English: between B2/C1</li>
        </ul>
        <span>✅Team work</span>
        <span>✅Autodidact</span>
        <span>✅Full stack development</span>
        <span>✅API REST</span>
        <span>✅MVC</span>
        <span>✅Version control</span>
        <span>✅NoSQL database control</span>
        <span>✅Deployment</span>
        <span>✅Effective communication</span>
      </section>
      <section className="skills-tools">
        <h3>Tools</h3>
        <span>✅Git hub</span>
        <span>✅Node.js & Express</span>
        <span>✅Mongo DB & Mongoose</span>
        <span>✅React</span>
        <span>✅HTML & CSS</span>
        <span>✅Open AI API</span>
        <span>✅JWT</span>
        <span>✅Cookie parser</span>
        <span>✅Node mailer</span>
        <span>✅TypeScript</span>
        <span>✅SQL</span>
      </section>
    </div>
  );
}

export default Skills;
