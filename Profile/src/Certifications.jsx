import React from 'react';
import { FaCertificate, FaTrophy, FaAward } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: "Meme Craft Event",
      issuer: "Takshashila 2023 – Chennai Institute of Technology, Chennai",
      icon: <FaAward />,
      type: "Event Participation"
    },
    {
      title: "Code Quest Event",
      issuer: "ARCANE 2K23 - BSA Crescent Institute of Science and Technology, Chennai",
      icon: <FaTrophy />,
      type: "Competition"
    },
    {
      title: "Project Presentation - National Science Day",
      issuer: "Manakula Vinayagar Institute of Technology, Puducherry",
      icon: <FaTrophy />,
      type: "Consolation Prize"
    },
    {
      title: "Paper Quest - National Level Technical Symposium",
      issuer: "University College of Engineering Tindivanam",
      icon: <FaTrophy />,
      type: "Winner"
    },
    {
      title: "MindLuster",
      issuer: "Completed the Java Programming Certification",
      icon: <FaAward/>,
      type: "Internship Certificate"
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <div className="section-title">
          <h2>Certifications</h2>
          <p>My achievements and recognitions</p>
        </div>
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div className="certification-card card" key={index}>
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <span className="cert-type">{cert.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;