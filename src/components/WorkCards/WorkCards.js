import React from "react";
import "./WorkCards.css";

const WorkCards = (props) => {
  return (
    <div className="workcard">
      <span className="carddate">{props.date}</span>
      <div className="cardpost">
        <img src={props.posturl} alt="" />
      </div>
      <div className="cardbody">
        <h2>{props.workName}</h2>
        <span>
          {props.workDescp}
        </span>
      </div>
    </div>
  );
};

export default WorkCards;
