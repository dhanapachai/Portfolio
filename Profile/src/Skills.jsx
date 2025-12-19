import React from 'react';
import { 
  FaJava, 
  FaHtml5, 
  FaCss3Alt, 
  FaDatabase,
  FaCode,
  FaServer,
  FaJsSquare,
  FaLightbulb,
  FaUsers,
  FaClock,
  FaComments,
  FaBrain,
  FaHandshake,
  FaEye,
  FaSyncAlt,
  FaReact
} from 'react-icons/fa';

const Skills = () => {
  const technicalSkills = [
    { name: "Java", icon: <FaJava />, level: "Advanced" },
    { name: "HTML", icon: <FaHtml5 />, level: "Advanced" },
    { name: "CSS", icon: <FaCss3Alt />, level: "Intermediate" },
    { name: "MySQL", icon: <FaDatabase />, level: "Intermediate" },
    { name: "JDBC", icon: <FaDatabase />, level: "Intermediate" },
    { name: "Spring Boot", icon: <FaServer />, level: "Basic" },
    { name: "JavaScript", icon: <FaJsSquare />, level: "Basic" },
    { name: "React", icon: <FaReact />, level: "Basic" }
  ];

  const softSkills = [
    { name: "Adaptability", icon: <FaSyncAlt /> },
    { name: "Creative Thinking", icon: <FaLightbulb /> },
    { name: "Problem Solving", icon: <FaBrain /> },
    { name: "Team Collaboration", icon: <FaUsers /> },
    // { name: "Attention to Detail", icon: <FaEye /> },
    // { name: "Time Management", icon: <FaClock /> }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>My technical and professional capabilities</p>
        </div>
        
        <div className="skills-content">
          <div className="technical-skills">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <div className="skill-card card" key={index}>
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <span className={`skill-level skill-level-${skill.level.toLowerCase()}`}>
                      {skill.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="soft-skills">
            <h3>Soft Skills</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <div className="soft-skill-card" key={index}>
                  <div className="soft-skill-icon">{skill.icon}</div>
                  <div className="soft-skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;