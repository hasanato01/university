import React from "react";
import "./Loader.css";
import logo from "./logo.svg";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <img src={logo} alt="Loading" className="loader-image" />
    </div>
  );
};

export default Loader;
