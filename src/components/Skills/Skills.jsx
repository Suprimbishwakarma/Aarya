import React from "react";
import "./Skills.css";
import { IoLogoJavascript, IoLogoCss3, IoServerOutline } from "react-icons/io5";
import {
  FaReact,
  FaHtml5,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaTools,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongoose,
  SiPostman,
  SiVite,
  SiAxios,
  SiNodemon,
  SiOpenai,
  SiSpotify,
  SiGoogle,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { VscCode } from "react-icons/vsc";
import { MdOutlineArchitecture } from "react-icons/md";

const Skills = () => {
  const skillCategories = [
    {
      title: "Language",
      color: "#ff9f43",
      icon: <IoLogoJavascript />,
      skills: [{ name: "Javascript", icon: <IoLogoJavascript /> }],
    },
    {
      title: "Frontend",
      color: "#61dafb",
      icon: <FaReact />,
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <IoLogoCss3 /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Backend",
      color: "#68a063",
      icon: <IoServerOutline />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
      ],
    },
    {
      title: "Tools",
      color: "#ff4757",
      icon: <FaTools />,
      skills: [
        { name: "VS Code", icon: <VscCode /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "GitHub", icon: <FaGithub /> },
        {
          name: "NPM",
          icon: (
            <span style={{ fontSize: "0.8em", fontWeight: "bold" }}>NPM</span>
          ),
        },
      ],
    },
    {
      title: "Public APIs",
      color: "#e67e22",
      icon: <SiOpenai />,
      skills: [
        { name: "OpenAI API", icon: <SiOpenai /> },
        { name: "Google Gemini", icon: <SiGoogle /> },
        { name: "Spotify API", icon: <SiSpotify /> },
      ],
    },
    {
      title: "Database",
      color: "#4db33d",
      icon: <FaDatabase />,
      skills: [
        { name: "Mongoose", icon: <SiMongoose /> },
        { name: "MongoDB", icon: <DiMongodb /> },
      ],
    },
    {
      title: "Concepts & Tech",
      color: "#9b59b6",
      icon: <MdOutlineArchitecture />,
      skills: [
        { name: "React-Router" },
        { name: "Axios", icon: <SiAxios /> },
        { name: "Vite", icon: <SiVite /> },
        { name: "Restful APIs" },
        { name: "MVC Architecture" },
        { name: "Nodemon", icon: <SiNodemon /> },
        { name: "JWT" },
        { name: "Session Management" },
        { name: "Rate Limiting" },
        { name: "CORS" },
        { name: "Helmet" },
        { name: "OAuth 2.0" },
        { name: "Prompt Engineering" },
        { name: "API Integration" },
        { name: "Error Handling" },
        { name: "Responsive Design" },
      ],
    },
  ];

  return (
    <div className="skills-container">
      <div className="skills-header">
        Skills ( ) <span>{"{"}</span>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={`skill-card ${
              category.title === "Concepts & Tech" ? "concepts-card" : ""
            }`}
            style={{ "--theme-color": category.color }}
          >
            <div className="card-header">
              <div className="cat-icon" style={{ color: category.color }}>
                {category.icon}
              </div>
              <h3
                className="skill-category-title"
                style={{ color: category.color }}
              >
                {category.title}
              </h3>
            </div>

            <div className="skill-items-wrapper">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  {skill.icon && <div className="skill-icon">{skill.icon}</div>}
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-footer">
        <span>{"}"}</span>
      </div>
    </div>
  );
};

export default Skills;
