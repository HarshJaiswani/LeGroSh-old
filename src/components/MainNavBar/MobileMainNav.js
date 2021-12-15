import React from "react";
import { Link , useLocation } from "react-router-dom";
import "./MobileMainNav.css";

const MobileMainNav = (props) => {
    let location = useLocation();
  return (
    <div className="mobilemainnav" style={props.check ? {width: '60%',opacity: '1'} : {width: '0vw',opacity: '0'}}>
        <div className="closebtn" onClick={() => props.checkfunc(false)}><i class="fa fa-times" aria-hidden="true"></i></div>
      <div
        className="mobilelinks"
      >
        <Link
          className={`moblink ${
            location.pathname === "/whoweare" ? "active" : ""
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
            location.pathname === "/whoweare" ? "active" : ""
          }`}
          to="/work"
        >
          {" "}
          Our Work{" "}
        </Link>
      </div>
      <div className="mobnavfoot">
          Learn-Grow-Share
      </div>
    </div>
  );
};

export default MobileMainNav;
