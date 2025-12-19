import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Certifications from './Certifications';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  return (
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero setActiveSection={setActiveSection} />
        <About setActiveSection={setActiveSection} />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;