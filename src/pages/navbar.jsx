import React from 'react'
import "../styling/navbar.css"

function navbar() {
  return (
    <div className='navbar'>
        <a href='/'>About me</a>
        <a href='/projects'>My Projects</a>
        <a href='/freelance'>Free lance Services</a>
        <a href='/resume'>Resume</a>
        <a href='/certifications'>Certifications</a>
        <a href='/links'>Links</a>
        <a href='/personal'>Personal</a>
    </div>
  )
}

export default navbar