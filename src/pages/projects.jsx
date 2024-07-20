import React, { useState } from 'react';
import '../styling/projects.css';

// Import your project images

import projectsData from './projectData';

const categories = ['All', 'Web Dev', 'AI', 'CSS'];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' ? projectsData : projectsData.filter(project => project.category === selectedCategory);

  return (
    <div className="landing-container">
      <div className="projects-container">
        <header className="header">
          <h1>My Projects ({filteredProjects.length})</h1>
        </header>
        <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div className="project-card" key={index} style={{ backgroundColor: project.backgroundColor }}>
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
