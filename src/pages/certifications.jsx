import React from 'react';
import '../styling/certifications.css';

const certificationsData = [
  { id: 1, courseName: 'Introduction to Quantum Computing', certificateLink: 'https://www.udemy.com/certificate/UC-eb95898f-1e56-403c-8dab-466467fc17c5/', completionDate: '06-06-2024', issuingOrganization: 'Udemy' },
  { id: 2, courseName: 'Advanced CSS', certificateLink: 'https://www.udemy.com/certificate/UC-46fc113c-2139-4ce9-939e-0a9a2febb0fd/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com', completionDate: '04-07-2024', issuingOrganization: 'Udemy' },
  
];

function Certifications() {
  return (
    <div className="landing-container">
    <div className="certifications-container">
      <h1>My Certifications</h1>
      <table className="certifications-table">
        <thead>
          <tr>
            <th>Sl No.</th>
            <th>Course Name</th>
            <th>Certificate Link</th>
            <th>Completion Date</th>
            <th>Issuing Organization</th>
          </tr>
        </thead>
        <tbody>
          {certificationsData.map((certification, index) => (
            <tr key={certification.id}>
              <td>{index + 1}</td>
              <td>{certification.courseName}</td>
              <td>
                <a href={certification.certificateLink} target="_blank" rel="noopener noreferrer">
                  View Certificate
                </a>
              </td>
              <td>{certification.completionDate}</td>
              <td>{certification.issuingOrganization}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Certifications;
