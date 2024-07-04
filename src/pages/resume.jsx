import React from 'react';
import '../styling/resume.css';
import PDF from "../data/resume.pdf";

function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-left">
        <h1>Here is my current resume</h1>
      </div>
      <div className="resume-right">
        <embed src={PDF} type="application/pdf" className="resume-pdf"/>
      </div>
    </div>
  );
}

export default Resume;
