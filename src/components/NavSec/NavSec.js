import React from "react";
import "./NavSec.css";
import { Link } from "react-router-dom";
import illustration from "../../Assets/illustration.jpg";

const NavSec = () => {
  return (
    <section className="NavSec">
      <div>
        <div className="design"></div>
      </div>
      <div className="abt">
        <img
          src={illustration}
          style={{ width: "225px", borderRadius: "10px" }}
          alt=""
        ></img>
        <div>
          <p>
            Peers on one side create pressure , but also motivates and brings a
            sense of healthy competition into you , if their and your goals are
            aligned
          </p>
          <p>
            {" "}
            I am a College Student inclined towards technlogy and eager to learn
            it , if you also want to do the same , I will be posting my day to day
            achievements , in learning a skill . You can also follow along and do
            the same on social media of your choice with the tag <span style={{color: 'green'}}>#legrosh</span>
          </p>
          <Link to="/todayswork">Today's Work</Link>
        </div>
      </div>
    </section>
  );
};

export default NavSec;
