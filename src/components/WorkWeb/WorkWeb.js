import React from "react";
import "./WorkWeb.css";
import { Link } from "react-router-dom";
import webIcon from "../../Assets/webIcon.png";
import linkIcon from "../../Assets/linkIcon.png";

const WorkWeb = () => {
  return (
    <div id="workweb">
      <div className="workwebbox" id="workhere">
        <div className="workwebhead">Work With Us</div>
        <div className="workwebbody">
          <img className="workweblogo" src={linkIcon} alt="" />{" "}
          <div>
            We work only on the purpose of providing value in the community ,
            alothough we cannot neglect money it is an important aspect but ,
            Yes! it's secondary and We encourage learning attitude of peoples.
            Even if you have very little knoweldege but wanting to learn and
            work with dedication and has a vision alingned to us , You are most
            Welcome , We can work together
          </div>
          <div>If you are intrested you can fill the form below!</div>
        </div>
        <Link
          className="formlink"
          style={{
            color: "black",
            marginBottom:
              "10px" /* Rest all styles are comming from ask component with the class name formlink */,
          }}
          to="/form"
        >
          Fill Form Here
        </Link>
      </div>
      <div className="workwebbox" id="webhere">
        <div className="workwebhead">Get Your Website</div>
        <div className="workwebbody">
          <img className="workweblogo" src={webIcon} alt="" />
          <div>
            In Today's World , where everything is being carried out online. It
            has been a kinda mandatory for organisations to have their wesbites
            , altogether it also becomes important for a individual to have
            their presence online & To which having a personl portfolio is
            option worth considering.
          </div>
          <div>
            So what would be better than getting a website for yourself without
            having to invest efforts in actually making it!
          </div>
          <div>
            If you want your website ready to be used in place of your visiting
            cards you can get now!
          </div>
        </div>
        <Link
          className="formlink"
          style={{
            color: "black",
            marginBottom:
              "10px" /* Rest all styles are comming from ask component with the class name formlink */,
          }}
          to="/form"
        >
          Fill Form Here
        </Link>
      </div>
    </div>
  );
};

export default WorkWeb;
