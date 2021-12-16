import React from "react";
import "./ResumeBuilder.css";
import PageHeader from "../PageHeader/PageHeader";
import Footer from "../Footer/Footer";

const ResumeBuilder = (props) => {
  return (
    <div className="resume">
      <PageHeader
        UserName={props.UserName}
        back=""
        pos="absolute"
        pageName="Resume Builder"
        pageDescp="Be it a Proporsal for Open Source Organisation , A complex CV , A simple Resume or A BioData for your some personal stuff ,  you can design it all here !"
      />
      <h1
        style={{
          width: "100%",
          margin: "74px 0px",
          textAlign: "center",
        }}
      >
        Coming with the new styles soon !
      </h1>
      <Footer />
    </div>
  );
};

export default ResumeBuilder;
