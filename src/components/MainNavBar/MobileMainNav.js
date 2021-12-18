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
        <i class="fa fa-times" aria-hidden="true"></i>
      </div>
      <div className="mobilelinks">
        <Link
          className={`moblink ${
            location.pathname === "/LeGroSh/articles" ? "active" : ""
          }`}
          to="/LeGroSh/articles"
        >
          {" "}
          Articles{" "}
        </Link>
        <Link
          className={`moblink ${
            location.pathname === "/LeGroSh/whoweare" ? "active" : ""
          }`}
          to="/LeGroSh/whoweare"
        >
          {" "}
          Who are we{" "}
        </Link>
        <Link
          className={`moblink ${
            location.pathname === "/LeGroSh/work" ? "active" : ""
          }`}
          to="/LeGroSh/work"
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
