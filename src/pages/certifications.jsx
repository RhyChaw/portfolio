import React from 'react';
import '../styling/certifications.css';

const certificationsData = [
  { id: 1, courseName: 'Introduction to Quantum Computing', certificateLink: 'http://example.com/cert1', completionDate: '2021-01-01', issuingOrganization: 'Udemy' },
  { id: 2, courseName: 'Advanced CSS', certificateLink: 'http://example.com/cert2', completionDate: '2022-02-02', issuingOrganization: 'Udemy' },
  
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
