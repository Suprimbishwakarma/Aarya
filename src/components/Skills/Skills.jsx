import React from "react";
import "./Skills.css";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const Skills = () => {
  return (
    <div>
      <div className="skills-title">
        Skills ( ) <span>{"{"}</span>
      </div>
      <div className="skills-body">
        <p>Language</p>
        <div>
          <p>Javascript</p>
          <IoLogoJavascript />
        </div>
        <p>Frontend</p>
        <div>
          <div>
            <p>React</p>
            <FaReact />
          </div>
          <div>
            <p>HTML5</p>
            <FaHtml5 />
          </div>
          <div>
            <p>CSS3</p>
            <IoLogoCss3 />
          </div>
          <div>
            <p>Tailwind CSS</p>
            <SiTailwindcss />
          </div>
        </div>
        <p>Backend</p>
        <div>
          <div>
            <p>Nodejs</p>
            <FaNodeJs />
          </div>
          <div>
            <p>Express</p>
            <SiExpress />
          </div>
        </div>
        <p>Database</p>
        <div>
          <div>
            <p>Mongoose</p>
            <SiMongoose />
          </div>
          <div>
            <p>Mongodb</p>
            <DiMongodb />
          </div>
        </div>
        <p>Tools</p>
        <div>
          <span>VS code</span>
          <span>Git</span>
          <span>Postman</span>
          <span>Github</span>
          <span>npm</span>
        </div>
        <p>Concepts (technologies)</p>
        <div>
          <span>React-Router</span>
          <span>Axios</span>
          <span>Vite</span>
          <span>Restful APIs</span>
          <span>MVC Architecture</span>
          <span>Nodemon</span>
          <span>JWT</span>
          <span>Session management</span>
          <span>Rate-limiting</span>
          <span>CORS</span>
          <span>Helmet</span>
          <span>OAuth 2.0</span>
          <span>Prompt engineering</span>
          <span>API integration</span>
          <span>Error handling</span>
          <span>Responsive Design</span>
        </div>
        <p>Public APIs</p>
        <div>
          <span>OpenAI API</span>
          <span>Google Gemini API</span>
          <span>Spotify Web API</span>
        </div>
      </div>
      <div className="skills-title-closing">
        <span>{"}"}</span>
      </div>
    </div>
  );
};

export default Skills;
