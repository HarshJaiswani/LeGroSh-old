import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./MobileMainNav.css";

const MobileMainNav = (props) => {
  let location = useLocation();
  return (
    <div
      className="mobilemainnav"
      style={
        props.check
          ? { width: "60%", left: "0px" }
          : { width: "0vw", left: "-100px" }
      }
    >
      <div className="closebtn" onClick={() => props.checkfunc(false)}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>
      <div className="mobilelinks">
        <Link
          className={`moblink ${
            location.pathname === "/articles" ? "active" : ""
          }`}
          to="/articles"
        >
          {" "}
          Articles{" "}
        </Link>
        <Link
          className={`moblink ${
            location.pathname === "/whoweare" ? "active" : ""
          }`}
          to="/whoweare"
        >
          {" "}
          Who are we{" "}
        </Link>
        <Link
          className={`moblink ${
            location.pathname === "/work" ? "active" : ""
          }`}
          to="/work"
        >
          {" "}
          Our Work{" "}
        </Link>
      </div>
      <div className="mobnavfoot">Learn-Grow-Share</div>
    </div>
  );
};

export default MobileMainNav;
