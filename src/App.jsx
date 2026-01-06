import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Copyright from "./components/Copyright/Copyright";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Copyright />
      </div>
    </>
  );
};

export default App;
