import React from "react";
import './Credits.css';

const Credits = () => {
  return (
    <div className="credits">
      <span
        style={{
          fontSize: "1.1rem",
          color: "green",
          fontWeight: "500",
          letterSpacing: "1px",
        }}
      >
        Credits :
      </span>
      <a className="freepik" href="http://www.freepik.com">
        Illustration Designed by Freepik
      </a>
      <a className="github" href="https://github.com/">
        Webs Design Inspired by Github
      </a>
    </div>
  );
};

export default Credits;
