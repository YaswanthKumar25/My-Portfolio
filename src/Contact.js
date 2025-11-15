import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // success/error messages

  // This function opens the user's email client using mailto:
  const handleMailto = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus("Please fill all fields.");
      return;
    }

    // Basic email format check
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      setStatus("Please enter a valid email.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailto = `mailto:your.email@example.com?subject=${subject}&body=${body}`;

    // Open the user's mail client
    window.location.href = mailto;
    setStatus("Opening your email client...");
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p className="contact-intro">
        I’m open to opportunities and collaborations. Send me a message — I’ll reply as soon as possible.
      </p>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleMailto}>
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => { setName(e.target.value); setStatus(""); }}
              placeholder="Your name"
            />
          </label>

          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setStatus(""); }}
              placeholder="your.email@example.com"
            />
          </label>

          <label>
            Message
            <textarea
              value={message}
              onChange={(e) => { setMessage(e.target.value); setStatus(""); }}
              placeholder="Write a short message..."
              rows="6"
            />
          </label>

          <div className="form-actions">
            <button type="submit" className="btn primary">Send Email</button>
            <button
              type="button"
              className="btn"
              onClick={() => {
                setName(""); setEmail(""); setMessage(""); setStatus("");
              }}
            >
              Clear
            </button>
          </div>

          {status && <p className="status">{status}</p>}
        </form>

        <aside className="contact-info">
          <div className="info-card">
            <h4>Email</h4>
            <p><a href="mailto:dasariyeshwanthkumar@gmail.com" target="_blank" rel="noreferrer">dasariyeshwanthkumar@gmail.com</a></p>
          </div>

          <div className="info-card">
            <h4>LinkedIn</h4>
            <p>
              <a href="https://www.linkedin.com/in/yaswanth-kumar-d-3a9383266" target="_blank" rel="noreferrer">
                linkedin.com/in/yaswanth-kumar-d-3a9383266
              </a>
            </p>
          </div>

          <div className="info-card">
            <h4>GitHub</h4>
            <p>
              <a href="https://github.com/YaswanthKumar25" target="_blank" rel="noreferrer">
                github.com/YaswanthKumar25
              </a>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Contact;
