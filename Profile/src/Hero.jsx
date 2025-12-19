import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import photo from './assets/Photo.png';

const Hero = ({ setActiveSection }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ['Java Developer', 'Web Developer', 'Software Engineer'];
  
  useEffect(() => {
    const typeSpeed = isDeleting ? 30 : 50;
    const current = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      } else {
        setCurrentText(
          isDeleting 
            ? current.substring(0, currentText.length - 1)
            : current.substring(0, currentText.length + 1)
        );
      }
    }, typeSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex]);

  const handleContactClick = () => {
    setActiveSection('contact');
    const element = document.getElementById('contact');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    setActiveSection('projects');
    const element = document.getElementById('projects');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h4>Hello, I'm</h4>
            <h1>PACHAIYAPPAN E</h1>
            <div className="typed-container">
              <h3 className="typed-text">
                {currentText}
                <span className="cursor">|</span>
              </h3>
            </div>
            <p className="summary">
              Java Developer with 3 months of training experience at Besant Technologies. 
              Gained hands-on experience working on projects using Java, JDBC, and Spring Boot. 
              Skilled in developing applications and passionate about writing clean, efficient code.
            </p>
            
            <div className="hero-btns">
              <button className="btn" onClick={handleContactClick}>Contact Me</button>
              <a href="#projects" className="btn secondary-btn" onClick={handleProjectsClick}>View Projects</a>
            </div>
            
            {/* <div className="hero-contact">
              <div className="contact-item">
                <FaPhone className="icon" />
                <span>+91 6369910045</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="icon" />
                <span>pachaidhanal@gmail.com</span>
              </div>
            </div> */}
            
            <div className="social-links">
              <a 
                href="https://www.linkedin.com/in/pachaiyappan-e/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/dhanapachai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
              >
                <FaGithub />
              </a>
              <a 
                href="mailto:pachaidhanal@gmail.com" 
                className="social-link"
              >
                <FaEnvelope/>
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-placeholder">
               <img 
                  src={photo} 
                  alt="Pachaiyappan E" 
                  className="profile-img"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;