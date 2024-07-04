import React from 'react';
import '../styling/links.css';

function Links() {
  return (
    <div className="landing-container">

    <div className="links-container">
      <header className="header">
        <h1>Professional Links</h1>
      </header>
      
      <section className="links-list">
        <div className="link-item">
          <h2>LinkedIn</h2>
          <a href="https://www.linkedin.com/in/rhythm-chawla-18723a231/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/Rhythm-Chawla
          </a>
        </div>
        <div className="link-item">
          <h2>GitHub</h2>
          <a href="https://github.com/RhyChaw" target="_blank" rel="noopener noreferrer">
            github.com/RhyChaw
          </a>
        </div>
        <div className="link-item">
          <h2>Upwork</h2>
          <a href="https://www.upwork.com/freelancers/~your-profile" target="_blank" rel="noopener noreferrer">
            upwork.com/freelancers/~your-profile
          </a>
        </div>
        <div className="link-item">
          <h2>Fiverr</h2>
          <a href="https://www.fiverr.com/your-username" target="_blank" rel="noopener noreferrer">
            fiverr.com/your-username
          </a>
        </div>
      </section>
    </div>
    </div>
  );
}

export default Links;
