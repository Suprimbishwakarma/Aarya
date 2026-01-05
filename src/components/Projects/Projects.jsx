import React, { useState } from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { projectData } from "../../constants/detail";
import ProjectDetails from "../ProjectDetails/ProjectDetails";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenDetail = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };

  return (
    <div className="project-block">
      <p className="project-function">
        Projects ( ) <span>{"{"}</span>
      </p>
      <div className="project-section">
        {projectData.map((project) => (
          <div className="project-individual-section" key={project.id}>
            <div>
              <img src={project.image} className="project-image" />
            </div>
            <div className="project-content">
              <p className="project-title">{project.title}</p>
              <p className="project-intro">{project.description}</p>
              <div className="project-button">
                <a href={project.githubLink} target="_blank">
                  <button className="github">
                    <FaGithub />
                  </button>
                </a>
                <button
                  className="details"
                  onClick={() => handleOpenDetail(project)}
                >
                  view details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="project-function-closing">
        <span>{"}"}</span>
      </p>
      {selectedProject && (
        <ProjectDetails project={selectedProject} onClose={handleCloseDetail} />
      )}
    </div>
  );
};

export default Projects;
