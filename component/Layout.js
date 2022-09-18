import React from "react";

export const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <div style={{ height: "10%", width: "100vw" }}>Header</div>
      <div style={{ backgroundColor: "red", width: "100%", height: "90%" }}>
        {children}
      </div>
    </div>
  );
};
