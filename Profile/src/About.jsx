import React from 'react';
import resume from './assets/resume.pdf';

const About = ({ setActiveSection }) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Passionate Java Developer seeking entry-level position</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Java Developer from Villupuram, India</h3>
            <p>
              I am a recent Computer Science and Engineering graduate with a CGPA of 8.63 from Mailam Engineering College. 
              I completed a 3-month internship at Besant Technologies where I gained hands-on experience in Java, JDBC, 
              and Spring Boot development.
            </p>
            <p>
              I'm passionate about building efficient, scalable applications and writing clean, maintainable code. 
              My goal is to kick-start my career in a dynamic, growth-focused environment where I can contribute 
              to meaningful projects and continue learning.
            </p>
            
            <div className="about-info">
              <div className="info-item">
                <span className="label">Name:</span>
                <span className="value">Pachaiyappan E</span>
              </div>
              <div className="info-item">
                <span className="label">Email:</span>
                <span className="value">pachaidhanal@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="label">Location:</span>
                <span className="value">Villupuram, India</span>
              </div>
              <div className="info-item">
                <span className="label">Availability:</span>
                <span className="value">Open to work</span>
              </div>
            </div>
            
            <button className="btn" >
              <a href={resume} download="resume">Download Resume</a>
            </button>
          </div>
          
          <div className="about-stats">
            <div className="stats-card card">
              <h3>3+</h3>
              <p>Months of Training Experience</p>
            </div>
            <div className="stats-card card">
              <h3>5+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stats-card card">
              <h3>4+</h3>
              <p>Technical Certifications</p>
            </div>
            <div className="stats-card card">
              <h3>8.63</h3>
              <p>CGPA in Engineering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;