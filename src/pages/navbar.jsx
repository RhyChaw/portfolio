import React, { useState } from 'react';
import "../styling/navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-center">
          <span className="navbar-name">RHYTHM CHAWLA</span>
          <button className="dropdown-bubble" onClick={toggleDropdown}>☰</button>
        </div>
        {isOpen && (
          <div className="dropdown-menu">
            <a href='/'>About me</a>
            <a href='/projects'>My Projects</a>
            <a href='/freelance'>Freelance Services</a>
            <a href='/resume'>Resume</a>
            <a href='/certifications'>Certifications</a>
            <a href='/links'>Links</a>
            <a href='/personal'>Personal</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
