import React from "react";
import Footer from "./Footer/Footer";
import PageHeader from "./PageHeader/PageHeader";
import Project from "./Project/Project";

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
      <div
        className="projects"
        style={{
          borderBottom: "2px solid grey",
          backgroundColor: "rgb(241,241,241)",
          width: "100%",
          minHeight: "50vh",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            borderLeft: "5px solid navy",
            fontSize: "1.2rem",
            padding: "0px 20px",
            margin: "20px 200px",
            letterSpacing: "1px",
            wordSpacing: "2px",
            fontFamily: "sans-serif",
            fontStyle: "italic",
            color: "slategray",
          }}
        >
          Being a learner and currently in my 1st semester of pursuing Btech , I
          have made only a few projects. Out of which some major ones are shared
          here.
        </span>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
      <Footer />
    </>
  );
};

export default Work;
