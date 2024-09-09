import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // Adjust this value based on the height of your fixed header
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Me</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
        </ul>
      </nav>
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to My Portfolio</h1>
            <p>I'm a passionate learner exploring the world of web development</p>
            <a href="#projects" className="cta-button" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>View My Work</a>
          </div>
        </section>
        <AboutMe />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;