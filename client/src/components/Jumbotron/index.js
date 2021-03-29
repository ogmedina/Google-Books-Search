import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ background: "#540B0E", color: "white", height: 300, paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;