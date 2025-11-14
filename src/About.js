import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>

      <p className="about-text">
        I’m Yaswanth, a fresher Full Stack Developer passionate about building
        clean and user-friendly web applications.  
        I enjoy learning by building real projects and improving my skills daily.
      </p>

      <ul className="about-list">
        <li>🌱 Currently learning: Django, React Hooks & Deployment</li>
        <li>💻 Building: Portfolio Website, Django Blog, React Dashboard</li>
        <li>🎯 Goal: Full Stack Developer in a fast-growing startup</li>
      </ul>
    </section>
  );
}

export default About;
