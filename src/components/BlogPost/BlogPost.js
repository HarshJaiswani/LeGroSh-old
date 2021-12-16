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
        style={check ? { height: "fit-content" } : { height: "60px" }}
      >
        <span className="archead">{props.head}</span>
        <span className="arcdown" onClick={clickFunc}></span>
        <span className="arctime">({props.time})</span>
        <div className="arcdescp">
          <span className="arcdescppart">{props.descp.part1}</span>
          <span className="arcdescppart">{props.descp.part2}</span>
          <span className="arcdescppart">{props.descp.part3}</span>
          <span className="arcdescppart">{props.descp.part4}</span>
          <span className="arcdescppart">{props.descp.part5}</span>
          <span className="arcdescppart">{props.descp.part6}</span>
          <span className="arcdescppart">{props.descp.part7}</span>
          <span className="arcdescppart">{props.descp.part8}</span>
          <span className="arcdescppart">{props.descp.part9}</span>
          <span className="arcdescppart">Learn - Grow - Share</span>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
