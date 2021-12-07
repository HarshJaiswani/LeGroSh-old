import React from "react";
import Footer from "../Footer/Footer";
import PageHeader from "../PageHeader/PageHeader";
import "./Utility.css";
import Utility1 from "./Utility1";

const Utility = (props) => {
  return (
    <>
      <PageHeader
        UserName={props.UserName}
        back=""
        pos="absolute"
        pageName="Utilities"
        pageDescp="Some special utilities to help you a bit in your journey!"
      />
      <div className="utilBox">
        <Utility1 />
      </div>
      <Footer />
    </>
  );
};

export default Utility;
