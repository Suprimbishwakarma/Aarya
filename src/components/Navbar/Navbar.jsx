import React from "react";
import { FaHome } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GiSkills } from "react-icons/gi";
import { TiContacts } from "react-icons/ti";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="home">
        <FaHome className="icon" />
        <p>Home</p>
      </div>
      <div className="projects">
        <HiOutlineLightBulb className="icon" />
        <p className="name">Projects</p>
      </div>
      <div className="skills">
        <GiSkills className="icon" />
        <p className="name">Skills</p>
      </div>
      <div className="contact">
        <TiContacts className="icon" />
        <p className="name">Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
