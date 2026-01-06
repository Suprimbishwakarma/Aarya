import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-body">
      <p className="greet">Hello I'm</p>
      <p className="user">Suprim Bishwakarma (Aarya)</p>
      <p className="stack">
        MERN Stack Developer | Building innovative web apps with AI, third party
        APIs and secure Backends
      </p>
      <p className="intro">
        I am a disciplined full-stack developer passionate about solving real
        problems and putting a smile on your face. My work spans AI-powered
        developer tools, OAuth-integrated entertainment apps, and secure RESTful
        APIs. I focus on clean architecture and scalable solutions.
      </p>
      <p className="message">Let's build something amazing together!</p>
      <div className="home-buttons">
        <button className="home-button">Download Resume</button>
        <a href="#about">
          <button className="home-button">Learn More About Me</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
