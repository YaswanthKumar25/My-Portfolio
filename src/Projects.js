import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card">
          <h3>Bachelor Room Management App</h3>
          <p>
            A collaborative Django web application for roommates to share rooms, manage services,
            track expenses, and view monthly summaries with role-based dashboards.
          </p>

          <div className="tech">
            <span>Python</span>
            <span>Django</span>
            <span>Bootstrap</span>
            <span>SQLite</span>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/YaswanthKumar25/Room-Management"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              View Repo
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3>ToDo List App</h3>
          <p>
            A simple and efficient Django-based task manager to add, update,
            complete, and delete daily tasks. Clean UI and fast CRUD features.
          </p>

          <div className="tech">
            <span>Python</span>
            <span>Django</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/YaswanthKumar25/ToDo_List"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              View Repo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
