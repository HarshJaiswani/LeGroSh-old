import React , { useState } from "react";
import "./MainNavBar.css";
import { Link, useLocation } from "react-router-dom";
import brandName from "../../Assets/brand name.png";

const MainNavBar = (props) => {
  let location = useLocation();
  const [check, setCheck] = useState(false);
  const toggle = () => {
    setCheck(!check);
  }
  return (
    <div
      onClick={() => setCheck(false)}
      className="nav"
      style={{ backgroundColor: props.back, position: props.pos }}
    >
      <div className="mobileicon" onClick={toggle}><i className="fa fa-bars" aria-hidden="true"></i></div>
      <div className="logo">LGS</div>
      <div className="mobilebrand">
      LeaGroSh
      </div>
      <div className="brand">
        <Link className="brandName" to="/">
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
      <div style={check ? {display: 'block'} : {display: 'none'}} className="mobilelinks">
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
