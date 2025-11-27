import React from "react";

import { Mail, Github, Linkedin } from "lucide-react";
import galaxybackground from "./galaxy-background.jpg"
import "./App.css";

export default function Portfolio() {
  return (
    
    <div className="container">
        <div style={{ 
      backgroundImage: `url(${galaxybackground})`
    }}>

    </div>
      <header className="header">
        <h1 className="main-title">Hi, I'm Shaina Zaccagnino</h1>
        <p className="subtitle">Computer Science Student & Aspiring Developer</p>
      </header>

      <section className="section">
        <h2 className="section-title">Education</h2>
        <div className="card-container">
          <div className="card">
            <p>M.S. in Computer Science, University of Delaware, 2027</p>
            <p>B.A. in Computer Science, University of Delaware, 2026</p>
            <p>B.A. in Game Studies and Esports, University of Delaware, 2026</p>
          </div>
          </div>
        </section>
      <section className="section">
        <h2 className="section-title">Skills</h2>
         <div className="card-container">
          <div className="card">
            <p className="experience-title">Programming Languages</p>
            <p>Swift, Python, JavaScript, TypeScript, C, C++, C#, HTML </p>
           <p className="experience-title">Software</p>
           <p>Adobe Photoshop, Adobe Illustrator, Microsoft Office, Blender, Unity </p>
          </div>
          </div>
      </section>
      <section className="section">
        <h2 className="section-title">Experience</h2>
        <div className="card-container">
          <div className="card">
            <p className="experience-title">Software Developer Intern, University of Delaware Office of Economic Innovation and Partnerships: June 2025-Present</p>
            <p className="experience-body">Worked with project managers to commercialize technological innovations<br/>
              Performed individual market research on invention disclosures<br/>
              Consulted with business partners to market technology<br/>
              Lead a project to design a nationwide exercise program</p>
            <p className="experience-title">IOS Developer Intern, Earth Hero: May 2025-July 2025</p>
            <p className="experience-body">Developed and maintained the native iOS application using Swift and SwiftUI<br/>
              Optimized app performance and memory usage<br/>
              Translated user needs into technical solutions and app features<br/>
              Contributed to debugging and troubleshooting efforts</p>
              <p className="experience-title">Teaching Assistant, University of Delaware Department of Computer & Information Sciences: February 2025-June 2025</p>
              <p className="experience-body">Supervised introductory Computer Science labs  
              <br/>
              Taught students basic lessons in the programming language TypeScript<br/>
              Collaborated effectively with the instructor to achieve classroom goals<br/>
              Provided individual assistance to students during office hours</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Projects</h2>
        <div className="card-container">
          <div className="card">
            <h3 className="card-title">Career Helpi</h3>
            <p>A web app that helps users find the right career path for them using React and ChatGPT.</p>
            <a href="https://shaina-z.github.io/CISC275-Final-Project/" className="link-button">View on GitHub</a>
          </div>
          <div className="card">
            <h3 className="card-title">Git Cookin'</h3>
            <p>A game to teach comp sci students all about git commands!</p>
            <a href="https://github.com/Shaina-Z/Git-Cookin-" className="link-button">View on GitHub</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact">
        <h2 className="section-title">Get in Touch</h2>
        <div className="icon-row">
          <a href="mailto:shaina.zacc@gmail.com" aria-label="Email">
            <Mail className="icon" />
          </a>
          <a href="https://github.com/Shaina-Z" target="_blank" rel="noopener" aria-label="GitHub">
            <Github className="icon" />
          </a>
          <a href="//www.linkedin.com/in/shaina-zaccagnino/" target="_blank" rel="noopener" aria-label="LinkedIn">
            <Linkedin className="icon" />
          </a>
          
        </div>
      </section>
    </div>
  );
}
