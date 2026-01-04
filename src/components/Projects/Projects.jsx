import React from "react";
import "./Projects.css";
import {
  roastify,
  codeExplainer,
  portfolio,
  backend,
} from "../../assets/assets";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="project-block">
      <p className="project-function">
        Projects ( ) <span>{"{"}</span>
      </p>
      <div className="project-section">
        <div className="project-individual-section">
          <div>
            <img src={roastify} className="project-image" />
          </div>
          <div className="project-content">
            <p className="project-title">
              Roastify: AI Powered Spotify Music Roaster
            </p>
            <p className="project-intro">
              A full-stack entertainment web application that connects to
              Spotify via OAuth 2.0, analyzes user's music taste, and delivers
              personalized, humorous AI generated roasts with adjustable
              intensity levels.
            </p>
            <div className="project-button">
              <a
                href="https://github.com/Suprimbishwakarma/Roastify"
                target="_blank"
              >
                <button className="github">
                  <FaGithub />
                </button>
              </a>
              <button className="details">view details</button>
            </div>
          </div>
        </div>

        <div className="project-individual-section">
          <div>
            <img src={codeExplainer} className="project-image" />
          </div>
          <div className="project-content">
            <p className="project-title">
              AI Code Explainer: Intelligent Code Analysis Tool
            </p>
            <p className="project-intro">
              A full-stack web application that uses openAI's language model to
              provide instant, clear explanations of code in multiple
              programming language.
            </p>
            <div className="project-button">
              <a
                href="https://github.com/Suprimbishwakarma/AI-Code-Explainer"
                target="_blank"
              >
                <button className="github">
                  <FaGithub />
                </button>
              </a>
              <button className="details">view details</button>
            </div>
          </div>
        </div>

        <div className="project-individual-section">
          <div>
            <img src={backend} className="project-image" />
          </div>
          <div className="project-content">
            <p className="project-title">Introduction to Backend Development</p>
            <p className="project-intro">
              A robust backend API built with Node.js, Express.js, and MongoDB,
              designed to demonstrate core backend concepts including user
              authentication and CRUD operations for posts.
            </p>
            <div className="project-button">
              <a
                href="https://github.com/Suprimbishwakarma/Into-to-backend-web-development"
                target="_blank"
              >
                <button className="github">
                  <FaGithub />
                </button>
              </a>
              <button className="details">view details</button>
            </div>
          </div>
        </div>

        <div className="project-individual-section">
          <div>
            <img src={portfolio} className="project-image" />
          </div>
          <div className="project-content">
            <p className="project-title">First Personal Portfolio</p>
            <p className="project-intro">
              This project is a modern, responsive, and visually stunning
              developer portfolio designed to showcase skills, projects, and
              professional experience. The design philosophy focuses on
              interactive storytelling, ensuring that every visitor gets a
              unique insight into the developer's journey.
            </p>
            <div className="project-button">
              <a
                href="https://github.com/Suprimbishwakarma/Aarya"
                target="_blank"
              >
                <button className="github">
                  <FaGithub />
                </button>
              </a>
              <button className="details">view details</button>
            </div>
          </div>
        </div>
      </div>
      <p className="project-function-closing">
        <span>{"}"}</span>
      </p>
    </div>
  );
};

export default Projects;
