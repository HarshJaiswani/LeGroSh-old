import React from "react";
import "./MyDailyWork.css";
import logo from "../../Assets/logo.png";
import WorkCards from "../WorkCards/WorkCards";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const MyDailyWork = () => {
  return (
    <div className="mywork">
      <div className="worknav">
        <img src={logo} alt="" />
        <Link to="/LeGroSh">LeGroSh</Link>
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
          <WorkCards />
          <WorkCards />
          <WorkCards />
          <WorkCards />
          <WorkCards />
          <WorkCards />
          <WorkCards />
          <WorkCards />
          <WorkCards />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyDailyWork;
