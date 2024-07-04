import React from 'react';
import '../styling/freelance.css';

function Freelance() {
  return (
    <div className="landing-container">

    <div className="freelance-container">
      <header className="header">
        <h1>FREELANCE SERVICES</h1>
        <p>Full Stack Developer | React.js & Firebase Expert</p>
      </header>
      
      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a passionate full stack web developer with extensive experience in React.js for front-end development and Firebase for back-end solutions. I also possess a variety of other skills that make me versatile and capable of handling diverse projects.
        </p>
      </section>
      
      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          <div className="skill-item">React.js</div>
          <div className="skill-item">Firebase</div>
          <div className="skill-item">Node.js</div>
          <div className="skill-item">Express.js</div>
          <div className="skill-item">MongoDB</div>
          <div className="skill-item">HTML & CSS</div>
          <div className="skill-item">JavaScript</div>
          <div className="skill-item">Git & GitHub</div>
          <div className="skill-item">RESTful APIs</div>
        </div>
      </section>
      
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-item">
          For projects check out my <a href="/projects"> projects page!</a>
        </div>
      </section>
      
      <section className="contact">
        <h2>Contact</h2>
        <p>If you have a project in mind or just want to say hi, feel free to reach out!</p>
        <div>Click on 
          <a href="/links"> this link </a>
           to get my contacts</div>
      </section>
    </div>
    </div>
  );
}

export default Freelance;
