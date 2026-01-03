import React from "react";
import "./Projects.css";
import { roastify, codeExplainer } from "../../assets/assets";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <>
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
              <div>
                <button className="github">
                  <FaGithub />
                </button>
              </div>
              <div>
                <button className="details">view details</button>
              </div>
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
              <button className="github">
                <FaGithub />
              </button>
              <button className="details">view details</button>
            </div>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <p className="project-function-closing">
        <span>{"}"}</span>
      </p>
    </>
  );
};

export default Projects;
