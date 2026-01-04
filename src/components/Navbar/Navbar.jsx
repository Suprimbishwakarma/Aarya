import React from "react";
import { FaHome } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GiSkills } from "react-icons/gi";
import { TiContacts } from "react-icons/ti";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#home" className="home">
        <FaHome className="icon" />
        <p>Home</p>
      </a>
      <a href="#projects" className="projects">
        <HiOutlineLightBulb className="icon" />
        <p className="name">Projects</p>
      </a>
      <a href="#skills" className="skills">
        <GiSkills className="icon" />
        <p className="name">Skills</p>
      </a>
      <a href="#contact" className="contact">
        <TiContacts className="icon" />
        <p className="name">Contact</p>
      </a>
    </div>
  );
};

export default Navbar;
