import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Pachaiyappan E</h3>
            <p>Java Developer</p>
          </div>
          
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <a 
              href="https://www.linkedin.com/in/pachaiyappan-e/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/dhanapachai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="mailto:pachaidhanal@gmail.com" 
              className="footer-social-link"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a 
              href="tel:+916369910045" 
              className="footer-social-link"
              aria-label="Phone"
            >
              <FaPhone />
            </a>
          </div>
          
          <div className="footer-copyright">
            <p>
              © {currentYear} Dhana Pachai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;