import React from 'react';
import { FaTrain, FaPaintBrush, FaJava, FaDatabase } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Train Ticket Booking System",
      description: "Console-based train ticket booking system using Core Java, Collections Framework, and OOP principles.",
      icon: <FaTrain />,
      technologies: ["Java", "Collections Framework", "OOP", "Exception Handling"],
      features: [
        "Select train routes and seat types",
        "Generate unique booking IDs",
        "Dynamic booking and waiting lists",
        "Efficient data handling"
      ]
    },
    {
      title: "Freelance Logo Design Projects",
      description: "Created unique, brand-focused logos using design principles and client requirements.",
      icon: <FaPaintBrush />,
      technologies: ["Design Principles", "Color Theory", "Typography", "Client Collaboration"],
      features: [
        "Brand-focused logo creation",
        "Client-specific requirements",
        "Professional design principles",
        "Creative conceptualization"
      ]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <p>My recent work and personal projects</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card card" key={index}>
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span className="tech-tag" key={i}>{tech}</span>
                ))}
              </div>
              
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;