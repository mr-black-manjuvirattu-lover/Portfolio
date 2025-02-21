import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/NavBar.css'
const NavBar = () => {
  return (
    <header>
      <h1>Karuppusamy-S Portfolio</h1>
        <nav>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/skills'>Skills</Link></li>
            <li><Link to='/achievements'>Achievements</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </nav>
    </header>
  )
}

export default NavBar
