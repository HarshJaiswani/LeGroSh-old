import React from "react";
import "./Ask.css";
import { Link } from "react-router-dom";

const Ask = () => {
  return (
    <section id="ask">
      <h1>Sharing the Learning</h1>
      <div className="askConatiner">
        <div className="askText">
          <p style={{ color: "wheat" }}>
            Being a self learner myself I have realised that although learning
            by yourself without a mentor/guide is great fun as well as an
            immense learning , but it also frustartes you and sometimes (almost
            everytime) it costs you a alot of time to be devoted for a small
            problem. Lack of guidence and help sometimes escapes a opportunity
            for you
          </p>
          <p style={{ color: "#8193b2" }}>
            {" "}
            In the era of internet where there is no dearth of knowledge its
            extremely necessary to understand from where and what to study , so
            i will be delighted to help you along your journey as much as i
            could you can fill the form with the correct crdentials and I will
            get back to you within 48 to 72 hours
          </p>
        </div>
        <Link className="formlink" to="/form">
          Fill Form Here
        </Link>
      </div>
    </section>
  );
};

export default Ask;
