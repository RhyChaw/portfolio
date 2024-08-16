import React from 'react';
import '../styling/certifications.css';

const certificationsData = [
  { id: 1, image: "/images/certifications/Quantum.png", courseName: 'Introduction to Quantum Computing', certificateLink: 'https://www.udemy.com/certificate/UC-eb95898f-1e56-403c-8dab-466467fc17c5/', completionDate: '06-06-2024', issuingOrganization: 'Udemy' },
  { id: 2, image: "/images/certifications/AdvancedCSS.png", courseName: 'Advanced CSS', certificateLink: 'https://www.udemy.com/certificate/UC-46fc113c-2139-4ce9-939e-0a9a2febb0fd/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com', completionDate: '04-07-2024', issuingOrganization: 'Udemy' },
  { id: 3, image: "/images/certifications/MachineLearning.png", courseName: 'Maching Learning A-Z', certificateLink: 'https://www.udemy.com/certificate/UC-a2ab1162-0958-487f-af70-a1f989323ac0/', completionDate: '19-07-2024', issuingOrganization: 'Udemy' },
  { id: 4, image: "/images/certifications/ArtificialIntellingenceA-Z.png", courseName: 'Artificial Intellingence A-Z', certificateLink: 'https://www.udemy.com/certificate/UC-2065078c-6c73-4224-90ce-5b7e51498e2e/', completionDate: '01-08-2024', issuingOrganization: 'Udemy' },
  { id: 5, image: "/images/certifications/UltimateReact.png", courseName: 'Ultimate React Course', certificateLink: 'https://www.udemy.com/certificate/UC-a72a253c-0919-4089-9a95-4a11dc2bbb36/', completionDate: '17-08-2024', issuingOrganization: 'Udemy' },
];

function Certifications() {
  // Convert date strings to Date objects for sorting
  const sortedCertifications = [...certificationsData].sort((a, b) => {
    const dateA = new Date(a.completionDate.split('-').reverse().join('-'));
    const dateB = new Date(b.completionDate.split('-').reverse().join('-'));
    return dateB - dateA; // Descending order
  });

  return (
    <div className="landing-container">
      <div className="projects-container">
        <header className="header">
          <h1>My Certifications</h1>
        </header>
        <div className="projects-grid">
          {sortedCertifications.map((certification) => (
            <div className="project-card" key={certification.id}>
              <img src={certification.image} alt={certification.courseName} className="project-image" />
              <div className="project-info">
                <h2>{certification.courseName}</h2>
                <p>Issued by {certification.issuingOrganization}</p>
                <p>Completion date: {certification.completionDate}</p>
                <a href={certification.certificateLink} target="_blank" rel="noopener noreferrer">
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
