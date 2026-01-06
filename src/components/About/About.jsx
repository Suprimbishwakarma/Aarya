import React from "react";
import "./About.css";
import { FaCode, FaCoffee, FaLightbulb, FaRobot } from "react-icons/fa";
import { profile } from "../../assets/assets";

const About = () => {
  return (
    <div className="about-block">
      <div className="about-title" id="about">
        About ( ) <span>{"{"}</span>
      </div>

      <div className="about-body">
        <div className="introduction">
          <div className="photo-container">
            <img src={profile} alt="profile picture" className="profile" />
          </div>

          <div className="traits">
            <h3>Quick Traits</h3>
            <div className="trait-item">
              <FaCode className="trait-icon" /> <span>Problem Solver</span>
            </div>
            <div className="trait-item">
              <FaLightbulb className="trait-icon" /> <span>Curious</span>
            </div>
            <div className="trait-item">
              <FaRobot className="trait-icon" /> <span>AI Enthusiast</span>
            </div>
            <div className="trait-item">
              <FaCoffee className="trait-icon" /> <span>Coffee Driven</span>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h3 className="about-section-heading">What I Bring to the Table</h3>
          <div className="table-details-grid">
            <div className="table-detail-card">
              <h4>Frontend Architecture</h4>
              <p>
                Creating responsive, high-performance UIs using React and modern
                CSS frameworks.
              </p>
            </div>
            <div className="table-detail-card">
              <h4>Backend Mastery</h4>
              <p>
                Architecting secure and scalable RESTful APIs with Node.js and
                Express.
              </p>
            </div>
            <div className="table-detail-card">
              <h4>AI integration</h4>
              <p>
                Leveraging third party APIs and AI models to build intelligent
                features.
              </p>
            </div>
          </div>
        </div>
        <p className="solution">
          I bring my curiosity and strategic mindset to every project I
          undertake, ensuring that every challenge is met with a unique
          perspective and a dedicated solution.
        </p>
      </div>

      <div className="about-title-closing">
        <span>{"}"}</span>
      </div>
    </div>
  );
};

export default About;
