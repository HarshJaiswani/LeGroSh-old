import React from "react";
import "./WorkCards.css";

const WorkCards = () => {
  return (
    <div className="workcard">
      <span className="carddate">26th November 2021</span>
      <div className="cardpost"></div>
      <div className="cardbody">
        <h2>Name of Work</h2>
        <span>
          Lorem, ipsum dolor
        </span>
      </div>
    </div>
  );
};

export default WorkCards;
