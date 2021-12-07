import React, { useState } from "react";
import "./BlogPost.css";

const BlogPost = (props) => {
  const clickFunc = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setCheck(!check);
  };
  const [check, setCheck] = useState(false);
  return (
    <>
      <div
        className="article article1"
        style={check ? { height: "100vh" } : { height: "10vh" }}
      >
        <span className="archead">{props.head}</span>
      <span className="arcdown" onClick={clickFunc}></span>
        <span className="arctime">({props.time})</span>
        <div className="arcdescp">{props.descp}</div>
      </div>
    </>
  );
};

export default BlogPost;
