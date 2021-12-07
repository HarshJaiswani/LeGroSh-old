import React from "react";
import Header from "./Header/Header";
import NavSec from "./NavSec/NavSec";
import Read from "./Read/Read";
import Ask from "./Ask/Ask";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";
import Credits from './Footer/Credits'
import WorkWeb from "./WorkWeb/WorkWeb";

const Home = (props) => {
  return (
    <>
      <Header UserName={props.UserName} back="" pos="absolute" />
      <NavSec />
      <NavBar />
      <Read />
      <WorkWeb />
      <Ask />
      <Credits />
      <Footer />
    </>
  );
};

export default Home;
