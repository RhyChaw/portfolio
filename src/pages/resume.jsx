import React from 'react';
import '../styling/resume.css';
import PDF from "../data/resume.pdf";
import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';


function Resume() {
  return (
    <div className="resume-container">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <div className='resume-pdf'>
              <Viewer fileUrl={PDF} />
          </div>
          </Worker>
      </div>
  );
}

export default Resume;
