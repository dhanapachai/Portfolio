import React from 'react';
import { FaGraduationCap, FaSchool, FaAward } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      institution: "Mailam Engineering College",
      degree: "B.E - Computer Science and Engineering",
      duration: "2021-2025",
      score: "CGPA: 8.74",
      icon: <FaGraduationCap />,
      description: "Bachelor's Degree in Computer Science and Engineering"
    },
    {
      institution: "National Higher Secondary, Tindivanam",
      degree: "HSC (Higher Secondary Certificate)",
      duration: "2020-2021",
      score: "Percentage: 88.5%",
      icon: <FaSchool />,
      description: "Higher Secondary Education"
    },
    {
      institution: "Government High School, Aasoor",
      degree: "SSLC (Secondary School Leaving Certificate)",
      duration: "2019",
      score: "Percentage: 79.8%",
      icon: <FaAward />,
      description: "Secondary School Education"
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
          <p>My academic qualifications and achievements</p>
        </div>
        
        <div className="education-cards">
          {educationData.map((edu, index) => (
            <div className="education-card card" key={index}>
              <div className="education-icon">
                {edu.icon}
              </div>
              <div className="education-content">
                <h3>{edu.institution}</h3>
                <h4>{edu.degree}</h4>
                <p className="education-description">{edu.description}</p>
                <div className="education-details">
                  <div className="education-duration">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">{edu.duration}</span>
                  </div>
                  <div className="education-score">
                    <span className="detail-label">Score:</span>
                    <span className="detail-value score-value">{edu.score}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;