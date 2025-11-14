import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <h4 className="footer-name">Yaswanth Kumar D</h4>
          <p className="footer-role">Full Stack Developer • Python · Django · React</p>
          <p className="footer-copy">© {new Date().getFullYear()} Yaswanth Kumar — All rights reserved.</p>
        </div>

        <div className="footer-links">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                download="Yaswanth_Kumar_Resume.pdf"
                className="resume-btn-link"
              >
                Resume
              </a>
            </li>
            <li><a href="https://github.com/YaswanthKumar25" target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h5>Built with</h5>
          <p>React • Django • Bootstrap</p>
          <div className="socials">
            <a href="https://www.linkedin.com/in/yaswanth-kumar-d-3a9383266" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:your.email@example.com">Email</a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              download="Yaswanth_Kumar_Resume.pdf"
              className="resume-btn-link"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
