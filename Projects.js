import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "My first project - this very website! Built using React to showcase my learning journey and projects.",
      icon: "fas fa-laptop-code",
      link: "#"
    },
    {
      title: "Simple Calculator",
      description: "A basic calculator app created with HTML, CSS, and JavaScript to perform arithmetic operations.",
      icon: "fas fa-calculator",
      link: "#"
    },
    {
      title: "Todo List App",
      description: "A straightforward todo list application built with HTML, CSS, and JavaScript to manage daily tasks.",
      icon: "fas fa-tasks",
      link: "https://github.com/Abhilash-commits-web/Toda-Task-Mastery-Made-Simple"
    },
    {
      title: "Weather Widget",
      description: "A small weather widget that displays current weather conditions using a public API and JavaScript.",
      icon: "fas fa-cloud-sun",
      link: "#"
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-icon">
              <i className={project.icon}></i>
            </div>
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;