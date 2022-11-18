import React from "react";

const Container = ({ children }) => {
  return (
    <div className="container custom-container mt-5 mb-5">
      <div className="row">{children}</div>
    </div>
  );
};

export default Container;
