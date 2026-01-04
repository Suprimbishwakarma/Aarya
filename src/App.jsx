import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Copyright from "./components/Copyright/Copyright";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Home />
        <Projects />
        <Skills />
        <Contact />
        <Copyright />
      </div>
    </div>
  );
};

export default App;
