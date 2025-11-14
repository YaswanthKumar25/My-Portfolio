import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
       <Projects />
       <Contact />
       <Footer />
      <main style={{ padding: 24 }}>
      </main>
    </div>
  );
}

export default App;
