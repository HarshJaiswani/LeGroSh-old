import React, { useState } from "react";
import "./MainNavBar.css";
import { Link, useLocation } from "react-router-dom";
import brandName from "../../Assets/brand name.png";
import MobileMainNav from "./MobileMainNav";

const MainNavBar = (props) => {
  let location = useLocation();
  const [check, setCheck] = useState(false);
  return (
    <div
      onBlur={() => setCheck(false)}
      className="nav"
      style={{ backgroundColor: props.back, position: props.pos }}
    >
      <MobileMainNav checkfunc={setCheck} check={check} />
      <div className="mobileicon" onClick={() => setCheck(true)}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="logo">LGS</div>
      <Link className="mobilebrand" to="/LeGroSh">
        LeGroSh
      </Link>
      <div className="brand">
        <Link className="brandName" to="/LeGroSh">
          {" "}
          <img src={brandName} alt="" />{" "}
        </Link>
      </div>
      <div className="links">
        <Link
          className={`nav-link ${
            location.pathname === "/articles" ? "active" : ""
          }`}
          to="/articles"
        >
          {" "}
          Articles{" "}
        </Link>
        <Link
          className={`nav-link ${
            location.pathname === "/whoweare" ? "active" : ""
          }`}
          to="/whoweare"
        >
          {" "}
          Who are we{" "}
        </Link>
        <Link
          className={`nav-link ${
            location.pathname === "/work" ? "active" : ""
          }`}
          to="/work"
        >
          {" "}
          Our Work{" "}
        </Link>
      </div>
      <div className="user">
        <span>Namaste</span> {props.UserName}
      </div>
    </div>
  );
};

export default MainNavBar;
