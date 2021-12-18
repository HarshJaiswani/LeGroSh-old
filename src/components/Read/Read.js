import React from "react";
import { Link } from "react-router-dom";
import "./Read.css";
import data from "../../Data";

const Read = () => {
  return (
    <section id="Read">
      <h1>Application of Knowledge is Power</h1>
      <p>
        You can learn anytime anywhere on your fingertips by reading the
        powerful essence of my journey till now.
      </p>
      <div className="readBox">
        <div className="readitem">
          <div className="readhead">{data.article1.heading}</div>
          <p className="readDecp">{data.article1.post.part6}...</p>
          <Link className="readlink" to="/LeGroSh/articles">
            Continue Reading
          </Link>
        </div>
        <div className="readitem">
          <div className="readhead">{data.article2.heading}</div>
          <p className="readDecp">
            {data.article2.post.part6}...
          </p>
          <Link className="readlink" to="/LeGroSh/articles">
            Continue Reading
          </Link>
        </div>
        <div className="readitem">
          <div className="readhead">{data.article3.heading}</div>
          <p className="readDecp">
            {data.article3.post.part6}...
          </p>
          <Link className="readlink" to="/LeGroSh/articles">
            Continue Reading
          </Link>
        </div>
        <div className="readitem">
          <div className="readhead">{data.article4.heading}</div>
          <p className="readDecp">
            {data.article4.post.part3}...
          </p>
          <Link className="readlink" to="/LeGroSh/articles">
            Continue Reading
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Read;
