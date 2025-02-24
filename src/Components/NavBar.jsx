import React, { useState } from "react";
import { Link } from "react-scroll";
import "./CSS/NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <h1>Karuppusamy-S Portfolio</h1>

      <div className="menu-btn" onClick={toggleMenu}>
        ☰
      </div>

      <nav className={menuOpen ? "nav-open" : ""}>
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="achievements" smooth={true} duration={500}>Achievements</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </nav>
    </header>
  );
};

export default NavBar;
