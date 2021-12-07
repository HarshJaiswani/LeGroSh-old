import React from 'react';
import './MainNavBar.css';
import { Link , useLocation } from "react-router-dom";
import brandName from "../../Assets/brand name.png";

const MainNavBar = (props) => {
  let location = useLocation();
    return (
        <div className="nav" style={{ backgroundColor: props.back , position: props.pos }}>
        <div className="logo">LGS</div>
        <div className="brand">
          <Link className="brandName" to="/">
            {" "}
            <img src={brandName} alt="" />{" "}
          </Link>
        </div>
        <div className="links">
          <Link className={`nav-link ${location.pathname === '/articles' ? 'active' : ''}`} to="/articles">
            {" "}
            Articles{" "}
          </Link>
          <Link className={`nav-link ${location.pathname === '/whoweare' ? 'active' : ''}`} to="/whoweare">
            {" "}
            Who are we{" "}
          </Link>
          <Link className={`nav-link ${location.pathname === '/work' ? 'active' : ''}`} to="/work">
            {" "}
            Our Work{" "}
          </Link>
        </div>
        <div className="user">
          <span>Namaste</span> {props.UserName}
        </div>
      </div>
    )
}

export default MainNavBar
