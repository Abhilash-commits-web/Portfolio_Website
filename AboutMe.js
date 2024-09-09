import React from 'react';

function AboutMe() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="profile-image">
          <img src="/images/profile-picture.jpg" alt="Profile" />
        </div>
        <div className="about-text">
          <p>
          Hi! I'm a beginner in web development, eager to learn and grow in this exciting field. As I start my journey, I'm exploring different tools and technologies to build useful websites and apps. I believe technology can solve problems and improve lives. When I'm not coding, I enjoy watching tutorials, and exploring AI tools to help me learn more
          </p>
        </div>
      </div>
      <div className="skills">
        <h3>My Skills</h3>
        <ul>
          <li><i className="fab fa-html5"></i> HTML5</li>
          <li><i className="fab fa-css3-alt"></i> CSS3</li>
          <li><i className="fab fa-js"></i> JavaScript (Basic)</li>
          <li><i className="fas fa-robot"></i> AI Tools</li>
          <li><i className="fas fa-code"></i> Problem Solving</li>
          <li><i className="fas fa-laptop-code"></i> Web Development Fundamentals</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;