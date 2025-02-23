import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Achievements from './Components/Achievements';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div>
      <NavBar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="achievements">
          <Achievements />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
