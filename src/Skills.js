import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    "Python",
    "Django",
    "React",
    "JavaScript",
    "HTML & CSS",
    "Bootstrap",
    "SQL",
    "Git & GitHub",
    "REST APIs",
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <p className="skills-intro">
        Technologies and tools I use to build web applications.
      </p>

      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s} className="skill-card">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
