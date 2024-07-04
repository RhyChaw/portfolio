import React from 'react';
import LANDING_PHOTO from '../images/landing.jpg';
import '../styling/about.css';

function About() {
  return (
    <div className="landing-container">
      <div className="landing-main">
        <img src={LANDING_PHOTO} alt="Landing" className="landing-img" />
        <div className="landing-intro-text">
          <h1>Welcome to My Professional Page</h1>
          <p>
          Welcome to my corner of the web! I'm Rhythm Chawla, 
          a passionate full-stack web developer and quantum computing 
          enthusiast currently pursuing my undergraduate degree at the University 
          of Waterloo. With a solid foundation in JavaScript, React.js, and Firebase, 
          I thrive on crafting innovative solutions and seamless user experiences. 
          Whether it's building dynamic web applications or diving into the world of 
          quantum computing with Qiskit and IBM Q#, I bring dedication and creativity 
          to every project. Explore my portfolio and let's connect to turn ideas into reality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
