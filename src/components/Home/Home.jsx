import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-body">
      <p className="greet">Hello I'm</p>
      <p className="user">Suprim Bishwakarma (Aarya)</p>
      <p className="stack">MERN Stack Developer</p>
      <p className="intro">
        Full-stack developer passionate about building innovative web
        applications that solves real problems and puts a smile in your face. My
        work spans AI-powered developer tools, OAuth -integrated entertainment
        apps, and secure RESTful APIs. I focus on clean architecture and
        scalable solutions.
      </p>
      <p className="message">Let's build something amazing together!</p>
    </div>
  );
};

export default Home;
