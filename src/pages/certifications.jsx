import React from 'react';
import '../styling/certifications.css';
// 
const certificationsData = [
  { id: 1, image: "/images/certifications/Quantum.png", courseName: 'Introduction to Quantum Computing', certificateLink: 'https://www.udemy.com/certificate/UC-eb95898f-1e56-403c-8dab-466467fc17c5/', completionDate: '06-06-2024', issuingOrganization: 'Udemy' },
  { id: 2, image: "/images/certifications/AdvancedCSS.png", courseName: 'Advanced CSS', certificateLink: 'https://www.udemy.com/certificate/UC-46fc113c-2139-4ce9-939e-0a9a2febb0fd/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com', completionDate: '04-07-2024', issuingOrganization: 'Udemy' },
  { id: 3, image: "/images/certifications/MachineLearning.png", courseName: 'Maching Learning A-Z', certificateLink: 'https://www.udemy.com/certificate/UC-a2ab1162-0958-487f-af70-a1f989323ac0/', completionDate: '19-07-2024', issuingOrganization: 'Udemy' },

];

function Certifications() {
  return (
    <div className="landing-container">
      <div className="projects-container">
        <header className="header">
          <h1>My Certifications</h1>
        </header>
        <div className="projects-grid">
          {certificationsData.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.courseName} className="project-image" />
              <div className="project-info">
                <h2>{project.courseName}</h2>
                <p>Issued by {project.issuingOrganization}</p>
                <p>Completion date: {project.completionDate}</p>
                <a href={project.certificateLink} target="_blank" rel="noopener noreferrer">
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
