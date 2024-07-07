import React, { useState, useEffect, useRef } from 'react';
import "../styling/navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); 
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-center">
          <span className="navbar-name">RHYTHM CHAWLA</span>
          <button className="dropdown-bubble" onClick={toggleDropdown}>☰</button>
        </div>
        {isOpen && (
          <div className="dropdown-menu" ref={dropdownRef}>
            <a href='/'>About me</a>
            <a href='/projects'>My Projects</a>
            <a href='/freelance'>Freelance Services</a>
            <a href='/resume'>Resume</a>
            <a href='/certifications'>Certifications</a>
            <a href='/links'>Links</a>
            {/* <a href='/personal'>Personal</a> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
