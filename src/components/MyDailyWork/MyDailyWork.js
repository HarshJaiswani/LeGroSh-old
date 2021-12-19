import React,{ useEffect } from "react";
import "./MyDailyWork.css";
import logo from "../../Assets/logo.png";
import WorkCards from "../WorkCards/WorkCards";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import csspost from "../../Assets/csspost.png";
import htmlpost from "../../Assets/htmlpost.png";
import Credits from "../Footer/Credits";
import jspost from "../../Assets/jspost.jpg";
import js30 from "../../Assets/js30.PNG";
import reactpost from "../../Assets/reactpost.PNG";

const MyDailyWork = () => {
  useEffect(() => {
    window.scroll(0,0)
  },)
  return (
    <div className="mywork">
      <div className="worknav">
        <img src={logo} alt="" />
        <Link to="/">LeGroSh</Link>
      </div>
      <span
        style={{
          display: "inline-block",
          width: "100%",
          backgroundColor: "#d5f3ff",
          fontSize: "2rem",
          padding: "40px",
          textAlign: "center",
          color: "black",
          letterSpacing: "2px",
          wordSpacing: "4px",
        }}
      >
        A Log Of My Work !
      </span>
      <div className="achieve">
        <div className="achievecards">
          <WorkCards posturl={reactpost} date="One Month" workName="Learnt React" workDescp="Completed basics of React and few things of MERN stack with CodeWithHarry" />
          <WorkCards posturl={js30} date="One Month" workName="Learnt JavaScript Techniques" workDescp="Completed 30 Days Challenge 30 Days 30 New Projects." />
          <WorkCards posturl={jspost} date="Two Month" workName="Learnt JavaScript" workDescp="Completed basics of JavaScript with CodeWithHarry" />
          <WorkCards posturl={csspost} date="One & Half Month" workName="Learnt CSS" workDescp="Completed basic properties of CSS" />
          <WorkCards posturl={htmlpost} date="One Month" workName="Learnt Html" workDescp="Completed basic tags of Html" />
        </div>
      </div>
      <Credits />
      <Footer />
    </div>
  );
};

export default MyDailyWork;
