import React from 'react';
import '../styling/projects.css';

const projectsData = [
  {
    title: 'Project One',
    description: 'A web application built with React.js and Firebase that allows users to...',
    image: 'path/to/image1.jpg',
    link: 'https://github.com/your-username/project-one'
  },
  {
    title: 'Project Two',
    description: 'An e-commerce site developed using React.js, Node.js, and MongoDB...',
    image: 'path/to/image2.jpg',
    link: 'https://github.com/your-username/project-two'
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <div className="landing-container">
    <div className="projects-container">
      <header className="header">
        <h1>My Projects</h1>
      </header>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Projects;
