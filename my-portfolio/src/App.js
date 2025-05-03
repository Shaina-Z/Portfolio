import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import "./App.css";

export default function Portfolio() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1 className="main-title">Hi, I'm Shaina Zaccagnino</h1>
        <p className="subtitle">Computer Science Student & Aspiring Developer</p>
      </header>

      {/* Resume Highlights */}
      <section className="section">
        <h2 className="section-title">Resume Highlights</h2>
        <div className="card-container">
          <div className="card">
            <h3 className="card-title">Education</h3>
            <p>B.A. in Computer Science, University of Delaware, 2026</p>
            <p>B.A. in Game Studies and Esports, University of Delaware, 2026</p>
          </div>
          <div className="card">
            <h3 className="card-title">Experience</h3>
            <p>Intern XYZ Corp – Summer 2024<br />Developed internal tools using React and Node.js</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <h2 className="section-title">Projects</h2>
        <div className="card-container">
          <div className="card">
            <h3 className="card-title">Project One</h3>
            <p>A web app that helps users find the right career path for them using React and ChatGPT.</p>
            <a href="#" className="link-button">View on GitHub</a>
          </div>
          <div className="card">
            <h3 className="card-title">Project Two</h3>
            <p>Sample Text .</p>
            <a href="#" className="link-button">View on GitHub</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact">
        <h2 className="section-title">Get in Touch</h2>
        <div className="icon-row">
          <a href="mailto:you@example.com" aria-label="Email">
            <Mail className="icon" />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener" aria-label="GitHub">
            <Github className="icon" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener" aria-label="LinkedIn">
            <Linkedin className="icon" />
          </a>
        </div>
      </section>
    </div>
  );
}
