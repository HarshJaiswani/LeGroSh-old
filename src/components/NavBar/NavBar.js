import React from "react";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.development";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navigate">
      <HashLink to="#Read">Read</HashLink>
      <HashLink to="#workweb">Work</HashLink>
      <HashLink to="#workweb">Web</HashLink>
      <HashLink to="#ask">Ask</HashLink>
    </div>
  );
};

export default NavBar;
