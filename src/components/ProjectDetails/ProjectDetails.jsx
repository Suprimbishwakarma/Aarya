import React, { useEffect } from "react";
import "./ProjectDetails.css";
import {
  FaGithub,
  FaTimes,
  FaStar,
  FaCode,
  FaServer,
  FaExclamationTriangle,
  FaConnectdevelop,
  FaProjectDiagram,
  FaLightbulb,
} from "react-icons/fa";
import { BsFillCpuFill } from "react-icons/bs";

const ProjectDetails = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!project) return null;

  return (
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail-content" onClick={(e) => e.stopPropagation()}>
        <div className="detail-header">
          <h2 className="detail-title">{project.title}</h2>
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="detail-body">
          <img
            src={project.image}
            alt={project.title}
            className="detail-image"
          />

          <div className="detail-section">
            <h3 className="section-title">About the project</h3>
            <p className="detail-description">{project.details}</p>
          </div>

          <div>
            <h3 className="section-title">
              <BsFillCpuFill />
              Output
            </h3>
            <img src={project.result} className="detail-image" />
          </div>

          <div className="detail-section">
            <h3 className="section-title">Screenshots</h3>
            <div className="features-list">
              {project.screenshots.map((pic, index) => (
                <img src={pic} key={index} className="shots" />
              ))}
            </div>
          </div>

          <div className="detail-section">
            <h3 className="section-title">
              <FaCode /> Technologies
            </h3>
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.keyFeatures && (
            <div className="detail-section">
              <h3 className="section-title">
                <FaStar /> Key Features
              </h3>
              <ul className="features-list">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index} className="feature-item">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.projectStructure && (
            <div className="detail-section">
              <h3 className="section-title">
                <FaServer /> Project Structure
              </h3>
              <div className="code-block">{project.projectStructure}</div>
            </div>
          )}

          {project.apiEndpoints && project.apiEndpoints.length > 0 && (
            <div className="detail-section">
              <h3 className="section-title">
                <FaServer /> API Endpoints
              </h3>
              <div className="endpoints-container">
                {project.apiEndpoints.map((ep, index) => (
                  <div className="endpoint-card" key={index}>
                    <span className={`method ${ep.method}`}>{ep.method}</span>
                    <span className="url">{ep.endpoint}</span>
                    <span className="desc">{ep.description}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.flowChart && (
            <div className="detail-section">
              <h3 className="section-title">
                <FaProjectDiagram /> Workflow
              </h3>
              <div className="flowchart-box">{project.flowChart}</div>
            </div>
          )}

          {project.challenges && (
            <div className="detail-section">
              <h3 className="section-title">
                <FaExclamationTriangle /> Challenges
              </h3>
              <ul className="features-list">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="feature-item">
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.contentConsumed && (
            <div className="detail-section">
              <h3 className="section-title">
                <FaConnectdevelop /> content Consumed
              </h3>
              <ul className="features-list">
                {project.contentConsumed.map((challenge, index) => (
                  <li key={index} className="feature-item">
                    <a href={challenge} target="_blank">
                      {challenge}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.learnings && (
            <div className="detail-section">
              <h3 className="section-title">
                <FaLightbulb /> Learnings
              </h3>
              <ul className="features-list">
                {project.learnings.map((learning, index) => (
                  <li key={index} className="feature-item">
                    {learning}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="detail-footer">
            <a
              href={project.githubLink}
              target="_blank"
              className="detail-btn btn-github"
            >
              <FaGithub /> View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
