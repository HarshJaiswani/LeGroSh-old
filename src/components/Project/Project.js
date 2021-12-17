import React from "react";
import "./Project.css";

const Project = (props) => {
  return (
    <a href={props.pathurl} className="project">
      <img src={props.imgurl} alt="" />
    </a>
  );
};

export default Project;
