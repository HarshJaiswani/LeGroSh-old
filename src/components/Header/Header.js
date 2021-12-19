import React, { useState } from "react";
import "./Header.css";
import glow from "../../Assets/glow bg.svg";
import MainNavBar from "../MainNavBar/MainNavBar";
import resumeLogo from "../../Assets/resumeLogo.png";
import webIcon from "../../Assets/webIcon.png";
import linkIcon from "../../Assets/linkIcon.png";
import toolIcon from "../../Assets/toolsIcon.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = (props) => {
  const [hover, setHover] = useState(false);
  const changeHover = (paraam) => {
    if (window.innerWidth > 700) {
      setHover(paraam);
    }
  };
  return (
    <header>
      <div className="mainbarspace"></div>
      <MainNavBar UserName={props.UserName} back={props.back} pos={props.pos} />
      <img
        style={{
          position: "absolute",
          pointerEvents: "none",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        src={glow}
        alt=""
      />
      <div className="headdiv">
        <div className="headLeft">
          <h1>Namaste {props.UserName} !</h1>
          <p>
            This is the place where I will be sharing my experince & skills to
            help you build & enhance your overall personality & skills by
            getting personalised guidence and articles expressing my journey.
          </p>
        </div>
        <div className="utils">
          <Link
            to="/Utility"
            className="util util1"
            onMouseEnter={() => changeHover("util1")}
            onMouseLeave={() => changeHover(false)}
          >
            {hover === "util1" ? (
              <span className="utilName">Utility</span>
            ) : (
              <img className="utilLogo" src={toolIcon} alt="" />
            )}
          </Link>
          <HashLink
            to="#workweb"
            className="util util2"
            onMouseEnter={() => changeHover("util2")}
            onMouseLeave={() => changeHover(false)}
          >
            {hover === "util2" ? (
              <span className="utilName">Work with Us</span>
            ) : (
              <img className="utilLogo" src={linkIcon} alt="" />
            )}
          </HashLink>
          <Link
            to="/Resume"
            className="util util3"
            onMouseEnter={() => changeHover("util3")}
            onMouseLeave={() => changeHover(false)}
          >
            {" "}
            {hover === "util3" ? (
              <span className="utilName">Resume Builder</span>
            ) : (
              <img className="utilLogo" src={resumeLogo} alt="" />
            )}{" "}
          </Link>
          <HashLink
            to="#webhere"
            className="util util4"
            onMouseEnter={() => changeHover("util4")}
            onMouseLeave={() => changeHover(false)}
          >
            {" "}
            {hover === "util4" ? (
              <span className="utilName">Website Builder</span>
            ) : (
              <img className="utilLogo" src={webIcon} alt="" />
            )}
          </HashLink>
        </div>
      </div>
      <div className="mainbarspace"></div>
    </header>
  );
};

export default Header;
