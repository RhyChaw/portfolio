import React, { useState } from 'react';
import '../styling/projects.css';

// Import your project images
import trilloImage from '../images/proj/trillo.png'; 
import NatoursImage from "../images/proj/Natours.png";
import UsePopcornImage from "../images/proj/UsePopcorn.png";
import DASHImage from "../images/proj/DASH.png";
import WATisZine from "../images/proj/WATisZine.png";
import NexterImage from "../images/proj/Nexter.png";
import CSGPTPRO from "../images/proj/csgptpro.png";
import ReactQuiz from "../images/proj/ReactQuiz.png";
import WorldWise from "../images/proj/Worldwise.png";
import AtomicBlog from "../images/proj/AtomicBlog.png";

const projectsData = [
  {
    title: 'CSGPTPRO Hackathon Project',
    description: 'App built using Python, Streamlit and Arctic',
    image: CSGPTPRO,
    link: 'https://github.com/jadechoghari/CSGPTPRO',
    category: 'AI',
    backgroundColor: '#f8f9fa'
  },
  {
    title: 'DASH Project',
    description: 'NEXT JS application with JAVA Backend for Dropshippers',
    image: DASHImage,
    link: 'https://github.com/RhyChaw/dropshiphub',
    category: 'REACT',
    backgroundColor: '#e9ecef'
  },
  {
    title: 'WATisZine Website',
    description: 'REACT JS app with Auth, MongoDB Backend for Zine club at UW',
    image: WATisZine,
    link: 'https://watiszine.clubs.wusa.ca/',
    category: 'REACT',
    backgroundColor: '#dee2e6'
  },
  {
    title: 'Nexter Project',
    description: 'A web application built with Advanced CSS Grid, NPM Scripting and SASS',
    image: NexterImage,
    link: 'https://github.com/RhyChaw/Nexter-project',
    category: 'CSS',
    backgroundColor: '#ced4da'
  },
  {
    title: 'Trillo Project',
    description: 'A web hotel application built with Advanced CSS, and SASS',
    image: trilloImage,
    link: 'https://github.com/RhyChaw/Trillo-project',
    category: 'CSS',
    backgroundColor: '#adb5bd'
  },
  {
    title: 'Natours Project',
    description: 'A web tourist application built with Advanced CSS, and SASS',
    image: NatoursImage,
    link: 'https://github.com/RhyChaw/NaTours-Project',
    category: 'CSS',
    backgroundColor: '#6c757d'
  },
  {
    title: 'World wise project',
    description: 'REACT Project for context API, Routing with navigate, history and Auth',
    image: WorldWise,
    link: 'https://github.com/RhyChaw/worldwise-project',
    category: 'REACT',
    backgroundColor: '#495057'
  },
  {
    title: 'Atomic blog project',
    description: 'REACT Project for learning context API and has Dark Mode :)',
    image: AtomicBlog,
    link: 'https://github.com/RhyChaw/atomic-blog-context-api-project',
    category: 'REACT',
    backgroundColor: '#343a40'
  },
  {
    title: 'REACT Quiz',
    description: 'REACT Project for useReducer REACT Hook',
    image: ReactQuiz,
    link: 'https://github.com/RhyChaw/React-Quiz-project',
    category: 'REACT',
    backgroundColor: '#212529'
  },
  {
    title: 'Use Popcorn',
    description: 'A movie tracking REACT application using fetch APIs',
    image: UsePopcornImage,
    link: 'https://github.com/RhyChaw/07-UsePopcorn',
    category: 'REACT',
    backgroundColor: '#0d6efd'
  },
];

const categories = ['All', 'REACT', 'AI', 'CSS'];

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
