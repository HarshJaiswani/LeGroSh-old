import React from "react";

const Footer = () => {
  return (
    <footer style={{ width: "100%", backgroundColor: "rgb(241,241,241)" }}>
      <div className="foot" style={{ width: "100%", height: "fit-content" }}>
        <h1
          style={{
            fontSize: "1.1rem",
            textAlign: "center",
            lineHeight: "10vh",
            letterSpacing: "2px",
            wordSpacing: "4px",
            color: "#050d22",
          }}
        >
          Keep Learning... <span style={{ color: "green" }}>&</span> Keep
          Sharing...{" "}
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
