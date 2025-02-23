import React from 'react';
import { Link } from 'react-scroll';
import './CSS/NavBar.css';

const NavBar = () => {
  return (
    <header>
      <h1>Karuppusamy-S Portfolio</h1>
      <nav>
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="achievements" smooth={true} duration={500}>Achievements</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </nav>
    </header>
  );
}

export default NavBar;
