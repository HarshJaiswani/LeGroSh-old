import React from "react";
import Footer from "./Footer/Footer";
import PageHeader from "./PageHeader/PageHeader";
import Project from "./Project/Project";
import "./Work.css";
import project1 from "../Assets/project1.PNG";

const Work = (props) => {
  return (
    <>
      <PageHeader
        UserName={props.UserName}
        back=""
        pos="absolute"
        pageName="Our Work"
        pageDescp="A way to present examples to encourage you , 'Not to showoff'"
      />
      <div className="projects">
        <span className="articletopspan">
          Being a learner and currently in my 1st semester of pursuing Btech , I
          have made only a few projects. Out of which some major ones are shared
          here.
        </span>
        <Project imgurl={project1} pathurl="https://harshjaiswani.github.io/Service-Website/" />
      </div>
      <Footer />
    </>
  );
};

export default Work;
