import React from "react";
import "./PageHeader.css";
import glow from "../../Assets/glow bg 3.svg";
import MainNavBar from "../MainNavBar/MainNavBar";

const PageHeader = (props) => {
  return (
    <>
    <MainNavBar UserName={props.UserName} back={props.back} pos={props.pos} />
      <div className="pagehead">
        <img
          src={glow}
          style={{
            position: "absolute",
            top: "0px",
            left: "30px",
            width: "120.31%",
            margin: "0 -8.65%",
          }}
          alt=""
        />
        <span className="pageName">{props.pageName}</span>
        <span className="pageDescp">
          {props.pageDescp}
        </span>
      </div>
    </>
  );
};

export default PageHeader;
