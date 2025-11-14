import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-left">
        <h1 className="hero-title">
          Hi, I’m <span>Yaswanth</span>
        </h1>

        <p className="hero-sub">
          Full Stack Developer • Python · Django · React
          <br />
          I build clean, practical web apps and learn every day.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn primary">View Projects</a>

          <a
            href="https://www.linkedin.com/in/yaswanth-kumar-d-3a9383266"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn resume-btn"
            download="Yaswanth_Kumar_Resume.pdf"
          >
            Resume
          </a>
        </div>

        <div className="hero-meta">
          <span>🇮🇳 Open to roles — Remote/Hybrid</span>
          <span>⚡ Fast learner • Team player</span>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="/assets/yaswanth.jpg"
          alt="Yaswanth"
          className="hero-photo"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            const parent = e.currentTarget.parentNode;
            if (parent && !parent.querySelector(".photo-placeholder")) {
              const placeholder = document.createElement("div");
              placeholder.className = "photo-placeholder";
              placeholder.innerText = "Photo";
              parent.appendChild(placeholder);
            }
          }}
        />
      </div>
    </section>
  );
}

export default Hero;
