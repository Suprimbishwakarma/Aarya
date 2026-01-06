import React from "react";
import { GiKing } from "react-icons/gi";
import "./Copyright.css";

const Copyright = () => {
  return (
    <div className="copyright-section">
      <GiKing className="copyright-logo" />
      <div className="copyright-body">
        <p>
          Designed loosely in paper and coded in VS code by yours very truly,
        </p>
        <p>built using React.js and Vanilla CSS, deployed to Netlify.</p>
      </div>
      <p className="copyright-icon">&copy; 2025 Suprim bishwakarma (Aarya)</p>
    </div>
  );
};

export default Copyright;
