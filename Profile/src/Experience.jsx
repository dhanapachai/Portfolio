import React from 'react';
import { FaBriefcase, FaCode, FaDatabase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      role: "Java Developer Trainee",
      company: "Besant Technologies",
      duration: "June 2025 - Sep 2025",
      icon: <FaBriefcase />,
      responsibilities: [
        "Designed and developed multiple web applications using Java and JDBC",
        "Implemented core logic and database operations",
        "Wrote HTML, CSS, SQL queries for frontend and backend integration",
        "Built stored procedures, triggers, and functions to enhance performance",
        "Developed a Train Ticket Booking System using Core & Advanced Java",
        "Applied OOP principles, exception handling, and data structures",
        "Collaborated with mentors to debug, optimize, and improve applications"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-title">
          <h2>Professional Experience</h2>
          <p>My journey in the professional world</p>
        </div>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-icon">{exp.icon}</div>
              <div className="experience-content card">
                <div className="experience-header">
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  <span className="duration">{exp.duration}</span>
                </div>
                
                <div className="responsibilities">
                  <h5>Key Responsibilities:</h5>
                  <ul>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="tech-used">
                  <span className="tech-tag"><FaCode /> Java</span>
                  <span className="tech-tag"><FaCode /> JDBC</span>
                  <span className="tech-tag"><FaDatabase /> MySQL</span>
                  <span className="tech-tag"><FaCode /> HTML/CSS</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;