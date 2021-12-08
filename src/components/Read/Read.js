import React from "react";
import { Link } from "react-router-dom";
import "./Read.css";
import data from '../../Data';

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
          <div className="readhead">Heading</div>
          <p className="readDecp">
            {data.article1.post}
          </p>
          <Link className="readlink" to="/articles">
            Continue Reading
          </Link>
        </div>
        <div className="readitem">
          <div className="readhead">Heading</div>
          <p className="readDecp">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            placeat aliquam, ut labore, perferendis vel temporibus tenetur
            facere aperiam eveniet esse illo. Maxime, dolor esse...
          </p>
          <Link className="readlink" to="/articles">
            Read More
          </Link>
        </div>
        <div className="readitem">
          <div className="readhead">Heading</div>
          <p className="readDecp">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            placeat aliquam, ut labore, perferendis vel temporibus tenetur
            facere aperiam eveniet esse illo. Maxime, dolor esse...
          </p>
          <Link className="readlink" to="/articles">
            Read More
          </Link>
        </div>
        <div className="readitem">
          <div className="readhead">Heading</div>
          <p className="readDecp">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            placeat aliquam, ut labore, perferendis vel temporibus tenetur
            facere aperiam eveniet esse illo. Maxime, dolor esse...
          </p>
          <Link className="readlink" to="/articles">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Read;
